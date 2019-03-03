<template>
  <div class="page">
    <search></search>
    <library></library>
  </div>
</template>
<script>
/* eslint-disable */
import Library from '@/components/library'
import Search from '@/components/library/modules/Search'
export default {
  data(){
    return{
      list: []
    }
  },
  methods:{

  },
  components:{
    Search,
    Library
  }
}
</script>

<style>
.page{
  background: rgba(62, 68, 74, 1);
  min-height: 100vh;
}
</style>
