
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import Layout from "../components/Layout";
import { useState } from "react";

const ShareReportPage = () => {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);
  

  return (
    <Layout>
        <div className={'w-full flex flex-col items-center justify-center'}>
            <div className={'w-40 aspect-square relative'}>
                <Image src={'/images/qr.png'} alt={'qr'} layout={'fill'}></Image>
            </div>
            <div className={'flex mt-4 pl-4 items-center'}>
                <input type={'file'} className={'flex'}/>
            </div>
            <div className={'mt-4'}>
                <input type={'number'} className={'rounded-lg w-48 h-8 text-center block'}/>
                <p className={'w-48 font-bold text-center'}>How much batteries you wanna recoil?</p>
            </div>
            <button className={'w-48 mt-5 h-12 green-gradient rounded-full flex items-center justify-center font-bold text-black'}>
                Send!
            </button>
        </div>
    </Layout>
  );
};

export default ShareReportPage;
