import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Layout from "../components/Layout";
import Dashboard from "../components/screens/Dashboard";
import Work from "../components/screens/Work";
import { useState } from "react";
import { tabType } from "../components/types/tabType";
import { bunnyInterface } from "../components/interfaces/bunnyInterface";
import { equipmentItem } from "../components/interfaces/equipmentItem";
import { workTask } from "../components/interfaces/workTask";
import { statKeys } from "../components/types/statKeys";
import { activeTask } from "../components/interfaces/activeTask";

const Home: NextPage = () => {

    // const [balance,setBalance]=useState(1488);
    //
    // const changeBalance=(new_balance:number)=>{
    //     setBalance(new_balance);
    // }
    //
    // const initialTab:tabType="home"
    // const [currentTab,setCurrentTab]=useState(initialTab);
    //
    // const UpdateTab=(newTab:tabType)=>{
    //     return setCurrentTab(newTab);
    // }

    // const attachItemToBunny = (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>{
    //
    //     const characteristics:{id:'str'|'dex'|'vit'|'int'|'krm'}[]=[
    //         {id:'int'},
    //         {id:'dex'},
    //         {id:'vit'},
    //         {id:'krm'},
    //         {id:'str'},
    //     ]
    //
    //     let canWear=true;
    //
    //     characteristics.map(characteristic=>{
    //         if(item.requirements){
    //             const temp = item.requirements[characteristic.id];
    //             if(temp!=undefined&&temp>bunny.bunny.stats[characteristic.id]){
    //                 alert('It seems like your stats are not enough to wear this item! Increase your '+characteristic.id+' !')
    //                 canWear=false;
    //                 // console.log('Require '+[characteristic.id]+' '+item.requirements[characteristic.id]);
    //                 // console.log('Bunny: '+characteristic.id+' '+bunny.bunny.stats[characteristic.id]);
    //             }
    //         }
    //     })
    //
    //     if(!canWear){
    //         return 0
    //     }
    //
    //     const newBunny={...bunny};
    //     const inventoryCategories:{id:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears"}[]=[
    //         {id:"left"},{id:"right"},{id:"necklace"},{id:"faces"},{id:"clothes"},{id:"hats"},{id:"overhead"}, {id:"ears"}
    //     ]
    //
    //     inventoryCategories.map(category=>{
    //         if(newBunny.bunny.equipment[category.id]!=undefined){
    //             const category_item=newBunny.bunny.equipment[category.id]
    //             //
    //             if(category_item?.increase){
    //                 const category_item_stat=Object.entries(category_item.increase);
    //                 //
    //                 const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
    //                 const getStat=(stat_string:string)=>{
    //                     switch (stat_string) {
    //                         case 'str':return stats[0]
    //                         case 'dex':return stats[1]
    //                         case 'int':return stats[2]
    //                         case 'vit':return stats[3]
    //                         case 'krm':return stats[4]
    //                         default:return stats[0]
    //                     }
    //                 }
    //
    //                 category_item_stat.map(stat=>{
    //                     newBunny.bunny.stats[getStat(stat[0]).id]-=stat[1];
    //                 })
    //             }
    //         }
    //     })
    //     newBunny.bunny.equipment[place]=item;
    //     inventoryCategories.map(category=>{
    //         if(newBunny.bunny.equipment[category.id]!=undefined){
    //             const category_item=newBunny.bunny.equipment[category.id]
    //             if(category_item?.increase){
    //                 const category_item_stat=Object.entries(category_item.increase);
    //                 const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
    //                 const getStat=(stat_string:string)=>{
    //                     switch (stat_string) {
    //                         case 'str':return stats[0]
    //                         case 'dex':return stats[1]
    //                         case 'int':return stats[2]
    //                         case 'vit':return stats[3]
    //                         case 'krm':return stats[4]
    //                         default:return stats[0]
    //                     }
    //                 }
    //
    //                 category_item_stat.map(stat=>{
    //                     newBunny.bunny.stats[getStat(stat[0]).id]+=stat[1];
    //                 })
    //             }
    //         }
    //     })
    //     setBunny(newBunny);
    // }

  // const attachItemToBunny = (place:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears",item:equipmentItem)=>{
  //
  //     const characteristics:{id:'str'|'dex'|'vit'|'int'|'krm'}[]=[
  //         {id:'int'},
  //         {id:'dex'},
  //         {id:'vit'},
  //         {id:'krm'},
  //         {id:'str'},
  //     ]
  //
  //     let canWear=true;
  //
  //     characteristics.map(characteristic=>{
  //         if(item.requirements){
  //             const temp = item.requirements[characteristic.id];
  //             if(temp!=undefined&&temp>bunny.bunny.stats[characteristic.id]){
  //                 alert('It seems like your stats are not enough to wear this item! Increase your '+characteristic.id+' !')
  //                 canWear=false;
  //                 // console.log('Require '+[characteristic.id]+' '+item.requirements[characteristic.id]);
  //                 // console.log('Bunny: '+characteristic.id+' '+bunny.bunny.stats[characteristic.id]);
  //             }
  //         }
  //     })
  //
  //     if(!canWear){
  //         return 0
  //     }
  //
  //     const newBunny={...bunny};
  //     const inventoryCategories:{id:"left"|"right"|"necklace"|"faces"|"clothes"|"hats"|"overhead"|"ears"}[]=[
  //         {id:"left"},{id:"right"},{id:"necklace"},{id:"faces"},{id:"clothes"},{id:"hats"},{id:"overhead"}, {id:"ears"}
  //     ]
  //
  //     inventoryCategories.map(category=>{
  //         if(newBunny.bunny.equipment[category.id]!=undefined){
  //             const category_item=newBunny.bunny.equipment[category.id]
  //             //
  //             if(category_item?.increase){
  //                 const category_item_stat=Object.entries(category_item.increase);
  //                 //
  //                 const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
  //                 const getStat=(stat_string:string)=>{
  //                     switch (stat_string) {
  //                         case 'str':return stats[0]
  //                         case 'dex':return stats[1]
  //                         case 'int':return stats[2]
  //                         case 'vit':return stats[3]
  //                         case 'krm':return stats[4]
  //                         default:return stats[0]
  //                     }
  //                 }
  //
  //                 category_item_stat.map(stat=>{
  //                     newBunny.bunny.stats[getStat(stat[0]).id]-=stat[1];
  //                 })
  //             }
  //         }
  //     })
  //     newBunny.bunny.equipment[place]=item;
  //     inventoryCategories.map(category=>{
  //         if(newBunny.bunny.equipment[category.id]!=undefined){
  //             const category_item=newBunny.bunny.equipment[category.id]
  //             if(category_item?.increase){
  //                 const category_item_stat=Object.entries(category_item.increase);
  //                 const stats:{id:'str'|'dex'|'int'|'vit'|'krm'}[]=[{id:'str'},{id:'dex'},{id:'int'},{id:'vit'}, {id:'krm'}];
  //                 const getStat=(stat_string:string)=>{
  //                     switch (stat_string) {
  //                         case 'str':return stats[0]
  //                         case 'dex':return stats[1]
  //                         case 'int':return stats[2]
  //                         case 'vit':return stats[3]
  //                         case 'krm':return stats[4]
  //                         default:return stats[0]
  //                     }
  //                 }
  //
  //                 category_item_stat.map(stat=>{
  //                     newBunny.bunny.stats[getStat(stat[0]).id]+=stat[1];
  //                 })
  //             }
  //         }
  //     })
  //     setBunny(newBunny);
  // }

  // const getNewActiveTask=(task:workTask)=>{
  //     let canTake=true;
  //     statKeys.map(stat=>{
  //         if(task.workItem.requirements){
  //             const temp=task.workItem.requirements[stat.stat_name]
  //             if(temp!=undefined&&bunny.bunny.stats[stat.stat_name]<temp){
  //                 alert('You can not take this job, looks like you are do not have much '+stat.stat_name+'!')
  //                 canTake=false;
  //                 return 0
  //             }
  //         }
  //     })
  //     if(canTake){
  //         const new_task:activeTask={...task,progress:0};
  //         const newBunny={...bunny}
  //         newBunny.bunny.activeTask=new_task;
  //         // if(bunny.bunny.workHistory==undefined){
  //         //     newBunny.bunny.workHistory=[];
  //         // }
  //         if(bunny.bunny.activeTask!=undefined&&bunny.bunny.workHistory?.findIndex(function (history){return history.workItem.id==new_task.workItem.id})==-1){
  //             newBunny.bunny.workHistory?.push(bunny.bunny.activeTask);
  //         }
  //
  //         setBunny({...newBunny});
  //         alert("You successfully taked this job!");
  //     }
  // }

  // const pushItemToInventory=(item:equipmentItem)=>{
  //     const newBunny={...bunny};
  //     newBunny.bunny.inventory.push(item);
  //     setBunny(newBunny);
  // }
  //
  // const increaseCharacteristics=(chars:{id:'str'|'dex'|'vit'|'int'|'krm',increase:number}[])=>{
  //     const newBunny={...bunny};
  //     chars.map(char=>{
  //         newBunny.bunny.stats[char.id]+=char.increase
  //     })
  // }

  return (
    <div className={"grey-gradient"}>
      <Head>
        <title>Create Next App</title>

        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={"font-roboto overscroll-y-none"}>
        {/*<Bunny></Bunny>*/}
          <Layout>
              <Work/>
          </Layout>
      </main>
    </div>
  );
};

export default Home;
