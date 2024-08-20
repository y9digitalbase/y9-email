import Request from '@/api/lib/emailRequest';

const homeRequest = Request(import.meta.env.VUE_APP_HOME_API_URL);
/**
 * 获取待办列表
 * @returns
 */
export const getTodoList = async (params) => {
    return await homeRequest({
        url: 'https://mock.apifox.cn/m1/1634215-0-default/todo/list',
        method: 'GET',
        cType: false,
        params
    });
};

/**
 * 获取应用列表
 */
export const getAppList = async (params) => {
    return await homeRequest({
        url: 'https://mock.apifox.cn/m1/1634215-0-default/app/list',
        // url: '/vue/appmarket/getAppListForComm',
        method: 'GET',
        cType: false,
        params
    });
};

/**
 * 通知通告列表
 */

export const getInfoList = async (params) => {
    return await homeRequest({
        url: 'https://mock.apifox.cn/m1/1634215-0-default/info/list',
        method: 'GET',
        cType: false,
        params
    });
};




/**
 * 获取登录信息
 */
export const getLoginInfo = async () => {
    return await homeRequest({
        url: '/api/rest/index/getLoginInfo',
        method: 'GET',
        cType: false,
        params: {}
    });
};

