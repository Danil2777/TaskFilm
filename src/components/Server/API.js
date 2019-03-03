import axios from 'axios'

export const HTTP = axios.create({
    baseURL: 'http://omdbapi.com/',
    // baseURL: 'https://api.coindesk.com',
    // headers: {
    //     'X-Requested-Width': 'XMLHttpRequest'
    // },
    timeout: 10000,
    // method : 'get'
    //  withCredentials: true,
    //  crossDomain : true
})

export const Routes = {
    getList: '',
    // getList: ''

}

