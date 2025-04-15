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
