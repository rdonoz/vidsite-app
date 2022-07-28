import axios from "axios";

const KEY = 'AIzaSyCkTBF_Z9R3-roxsaF06kOelYsTTvfq8Uw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});