import {pushNote} from "./pushAtom";
import {useRecoilState} from "recoil";

export const usePushNote=(message,status)=>{
    const [push,setPush]=useRecoilState(pushNote)
    setPush({message: message,status: status,isShown:true})
    return [push,'ok']
}