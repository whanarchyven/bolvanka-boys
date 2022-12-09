import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";
import { bunnyInterface } from "./interfaces/bunnyInterface";
import { marketplaceItem } from "./interfaces/marketplaceItem";
interface ItemCardInterface {
  togglePop: () => any;
}

const LootboxPop = ({ togglePop }: ItemCardInterface) => {
  const time = new Date();

  const variants = {
    rotate: {
      rotate: [0, -30, 0, 30, 0, -30, 0, 30, 0, -30, 0, 30, 0],
      scale: 1.5,
      opacity: 0,
      transition: { duration: 2.7 },
    },
    open: { scale: [0.7, 3], opacity: [1, 0], transition: { duration: 1 } },
    stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } },
  };
  // const variants = {
  //   rotate: { rotate: [0, -30, 0,30,0, -30, 0,30,0, -30, 0,30,0], scale:1.5, transition: { duration: 2 } },
  //   open:{scale: [0.7,3], opacity:[1,0],transition:{duration: 1}},
  //   stop: { y: [0, -10, 0], transition: { repeat: Infinity, repeatDelay: 3 } }
  // };

  const [animationPlaying, setAnimationPlaying] = useState(false);
  const [showPrize, setShowPrize] = useState(false);

  const [price, setPrice] = useState("40");

  const [popUpTitle,setPopUpTitle]=useState('Open now')


  return (
    <div
      className={
        "fixed z-[999] pb-24 w-full h-full top-0 left-0 grey-gradient justify-center"
      }
    >
      <div className={"overflow-y-scroll w-full h-full"}>
        <p className={"w-full text-4xl pt-16 text-center font-bold"}>
          Open the lootbox
          <br />
          <span className={"font-medium text-2xl"}>to get new NFT!</span>
        </p>
        <div className={"flex justify-center flex-wrap"}>
          <div
            className={
              "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
            }
            onClick={() => {
              togglePop();
            }}
          >
            <div className={"w-5 h-5 relative"}>
              <img alt="" src={"/images/popup_arrow.svg"} className={'w-full h-full'}></img>
            </div>
          </div>
          <div className={"w-8/12 flex justify-center flex-wrap relative"}>
            <div
              className={"w-full h-72 mt-5 flex flex-wrap justify-center"}
            >
              <div
                className={"w-72 h-72 z-50 relative"}
              >
                <div className={"absolute top-0 w-full h-full"}>
                  <Image
                    alt=""
                    src={"/images/bg_sprite.svg"}
                    layout={"fill"}
                  ></Image>
                </div>
                <div className={"absolute top-0 w-full h-full"}>
                  <Image
                    alt=""
                    src={"/images/lootbox.png"}
                    layout={"fill"}
                  ></Image>
                </div>
              </div>
              <div className={"flex justify-around items-center w-full"}>
                <p className={"font-bold opacity-50 text-xl"}>
                  №{1}
                </p>
                <div
                  className={
                    "w-24 h-9 bg-[#DCDCE0] border-2 border-[#B8B8B8] flex justify-center items-center rounded-full"
                  }
                >
                  <p className={"font-bold"}>common</p>
                </div>
              </div>
              <p
                className={
                  "w-full text-3xl mt-3 text-[#A731FF] text-center font-bold"
                }
              >
                opens in <br />
                <span className={"text-5xl w-full"}>
                  23:23:23:23
                </span>
              </p>

              <div
                className={
                  "bg-black w-60 h-14 mt-10 flex justify-between items-center rounded-full pr-2 pl-4 "
                }
              >
                <p className={"text-white font-bold text-xl"}>{popUpTitle}</p>
                <div
                  className={
                    "w-20 h-12 rounded-full bg-white flex justify-center items-center"
                  }
                >
                  <p className={"font-bold text-lg"}>
                    {Math.round(Number(price) * 100) / 100}
                  </p>
                  <div className={"w-6 h-6 relative"}>
                    <Image
                      alt=""
                      src={"/images/carrot_icon.svg"}
                      layout={"fill"}
                    ></Image>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showPrize ? (
        <div
          className={
            "flex overflow-y-scroll z-[999] flex-wrap fixed w-full h-[100vh] py-32 pb-48 top-0 left-0 grey-gradient justify-center items-center transition-all duration-300 ease-in-out"
          }
        >
          <div
            className={
              "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
            }
            onClick={() => {
              togglePop();
            }}
          >
            <div className={"w-5 h-5 relative"}>
              <Image
                alt=""
                src={"/images/popup_arrow.svg"}
                layout={"fill"}
              ></Image>
            </div>
          </div>
          <div className={"w-72 mb-10 flex justify-center flex-wrap relative"}>
            <p className={"text-center text-4xl font-bold mb-3 font-bold"}>
              Congratulations!
              <br />
              <span className={"text-3xl font-medium"}>Your reward is:</span>
            </p>
            <div className={"w-64 h-80"}>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default LootboxPop;
