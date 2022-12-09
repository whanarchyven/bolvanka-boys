import React, { useEffect, useState } from "react";
import Image from "next/image";
import BunnyGeneration from "../BunnyGeneration";
import { bunnyInterface } from "../interfaces/bunnyInterface";
import { StatTab } from "../UI/StatTab";
import EquipmentPopUp from "../EquipmentPopUp";
import { equipmentItem } from "../interfaces/equipmentItem";
import StatPop from "../StatPop";
import {
  useUserGameFullState,
  useUserGameFullStateFull,
} from "../../data/data-hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper";
import { MetaforestNftInfo } from "../../graphql/sdk/graphql";
import { sdk } from "../../graphql/sdk";
import { router } from "next/client";
import { useRouter } from "next/router";
import { toHttps } from "../utils/toHttps";

interface equipmentInterface {
  bunny: bunnyInterface;
  // attachItemToBunny : (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>any
}

interface keyTab {
  id:
    | "Costume"
    | "EarsAccessories"
    | "Ears_n_Horns"
    | "Face"
    | "HandLeft"
    | "HandRight"
    | "Hat"
    | "Necklace"
    | "Overhead"; // <-- "id" | "filter1" | "filter2"
}

interface keyStat {
  id: "str" | "dex" | "vit" | "int" | "krm";
}

const BunnyChange = () => {
  const leftTabs: keyTab[] = [
    { id: "Hat" },
    { id: "Face" },
    { id: "Necklace" },
    { id: "HandLeft" },
  ];
  const rightTabs: keyTab[] = [
    { id: "EarsAccessories" },
    { id: "Ears_n_Horns" },
    { id: "Costume" },
    { id: "HandRight" },
    { id: "Overhead" },
  ];
  const stats: keyStat[] = [
    { id: "str" },
    { id: "dex" },
    { id: "vit" },
    { id: "int" },
    { id: "krm" },
  ];

  const [state, mutate] = useUserGameFullStateFull();
  const [currentBunny, setCurrentBunny] = useState(state?.activeBunny);
  const router = useRouter();

  const whoIsFirst = () => {
    if (state?.bunnies) {
      let bunnytemp = [...state?.bunnies];
      bunnytemp.unshift(
        ...bunnytemp.splice(
          bunnytemp.findIndex((item) => item?.idx == state?.activeBunny?.idx),
          1
        )
      );
      return bunnytemp;
    }
  };

  const [bunniesMap, setBunniesMap] = useState([]);

  let limit = 10;

  const calculateLimit = (overLimit: number) => {
    return (Math.floor(overLimit / 10) + 1) * 10;
  };
  let isCalculate = true;

  const recalculate = () => {
    limit = 10;
    stats.map((stat) => {
      if (
        currentBunny?.baseParams != undefined &&
        isCalculate &&
        currentBunny.baseParams[stat.id] > limit
      ) {
        console.log(
          "CALC: " +
            currentBunny.baseParams[stat.id] +
            " - " +
            limit +
            " = " +
            (currentBunny.baseParams[stat.id] - limit)
        );
        limit = calculateLimit(currentBunny.baseParams[stat.id]);
      }
    });
  };
  recalculate();

  useEffect(() => {
    setCurrentBunny(state?.activeBunny);
    recalculate();
  }, [state?.activeBunny]);

  console.log(bunniesMap);

  return (
    <div className={"w-full"}>
      <div className={"w-full flex justify-center items-center h-[300px]"}>
        <Swiper
          initialSlide={state?.bunnies?.findIndex(
            (item) => item?.idx == state?.activeBunny?.idx
          )}
          slidesPerView={3}
          spaceBetween={3}
          centeredSlides={true}
          className="w-full h-[300px]"
          onSlideChange={(swiper) => {
            if (state?.bunnies) {
              if (state?.bunnies[swiper.activeIndex] != undefined) {
                setCurrentBunny(state?.bunnies[swiper.activeIndex]);
                recalculate();
              }
            }
          }}
        >
          {state?.bunnies?.map((item) => {
            return (
              <SwiperSlide key={item?.uid} className={"w-full h-full"}>
                {({ isActive }) => (
                  <div
                    className={"w-full h-full relative rounded-full"}
                    key={item?.idx}
                  >
                    {isActive ? (
                      <div
                        className={
                          "w-full rounded-full h-full scale-150 pt-10 rounded-full transition-all duration-500 ease-in-out"
                        }
                      >
                        <img
                          src={
                            toHttps(
                              item?.images?.transparentBg
                                ? "" + item?.images?.transparentBg
                                : ""
                            ) || ""
                          }
                          alt=""
                        />
                      </div>
                    ) : (
                      <div
                        className={
                          "w-full rounded-full h-full scale-100 pt-10 rounded-full opacity-50 transition-all duration-500 ease-in-out"
                        }
                      >
                        <img
                          src={
                            toHttps(
                              item?.images?.transparentBg
                                ? "" + item?.images?.transparentBg
                                : ""
                            ) || ""
                          }
                          alt=""
                        />
                      </div>
                    )}
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className={" grid grid-cols-7"}>
        <div className={"grid gap-4 col-start-1 grid-rows-4 col-end-2 "}>
          {leftTabs.map((tab) => {
            return (
              <div
                className={
                  "relative flex justify-start items-center cursor-pointer"
                }
                key={tab.id}
              >
                {state?.wornInventory?.findIndex(
                  (item) => item?.itemSlot == tab.id
                ) != -1 ? (
                  <div
                    className={
                      " green-gradient rounded-r-full w-full h-16 flex items-center justify-end"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 mr-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        {state?.wornInventory?.find(
                          (item) => item?.itemSlot == tab.id
                        )?.images?.web != undefined ? (
                          <img
                            src={
                              toHttps(
                                state.inventory?.find(
                                  (item) =>
                                    item?.itemSlot == tab.id &&
                                    item.itemWornOnBunnyIdx == currentBunny?.idx
                                )?.images?.web
                                  ? "" +
                                      state.inventory?.find(
                                        (item) =>
                                          item?.itemSlot == tab.id &&
                                          item.itemWornOnBunnyIdx ==
                                            currentBunny?.idx
                                      )?.images?.web
                                  : "/images/tab_icons/" + tab.id + ".svg"
                              ) || ""
                            }
                            alt=""
                          ></img>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      " green-gradient rounded-r-full w-full h-16 flex items-center justify-end "
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 mr-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={"/images/tab_icons/" + tab.id + ".svg"}
                          layout={"fill"}
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className={"col-start-2 col-end-7 flex flex-wrap "}>
          <div className={"w-full flex justify-center"}>
            {currentBunny?.idx == state?.activeBunny?.idx ? (
              <p
                className={
                  "text-4xl font-bold  text-green-500 inline-block align-middle mt-0 mb-2"
                }
              >
                {currentBunny?.deployedNftWithTrait?.name}
              </p>
            ) : (
              <p
                className={
                  "text-4xl font-bold inline-block align-middle mt-0 mb-2"
                }
              >
                {currentBunny?.deployedNftWithTrait?.name}
              </p>
            )}
            <div
              className={
                "w-12 ml-3 h-12 green-gradient rounded-full inline-flex flex-wrap justify-center items-center align-middle"
              }
            >
              <p
                className={
                  "text-black leading-[60%] w-full text-xl text-center font-bold"
                }
              >
                {currentBunny?.baseParams?.level}
                <br />
                <span className={"text-sm"}>level</span>
              </p>
              {/*<p className={'text-white text-sm leading-[1%] font-bold'}>level</p>*/}
            </div>
          </div>
          <div className={"grid w-full gap-4 grid-cols-1 grid-rows-6 p-2"}>
            {stats.map((stat) => {
              return (
                <div className={"w-full"} key={stat.id}>
                  <div className={"col-start-2 col-end-5 rounded-full"}>
                    <div
                      className={
                        "w-[10%] h-6 relative inline-block align-middle mr-[5%]"
                      }
                    >
                      <Image
                        src={"/images/stats_icons/" + stat.id + ".svg"}
                        layout={"fill"}
                        alt=""
                      ></Image>
                    </div>
                    {currentBunny?.baseParams &&
                    currentBunny?.baseParams[stat.id] ? (
                      <div className={"inline-block w-[80%] align-middle"}>
                        <StatTab
                          stat_name={stat.id}
                          stat_value={Number(
                            currentBunny?.baseParams[stat.id].toFixed(1)
                          )}
                          limit={limit}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
            <button
              className={
                "w-full h-9 rounded-full bg-black font-bold text-xl text-white"
              }
              onClick={() => {
                sdk().metaforestPerformMyAbiFunction({
                  fn: "switchActiveBunny",
                  params: { bunnyIdx: currentBunny?.idx },
                });
                console.log("changed");
                router.push("/home");
              }}
            >
              Select
            </button>
          </div>
        </div>
        <div className={"grid gap-4 col-start-7 grid-rows-4 col-end-8 "}>
          {rightTabs.map((tab) => {
            return (
              <div
                className={
                  "relative flex justify-end items-center cursor-pointer"
                }
                key={tab.id}
              >
                {state?.wornInventory?.findIndex(
                  (item) => item?.itemSlot == tab.id
                ) != -1 ? (
                  <div
                    className={
                      " green-gradient rounded-l-full w-full h-16 flex items-center justify-start"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 ml-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        {state?.wornInventory?.find(
                          (item) => item?.itemSlot == tab.id
                        )?.images?.web != undefined ? (
                          <img
                            src={
                              toHttps(
                                state.inventory?.find(
                                  (item) =>
                                    item?.itemSlot == tab.id &&
                                    item.itemWornOnBunnyIdx == currentBunny?.idx
                                )?.images?.web
                                  ? "" +
                                      state.inventory?.find(
                                        (item) =>
                                          item?.itemSlot == tab.id &&
                                          item.itemWornOnBunnyIdx ==
                                            currentBunny?.idx
                                      )?.images?.web
                                  : "/images/tab_icons/" + tab.id + ".svg"
                              ) || ""
                            }
                            alt=""
                          ></img>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={
                      " green-gradient rounded-l-full w-full h-16 flex items-center justify-start"
                    }
                  >
                    <div
                      className={
                        "w-14 h-14 ml-1 flex justify-center items-center bg-white rounded-full"
                      }
                    >
                      <div className={"w-3/5 h-3/5 relative"}>
                        <Image
                          src={"/images/tab_icons/" + tab.id + ".svg"}
                          layout={"fill"}
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BunnyChange;
