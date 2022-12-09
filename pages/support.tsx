import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import Layout from "../components/Layout";

const SupportPage = () => {
    return (
        <Layout hideUi={true}>
            <div className={"grey-gradient  font-roboto flex justify-center items-center  w-[100vw] h-[100vh]"}>
                <div className={'flex py-10 justify-center flex-wrap'}>
                    <div
                        className={
                            "w-72 mt-40 h-72  rounded-2xl flex flex-wrap relative justify-center p-6"
                        }
                    >
                        <img src={"/images/support_page.svg"} alt=""/>
                    </div>

                    <p className={"w-full pt-20 px-3 text-center font-bold text-2xl"}>To leave your question, suggestion or
                        report a bug, go to the form</p>
                    <a className={'w-3/5 bg-black flex items-center justify-center text-white mt-10 h-12 text-2xl font-bold rounded-full '} href={'https://docs.google.com/forms/d/e/1FAIpQLScRcdxhkj9Dc79Ep-D1RMS5Zoe5ruwyRvGkhz4zV75XPu8jww/viewform?usp=sf_link'}>To form</a>
                </div>
            </div>
        </Layout>
    );
};

export default SupportPage;
