<template>
  <div>
      <p>{{info}}</p>
    <Map />
    <nuxt-link to="/">回首頁</nuxt-link>
  </div>
</template>

<script>
import Map from '~/components/MapTest.vue'
import jsSHA from "jssha" 
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
        info: '',
        location: ''
    }
  },
  head() {
    return {
        title: `${this.title} | 台灣旅遊景點導覽`,
        meta: [
            { hid: 'description', name: 'description', content: '就測試看看' },
        ],
    }
  },
  created(){
    console.log("created")
    this.getData();
  },
  methods: {
    getData() {
        const api = 'https://ptx.transportdata.tw/MOTC/v2/Bike/Station/Taipei?%24top=30&%24format=JSON';
        this.$axios.get(api,{headers: this.getAuthorizationHeader()}).then(response => {
            this.info = response.data;
            this.location = this.info.records.location;
        })
    },
    getAuthorizationHeader() {
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
  },
  components: {
    Map
  }
}
</script>

<style lang="scss" >
// @import '~/assets/scss/demo.scss';
</style>
