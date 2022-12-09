import React from 'react';
import Image from "next/image";

interface statRequirementBar {
  progress: number,
  limit: number,
}

export const StatRequirementBar = ({ progress, limit }: statRequirementBar) => {

    return (<div className={'h-full w-full rounded-full flex items-center grey-gradient'}>
        <div style={{width: `${(progress / limit) * 100 + 5}%`}}
             className={'w-full h-full rounded-full ml-0 flex green-gradient justify-end items-center relative justify-self-start'}>
            <div className={'absolute bg-white rounded-full w-6 h-6 border-2 flex justify-center items-center'}>
                <p className={'justify-self-end ml-0.5 text-xs text-black font-bold'}>{Math.round(progress)}</p>
            </div>
        </div>
    </div>)
}

export default StatRequirementBar;
