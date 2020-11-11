import fetch from './axios'

export function fetchQMusic(params) {
    return fetch({
        url: '/soso/fcgi-bin/client_search_cp',
        method: 'get',
        params
    })
}