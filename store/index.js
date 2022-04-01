import jsSHA from "jssha" ;

function getAuthorizationHeader() {
//  填入自己 ID、KEY 開始
    let AppID = '95e03560e0b24ae3ab548c8aa3d08b71';
    let AppKey = 'djoQ6pHpT_RqdR2CNwNCiRM_5q0';
//  填入自己 ID、KEY 結束
    let GMTString = new Date().toGMTString();
    let ShaObj = new jsSHA('SHA-1', 'TEXT');
    ShaObj.setHMACKey(AppKey, 'TEXT');
    ShaObj.update('x-date: ' + GMTString);
    let HMAC = ShaObj.getHMAC('B64');
    let Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';
    return { 'Authorization': Authorization, 'X-Date': GMTString }; 
}


export const state = () => ({
    data: {},
    location: '',
    number: '',
})

export const actions = {
    async getData(context) {
        const api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CEC04B14-F756-4F42-85ED-28F534E5F76E&format=JSON';
        // this.$axios.get(api).then(response => context.commit('INFO', response.data.records));
        let response = await this.$axios(api);
        context.commit('INFO', response.data.records);
    },
    async getLocation(context) {
        const api = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taipei?%24format=JSON';
        let response = await this.$axios.$get(api,{headers: getAuthorizationHeader()});
        context.commit('LOCATION', response);
    },
    async getNumber(context) {
        const api = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Availability/Taipei?%24format=JSON';
        let response = await this.$axios.$get(api,{headers: getAuthorizationHeader()});
        context.commit('NUMBER', response);
    },
}

export const mutations = {
    INFO: (state, payload) => {
        state.data = payload;
    },
    LOCATION: (state, payload) => {
        state.location = payload;
    },
    NUMBER: (state, payload) => {
        state.number = payload;
    },
}

export const getters = {
    get_data: state => state.data,
    get_location: state => state.location,
    get_number: state => state.number,
}



