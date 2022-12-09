import React, { useEffect } from 'react';


interface myTimerInterface {
  timer: number
  expiryTimestamp: any
}

export default function MyTimer({ expiryTimestamp }: myTimerInterface) {
  // const {
  //   seconds,
  //   minutes,
  //   hours,
  //   days,
  //   isRunning,
  //   start,
  //   pause,
  //   resume,
  //   restart,
  // } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  // useEffect(() => {
  //   start();
  // }, [])

  return (
    <span className={'font-bold'}>
      {23}:{23}:{23}:{23}
    </span>
  );
}

