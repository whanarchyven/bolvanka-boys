import type {NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import {sdk} from "../graphql/sdk";
import Layout from "../components/Layout";
import React, {useEffect, useState} from "react";
import {tabType} from "../components/types/tabType";
import MarketplaceScreen from "../components/screens/Marketplace";
import InventoryScreen from "../components/screens/Inventory";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";
import BreedingPopUp from "../components/BreedingPopUp";
import ItemCard from "../components/ItemCard";
import {mutate} from "swr";
import {useUserGameFullState} from "../data/data-hooks";
import {toHttps} from "../components/utils/toHttps";
import {router} from "next/client";
import {useRouter} from "next/router";

const Breeding: NextPage = () => {

    const [firstItem, setFirstItem] = useState<MetaforestNftInfo | any>()
    const [secondItem, setSecondItem] = useState<MetaforestNftInfo | any>()
    const [selectedSlot, setSelectedSlot] = useState<'first' | 'second'>('first')

    const [choosenRarityInt, setChoosenRarityInt] = useState<0 | 1 | 2 | 3 | 4 | number>(0)

    const chooseRarityInt = (rarity: 0 | 1 | 2 | 3 | 4 | number) => {
        setChoosenRarityInt(rarity)
    }

    const getColors = (rarity: number) => {
        switch (rarity) {
            case 0:
                return {outlined: ' border-[#B8B8B8] ' + ' bg-[#E1E1E3] ', filled: ' bg-[#B8B8B8] '};
                break;
            case 1:
                return {outlined: ' border-[#B8B8B8] ' + ' bg-[#E1E1E3] ', filled: ' bg-[#B8B8B8] '};
                break;
            case 2:
                return {outlined: ' border-[#9BCA15] ' + ' bg-[#CFDEAC] ', filled: ' bg-[#9BCA15] '};
                break;
            case 3:
                return {outlined: ' border-[#67C5FA] ' + ' bg-[#CBE7F7] ', filled: ' bg-[#67C5FA] '};
                break;
            case 4:
                return {outlined: ' border-[#9600FF] ' + ' bg-[#C89BEE] ', filled: ' bg-[#9600FF] '};
                break;
            case 5:
                return {outlined: ' border-[#FF8F00] ' + ' bg-[#F1D0A9] ', filled: ' bg-[#FF8F00] '}
            default:
                return {outlined: ' border-[#B8B8B8] ' + ' bg-[#E1E1E3] ', filled: ' bg-[#B8B8B8] '}
        }
    }


    const [openBreedingPop, setOpenBreedingPop] = useState(false)

    const toggleBreedingPop = () => {
        setOpenBreedingPop(!openBreedingPop)
    }

    const translatorRarity = (rarity: number) => {
        if (rarity == 0) {
            return 1
        } else {
            return rarity
        }
    }

    const translateRarityInt = (rarity: number) => {
        switch (rarity) {
            case 1:
                return 'Common'
            case 2:
                return 'Uncommon'
            case 3:
                return 'Rare'
            case 4:
                return 'Epic'
            case 5:
                return 'Legendary'
        }
    }

    const translateRarityChance = (rarity: number) => {
        switch (rarity) {
            case 1:
                return 35
            case 2:
                return 15
            case 3:
                return 7
            case 4:
                return 1
            default:
                return 0
        }
    }

    const [showPrize, setShowPrize] = useState(false)
    const toggleShowPrize = () => {
        setShowPrize(!showPrize)
    }
    const [state, mutate] = useUserGameFullState()

    const [isBreeding, setIsBreeding] = useState(true);
    const breed = () => {
        setIsBreeding(true);
        setTimeout(() => {
            setIsBreeding(false)
        }, 4000)
    }

    const [breedingTitle, setBreedingTitle] = useState<string>('.')
    const iterateBreedingTitle = () => {
        if (breedingTitle.length < 3) {
            setTimeout(() => {
                setBreedingTitle(breedingTitle + '.')
            }, 500)
        } else {
            setTimeout(() => {
                setBreedingTitle('.')
            }, 500)
        }
    }
    useEffect(() => {
        iterateBreedingTitle()
    }, [breedingTitle])

    const [combineTitle, setCombineTitle] = useState('Combine')

    const router = useRouter()


    const [lastItem, setLastItem] = useState<MetaforestNftInfo>()
    const [isFailureBreed, setIsFailureBreed] = useState(false);


    const [prize,setPrize]=useState<MetaforestNftInfo>()

    const getCost=(rarity:0|1|2|3|4|number)=>{
        switch (rarity) {
            case 0: return 200
            case 1: return 200
            case 2: return 400
            case 3: return 800
            case 4: return 1200
            default: return 200
        }
    }

    return (
        <div className={'grey-gradient'}>
            <Head>
                <title>Create Next App</title>

                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={'font-roboto overscroll-y-none'}>
                {/*<Bunny></Bunny>*/}
                <Layout>
                    <div className={'w-full h-full p-4 flex justify-center items-center'}>
                        <div className={'w-full'}>
                            <div className={'grid grid-cols-5 w-full '}>
                                {firstItem ? <div onClick={() => {
                                    setSelectedSlot('first');
                                    toggleBreedingPop()
                                }}
                                                  className={'w-full  col-span-2 flex justify-center items-center rounded-xl'}>
                                    <ItemCard item={firstItem}/></div> : <div onClick={() => {
                                    setSelectedSlot('first');
                                    toggleBreedingPop()
                                }}
                                                                              className={'w-full min-h-[18rem] col-span-2 flex justify-center border-2 items-center rounded-xl' + getColors(choosenRarityInt).outlined}>
                                    <div className={'w-16 h-16 p-5 rounded-full' + getColors(choosenRarityInt).filled}>
                                        <div className={'w-full h-full relative'}>
                                            <Image src={'/images/breeding_module/emptyItem.svg'}
                                                   layout={'fill'}></Image>
                                        </div>
                                    </div>
                                </div>}
                                <div>

                                </div>
                                {secondItem ? <div onClick={() => {
                                    setSelectedSlot('second');
                                    toggleBreedingPop()
                                }}
                                                   className={'w-full  col-span-2 flex justify-center items-center rounded-xl'}>
                                    <ItemCard item={secondItem}/></div> : <div onClick={() => {
                                    setSelectedSlot('second');
                                    toggleBreedingPop()
                                }}
                                                                               className={'w-full min-h-[18rem] col-span-2 flex justify-center border-2 items-center rounded-xl' + getColors(choosenRarityInt).outlined}>
                                    <div className={'w-16 h-16 p-5 rounded-full' + getColors(choosenRarityInt).filled}>
                                        <div className={'w-full h-full relative'}>
                                            <Image src={'/images/breeding_module/emptyItem.svg'}
                                                   layout={'fill'}></Image>
                                        </div>
                                    </div>
                                </div>}
                                <div className={'col-start-2 col-span-3 relative'}>
                                    <img src={'/images/breeding_module/breeding_path.svg'} className={'w-full'}></img>
                                </div>
                                <div className={'col-start-2 col-span-3'}>
                                    {firstItem && secondItem ? <div
                                            className={'w-full h-full border-4 flex-wrap rounded-2xl flex justify-center items-center p-2' + getColors(translatorRarity(choosenRarityInt) + 1).outlined}>
                                            <div className={'w-44 h-44 relative'}>
                                                <div className={'w-full h-full absolute'}><Image
                                                    src={"/images/card_generation/item_bg.svg"} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-full h-full absolute'}><Image
                                                    src={"/images/breeding_module/rarities/" + (translatorRarity(choosenRarityInt) + 1) + '.svg'}
                                                    layout={'fill'}></Image>
                                                </div>
                                            </div>
                                            <div
                                                className={'w-full my-1 rounded-full p-2 flex justify-between items-center h-10' + getColors((translatorRarity(choosenRarityInt) + 1)).filled}>
                                                <p className={'text-white font-bold '}>{translateRarityInt(translatorRarity(choosenRarityInt) + 1)}</p>
                                                <div
                                                    className={'w-12 rounded-full flex justify-center items-center h-8' + getColors(translatorRarity(choosenRarityInt) + 1).outlined}>
                                                    <p className={'font-bold text-black text-sm'}>{translateRarityChance(translatorRarity(choosenRarityInt))}%</p>
                                                </div>
                                            </div>
                                            <div
                                                className={'w-full my-1 rounded-full p-2 flex justify-between items-center h-10' + getColors((translatorRarity(choosenRarityInt))).filled}>
                                                <p className={'text-white font-bold '}>{translateRarityInt(translatorRarity(choosenRarityInt))}</p>
                                                <div
                                                    className={'w-12 rounded-full flex justify-center items-center h-8' + getColors((translatorRarity(choosenRarityInt))).outlined}>
                                                    <p className={'font-bold text-black text-sm'}>{95 - translateRarityChance(translatorRarity(choosenRarityInt))}%</p>
                                                </div>
                                            </div>
                                            <div
                                                className={'w-full my-1 rounded-full p-2 flex justify-between items-center h-10 bg-red-600'}>
                                                <p className={'text-white font-bold '}>Nothing</p>
                                                <div
                                                    className={'w-12 rounded-full flex justify-center items-center h-8 bg-red-400'}>
                                                    <p className={'font-bold text-black text-sm'}>5%</p>
                                                </div>
                                            </div>
                                        </div> :
                                        <div
                                            className={'w-full h-full border-2 rounded-2xl flex justify-center items-center p-2' + getColors(1).outlined}>
                                            <div className={'w-44 h-44 relative'}>
                                                <div className={'w-full h-full absolute'}><Image
                                                    src={"/images/card_generation/item_bg.svg"} layout={'fill'}></Image>
                                                </div>
                                                <div className={'w-full h-full absolute'}><Image
                                                    src={"/images/breeding_module/rarities/1.svg"}
                                                    layout={'fill'}></Image>
                                                </div>
                                            </div>
                                        </div>}
                                </div>


                                {firstItem && secondItem ? <div
                                    className={
                                        "bg-black col-start-2 z-[999] col-span-3 h-14 mt-10 mb-10 flex justify-between items-center rounded-full pr-2 pl-4 "
                                    }
                                    onClick={() => {
                                        if (state.carrotsBalance && (choosenRarityInt == 1 || choosenRarityInt == 0) && state?.carrotsBalance >= 200) {
                                            // if(state?.inventory){
                                            //     setLastItem(state?.inventory[state?.inventory?.length - 1])
                                            //     console.log('CALLBACK')
                                            // }
                                            sdk().metaforestPerformMyAbiFunction({
                                                fn: 'breedTwoItems',
                                                params: {itemIdx1: firstItem.idx, itemIdx2: secondItem.idx}
                                            }).then((res) => {
                                            });
                                            setShowPrize(true);
                                            breed();
                                        } else if (state.carrotsBalance && (choosenRarityInt == 2) && state?.carrotsBalance >= 400) {
                                            // if(state?.inventory){
                                            //     setLastItem(state?.inventory[state?.inventory?.length - 1])
                                            //     console.log('CALLBACK')
                                            // }
                                            sdk().metaforestPerformMyAbiFunction({
                                                fn: 'breedTwoItems',
                                                params: {itemIdx1: firstItem.idx, itemIdx2: secondItem.idx}
                                            }).then((res) => {
                                            });
                                            setShowPrize(true);
                                            breed();
                                        }
                                        else if (state.carrotsBalance && (choosenRarityInt == 3) && state?.carrotsBalance >= 800) {
                                            // if(state?.inventory){
                                            //     setLastItem(state?.inventory[state?.inventory?.length - 1])
                                            //     console.log('CALLBACK')
                                            // }
                                            sdk().metaforestPerformMyAbiFunction({
                                                fn: 'breedTwoItems',
                                                params: {itemIdx1: firstItem.idx, itemIdx2: secondItem.idx}
                                            }).then((res) => {
                                            });
                                            setShowPrize(true);
                                            breed();}
                                        else {
                                            setCombineTitle('Not enough carrots');
                                            setTimeout(() => {
                                                setCombineTitle('Combine')
                                            }, 2000);
                                        }
                                    }}
                                >
                                    <p className={"text-white leading-[100%] font-bold text-xl"}>{combineTitle}</p>
                                    <div
                                        className={
                                            "w-20 h-12 rounded-full bg-white bg-white flex justify-center items-center"
                                        }
                                    >
                                        <p className={"font-bold text-lg"}>
                                            {getCost(choosenRarityInt)} </p>
                                        <div className={"w-6 h-6 relative"}>
                                            <Image
                                                alt=""
                                                src={"/images/carrot_icon.svg"}
                                                layout={"fill"}
                                            ></Image>
                                        </div>
                                    </div>
                                </div> : null}
                            </div>
                        </div>
                    </div>
                    {openBreedingPop ?
                        <BreedingPopUp firstItem={firstItem} secondItem={secondItem} chooseFirstItem={setFirstItem}
                                       chooseSecondItem={setSecondItem}
                                       whichItemIsSelect={selectedSlot} filtration={choosenRarityInt}
                                       chooseFiltration={chooseRarityInt}
                                       togglePop={toggleBreedingPop}/> : null}
                    {showPrize ? (
                        <div
                            className={
                                "flex overflow-y-scroll z-[999] flex-wrap fixed w-full h-[100vh] py-32 top-0 left-0 grey-gradient justify-center items-center transition-all duration-300 ease-in-out"
                            }
                        >
                            {isBreeding ? null : <div
                                className={
                                    "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
                                }
                                onClick={() => {
                                    setFirstItem(false);
                                    setSecondItem(false);
                                    setShowPrize(false);
                                    setChoosenRarityInt(0);

                                }}
                            >
                                <div className={"w-5 h-5 relative"}>
                                    <Image
                                        alt=""
                                        src={"/images/popup_arrow.svg"}
                                        layout={"fill"}
                                    ></Image>
                                </div>
                            </div>}
                            {isBreeding ? <div className={"w-72 mb-10 flex justify-center flex-wrap relative"}>
                                <p className={"text-center text-4xl font-bold mb-3 font-bold"}>
                                    Breeding{breedingTitle}
                                </p>
                                <div className={'block w-full'}>
                                    <div className={"w-full aspect-square relative mx-auto"}>
                                        <div className={"w-full h-full absolute"}>
                                            <img
                                                alt=""
                                                src={"/images/card_generation/item_bg.svg"}
                                            ></img>
                                        </div>
                                        <div className={"w-52 h-52 animate-spin-slow absolute top-0 left-0"}>
                                            <img
                                                alt=""
                                                src={'/images/breeding_module/loading.svg'}
                                                className={'aspect-square w-full h-full'}
                                            ></img>
                                        </div>
                                        <div className={"w-32 h-32 animate-spin-reverse absolute bottom-0 right-0"}>
                                            <img
                                                alt=""
                                                src={'/images/breeding_module/loading.svg'}
                                                className={'aspect-square w-full h-full'}
                                            ></img>
                                        </div>
                                    </div>
                                </div>
                            </div> : <div
                                className={'flex overflow-y-scroll z-[999] flex-wrap w-full top-0 left-0 grey-gradient justify-center items-center transition-all duration-300 ease-in-out'}>{state?.lastBreedSuccess==false ?
                                <div className={'w-full flex flex-wrap items-start justify-center'}>
                                    <p className={"w-full text-center font-bold text-3xl"}>
                                        Unfortunately, its nothing {state.lastBreedSuccess}
                                    </p>
                                    <div
                                        className={
                                            "w-full h-[300px] rounded-2xl flex flex-wrap relative justify-center p-6"
                                        }
                                    >
                                        <Image
                                            src={"/images/sad_bunny.svg"}
                                            layout={"fill"}
                                            alt=""
                                        ></Image>
                                    </div>
                                </div> :
                                <div className={"w-72 mb-10 flex justify-center flex-wrap relative"}>
                                    <p className={"text-center text-4xl font-bold mb-3 font-bold"}>
                                        Congratulations {state.lastBreedSuccess}!
                                        <br/>
                                        <span className={"text-3xl font-medium"}>Your reward is:</span>
                                    </p>
                                    <div className={"w-64"}>
                                        {state.inventory ? (
                                            <ItemCard
                                                item={state?.inventory[state?.inventory?.length - 1]}
                                            ></ItemCard>
                                        ) : null}
                                    </div>
                                </div>}</div>}
                        </div>
                    ) : null}

                </Layout>
            </main>
        </div>
    )
}

export default Breeding