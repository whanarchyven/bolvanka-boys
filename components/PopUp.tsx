import React, {useState} from 'react';
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";
import { bunnyInterface } from "./interfaces/bunnyInterface";
import { marketplaceItem } from "./interfaces/marketplaceItem";
import {MetaforestMarketOffer, MetaforestNftInfo} from "../graphql/sdk/graphql";
import {sdk} from "../graphql/sdk";
import PushNotification from "./PushNotification";

interface ItemCardInterface {
  item: MetaforestMarketOffer,
  togglePop: () => any,
}


const PopUp = ({ item, togglePop}: ItemCardInterface) => {
  const [showPush,setShowPush]=useState(false)
  const togglePush=()=>{
    setShowPush(true);
    setTimeout(()=>{
      setShowPush(false)
      togglePop();
    },2500)
  }

  return (
    <div className={'flex overflow-y-scroll flex-wrap fixed w-full h-full top-0 left-0 grey-gradient justify-center items-center'}>
      <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={() => { togglePop() }}>
        <div className={'w-5 h-5 relative'}>
          <Image
            alt=""
            src={'/images/popup_arrow.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
      <div className={'w-8/12 flex justify-center flex-wrap relative pb-24 pt-20'}>
        <p className={'text-center text-3xl mb-3 font-bold'}>Item info:</p>
        <div className={'w-full h-96'}>
          {item.nftInfo?<ItemCard item={item.nftInfo}></ItemCard>:null}
        </div>
        <div className={'relative w-4/5 mt-5 grid h-10 grid-cols-2 gap-2'}>
          <button className={'rounded-full bg-black font-bold text-xl text-white'} onClick={() => {
            sdk().metaforestTakeMarketOffer({
              nftCollection: item.nftInfo?.nftCollection,
              nftItemIdx: item.nftInfo?.idx
            }).then((response) => {
              togglePush()
              console.log(response)
            }).catch((e) => {
              console.log(e)
            })
          }}>Buy</button>
          <div className={'rounded-full flex items-center justify-around bg-black'}>
            <p className={'text-white'}>{item?.offerParams?.priceCarrots}</p>
            <div className={'w-7 h-7 relative bg-white rounded-full p-1'}>
              <Image
                alt=""
                src={'/images/carrot_icon.svg'}
                layout={'fill'}
              ></Image>
            </div>
          </div>
        </div>
      </div>
      {/*<PushNotification message={'Success'} isShown={showPush} status={'success'}/>*/}
    </div>
  );
};

export default PopUp;
