import React, {useEffect, useState} from "react";
import ItemCard from "./ItemCard";
import {equipmentItem} from "./interfaces/equipmentItem";
import Image from "next/image";
import {bunnyInterface} from "./interfaces/bunnyInterface";
import {marketplaceItem} from "./interfaces/marketplaceItem";
import SellingPop from "./SellingPop";
import {MetaforestNftInfo} from "../graphql/sdk/graphql";
import {useUserGameFullState} from "../data/data-hooks";
import {sdk} from "../graphql/sdk";

interface ItemCardInterface {
    item: MetaforestNftInfo;
    togglePop: () => any;
}

const InventoryPopUp = ({item, togglePop}: ItemCardInterface) => {
    const [openSellingPop, setOpenSellingPop] = useState(false);
    const toggleSellingPop = () => {
        setOpenSellingPop(!openSellingPop);
    };
    const [state, mutate] = useUserGameFullState();

    const [isOnMarket, setIsOnMarket] = useState(false);

    const toggleIsOnMarket = () => {
        setIsOnMarket(!isOnMarket)
    }

    useEffect(() => {
        sdk()
            .metaforestMyMarketList()
            .then((response) => {
                if (
                    response?.metaforestMyMarketList?.find(
                        (sellingItem:any) => {return (sellingItem?.nftInfo?.idx == item.idx&&sellingItem?.offerParams?.offerStatus!='CANCEL')}
                    )
                ) {
                    setIsOnMarket(true);
                }
                console.log(response?.metaforestMyMarketList);
                console.log('AUE');
            })
            .catch((e) => {
                console.log(e);
            });
    }, [openSellingPop]);

    return (
        <div
            className={
                "flex flex-wrap overflow-y-scroll fixed w-full h-full pb-20 pt-20 top-0 left-0 grey-gradient justify-center items-center"
            }
        >
            <div
                className={
                    "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"
                }
                onClick={() => {
                    togglePop();
                }}
            >
                <div className={"w-5 h-5 relative"}>
                    <img src={"/images/popup_arrow.svg"} alt="" className={'w-full h-full'}></img>
                </div>
            </div>
            <div className={"w-8/12 flex justify-center flex-wrap relative"}>
                <div className={"w-4/5 mb-8"}>
                    <ItemCard onMarket={isOnMarket} item={item}></ItemCard>
                </div>
                <div
                    className={"relative w-full mt-5 grid grid-cols-2 grid-rows-2 gap-4"}
                >

                    {isOnMarket ? <div className={'w-full h-full'}><button
                            className={
                                "rounded-full w-full h-9 str-gradient text-xs font-bold text-white"
                            }
                        >
                            Cant equip
                        </button></div> :
                        <div className={'w-full h-full'}>
                            {state?.wornInventory?.find((equiped) => equiped?.idx == item.idx) ? (
                                <button
                                    className={
                                        "rounded-full w-full border-2 border-black h-9 bg-transparent font-bold text-black"
                                    }
                                >
                                    Equiped
                                </button>
                            ) : (
                                <button
                                    className={"rounded-full w-full h-9 bg-black font-bold text-white"}
                                    onClick={() => {
                                        sdk().metaforestPerformMyAbiFunction({
                                            fn: "wearInventoryElementOnCurrentBunny",
                                            params: {itemIdx: item.idx},
                                        });
                                    }}
                                >
                                    Equip
                                </button>
                            )}

                        </div>}

                    {/*<button className={'rounded-full h-9 bg-black font-bold text-white'}>Mint</button>*/}
                    {isOnMarket ? <button
                        className={"rounded-full h-9 bg-black font-bold text-white"}
                        onClick={()=>{
                            sdk().metaforestCancelMarketOffer({nftCollection:item.nftCollection,nftItemIdx:item.idx}).then((response)=>{console.log(response)});
                            setIsOnMarket(false)
                            togglePop();
                        }}
                    >
                        Withdraw
                    </button> : <button
                        className={"rounded-full h-9 bg-black font-bold text-white"}
                        onClick={() => {
                            toggleSellingPop();
                        }}
                    >
                        Sell
                    </button>}
                    {/*<button className={'rounded-full h-9 bg-black font-bold text-white'}>Give</button>*/}
                </div>
            </div>
            {openSellingPop ? (
                <SellingPop toggleIsOnMarket={toggleIsOnMarket} item={item} togglePop={toggleSellingPop}/>
            ) : null}
        </div>
    );
};

export default InventoryPopUp;
