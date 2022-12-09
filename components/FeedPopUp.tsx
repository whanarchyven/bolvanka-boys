import React, { useState } from 'react';

import Image from "next/image";
import VitalityBar from "./VitalityBar";

interface feedPopInterface {
  togglePop: () => any;
  carrotBalance: number;
  vitality: number;
}

const FeedPopUp = ({ togglePop, carrotBalance, vitality }: feedPopInterface) => {

  const [carrotsDecrease, setCarrotsDecrease] = useState(vitality);

  return (
    <div className={'fixed w-[100vw] h-[100vh] backdrop-blur-lg flex flex-col flex-wrap justify-center items-center '}>
      <div className={'absolute top-0 bg-[#222222] opacity-50 w-full h-full'} onClick={() => { togglePop() }}>

      </div>
      <div className={'w-80 h-96 walk-gradient z-50 flex p-10 rounded-2xl flex-col items-center justify-around'}>
        <div className={'w-40 h-40 relative'}>
          <div className={'w-full h-full absolute top-0'}>
            <Image
              alt=""
              src={'/images/bg_sprite.svg'}
              layout={'fill'}
            ></Image>
          </div>
          <div className={'w-full h-full absolute top-0 left-4'}>
            <VitalityBar vitality={carrotsDecrease}></VitalityBar>
          </div>
        </div>
        <div className={'rangebar w-full'}>
          <input className={'w-full rounded-full'} type={"range"} min={vitality} step={1} max={10} value={carrotsDecrease} onChange={(e) => { setCarrotsDecrease(Number(e.target.value)) }} />
        </div>
        <div className={'w-full flex justify-between'}>
          <button className={'w-24 h-9 font-bold text-xl bg-black text-white rounded-full'}>Feed</button>
          <div className={'bg-black w-30 h-9 flex justify-between items-center rounded-full pr-2 pl-4 '}>
            <p className={'text-white font-bold text-xl mr-5'}>{carrotBalance - (carrotsDecrease - vitality)}</p>
            <div className={'w-8 h-8 rounded-full bg-white flex justify-center items-center'}>
              <div className={'w-6 h-6 relative'}>
                <Image
                  alt="carrot"
                  src={'/images/carrot_icon.svg'}
                  layout={'fill'}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default FeedPopUp;
