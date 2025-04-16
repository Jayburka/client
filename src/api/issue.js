import request from './request';

export const getIssueList = (params) => {
    return request(
        {
            url: '/api/issue',
            method: 'GET',
            params
        }
    );
}

export const getType = () => {
    return request(
        {
            url: '/api/type',
            method: 'GET',
        } 
    );
}
