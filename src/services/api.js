import axios from 'axios';

const API_GMAIL = (urlObject,payload)=>{

    const API_URL = `http://localhost:8000`

    axios({
        url : `${API_URL}/${urlObject.endpoint}`,
        method: urlObject.method,
        data : payload
    })
}

export default API_GMAIL;