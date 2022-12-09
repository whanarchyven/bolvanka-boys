/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/image";
import { bunnyInterface } from "./interfaces/bunnyInterface";
import { workTask } from "./interfaces/workTask";
import { statKeys } from "./types/statKeys";
import StatRequirementBar from "./UI/StatRequirementBar";
import TaskChecker from "./UI/TaskChecker";
import { MetaforestCurrentJob, MetaforestJob } from "../graphql/sdk/graphql";
import { takeJob } from "../data/data-hooks";
import activeTask from "./ActiveTask";
import ProgressBar from "./UI/ProgressBar";
import { router } from "next/client";
import { useRouter } from "next/router";

interface ActiveWorkPopUpInterface {
  workItem: MetaforestCurrentJob;
  togglePop: () => any;
}

const ActiveWorkPopUp = ({ workItem, togglePop }: ActiveWorkPopUpInterface) => {
  const router = useRouter();
  return (
    <div
      className={
        "fixed z-[999] w-full h-full top-0 left-0 grey-gradient pb-14 justify-center items-center overflow-y-scroll"
      }
    >
      <div className={"w-full h-60 relative rounded-b-2xl"}>
        <div className={"w-full h-full absolute top-0"}>
          <img
            alt=""
            src={
              "/images/work_module/backgrounds/" + workItem?.job?.type + ".png"
            }
            className={"rounded-b-3xl"}
          ></img>
        </div>
        <div
          className={
            "w-28 h-10 bg-white absolute bottom-5 right-5 rounded-full flex items-center justify-around"
          }
        >
          <p className={"font-bold"}>{workItem?.job?.type.toUpperCase()}</p>
          <div
            className={
              "w-8 h-8 rounded-full flex justify-center items-center bg-black"
            }
          >
            <div className={"w-3/5 h-3/5 relative"}>
              <img
                alt=""
                src={
                  "/images/work_module/icons/" + workItem?.job?.type + ".svg"
                }
              ></img>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full flex flex-wrap justify-center relative p-8"}>
        <div className={"flex items-center flex-row justify-centers  mb-8"}>
          <div
            className={
              "w-12 h-12 mr-3 rounded-full flex justify-center items-center bg-white"
            }
          >
            <div className={"w-3/5 h-3/5 relative"}>
              <img
                alt=""
                src={
                  "/images/work_module/icons/" +
                  workItem?.job?.type +
                  "_black.svg"
                }
              ></img>
            </div>
          </div>
          <p className={"font-bold text-4xl"}>{workItem?.job?.title}</p>
        </div>
        <p className={"font-medium mt-8 mb-8"}>{workItem?.job?.description}</p>
        <div className={"grid grid-cols-2 gap-2 w-full"}>
          <p className={"opacity-50 font-bold text-xl"}>Requirements:</p>
          <p
            className={
              "justify-self-end w-1/2 text-center opacity-50 font-bold text-xl"
            }
          >
            Profit:
          </p>
          <div className={"grid grid-cols-3 gap-4"}>
            {statKeys.map((stat) => {
              if (workItem?.job?.conditionsGTE?.[stat.stat_name]) {
                return (
                  <div className={"h-6 w-full"} key={stat.stat_name}>
                    <StatRequirementBar
                      key={stat.stat_name}
                      stat_value={workItem?.job?.conditionsGTE[stat.stat_name]}
                      stat_name={stat.stat_name}
                    ></StatRequirementBar>
                  </div>
                );
              }
            })}
          </div>
          <div
            className={
              "justify-self-end flex justify-center items-center rounded-full green-gradient w-full h-10"
            }
          >
            <p className={"font-bold opacity-50"}>
              +{workItem?.job?.carrotsForApproxMeters}
            </p>
            <div className={"w-6 h-6 relative opacity-50 ml-2"}>
              <Image
                alt=""
                src={"/images/carrot_icon.svg"}
                layout={"fill"}
              ></Image>
            </div>
            <p className={"font-bold opacity-50"}>+ 10 EXP</p>
          </div>{" "}
        </div>
        <div className={"p-4 mt-5 rounded-2xl bg-white w-full"}>
          {workItem.job?.approxMeters != undefined ? (
            <p className={"text-black font-bold text-3xl mb-5"}>
              Progress: {Math.round(workItem?.metersPassed)}/
              {Math.round(workItem?.job?.approxMeters)} m
            </p>
          ) : null}
          {workItem.job?.type == "STEPS" && workItem.job.approxMeters ? (
            <div className={"w-full mt-5 relative block h-6 "}>
              <ProgressBar
                progress={Math.round(workItem?.metersPassed)}
                limit={Math.round(workItem?.job?.approxMeters)}
              />
            </div>
          ) : null}
        </div>
        <button
          className={
            "w-3/4 bg-black rounded-full h-16 mt-8 text-white text-center text-2xl font-bold"
          }
          onClick={() => {
            router.push("/stats");
            // takeJob(workItem?.job?.slug);
          }}
        >
          Work!
        </button>
      </div>
      <div
        className={
          "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer"
        }
        onClick={() => {
          togglePop();
        }}
      >
        <div className={"w-5 h-5 relative"}>
          <Image alt="" src={"/images/popup_arrow.svg"} layout={"fill"}></Image>
        </div>
      </div>
    </div>
  );
};

export default ActiveWorkPopUp;
