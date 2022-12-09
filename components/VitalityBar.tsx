import React from 'react';
import Image from "next/image";

interface vitalityBarInterface {
  vitality: number
}

const VitalityBar = ({ vitality }: vitalityBarInterface) => {
    console.log(vitality);
    if(vitality>=10){
        vitality=10;
    }
  return (
    <div className={'w-full h-full relative'}>
      <Image
        alt=""
        src={'/images/vitality_levels/' + vitality + '.svg'}
        layout={'fill'}
      ></Image>
    </div>
  );
};

export default VitalityBar;
