import { useUserGameFullState } from "../data/data-hooks";
import { AuthConnector } from "../components/auth-connector";
import Image from "next/image";
import ProgressBar from "../components/UI/ProgressBar";
import moment from "moment";
import Layout from "../components/Layout";

const StatsPage = () => {
  return (
    <Layout hideUi={true}>
      <div className={"grey-gradient  font-roboto  w-[100vw] h-[100vh]"}>
        <p className={"w-full pt-20 text-center font-bold text-3xl"}>
          Доступ ограничен на время бета-теста!
        </p>
        <div
          className={
            "w-full mt-40 h-[300px] rounded-2xl flex flex-wrap relative justify-center p-6"
          }
        >
          <Image
            src={"/images/sad_bunny.svg"}
            layout={"fill"}
            alt=""
          ></Image>
        </div>
      </div>
    </Layout>
  );
};

export default StatsPage;
