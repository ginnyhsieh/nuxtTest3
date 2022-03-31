<template>
  <div>
    <p>{{message}}</p>
    <p @click="sendData">按我</p>
  </div>
  
</template>

<script>


export default {
  name: 'NuxtTutorial',
  props: ['message'],
  data() {
    return { 
      info: '這是component傳過來的喔'
    };
  },
  methods: {
    sendData() {
      this.$emit('test', this.info);
    }
  },
}
</script>