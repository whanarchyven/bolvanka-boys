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
    filtration: 0 | 1 | 2 | 3 | 4 | number;
    chooseFiltration: (rarity: 0 | 1 | 2 | 3 | 4 | number) => any
    togglePop: () => any;
    chooseFirstItem: (item: MetaforestNftInfo) => any
    chooseSecondItem: (item: MetaforestNftInfo) => any
    whichItemIsSelect: 'first' | 'second'
    secondItem?: MetaforestNftInfo;
    firstItem?: MetaforestNftInfo
}

const BreedingPopUp = ({
                           filtration,
                           togglePop,
                           chooseFiltration,
                           chooseFirstItem,
                           chooseSecondItem,
                           whichItemIsSelect,
                           secondItem,
                           firstItem
                       }: ItemCardInterface) => {

    const [state, mutate] = useUserGameFullState()

    const temp = state?.inventory?.[0]

    const [popupItem, setPopupItem] = useState(temp);

    const [myMarketOffers, setMyMarketOffers] = useState<any>([])

    useEffect(() => {
        sdk()
            .metaforestMyMarketList()
            .then((response) => {
                if (response.metaforestMyMarketList) {
                    setMyMarketOffers(response?.metaforestMyMarketList)
                }
            })
            .catch((e) => {
                console.log(e);
            })
    }, [])

    return (
        <div
            className={
                "flex flex-wrap overflow-y-scroll p-4  fixed w-full h-full pb-20 pt-20 top-0 left-0 grey-gradient justify-center items-center"
            }
        >
            {/*<div*/}
            {/*    className={*/}
            {/*        "w-12 h-12 absolute left-1 top-16 bg-white flex justify-center items-center rounded-full"*/}
            {/*    }*/}
            {/*    onClick={() => {*/}
            {/*        togglePop();*/}
            {/*    }}*/}
            {/*>*/}
            {/*    <div className={"w-5 h-5 relative"}>*/}
            {/*        <img src={"/images/popup_arrow.svg"} alt=""></img>*/}
            {/*    </div>*/}
            {/*</div>*/}
            <div className={'w-full relative items-center mb-5 grid grid-cols-7'}>
                <p className={'col-span-6 font-bold text-xl'}>Choose Item for Breeding</p>
                <div className={'w-8 h-8 rounded-full bg-black flex justify-center items-center'} onClick={() => {
                    togglePop()
                }}>
                    <div className={'w-5 h-5 relative'}><Image src={'/images/breeding_module/emptyItem.svg'}
                                                               layout={'fill'} className={'rotate-45'}></Image></div>
                </div>
            </div>
            <div
                className={'gap-y-16 grid grid-cols-2 w-full sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-4 h-full pb-24'}>
                {state?.inventory?.map(item => {
                    let isOnMarket = false
                    let isEquiped=false
                    if (
                        (item.baseParams?.rarityInt == filtration || filtration == 0) && (item.idx != firstItem?.idx) && (item.idx != secondItem?.idx)&&(!item.clan)&&(item.baseParams?.rarityInt!=4)
                    ) {
                        if(myMarketOffers.find(
                            (sellingItem: any) => {
                                return (sellingItem?.nftInfo?.idx == item.idx && sellingItem?.offerParams?.offerStatus != 'CANCEL')
                            }
                        )){
                            isOnMarket=true
                        }
                        if(state?.wornInventory?.find(wornItem=>wornItem?.idx==item.idx)){
                            isEquiped=true
                        }

                        return <div className={'w-full '} key={item.idx} onClick={() => {if(!isOnMarket){if (whichItemIsSelect == 'first') {
                            chooseFirstItem(item)
                        } else {
                            chooseSecondItem(item)
                        }
                            if (item.baseParams?.rarityInt) {
                                if(item.baseParams?.rarityInt==1){
                                    chooseFiltration(1)
                                }
                                else{
                                    chooseFiltration(item.baseParams.rarityInt)
                                }
                            } else {
                                chooseFiltration(0)
                            }
                            ;togglePop();}}}>
                            <ItemCard isEquiped={isEquiped} onMarket={isOnMarket} item={item} key={item.idx}></ItemCard>
                        </div>
                    } else {
                    }
                })}
            </div>

        </div>
    );
};

export default BreedingPopUp;
