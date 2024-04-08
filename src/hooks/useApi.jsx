import { useState } from 'react';
import API from '../services/api';


const useApi = (urlObject) => {

    const [response , setResponse] = useState(null);
    const [error , setError] = useState("");
    const [loader , setLoader] = useState(false);

    const call = async (payload)=>{
        setResponse(null);
        setError("")
        setLoader(true);

        try{
            let res = await API(urlObject,payload);
            setResponse(res.data);
    
        }catch(error){
            setError(error.message);
        } finally{
            setLoader(false);
        }
    }

    return {call, response, error, loader};


}

export default useApi;