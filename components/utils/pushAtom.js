import {atom} from "recoil";

export const pushNote=atom({
    key:'pushNote',
    default:{
        message:'',
        status:'success',
        isShown:false,
    }
})