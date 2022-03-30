<template>
  <div>
    <Header />
    <Nuxt />  
    <LoginModal modalTyple="login" :openModal="true" @loginModalSubmit="loginModalSubmit"></LoginModal>
    <Footer :year="year" title="首頁"></Footer> 
  </div>
</template>
<script>

import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'
import LoginModal from '~/components/Modal/LoginModal'

export default {
  name: 'IndexPage',
  data() {
    return {
      year: ''
    }
  },
  components: {
    Header,
    Footer,
    LoginModal
  },
  methods: {
    getYear() {
      let dt = new Date();
      this.year = dt.getFullYear();
    },
    loginModalSubmit(data) {
      console.log(data);
    }
  },
  created() {
    this.getYear();
  }
}
</script>