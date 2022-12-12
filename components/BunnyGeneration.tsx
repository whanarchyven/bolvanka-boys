import React, {useEffect, useRef} from "react";
import Image from "next/image";
import {random} from "nanoid";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {equipmentItem} from "./interfaces/equipmentItem";

interface Interface {
    suits?:Array<equipmentItem>
}

const BunnyGeneration = ({suits}:Interface) => {

    return (
        <div className={"w-full h-full flex justify-center relative"}>
            <div className={"w-full absolute top-0 left-0 h-full"}>
                <img
                    className={"w-full h-full"}
                    src={"/images/boy_generation/transparent.png"}
                    alt=""
                ></img>
            </div>
            {suits?.map((item) => {
                return (
                    <div className={"w-full absolute top-0 h-full px-[3.9%]"} key={item.idx}>
                        <Image
                            className={"w-full h-full"} layout={'fill'}
                            src={`/images/boy_generation/${item.image}.png`}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default BunnyGeneration;
