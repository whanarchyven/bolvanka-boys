import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {random} from "nanoid";
import {bunnyInterface} from "./interfaces/bunnyInterface";


const BunnyGeneration = () => {

    const state = {
        wornInventory: []
    };

    return (
        <div className={"w-full h-full flex justify-center relative"}>
            <div className={"w-full absolute top-0 left-0 h-full"}>
                <img
                    className={"w-full h-full"}
                    src={"/images/boy_generation/transparent.png"}
                    alt=""
                ></img>
            </div>
            {state?.wornInventory?.map((item) => {
                return (
                    <div className={"w-full absolute top-0 h-full px-[3.9%]"} key={item}>
                        <img
                            className={"w-full h-full"}
                            src={item}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BunnyGeneration;
