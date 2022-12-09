import React from 'react';
import ItemCard from "./ItemCard";
import { equipmentItem } from "./interfaces/equipmentItem";
import Image from "next/image";

interface ItemCardInterface {
  stat_name: string,
  stat_value: number,
  togglePop: () => any
}

const getStatDescription = (stat: string) => {
  switch (stat) {
    case 'str': return 'Although strength is not the main characteristic for a Bunny, it is very much needed for strength related activities! Strength determines the number of rewards and strength activities available.'
    case 'dex': return 'Very few bunnies cant dodge the wolf, because our agility is top-notch! Dexterity determines the number of rewards and available dexterity activities!'
    case 'int': return 'What do you mean you dont understand what Riemannian spaces are? And how will you bounce around in worlds? Intelligence determines the success of business real estate management'
    case 'krm': return 'The laws of the universe treat creatures with high karma well and often a rabbit with high karma can find a magic box literally on the doorstep!'
    case 'vit': return 'Do you feel your energy draining when you are digging beds? Its worth building up your stamina. With it, you can do more! The higher your stamina, the less energy you will need for the job!'  }
}

const getStatFullName = (stat: string) => {
  switch (stat) {
    case 'str': return 'Strength'
    case 'dex': return 'Dexterity'
    case 'int': return 'Intelligence'
    case 'krm': return 'Karma'
    case 'vit': return 'Vitality'
  }
}

const getStatColor = (stat: string) => {
  switch (stat) {
    case 'str': return 'bg-[#FF3F4E]'
    case 'dex': return 'bg-[#CA6CF0]'
    case 'int': return 'bg-[#6EEDFB]'
    case 'krm': return 'bg-[#0CE2CA]'
    case 'vit': return 'bg-[#538DFF]'
  }
}

const StatPop = ({ stat_name, stat_value, togglePop }: ItemCardInterface) => {
  return (
    <div className={'flex fixed z-[999] pb-20 pt-16 w-full h-full top-0 left-0 grey-gradient justify-center items-center overflow-y-scroll p-6 flex-wrap fixed w-full h-full top-0 left-0 grey-gradient justify-center items-center'}>
      <div className={'w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full'} onClick={() => { togglePop() }}>
        <div className={'w-5 h-5 relative'}>
          <Image
            alt=""
            src={'/images/popup_arrow.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
      <div className={'w-72 h-72 flex justify-center items-center relative'}>
        <div
          className={'w-full h-full absolute'}>
          <Image
            alt=""
            src={'/images/card_generation/item_bg.svg'}
            layout={'fill'}
          ></Image>
        </div>
        <div className={'w-[80%] h-[80%] absolute'}>
          <Image
            alt=""
            src={'/images/stats_icons/' + stat_name + '.svg'}
            layout={'fill'}
          ></Image>
        </div>
      </div>
      <div className={'flex justify-center items-center'}>
        <p className={'text-5xl mr-5 text-center font-bold'}>{getStatFullName(stat_name)}</p>
        <div className={'w-16 h-16 flex justify-center items-center rounded-full ' + getStatColor(stat_name)}>
          <p className={'text-white text-3xl font-bold'}>{stat_value.toFixed(1)}</p>
        </div>
      </div>
      <div className={'flex justify-center items-center'}>
        <p className={'text-xl text-center font-medium'}>{getStatDescription(stat_name)}</p>
      </div>
    </div>
  );
};

export default StatPop;
