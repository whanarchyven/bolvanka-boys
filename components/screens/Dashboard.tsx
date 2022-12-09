import React, {useState} from "react";
import {bunnyInterface} from "../interfaces/bunnyInterface";
import BunnyGeneration from "../BunnyGeneration";
import Image from "next/image";
import VitalityBar from "../VitalityBar";
import ProgressBar from "../UI/ProgressBar";
import LevelUp from "../LevelUp";
import Lootboxes from "../Lootboxes";
import FeedPopUp from "../FeedPopUp";
import {useRouter} from "next/router";

import PushNotification from "../PushNotification";
import {pushNote} from "../utils/pushAtom";
import {usePushNote} from "../utils/usePush"

const Dashboard = () => {
    // const { data:profileData, mutate } = sdk().useGetMe()

    const [showPush, setShowPush] = useState(false)
    const [levelPopOpen, setLevelPopOpen] = useState(false);
    const toggleLevelPop = () => {
        setLevelPopOpen(!levelPopOpen);
    };

    const [lootboxPopOpen, setLootBoxOpen] = useState(false);
    const toggleLootPop = () => {
        setLootBoxOpen(!lootboxPopOpen);
    };

    const [feedPopOpen, setFeedPopOpen] = useState(false);
    const toggleFeedPop = () => {
        setFeedPopOpen(!feedPopOpen);
    };

    const router = useRouter();


    return (
        <div className={"w-full h-full flex justify-center flex-wrap"}>
            <div className={"w-full h-fit absolute top-0 bunny-generation-outside"}>
                <div className={"w-full h-full bunny-generation-inside"}>
                    <div className={"w-[308px] h-[445px] mx-auto"}>
                        <BunnyGeneration></BunnyGeneration>
                    </div>
                </div>
            </div>
            <div className={"w-[336px] h-full left-auto absolute top-0"}>
                <div
                    className={
                        "w-16 h-16 -right-0 top-28 absolute green-gradient rounded-full flex flex-wrap justify-center content-center"
                    }
                >
                    <p className={"w-full text-center font-bold text-white text-2xl"}>
                        {1}
                    </p>
                    <p className={"text-white font-normal text-lg"}>level</p>
                    <div
                        className={
                            "absolute -right-0 -top-1 w-6 h-6 bg-white rounded-full flex justify-center content-center"
                        }
                        onClick={() => {
                            toggleLevelPop();
                        }}
                    >
                        <p className={"text-center text-md text-green-500 font-bold"}>
                            +
                        </p>
                    </div>
                </div>
                <div
                    className={
                        "w-16 h-16 -right-0 top-72 absolute green-gradient rounded-full flex flex-wrap justify-center content-center p-4"
                    }
                    onClick={() => {
                        toggleLootPop();
                    }}
                >
                    <div className={"w-full h-full relative"}>
                        <Image
                            src={"/images/lootbox_icon.svg"}
                            layout={"fill"}
                            alt=""
                        ></Image>
                    </div>
                    <div
                        className={
                            "absolute -right-0 -top-2 w-6 h-6 bg-white rounded-full flex justify-center content-center"
                        }
                    >
                        <p className={"text-center text-xl text-green-500"}>
                            2
                        </p>
                    </div>
                </div>
                <div className={"w-20 h-32 absolute -left-3 top-44"}>
                    <VitalityBar
                        vitality={7}
                    ></VitalityBar>
                    <div
                        className={
                            "w-3/4 mt-4 h-10 rounded-full green-gradient flex justify-center items-center"
                        }
                    >
                        <p className={"text-center text-xl font-semibold text-white"}>
                            Feed
                        </p>
                    </div>
                </div>
            </div>
            <p
                className={
                    "text-center w-full text-4xl font-semibold text-black relative -mt-10 mb-5"
                }
            >
                Андрей
            </p>
            <div
                className={
                    "w-40 h-12 green-gradient rounded-full relative flex justify-center items-center"
                }
                onClick={() => {
                    router.push("/bunnychange");
                }}
            >
                <p className={"text-center text-xl font-semibold text-white"}>Change</p>
            </div>
            <div className={"relative w-full gap-4 px-6 py-4 mt-3 grid grid-cols-10"}>
                <div className={"col-start-1 col-end-4 flex justify-around justify-self-start"}>
                    <p className={"align-middle"}>Max</p>
                    <div className={"w-5 h-5 relative align-middle"}>
                        <Image
                            src={"/images/carrot_icon.svg"}
                            layout={"fill"}
                            alt=""
                        ></Image>
                    </div>
                    <p className={"align-middle"}>/day</p>
                </div>
                <div className={"col-start-4 col-end-9"}>
                    <ProgressBar
                        progress={Math.round(6)}
                        limit={Math.round(24)}
                    ></ProgressBar></div>

                <p className={"col-start-9 col-end-11 justify-self-end  "}>
                    6/24
                </p>
            </div>

            <div
                className={"relative w-full gap-4 px-6 py-4 mt-3 grid grid-cols-10"}
            >
                <p className={"col-start-1 col-end-4 justify-self-start"}>Energy</p>
                <div className={"col-start-4 col-end-9"}>
                    <ProgressBar
                        progress={2}
                        limit={4}
                    ></ProgressBar>
                </div>
                <p className={"col-start-9 col-end-11 justify-self-end "}>2/4</p></div>
            <div
                className={"relative w-full gap-4 px-6 py-4 mt-3 grid grid-cols-10"}
            >
                <p className={"col-start-1 col-end-4 justify-self-start"}>
                    Experience
                </p>
                <div className={"col-start-4 col-end-9"}>
                    <ProgressBar
                        progress={Math.round(80)}
                        limit={Math.round(100)}
                    ></ProgressBar>
                </div>
                <p className={"col-start-9 col-end-11 justify-self-end  "}>80/100</p></div>
            <div
                className={
                    "bg-black w-72 h-14 z-[999] mt-10 mb-10 flex justify-between items-center rounded-full pr-2 pl-4 "
                }
            >
                <p className={"text-white font-bold text-xl"}>LvlUp after:</p>
                <div
                    className={
                        "w-32 h-12 rounded-full bg-white text-black flex justify-center items-center"
                    }
                >
                    12.12.22
                </div>
            </div>
            {levelPopOpen ? (
                <LevelUp
                    skillpoints={4}
                    bunny={{}}
                    togglePop={toggleLevelPop}
                />
            ) : null}
            {lootboxPopOpen ? (
                <Lootboxes
                    togglePop={toggleLootPop}
                />
            ) : null}
            {feedPopOpen?(
                <FeedPopUp
                    togglePop={toggleFeedPop}
                    carrotBalance={1203}
                    vitality={4}
                ></FeedPopUp>
            ) : null}
            {/*<PushNotification message={'Successfull tranzaktion!'} isShown={showPush} status={'success'}/>*/}
        </div>
    );
};

export default Dashboard;
