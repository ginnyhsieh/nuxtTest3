<template>
  <div>
    <Logo />
    <div v-for="n in 5" :key="n">
      <nuxt-link :to="{name: 'demo-test', params: {test: n}}">頁面{{n}}</nuxt-link>  
    </div>
    <client-only>
      <datepicker></datepicker>  
    </client-only>
    
    
    <p>{{info}}</p>
    <h1>
      {{title}}
    </h1>
    <h2>
      {{h2}}
    </h2>
    <h2>
      {{demoH2}}
    </h2>
    <Tutorial :message="get_data" @test="getInfo"/>
    <nuxt-link to="/">回首頁</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo.vue'
import Tutorial from '~/components/Tutorial.vue'
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      title: "測試",
      h2: "這是 h2",
      info: ""
    }
  },
  // async asyncData({store}) {
  //   await store.dispatch('getData');
  // },
  async fetch({store}) {
    await store.dispatch('getData');
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
  },
  mounted(){
    console.log("mounted")
  },
  computed: {
    demoH2(){
      return this.h2 + "(computed)"
    },
    ...mapGetters(['get_data'])
  },
  methods: {
    demoFn(){
      console.log("demoFn")
    },
    getInfo(info) {
      this.info = info;
    }
  },
  components: {
    Logo,
    Tutorial
  }
}
</script>

<style lang="scss" >
// @import '~/assets/scss/demo.scss';
</style>
