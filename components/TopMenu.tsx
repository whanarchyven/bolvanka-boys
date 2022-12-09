import React, { useState } from 'react';
import Image from "next/image";
import { useRouter } from "next/router";

// import {usage} from "browserslist";

interface topMenuInterface {
  balance: number,
}

const TopMenu = ({ balance }: topMenuInterface) => {

  const [menuIsShown, setMenuIsShown] = useState(false)
  const needUrl = useRouter()

  const bord = menuIsShown ? ' outline-2 ' : ''

  return (
    <div className={'w-full h-full grid grid-cols-6 grid-rows-1 gap-2'}>
      <div className={'absolute z-[999] w-14 p-2 bg-white rounded-full left-2 top-0 border-black' + bord}>
        <div className={'relative w-full h-10'} onClick={() => { setMenuIsShown(!menuIsShown) }}>
          <Image
            src={'/images/burger_icon.svg'}
            layout={'fill'}
            alt=""
          ></Image>
        </div>
        {menuIsShown ?
          <div className={'w-full flex justify-center items-center flex-col'}>
            <div className={'w-8 relative h-8 my-2'} onClick={()=>{}}>
              {needUrl.pathname == '/faq' ?
                <Image
                  src={'/images/burger_icons/faq_active.svg'}
                  layout={'fill'}
                  alt=""
                ></Image> :
                <Image
                  src={'/images/burger_icons/faq.svg'}
                  layout={'fill'}
                  alt=""
                ></Image>}
            </div>
            <a className={'w-8 relative h-8 my-2'} onClick={()=>{needUrl.push('/support')}}>
              {needUrl.pathname == '/support' ?
                <Image
                  src={'/images/burger_icons/support_active.svg'}
                  layout={'fill'}
                  alt=""
                ></Image> :
                <Image
                  src={'/images/burger_icons/support.svg'}
                  layout={'fill'}
                  alt=""
                ></Image>}
            </a>
            <div className={'w-8 relative h-8 my-2'} onClick={()=>{needUrl.push('/inventory')}}>
              {needUrl.pathname == '/inventory' ?
                <Image
                  src={'/images/burger_icons/inventory_active.svg'}
                  layout={'fill'}
                  alt=""
                ></Image> :
                <Image
                  src={'/images/burger_icons/inventory.svg'}
                  layout={'fill'}
                  alt=""
                ></Image>}
            </div>
          </div> : null}

      </div>
      <div className={'col-start-4 col-end-6 justify-self-end'}>
        <div className={'h-full w-6 relative inline-block align-middle mr-2'}>
          <Image
            src={'/images/carrot_icon.svg'}
            layout={'fill'}
            alt=""
          ></Image>
        </div>
        <p className={'inline-block align-middle text-2xl font-semibold'}>
          {balance.toFixed(2)}
        </p>
      </div>
      <div className={'col-start-6 flex justify-center items-center col-end-6'}>
        <div className={'w-3/4 h-3/4 relative'}>
          <Image
            src={'/images/wallet_icon.svg'}
            layout={'fill'}
            alt=""
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
