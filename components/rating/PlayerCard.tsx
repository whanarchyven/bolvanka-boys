import React from 'react';
import Image from "next/image";
import StatRequirementBar from "./StatRequirementBar";

interface playerInterface {
    player: {
        telegram_id: string,
        image: string,
        level: number,
        carrots: number,
        str: number,
        dex: number,
        int: number,
        krm: number,
        vit: number,
    }
    counter: number,
}

const PlayerCard = ({player, counter}: playerInterface) => {

    const tabs: {
        value: 'carrots' |
            'level' |
            'str' |
            'dex' |
            'int' |
            'vit' |
            'krm'
    }[] = [
        {value: 'carrots'},
        {value: 'level'},
        {value: 'str'},
        {value: 'dex'},
        {value: 'int'},
        {value: 'vit'},
        {value: 'krm'},
    ]


    return (
        <div className={'w-full h-full flex flex-wrap relative text-white justify-center p-4'}>
            <div className={'relative w-full'}>
                <img src={'/images/bunnies/' + player.image + '.png'}
                     className={'w-full rounded-xl border-white border-4'}></img>
            </div>
            <div
                className={'absolute top-2 z-[9999] w-12 h-12 left-2 bg-white rounded-xl flex justify-center items-center'}>
                <p className={'text-black font-bold'}>{counter}</p>
            </div>
            <p className={'font-bold mt-5 text-2xl'}>{player.telegram_id}</p>
            <div className={'grid grid-cols-2 w-full gap-2 mt-5'}>
                {tabs.map(item => {
                    return <div className={'flex justify-center items-center'} key={item.value}>
                        <p className={'mr-2 font-bold'}>{item.value}</p>
                        <StatRequirementBar stat_value={player[item.value]} stat_name={item.value}></StatRequirementBar>
                    </div>
                })}
            </div>
        </div>
    );
};

export default PlayerCard;