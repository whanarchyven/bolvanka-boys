import React from 'react';
import StatRequirementBar from "./StatRequirementBar";

interface tabSwitcherInterface{
    currentTab:string,
    switchCurrentTab:(item:'carrots'|'level'|'dex'|'str'|'vit'|'int'|'krm')=>void
}

const TabSwitcher = ({currentTab,switchCurrentTab}:tabSwitcherInterface) => {

    const tabs:{id:'carrots'|'level'|'dex'|'str'|'vit'|'int'|'krm'}[]=[
        {id:'carrots',},
        {id:'level',},
        {id:'str',},
        {id:'dex',},
        {id:'int',},
        {id:'vit',},
        {id:'krm',},
    ]

    return (
        <div className={'w-full sm:gap-4 sm:grid-cols-6 cursor-pointer grid grid-cols-3 items-center'}>
            {tabs.map(item=>{
                if(item.id==currentTab){
                    return <div className={'border-2 border-white rounded-full p-1'} key={item.id}>
                        <StatRequirementBar stat_value={item.id} stat_name={item.id}></StatRequirementBar>
                    </div>
                }
                else{
                    return <div className={'border-2 border-black rounded-full p-1'} onClick={()=>{switchCurrentTab(item.id)}} key={item.id}>
                        <StatRequirementBar stat_value={item.id} stat_name={item.id}></StatRequirementBar>
                    </div>
                }
            })}
        </div>
    );
};

export default TabSwitcher;