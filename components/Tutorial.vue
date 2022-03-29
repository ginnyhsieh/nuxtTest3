<template>
  <div>
    <p>測試</p>
    <p>{{get_data}}</p>
  </div>
  
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'NuxtTutorial',
  data() {
    return { 
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    }
  },
  computed: {
    ...mapGetters(['get_data'])
  },
  created() {
    this.getData();
  }

}
</script>