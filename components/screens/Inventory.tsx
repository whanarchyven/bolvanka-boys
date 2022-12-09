import React, {useEffect, useState} from 'react';
import TabSwitcher from "../TabSwitcher";
import ItemCard from "../ItemCard";
import Image from "next/image";
import PopUp from "../PopUp";
import {equipmentItem} from "../interfaces/equipmentItem";
import {bunnyInterface} from "../interfaces/bunnyInterface";
import InventoryPopUp from "../InventoryPopUp";
import {useUserGameFullState} from "../../data/data-hooks";
import {sdk} from "../../graphql/sdk";
import {router} from "next/client";
import {useRouter} from "next/router";


const InventoryScreen = () => {
    const tabs=[
        'bunnies','looks','instruments','houses'
    ]
    const [activeTab,setActiveTab]=useState('looks')

    // const items=[
    //     {
    //         id:1,
    //         type:'ears',
    //         rarity:'uncommon',
    //         name:'Ears_0000s_0004_rozovye-mehovye-ushi',
    //         increase:{
    //             vit:2,
    //             int:3,
    //         },
    //         price:125,
    //     },
    //     {
    //         id:2,
    //         type:'left',
    //         rarity:'common',
    //         name:'L-hand_0000s_0001_bita',
    //         increase:{
    //             vit:2,
    //         },
    //         price:125,
    //     },
    //     {
    //         id:3,
    //         type:'faces',
    //         rarity:'epic',
    //         name:'Face_0000s_0002_krolik-v-golove',
    //         increase:{
    //             vit:2,dex:2,krm:2,
    //         },
    //         requirements:{
    //             int:2,
    //         },
    //         price:125,
    //     },
    //     {
    //         id:4,
    //         type:'necklace',
    //         rarity:'legendary',
    //         name:'ton-serebro-1',
    //         increase:{
    //             vit:2,dex:2,krm:2,
    //         },
    //         requirements:{
    //             int:2,str:4,
    //         },
    //         price:125,
    //     },
    // ]

    const [state,mutate]=useUserGameFullState()

    const temp=state?.inventory?.[0]

    const [popupItem,setPopupItem]=useState(temp);

    const [openPopup,setOpenPopup]=useState(false)
    const togglePop=()=>{
        setOpenPopup(!openPopup);
    }


    const [myMarketOffers,setMyMarketOffers]=useState<any>([])

    useEffect(()=>{
        sdk()
            .metaforestMyMarketList()
            .then((response) => {
                console.log(response);
                if(response.metaforestMyMarketList){
                    setMyMarketOffers(response?.metaforestMyMarketList)
                }
            })
            .catch((e) => {
                console.log(e);
            })
    },[openPopup])

    const router=useRouter()

    return (
        <div className={'w-full h-full pb-20 p-4'}>
            <div className={'flex justify-around items-center'}>
                <p className={'text-center text-black text-3xl font-bold mb-2'}>Inventory</p>
                <div className={'bg-black w-32 h-8 rounded-full flex justify-between items-center'} onClick={()=>{router.push('/breeding')}}>
                    <p className={'text-white text-xl font-bold pl-3'}>Breed</p>
                    <div className={'w-7 h-7 p-1 rounded-full bg-white mr-1'}>
                        <div className={'w-full animate-spin-slow h-full relative'}>
                            <Image src={'/images/breeding_module/loading.svg'} layout={'fill'}></Image>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className={'grid grid-cols-5 grid-rows-2 gap-2 h-16 my-4'}>*/}
            {/*    /!*<div className={'col-start-1 col-end-6 row-start-1'}>*!/*/}
            {/*    /!*    <TabSwitcher tabs={tabs} activeTab={activeTab} switchTab={setActiveTab}></TabSwitcher>*!/*/}
            {/*    /!*</div>*!/*/}
            {/*</div>*/}
            <div className={'gap-y-16 mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-4 h-full pb-24'}>
                {state?.inventory?.map(item=>{
                    let isOnMarket=false
                    if (
                        myMarketOffers.find(
                            (sellingItem:any) => {return (sellingItem?.nftInfo?.idx == item.idx&&sellingItem?.offerParams?.offerStatus!='CANCEL')}
                        )
                    ) {
                        isOnMarket=true;
                    }
                    let isEquiped=false;
                    if(state.wornInventory?.find(worn=>worn?.idx==item.idx)){
                        isEquiped=true;
                    }
                    if((!item.clan)){
                        return <div className={'w-full'} key={item.idx} onClick={()=>{setPopupItem(item);togglePop()}}>
                            <ItemCard isEquiped={isEquiped} onMarket={isOnMarket} item={item} key={item.idx}></ItemCard>
                        </div>
                    }
                })}
            </div>
            {openPopup&&popupItem?<InventoryPopUp togglePop={togglePop} item={popupItem}/>:null}
        </div>
    );
};

export default InventoryScreen;