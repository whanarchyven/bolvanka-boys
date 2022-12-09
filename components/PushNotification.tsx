import React, {useEffect, useState} from 'react';

interface pushNotificationInterface {
    push: {
        message: string,
        status: 'success' | 'warning' | 'fail' | string,
        isShown: boolean,
    }
}

const PushNotification = ({push}: pushNotificationInterface) => {

    const getColor = (str: typeof push.status) => {
        switch (str) {
            case "success":
                return '#29FF9E';
            case "warning":
                return '#FF8F00';
            case "fail":
                return '#FF0000';
        }
    }


    return (
        <div className={'w-full transition-all animate-push-note flex justify-center  top-12 fixed z-[9999]'}>
            <div
                className={'w-72 rounded-full relative justify-center items-center flex border-2 '}
                style={{borderColor: getColor(push.status)}}>
                <div className={'w-full h-full rounded-full absolute z-0 top-0 left-0'}
                     style={{background: getColor(push.status), opacity: 0.35}}>

                </div>
                <p className={'p-4 z-20 text-center text-xl font-bold'}>{push.message}</p>
            </div>
        </div>
    );
};

export default PushNotification;