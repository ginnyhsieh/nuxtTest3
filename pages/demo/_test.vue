<template>
  <div>
    <Logo />
    <p>{{info}}</p>
    <h1>
      {{title}}
    </h1>
    <h2>
      第{{this.$route.params.test}}頁
    </h2>
    <nuxt-link to="/demo/tpl">回tpl</nuxt-link>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo.vue'

export default {
  data () {
    return {
      title: "測試",
      h2: "這是 h2",
      info: ""
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
  },
  mounted(){
    console.log("mounted")
  },
  computed: {
    demoH2(){
      return this.h2 + "(computed)"
    }
  },
  methods: {
    demoFn(){
      console.log("demoFn")
    },
    getData(info) {
      this.info = info;
    }
  },
  components: {
    Logo,
  }
}
</script>

<style lang="scss" >

</style>
