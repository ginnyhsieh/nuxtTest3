<template>
  <div>
    <p>{{message}}</p>
    <p @click="sendData">{{get_data}}</p>
  </div>
  
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  name: 'NuxtTutorial',
  props: ['message'],
  data() {
    return { 
      info: '這是component傳過來的喔'
    };
  },
  methods: {
    getData() {
      this.$store.dispatch('getData');
    },
    sendData() {
      this.$emit('test', this.info);
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