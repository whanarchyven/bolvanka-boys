import React, {useEffect, useState} from 'react';
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";
import { firstLetterUpperCase } from "./firstLetterUpperCase";
import { bunnyInterface } from "./interfaces/bunnyInterface";


interface ItemCardInterface {
  choosenType: "Costume" | "EarsAccessories" | "Ears_n_Horns" | "Face" | "HandLeft" | "HandRight" | "Hat" | "Necklace"|'Overhead',
  togglePop: () => any,
}

const EquipmentPopUp = ({togglePop, choosenType }: ItemCardInterface) => {

  return (
    <div className={'fixed z-[999] pt-16 w-full h-full top-0 pb-20 left-0 grey-gradient justify-center items-center overflow-y-scroll'}>
      <div className={'w-full flex over flex-wrap justify-center relative p-4'}>
        <div className={'flex mb-8 justify-around w-4/5'}>
          <div className={'w-10 h-10 inline-flex justify-center items-center rounded-full bg-white align-middle'}>
            <div className={'w-3/5 h-3/5 relative'}>
              <Image
                alt=""
                src={'/images/tab_icons/' + choosenType + '.svg'}
                layout={'fill'}
              ></Image>
            </div>
          </div>
          <p className={'text-center text-3xl ml-4 font-bold inline-block align-middle'}>{choosenType=='EarsAccessories'?'Ears':choosenType}</p>
          <button className={'h-9 leading-[100%] text-sm  w-20 bg-black text-white rounded-full'}>Unwear <br/> {choosenType=='EarsAccessories'?'Ears':choosenType}</button>
        </div>
        <div className={'w-full gap-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'}>
          {/*{bunny.inventory.map(item => {*/}
          {/*    <div key={Math.random()} className={'cursor-pointer border-4 rounded-2xl border-green-500'}><ItemCard item={item}/></div>*/}
          {/*}):null}*/}
        </div>
      </div>
      <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full cursor-pointer'} onClick={() => { togglePop() }}>
        <div className={'w-5 h-5 relative'}>
          <Image
            alt=""
            src={'/images/popup_arrow.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPopUp;
