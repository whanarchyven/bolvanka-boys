import React from "react";
import Image from "next/image";

import { equipmentItem } from "./interfaces/equipmentItem";


const ItemCard = () => {
  let increase: any[] = [];
  return (
    <div
      className={
        "w-full p-2 rounded-xl border-4 relative"
      }
      onClick={() => { }}
    >
    {/*  <div className={'block'}>*/}
    {/*    <div className={"w-full aspect-square relative mx-auto"}>*/}
    {/*      <div className={"w-full h-full absolute"}>*/}
    {/*        <img*/}
    {/*            alt=""*/}
    {/*            src={"/images/card_generation/item_bg.svg"}*/}
    {/*        ></img>*/}
    {/*      </div>*/}
    {/*      <div className={"w-full h-full absolute"}>*/}
    {/*        <img*/}
    {/*            alt=""*/}
    {/*            src={toHttps(item?.images?.web ? "" + item?.images?.web : "") || ''}*/}
    {/*            className={'aspect-square'}*/}
    {/*        ></img>*/}
    {/*      </div>*/}
    {/*    </div>*/}
    {/*  </div>*/}
    {/*  <p className={"text-center text-xl font-bold mb-4"}>{item?.itemSlot=='EarsAccessories'?'Ears':item?.itemSlot}</p>*/}
    {/*  <div className={"grid grid-cols-2 gap-2"}>*/}
    {/*    <div className={"grid grid-cols-1 grid-rows-4 gap-2 h-32"}>*/}
    {/*      {increase.map((incr: any) => {*/}
    {/*        if (incr[1] != 0 && incr[0] != "level"&& incr[0] != "rarityInt"&&incr[1]) {*/}
    {/*          return (*/}
    {/*            <div*/}
    {/*              className={*/}
    {/*                "w-full h-full rounded-full flex justify-center items-center relative"*/}
    {/*              }*/}
    {/*              key={incr[0]}*/}
    {/*            >*/}
    {/*              <div*/}
    {/*                className={*/}
    {/*                  "w-full h-full bg-white opacity-30 rounded-full absolute top-0 left-0"*/}
    {/*                }*/}
    {/*              ></div>*/}
    {/*              <div*/}
    {/*                className={*/}
    {/*                  "w-8 h-8 rounded-full bg-white absolute left-0 p-2"*/}
    {/*                }*/}
    {/*              >*/}
    {/*                <div className={"w-full h-full relative"}>*/}
    {/*                  /!*<img*!/*/}
    {/*                  /!*  alt=""*!/*/}
    {/*                  /!*  src={'/images/card_generation/' + item.rarity + '/' + incr[0] + '.svg'}*!/*/}
    {/*                  /!*  layout={'fill'}*!/*/}
    {/*                  /!*></img>*!/*/}
    {/*                  <img*/}
    {/*                    alt=""*/}
    {/*                    src={*/}
    {/*                      "/images/card_generation/common/" + incr[0] + ".svg"*/}
    {/*                    }*/}
    {/*                  ></img>*/}
    {/*                </div>*/}
    {/*              </div>*/}
    {/*              <p className={"absolute text-lg font-bold left-10"}>*/}
    {/*                +{incr[1]}*/}
    {/*              </p>*/}
    {/*            </div>*/}
    {/*          );*/}
    {/*        }*/}
    {/*      })}*/}
    {/*    </div>*/}
    {/*    /!*<div className={'grid grid-cols-1 grid-rows-3 h-4/5'}>*!/*/}
    {/*    /!*  <p className={'text-left text-xs font-bold'}>Require:</p>*!/*/}
    {/*    /!*  <div className={'grid grid-cols-2 gap-1'}>*!/*/}
    {/*    /!*    {requirements != undefined ? requirements.map((requirements: any) => {*!/*/}
    {/*    /!*      return (<div className={'w-full h-5 rounded-full flex justify-center items-center relative'} key={requirements[0]}>*!/*/}
    {/*    /!*        <div className={'w-full h-full bg-white opacity-30 rounded-full absolute top-0 left-0'}></div>*!/*/}
    {/*    /!*        <div className={'w-5 h-5 rounded-full bg-white absolute left-0 p-1'}>*!/*/}
    {/*    /!*          <div className={'w-full h-full relative'}>*!/*/}
    {/*    /!*            <img*!/*/}
    {/*    /!*              alt=""*!/*/}
    {/*    /!*              src={'/images/card_generation/' + item.rarity + '/' + requirements[0] + '.svg'}*!/*/}
    {/*    /!*              layout={'fill'}*!/*/}
    {/*    /!*            ></img>*!/*/}
    {/*    /!*          </div>*!/*/}
    {/*    /!*        </div>*!/*/}
    {/*    /!*        <p className={'absolute text-xs font-bold left-6'}>{requirements[1]}</p>*!/*/}
    {/*    /!*      </div>)*!/*/}
    {/*    /!*    }) : <p className={'opacity-50 text-black text-xs'}>No requirements</p>}*!/*/}
    {/*    /!*  </div>*!/*/}
    {/*    /!*  {item.rarity == 'legendary' ? <p className={'text-left text-xs font-medium'}>Status <strong>Elite</strong></p> : null}*!/*/}
    {/*    /!*</div>*!/*/}
    {/*  </div>*/}
    {/*  <div className={"w-5 h-5 left-1 top-1 absolute"}>*/}
    {/*    <img*/}
    {/*      alt=""*/}
    {/*      src={"/images/card_generation/" + item?.itemSlot + ".svg"}*/}
    {/*    ></img>*/}

    {/*  </div>*/}
    {/*  <p className={"h-5 right-2 w-20 text-right top-1 absolute text-sm"}>*/}
    {/*    #{item?.idx}*/}
    {/*  </p>*/}
    {/*  {onMarket?<div className={'w-20 h-8 rounded-full absolute right-2 bottom-2 str-gradient flex justify-center items-center'}>*/}
    {/*    <p className={'text-white text-sm font-bold'}>on market</p>*/}
    {/*  </div>:null}*/}
    {/*  {isMyMarketOffer?<div className={'w-20 h-8 rounded-full absolute right-2 bottom-2 krm-gradient flex justify-center items-center'}>*/}
    {/*    <p className={'text-white text-sm font-bold'}>my offer</p>*/}
    {/*  </div>:null}*/}
    {/*  {isEquiped?<div className={'w-20 h-8 rounded-full absolute right-2 bottom-2 krm-gradient flex justify-center items-center'}>*/}
    {/*    <p className={'text-white text-sm font-bold'}>equipped</p>*/}
    {/*  </div>:null}*/}

    </div>
  );
};

export default ItemCard;
