import React, { useState } from 'react';

import Image from "next/image";
import VitalityBar from "./VitalityBar";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";
import {sdk} from "../graphql/sdk";
import {useUserGameFullState} from "../data/data-hooks";

interface feedPopInterface {
  togglePop: () => any;
  item:MetaforestNftInfo;
  toggleIsOnMarket:()=>any;
}

const SellingPop = ({ togglePop,item,toggleIsOnMarket }: feedPopInterface) => {


  const [state,mutate]=useUserGameFullState()

  const [sellingPrice, setSellingPrice] = useState(0)

  return (
    <div className={'fixed w-[100vw] h-[100vh] backdrop-blur-lg flex flex-col flex-wrap justify-center items-center '}>
      <div className={'absolute top-0 bg-[#222222] opacity-50 w-full h-full'} onClick={() => { togglePop() }}>

      </div>
      <div className={'w-80 h-96 walk-gradient z-50 flex p-10 rounded-2xl flex-col items-center '}>
        <p className={'font-bold text-2xl'}>Choose selling price:</p>
        <div className={'border-white border-2 rounded-full flex justify-end  items-center h-11 w-full mt-5'}>
          <input className={'w-4/5 bg-transparent text-right font-bold text-xl focus-visible:outline-0 mr-3 h-full'} placeholder={'0'} onChange={(e) => { setSellingPrice(Number(e.target.value)) }} type={'number'} />
          <div className={'h-9 w-9 rounded-full bg-white flex justify-center items-center'}>
            <div className={'w-7 h-7 relative'}>
              <Image
                src={'/images/carrot_icon.svg'}
                layout={'fill'}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        <div className={'flex w-full mt-5 justify-between items-center'}>
          <p className={'font-medium text-lg '}>
            Artist royalties:
          </p>
          <div className={''}>
            <p className={'font-medium text-lg inline-block align-middle'}>{Math.round(sellingPrice * 0.05 * 100) / 100}</p>
            <div className={'w-4 h-4 relative inline-block align-middle'}>
              <Image
                src={'/images/carrot_icon_white.svg'}
                layout={'fill'}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        <div className={'flex w-full mt-5 justify-between items-center'}>
          <p className={'font-medium text-lg '}>
            Transaction fee:
          </p>
          <div className={''}>
            <p className={'font-medium text-lg inline-block align-middle'}>{Math.round(sellingPrice * 100 * 0.001) / 100}</p>
            <div className={'w-4 h-4 relative inline-block align-middle'}>
              <Image
                src={'/images/carrot_icon_white.svg'}
                layout={'fill'}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        <div className={'flex w-full mt-5 justify-between items-center'}>
          <p className={'font-bold text-2xl '}>
            Your profit:
          </p>
          <div className={''}>
            <p className={'font-bold text-2xl inline-block align-middle'}>{Math.round((sellingPrice - (sellingPrice * 0.001 + sellingPrice * 0.05)) * 100) / 100}</p>
            <div className={'w-4 h-4 relative inline-block align-middle'}>
              <Image
                src={'/images/carrot_icon_white.svg'}
                layout={'fill'}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
        <div className={'relative w-full mt-5 grid grid-cols-2 grid-rows-2 gap-4'}>
          <button className={'rounded-full h-9 str-gradient font-bold text-white'} onClick={() => { togglePop() }}>Decline</button>
          <button className={'rounded-full h-9 bg-black font-bold text-white'}
                  onClick={()=>{
                    sdk().metaforestPutMarketOffer({nftCollection:item.nftCollection,nftItemIdx:item.idx,priceCarrots:Number(sellingPrice)})
                    console.log('selled');
                    toggleIsOnMarket();
                    togglePop();
                    sdk().metaforestPerformMyAbiFunction({fn:'unWearInventoryElementOnCurrentBunny',params:{inventoryElementIdx:item.idx}});
                  }}
          >Sell</button>
        </div>
      </div>

    </div>
  );
};

export default SellingPop;
