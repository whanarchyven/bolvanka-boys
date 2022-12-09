import React from 'react';
import { workTask } from "../interfaces/workTask";
import { activeTask } from "../interfaces/activeTask";
import { MetaforestCurrentJob, MetaforestJob } from "../../graphql/sdk/graphql";

interface TaskCheckerInterface {
  workItem: MetaforestJob
}

const TaskChecker = ({ workItem }: TaskCheckerInterface) => {

  return (
    <div className={'h-full relative w-full rounded-full'}>
      <div className={'w-full h-full rounded-full opacity-25 absolute green-gradient'}>

      </div>
      <div className={'w-full h-full rounded-full absolute border-2 border-[#64DFCC] flex justify-around items-center'}>
        <p>{workItem.type == 'STEPS' ? 'Go for a walk! Your goal is: ' + workItem.approxMeters + ' m' : workItem.title}</p>
        {workItem.type == 'REFERRAL' || workItem.type == 'PUBLICATION' ? <div className={'w-7 h-7 relative rounded-full bg-white p-2'}>
          {/*<svg width="100%" height="100%" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
          {/*    <path d="M3 12L13.5 22L32.5 3" stroke="#181C30" strokeWidth="5" strokeLinecap="round"/>*/}
          {/*</svg>*/}
        </div> : null}
      </div>
    </div>
  );

};

export default TaskChecker;
