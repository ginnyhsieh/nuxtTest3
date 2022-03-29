<template>
  <div>
    <logo />
    <h1>
      {{title}}
    </h1>
    <h2>
      {{h2}}
    </h2>
    <h2>
      {{demoH2}}
    </h2>
  </div>
</template>

<script>
import Logo from '~/components/NuxtLogo.vue'

export default {
  data () {
    return {
      title: "demo",
      h2: "這是 h2"
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
    }
  },
  components: {
    Logo
  }
}
</script>

<style lang="scss" >
@import '~/assets/scss/demo.scss';
</style>
