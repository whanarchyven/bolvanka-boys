
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import Layout from "../components/Layout";
import { useState } from "react";

const ShareReportPage = () => {
  const [text, setText] = useState("");
  const [success, setSuccess] = useState(false);


  return (
    <Layout>
      <div
        className={
          "flex font-roboto justify-center items-center w-[100vw] relative h-[100vh] -mt-20 share-report]"
        }>
          <div className={'w-full h-full absolute top-0 z-[-1] left-0'}>
              <Image alt={'rep'} src={'/images/share_report_bg.png'} layout={'fill'}></Image>
          </div>

        <div
          className={
            "w-96 rounded-2xl walk-gradient flex flex-wrap justify-center p-6"
          }
        >
            <div className={'w-72 h-72 relative'}>
                <Image alt={'bunny'} src={'/images/share_report_bunny.png'} layout={'fill'}></Image>
            </div>
          <p className={"text-3xl mt-5 font-bold w-full text-center"}>
            Enter publication link:
          </p>
          <div className={'w-full my-5 grid grid-cols-4 gap-3'}>
              <input
                  type={"text"}
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className={"w-full col-span-3 text-center p-2 h-9 rounded-full"}
              />
              <div className={'col-span-1 h-9 w-full relative'}>
                  <Image alt={'karma'} src={'/images/karma_boost.svg'} layout={'fill'}></Image>
              </div>
          </div>
          {text.length > 0 && (
            <button
              className={
                "w-3/5 h-9 bg-black text-white rounded-full font-bold text-xl"
              }
            >
              Send
            </button>
          )}
          {success && (
            <p
              className={
                "w-4/5 h-9 bg-black text-white flex justify-center items-center rounded-full font-bold text-xl"
              }
            >
              Success
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ShareReportPage;
