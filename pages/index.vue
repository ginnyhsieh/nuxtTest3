<template>
  <div>
    <Header/>  
    <Footer :year="year" title="首頁"></Footer> 
    <!-- <nuxt-link to="/demo/tpl">到測試頁</nuxt-link> -->
  </div>
  
  
</template>

<script>

import Header from '~/components/Header/Header'
import Footer from '~/components/Footer/Footer'

export default {
  name: 'IndexPage',
  data() {
    return {
      year: ''
    }
  },
  components: {
    Header,
    Footer
  },
  methods: {
    getYear() {
      let dt = new Date();
      this.year = dt.getFullYear();
    }
  },
  created() {
    this.getYear();
  }
}
</script>
