import React, { useRef, useState } from "react";
import Image from "next/image";
import BunnyGeneration from "./BunnyGeneration";
import ProgressBar from "./UI/ProgressBar";


interface LevelUpInterface {
  bunny: {

  };
  togglePop: () => any;
  skillpoints: number;
}

const LevelUp = ({ bunny, togglePop, skillpoints }: LevelUpInterface) => {

  const [skillPoints, setSkillPoints] = useState(skillpoints);
  const stats: {
    stat_name: "str" | "dex" | "vit" | "int" | "krm";
    stat_value: number;
  }[] = [
      {
        stat_name: "str",
        stat_value: 0,
      },
      { stat_name: "dex", stat_value: 0 },
      { stat_name: "vit", stat_value: 0 },
      {
        stat_name: "int",
        stat_value: 0,
      },
    ];
  const [upStats, setUpStats] = useState(stats);



  return (
    <div
      className={
        "fixed z-[999] w-full pb-20 h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll flex flex-wrap justify-around"
      }
    >
      <div
        className={
          "w-12 h-12 z-[999] absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
        }
        onClick={() => {
          togglePop();
        }}
      >
        <div className={"w-5 h-5 relative"}>
          <Image
            src={"/images/popup_arrow.svg"}
            layout={"fill"}
            alt=""
          ></Image>
        </div>
      </div>
      <div className={"grid grid-cols-2 pt-14 px-4"}>
        <div className={"col-start-1 flex justify-center items-center"}>
          <div className={"w-[191px] pt-0 h-[276px] mx-auto"}>
            <BunnyGeneration></BunnyGeneration>
          </div>
        </div>
        <div className={"col-start-2"}>
          <p className={"font-bold text-4xl"}>Level up!</p>
          <p className={"font-bold text-2xl"}>Андрей</p>
          <div className={"col-start-2"}>
            <div
                className={"w-full flex justify-around items-center mt-5"}
            >
              <div
                  className={
                    "w-16 h-16 flex justify-center items-center rounded-full green-gradient"
                  }
              >
                <p
                    className={
                      "text-3xl font-bold text-center leading-[50%] text-white"
                    }
                >
                  {1}
                  <br />
                  <span className={"text-lg text-center"}>level</span>
                </p>
              </div>
              <div className={"relative w-10 h-10"}>
                <Image
                    src={"/images/level_up_arrow.svg"}
                    layout={"fill"}
                    alt=""
                ></Image>
              </div>
              <div
                  className={
                    "w-16 h-16 flex justify-center items-center rounded-full green-gradient"
                  }
              >
                <p
                    className={
                      "text-3xl font-bold text-center leading-[50%] text-white"
                    }
                >
                  {2}
                  <br />
                  <span className={"text-lg text-center"}>level</span>
                </p>
              </div>
            </div>
            <p className={"font-bold text-xl mt-5"}>You have:</p>
            <div
              className={
                "w-full h-14 rounded-full green-gradient p-1 flex items-center"
              }
            >
              <div
                className={
                  "w-12 h-12 rounded-full bg-white flex justify-center items-center font-bold text-4xl"
                }
              >
                {skillPoints}
              </div>
              <p
                className={
                  "font-bold text-black leading-[100%] text-xl ml-4"
                }
              >
                skill
                <br />
                points
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={"w-full"}>
        {upStats.map((item, i) => {
          return (
            <div
              key={i}
              className={"w-full h-6 flex justify-around items-center mt-5"}
            >
              {/*<div*/}
              {/*  className={*/}
              {/*    "w-7 h-7 rounded-full bg-black text-white flex justify-center items-center font-bold"*/}
              {/*  }*/}
              {/*  onClick={() => {*/}
              {/*    decreaseStat(item.stat_name);*/}

              {/*  }}*/}
              {/*>*/}
              {/*  -*/}
              {/*</div>*/}
              <div className={"flex items-center"}>
                <div className={"w-7 h-7 flex justify-center items-center"}>
                  <div className={"w-5 h-5 relative"}>
                    <Image
                      src={"/images/stats_icons/" + item.stat_name + ".svg"}
                      layout={"fill"}
                      alt=""
                    ></Image>
                  </div>
                </div>
                <p className={"ml-3 w-12"}>{item.stat_name.toUpperCase()}</p>
              </div>
              <div className={"w-52 h-full"}>
                <ProgressBar
                    progress={
                        1 + item.stat_value
                    }
                    limit={10}
                ></ProgressBar>
              </div>
              <div
                className={
                  "w-7 h-7 rounded-full bg-black text-white flex justify-center items-center font-bold"
                }
              >
                +
              </div>
            </div>
          );
        })}
      </div>
      {/*<button*/}
      {/*    className={*/}
      {/*        "w-72 rounded-full text-black font-bold text-3xl h-20 green-gradient"*/}
      {/*    }*/}
      {/*    onClick={() => {*/}
      {/*        confirmLvlUp()*/}
      {/*    }}*/}
      {/*>*/}
      {/*    Confirm*/}
      {/*</button>*/}
      <div
        className={'w-full flex justify-center mb-8'}>



        {/*<div*/}
        {/*    className={'bg-black opacity-50 w-60 h-14 mt-10 mb-10 flex justify-between items-center rounded-full pr-2 pl-4 '}>*/}
        {/*    <p className={'text-white font-bold text-xl'}>Level Up</p>*/}
        {/*    <div className={'w-20 h-12 rounded-full bg-white flex justify-center items-center'}>*/}
        {/*        <p className={'font-bold text-lg'}>{Math.round(Number(state?.activeBunny?.expParams?.nextLvlUpCost) * 100) / 100}</p>*/}
        {/*        <div className={'w-6 h-6 relative'}>*/}
        {/*            <Image*/}
        {/*                alt=""*/}
        {/*                src={'/images/carrot_icon.svg'}*/}
        {/*                layout={'fill'}*/}
        {/*            ></Image>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}


        {/*<div*/}
        {/*    className={'bg-black w-72 h-14 mt-10 mb-10 flex justify-between items-center rounded-full pr-2 pl-4 '}>*/}
        {/*    <p className={'text-white font-bold text-xl'}>LvlUp after:</p>*/}
        {/*    <div className={'w-32 h-12 rounded-full bg-white text-black flex justify-center items-center'}>*/}
        {/*        <MyTimer timer={300} expiryTimestamp={lvlUpDelay}/>*/}
        {/*    </div>*/}
        {/*</div>*/}


      </div>
    </div>
  );
};

export default LevelUp;
