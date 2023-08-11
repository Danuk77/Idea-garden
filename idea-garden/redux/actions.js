import { functions } from "../firebase/initialisaiton";
import { httpsCallable } from "firebase/functions";
import { useDispatch } from "react-redux";

// Action used for storing the uder token of a user who logged in or recently registered the account
export const logIN = (credentials) =>{
    return{
        type: 'LOG-IN',
        payload: {userToken: credentials.userToken,
                username: credentials.username
                }
    };
};