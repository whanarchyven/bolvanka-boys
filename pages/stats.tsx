import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";

const StatsPage = () => {


    return (
        <div
            className={
                "bg-slate-600 flex font-roboto justify-center items-center w-full h-[100vh]"
            }
        >
            <div
                className={
                    "w-96 h-[90%] rounded-2xl walk-gradient flex flex-wrap justify-center p-6"
                }
            >
                <p className={"text-3xl mt-5 font-bold w-full text-center"}>Walking</p>
                <div className={"w-40 h-40 flex justify-center items-center relative"}>
                    <div className={"w-full h-full absolute top-0 left-0"}>
                        <Image alt="" src={"/images/bg_sprite.svg"} layout={"fill"}></Image>
                    </div>
                    <div className={"w-3/5 h-3/5 absolute"}>
                        <Image
                            alt="steps"
                            src={"/images/work_module/icons/STEPS_black.svg"}
                            layout={"fill"}
                        ></Image>
                    </div>
                </div>
                <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
                    <div className={"col-start-1 col-end-3"}>
                        <ProgressBar
                            progress={250}
                            limit={500}
                        />
                    </div>
                    <p className={"justify-self-end font-bold text-white"}>
                        {250}/
                        {500} m
                    </p>
                </div>
                <div className={"w-full h-6 gap-4 grid grid-cols-3"}>
                    <div className={"col-start-1 col-end-3"}>
                        <ProgressBar
                            progress={2}
                            limit={4}
                        />
                    </div>
                    <div className={'justify-self-end'}>
                        <p className={"font-bold text-white inline-block"}>
                            {2}/
                            {4}
                        </p>
                        <div className={"w-4 h-4 relative ml-0 inline-block"}>
                            <Image
                                alt=""
                                src={"/images/stats_icons/vit_white.svg"}
                                layout={"fill"}
                            ></Image>
                        </div>
                    </div>
                </div>
                <div className={"w-full h-6 gap-4 flex justify-between"}>
                    <p className={"text-white font-bold text-xl "}>
                        Job status:
                    </p>
                    <div className={'flex justify-end'}>
                        <p className={"font-bold text-white inline-block text-xl"}>
                            ACTIVE
                        </p>
                    </div>
                </div>
                <div className={"w-full h-6 gap-4 flex justify-between"}>
                    <p className={"text-white font-bold text-xl "}>
                        Average speed:
                    </p>
                    <div className={'flex justify-end'}>
                        <p className={"font-bold text-white inline-block text-xl"}>
                            {10} km/h
                        </p>
                    </div>
                </div>
                <div className={"w-full flex justify-between"}>
                    <p
                        className={
                            "text-white font-bold text-xl align-bottom "
                        }
                    >
                        You earned:
                    </p>
                    <div className={'flex justify-end'}>
                        <p
                            className={
                                "font-bold text-white inline-block text-xl align-bottom"
                            }
                        >
                            {12}
                        </p>
                        <div className={"w-5 h-5 relative ml-2 inline-block"}>
                            <Image
                                alt="carrot"
                                src={"/images/carrot_icon_white.svg"}
                                layout={"fill"}
                            ></Image>
                        </div>
                        <p
                            className={
                                "font-bold text-white inline-block text-xl align-bottom"
                            }
                        >
                            {32} EXP
                        </p></div>
                </div>
                <button className={'w-full font-bold text-2xl h-12 bg-black rounded-full text-white'}>
                    Finish job
                </button>
            </div>
        </div>
    );
};

export default StatsPage;
