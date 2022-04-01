<template>
  <div>
    <Map :location="get_location" :number="get_number" :position="position"></Map>
    <nuxt-link to="/">回首頁</nuxt-link>
  </div>
</template>

<script>
import Map from '~/components/MapTest.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
        title: '公共自行車地圖',
        info: '',
        position: {
            lat: 0,
            lon: 0
        }
    }
  },
  async fetch({store}) {
    await store.dispatch('getLocation');
    await store.dispatch('getNumber');
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
      if (process.client) {
        this.getPosition();    
      }
  },
  computed: {
    ...mapGetters(['get_location','get_number'])
  },
  methods: {
      getPosition() {
          if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position => {
                this.position.lat = position.coords.latitude;
                this.position.lon = position.coords.longitude;
            })    
          }
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
