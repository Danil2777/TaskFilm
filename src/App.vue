<template>
  <div id="app">
    <!-- <Root></Root> -->
    <!-- <search></search> -->
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Search from '@/components/library/modules/Search'
import Root from './components/Root.vue'

export default {
  name: 'app',
  components: {
    Root,
    Search
  }
}
</script>

<style>

</style>
