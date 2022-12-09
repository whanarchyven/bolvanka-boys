import React, {useEffect, useState} from 'react';
import TabSwitcher from "../TabSwitcher";
import ItemCard from "../ItemCard";
import Image from "next/image";
import PopUp from "../PopUp";
import {equipmentItem} from "../interfaces/equipmentItem";
import {bunnyInterface} from "../interfaces/bunnyInterface";

interface MarketplaceProps {
    bunny: bunnyInterface;
    balance: number;
}

const MarketplaceScreen = ({bunny, balance}: MarketplaceProps) => {
    const tabs1 = [
        'All',
        'Hat',
        'Pants',
        'Necklace',


    ]
    const tabs2 = [
        'EarsAccessories',
        'Costume',
        'HandRight',
        'HandLeft',
    ]

    const [activeTab, setActiveTab] = useState('All')

    const payment = [
        'buy', 'rent',
    ]
    const [activePayment, setActivePayment] = useState('buy')

    // const items = [
    //   {
    //     id: 1,
    //     type: 'ears',
    //     rarity: 'uncommon',
    //     name: 'Ears_0000s_0004_rozovye-mehovye-ushi',
    //     increase: {
    //       vit: 2,
    //       int: 3,
    //     },
    //     price: 125,
    //   },
    //   {
    //     id: 2,
    //     type: 'left',
    //     rarity: 'common',
    //     name: 'L-hand_0000s_0001_bita',
    //     increase: {
    //       vit: 2,
    //     },
    //     price: 125,
    //   },
    //   {
    //     id: 3,
    //     type: 'faces',
    //     rarity: 'epic',
    //     name: 'Face_0000s_0002_krolik-v-golove',
    //     increase: {
    //       vit: 2, dex: 2, krm: 2,
    //     },
    //     requirements: {
    //       int: 2,
    //     },
    //     price: 125,
    //   },
    //   {
    //     id: 4,
    //     type: 'necklace',
    //     rarity: 'legendary',
    //     name: 'ton-serebro-1',
    //     increase: {
    //       vit: 2, dex: 2, krm: 2,
    //     },
    //     requirements: {
    //       int: 2, str: 4,
    //     },
    //     price: 125,
    //   },
    // ]


    const [items, setItems] = useState<any>([])


    const [myMarketOffers, setMyMarketOffers] = useState<any>([])

    const [popupItem, setPopupItem] = useState(items[0]);
    const [openPopup, setOpenPopup] = useState(false)
    const togglePop = () => {
        setOpenPopup(!openPopup);
    }

    return (
        <div className={'w-full h-full pb-20 p-4'}>
            <p className={'text-center text-black text-3xl font-bold mb-2'}>Market</p>
            <div className={'grid grid-cols-5 grid-rows-2 gap-2 h-16 mb-4'}>
                <div className={'col-start-1 col-end-6'}>
                    <TabSwitcher tabs={tabs1} activeTab={activeTab} switchTab={setActiveTab}></TabSwitcher>
                </div>
                <div className={'col-start-1 col-end-6'}>
                    <TabSwitcher tabs={tabs2} activeTab={activeTab} switchTab={setActiveTab}></TabSwitcher>
                </div>
                {/*<div className={'col-start-1 col-end-3 row-start-2'}>*/}
                {/*  <TabSwitcher tabs={payment} activeTab={activePayment} switchTab={setActivePayment}></TabSwitcher>*/}
                {/*</div>*/}
                {/*<div className={'col-start-4 col-end-6'}>*/}
                {/*  <select className={'w-full h-full rounded-full font-bold text-center text-[#898994]'}>*/}
                {/*    <option className={'rounded-full text-[#898994]'}>Available now</option>*/}
                {/*    <option className={'rounded-full text-[#898994]'}>Option 1</option>*/}
                {/*    <option className={'rounded-full text-[#898994]'}>Option 2</option>*/}
                {/*    <option className={'rounded-full text-[#898994]'}>Option 3</option>*/}
                {/*    <option className={'rounded-full text-[#898994]'}>Option 4</option>*/}
                {/*  </select>*/}
                {/*</div>*/}
            </div>
            <div
                className={'gap-y-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 overflow-y-scroll gap-4 h-full pb-24'}>
                {items.map((item: any) => {

                    if (item.nftInfo.itemSlot == activeTab) {
                        let isMyMarketOffer = false;
                        if (myMarketOffers.find(
                            (sellingItem: any) => {
                                return (sellingItem?.nftInfo?.idx == item?.nftInfo?.idx && sellingItem?.offerParams?.offerStatus == 'PENDING')
                            }
                        )) {
                            isMyMarketOffer = true
                        }
                        return <div className={'w-full'} key={item.id}>
                            <ItemCard isMyMarketOffer={isMyMarketOffer} item={item.nftInfo} key={item.id}></ItemCard>
                            <div className={'grid grid-cols-2 gap-3 h-9 mt-3'}>
                                <button className={'rounded-full bg-black text-white'} onClick={() => {
                                    setPopupItem(item);
                                    togglePop()
                                }}>Buy
                                </button>
                                <div className={'rounded-full flex items-center justify-around bg-black'}>
                                    <p className={'text-white'}>{item?.offerParams?.priceCarrots}</p>
                                    <div className={'w-7 h-7 relative bg-white rounded-full p-1'}>
                                        <Image
                                            alt=""
                                            src={'/images/carrot_icon.svg'}
                                            layout={'fill'}
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    } else if (activeTab == 'All') {
                        let isMyMarketOffer = false;
                        if (myMarketOffers.find(
                            (sellingItem: any) => {
                                return (sellingItem?.nftInfo?.idx == item?.nftInfo?.idx && sellingItem?.offerParams?.offerStatus == 'PENDING')
                            }
                        )) {
                            isMyMarketOffer = true
                        }
                        return <div className={'w-full'} key={item.id}>
                            <ItemCard isMyMarketOffer={isMyMarketOffer} item={item.nftInfo} key={item.id}></ItemCard>
                            <div className={'grid grid-cols-2 gap-3 h-9 mt-3'}>
                                <button className={'rounded-full bg-black text-white'} onClick={() => {
                                    setPopupItem(item);
                                    togglePop()
                                }}>Buy
                                </button>
                                <div className={'rounded-full flex items-center justify-around bg-black'}>
                                    <p className={'text-white'}>{item?.offerParams?.priceCarrots}</p>
                                    <div className={'w-7 h-7 relative bg-white rounded-full p-1'}>
                                        <Image
                                            alt=""
                                            src={'/images/carrot_icon.svg'}
                                            layout={'fill'}
                                        ></Image>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                })}
            </div>
            {openPopup ? <PopUp item={popupItem} togglePop={togglePop}></PopUp> : null}
        </div>
    );
};

export default MarketplaceScreen;
