<template>
  <div>
    <h2>{{title}}</h2>
    <p>{{message}}</p>
    <CourseList/> 
  </div>
  
  
</template>

<script>

import CourseList from '~/components/CourseList/CourseList'

export default {
  name: 'IndexPage',
  data() {
    return {
      title: '',
      message: ''
    }
  },
  async asyncData({$axios}) {
    let data = await $axios('/api/test');
    return data.data;
  },
  components: {
    CourseList,
  }
}
</script>
