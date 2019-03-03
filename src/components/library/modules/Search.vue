<template>
  <div class="input-group input-group-lg p-5">
    <input
      type="text"
      class="form-control"
      placeholder="Что ищем?"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
      v-model="search"
      v-on:keyup.enter="searchFilm"
      @input="film"
    >
    <div class="input-group-append">
      <button class="btn btn-primary" type="button" @click="searchFilm">Найти фильм</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { HTTP, Routes } from "@/components/Server/API";
export default {
  data() {
    return {
      // list: [],
      search: ''
    };
  },
  methods: {
    searchFilm(){
      this.$store.commit('list')
    },
    film(){
      this.$store.commit('search', this.search)
    }
  }
}
</script>

