<template>
  <div>
    <p>測試</p>
    <p>{{ip}}</p>
  </div>
  
</template>

<script>

export default {
  name: 'NuxtTutorial',
  data() {
        return { 
            ip: '測試' 
        };
    },
    async asyncData({$axios}) {
        const api = 'https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c';
        const ip = await $axios.$get(api);
        return { ip };
  }
}
</script>