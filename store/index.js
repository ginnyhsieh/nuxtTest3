import axios from 'axios';

export const state = () => ({
    data: {}
})

export const actions = {
    getData(context) {
        const api = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-CEC04B14-F756-4F42-85ED-28F534E5F76E&format=JSON';
        this.$axios.get(api).then(response => context.commit('INFO', response.data.records));
    }
}

export const mutations = {
    INFO: (state, payload) => {
        state.data = payload;
    },
}

export const getters = {
    get_data: state => state.data
}



