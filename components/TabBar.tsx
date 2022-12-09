import React, {useEffect, useRef, useState} from 'react';
import {tabType} from "./types/tabType";
import Image from "next/image";
import {router} from "next/client";
import Link from "next/link";

interface tabBarInterface {
    currentTab: string,
    // UpdateTab:(newTab:tabType)=>any,
}

const TabBar = ({currentTab}: tabBarInterface) => {

    const [isVisible, setIsVisible] = useState('visible-true');
    const [currentOffset, setCurrentOffset] = useState(0);
    // const tabs = [
    //   'activity',
    //   'equipment',
    //   'home',
    //   'marketplace',
    //   'work',
    // ]
    const tabs = [
        'equipment',
        'home',
        'work',
    ]
    // useEffect(() => {
    //   window.addEventListener('scroll', ev => {
    //     if (window.scrollY > currentOffset + 100) {
    //       setIsVisible('visible-false');
    //       setCurrentOffset(window.scrollY);
    //     }
    //     else if (window.scrollY < currentOffset - 100) {
    //       setIsVisible('visible-true');
    //       setCurrentOffset(window.scrollY);
    //     }
    //   })
    // })

    return (
        <div
            className={'w-full h-full bg-white grid grid-cols-3 visible-transition gap-10 grid-rows-1 p-5 ' + isVisible}>
            {tabs.map(item => {
                let active = '';
                if ('/' + item != currentTab) {
                    active = '_active'
                }
                return (
                    <Link className={'relative'} href={'/' + item} key={item}>
                        <div className={'relative h-full'}>
                            <Image
                                alt=""
                                src={'/images/tabs/' + item + active + '.svg'}
                                layout={'fill'}
                            ></Image>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default TabBar;
