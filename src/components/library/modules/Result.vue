<template>
  <div class="container-fluid">
    <div class="row films-list">
      <div
        v-for="(film, index) in list"
        :key="index"
        class="col-sm-6 col-md-4 col-lg-3 col-xl-2 film-wrapper"
      >
        <div
          @click="openDetail(index)"
          class="film"
          :style="{background: 'url('+film.Poster+') center center no-repeat, rgba(86, 0, 0, 0.8)'}"
        >
          <img v-if="film.Poster==='N/A'" class="no-image" src="/img/no.gif">
          <p class="film__info">
            <span>{{ film.Title }}</span>
            <span>{{film.Year}}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { HTTP, Routes } from "@/components/Server/API";
export default {
  data() {
    return {};
  },
  computed: {
    list() {
      return this.$store.state.list;
    }
  },
  methods: {
    openDetail(index) {
      this.$store.commit("filmId", this.list[index].imdbID);
      this.$store.commit("film");
      setTimeout(() => {
        this.$router.push({
          name: "film",
          params: { id: this.list[index].imdbID }
        });
      }, 400);
    }
  },
  mounted() {
  }
};
</script>

<style>
.no-image {
  max-width: 100%;
  max-height: 100%;
  mix-blend-mode: multiply;
}
.header {
  padding: 40px;
}

.result {
  height: 430px;
  background-size: contain;
  background-repeat: no-repeat;
}
.films-list {
  padding: 0 40px;
  /* margin: 0 !important; */
}
.film-wrapper {
  margin-bottom: 30px;
}
.film {
  height: 400px;
  position: relative;
  cursor: pointer;
}
.film__info {
  position: absolute;
  bottom: 0;
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background: rgba(0, 0, 0, 0.6);
  margin: 0;
  color: #fff;
  font-weight: 600;
}
</style>

