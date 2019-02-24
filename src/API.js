import axios from 'axios';
let API = axios.create({
    headers: {
        post: {        // can be common or any other method
            header1: 'value1'
        }
    }
});

export default {

}