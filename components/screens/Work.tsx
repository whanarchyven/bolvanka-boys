import React, { useState } from "react";
import ActiveTask from "../ActiveTask";
import WorkCard from "../WorkCard";
import { workTask } from "../interfaces/workTask";
import TabSwitcher from "../TabSwitcher";
import { bunnyInterface } from "../interfaces/bunnyInterface";

const Work = () => {
  const worktabs = ["daily", "work"];
  const [workTab, setWorkTab] = useState("daily");

  const works:Array<{
    type:string,
    title:string,
    description:string
    conditionsGTE: {
      str?:number,
      dex?:number,
      vit?:number,
      int?:number,
      krm?:number
    }
  }>=[
    {type:'QR',title:'Собери батарейки',description:'Давай сделаем нашу планету чище! Собери батарейки, отсканируй куар код и получи приз!',conditionsGTE:{str:2,dex:2}},
    {type:'STEPS',title:'Пройдись до волшебного леса',description:'Странные звуки доносятся из лесной обители кроликов...Пройдись до волшебного леса, и разберись в чём дело',conditionsGTE:{str:1,vit:2}},
    {type:'STEPS',title:'Найди свиток в волшебном лесу',description:'Странные звуки доносятся из лесной обители кроликов...Пройдись до волшебного леса, и разберись в чём дело',conditionsGTE:{int:5}},
    {type:'PUBLICATION',title:'Расскажи о себе друзьям',description:'Странные звуки доносятся из лесной обители кроликов...Пройдись до волшебного леса, и разберись в чём дело',conditionsGTE:{str:1,dex:2,vit: 3}},
  ]

  console.log(works);
  let active_type_height = "h-24";

  return (
    <div
      className={
        "w-full h-full grid grid-cols-1 gap-2  sm:grid-cols-2 xl:gap-8 xl:grid-cols-4 pb-0 p-4"
      }
    >
      <div className={"xl:col-start-4 row-start-1 row-end-1"}>
        <p className={"w-full text-center mb-0 font-bold text-2xl"}>
          Work in progress
        </p>
        <div className={"w-full bg-white p-2 rounded-xl " + active_type_height}>
          <ActiveTask active_task={{}} />
        </div>
      </div>
      <div
        className={
          "sm:col-start-1 sm:col-end-3 sm:row-start-1 row-start-2 mt-0 sm:mt-0 row-end-7 pt-0"
        }
      >
        <p className={"w-full text-center font-bold text-2xl"}>Billboard</p>
        {/*<div className={"grid grid-cols-5 grid-rows-1 h-12 sm:p-6 p-3 gap-4"}>*/}
        {/*  <div*/}
        {/*    className={*/}
        {/*      "col-start-1 col-end-3 bg-white text-[#898994] rounded-full h-full"*/}
        {/*    }*/}
        {/*  >*/}
        {/*    <TabSwitcher*/}
        {/*      tabs={worktabs}*/}
        {/*      activeTab={workTab}*/}
        {/*      switchTab={setWorkTab}*/}
        {/*    />*/}
        {/*  </div>*/}
        {/*  <div className={"col-start-4 col-end-6"}>*/}
        {/*    <select*/}
        {/*      className={*/}
        {/*        "w-full h-full rounded-full font-bold text-center text-[#898994]"*/}
        {/*      }*/}
        {/*    >*/}
        {/*      <option className={"rounded-full text-[#898994]"}>*/}
        {/*        Available now*/}
        {/*      </option>*/}
        {/*      <option className={"rounded-full text-[#898994]"}>*/}
        {/*        Option 1*/}
        {/*      </option>*/}
        {/*      <option className={"rounded-full text-[#898994]"}>*/}
        {/*        Option 2*/}
        {/*      </option>*/}
        {/*      <option className={"rounded-full text-[#898994]"}>*/}
        {/*        Option 3*/}
        {/*      </option>*/}
        {/*      <option className={"rounded-full text-[#898994]"}>*/}
        {/*        Option 4*/}
        {/*      </option>*/}
        {/*    </select>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div
          className={
            "grid grid-cols-1 content-start gap-4 overflow-y-scroll h-full pb-20 lg:grid-cols-2"
          }
        >
          {works
            .map((item) => {
              return (
                  <div className={"h-36"} key={item.title}>
                    <WorkCard workItem={item} />
                  </div>
              );

            })}
        </div>
      </div>
    </div>
  );
};

export default Work;
