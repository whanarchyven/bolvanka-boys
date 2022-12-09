import React, { useEffect, useState } from "react";
import { bunnyInterface } from "./interfaces/bunnyInterface";
import { equipmentItem } from "./interfaces/equipmentItem";
import TopMenu from "./TopMenu";
import TabBar from "./TabBar";
import { tabType } from "./types/tabType";
import { workTask } from "./interfaces/workTask";
import { Simulate } from "react-dom/test-utils";
import progress = Simulate.progress;
import { activeTask } from "./interfaces/activeTask";
import { statKeys } from "./types/statKeys";

import { useRouter } from "next/router";

import PushNotification from "./PushNotification";

import pushNotification from "./PushNotification";

// import {ShowPush} from "./utils/showPush";
import {pushNote} from "./utils/pushAtom";


interface push{
    push:{
        message:string,
        status:string,
        isShown:true,
    }
}


const Layout = (props: any) => {
  const needUrl = useRouter();
  const [routerUrl, setRouterUrl] = useState(needUrl);




  // console.log(needUrl);

  // useEffect(()=>{
  //     setRouterUrl(useRouter())
  //     console.log(routerUrl);
  // },[])






  return (
    <div className={"flex relative"}>
      <div className={"w-full h-full min-h-screen flex items-center pt-14 pb-20"}>
        {props.children}
      </div>
      {!props.hideUi && (
        <div className={"w-full h-14 fixed top-0"} onClick={()=>{}}>
            <TopMenu balance={1203}></TopMenu>
        </div>
      )}
      {!props.hideUi && (
        <div className={"w-full h-20 fixed bottom-0 z-[999]"}>
          <TabBar currentTab={needUrl.pathname}></TabBar>
        </div>
      )}
    </div>
  );
};

export default Layout;