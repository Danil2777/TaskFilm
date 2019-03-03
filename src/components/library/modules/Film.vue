<template>
  <div class="film-info">
    <div class="wrapper-detail h-100">
      <div class="box m-3">
        <button @click="back" class="btn btn-success m-2">Вернуться к поиску</button>
        <img v-if="film.Poster !== 'N/A'" :src="film.Poster">
        <img v-if="film.Poster == 'N/A'" class="no-image" src="/img/no.gif">
      </div>
      <div class="m-3 w-100">
        <table class="table table-striped table-dark">
          <tbody>
            <tr>
              <th scope="row">Фильм</th>
              <td>{{ film.Title }}</td>
            </tr>
            <tr>
              <th scope="row">Сюжет</th>
              <td>{{ film.Plot }}</td>
            </tr>
            <tr>
              <th scope="row">Жанр</th>
              <td>{{ film.Genre }}</td>
            </tr>
            <tr>
              <th scope="row">Страна, производство</th>
              <td>{{ film.Country+', '+film.Production }}</td>
            </tr>
            <tr>
              <th scope="row">Режиссер</th>
              <td>{{ film.Director }}</td>
            </tr>
            <tr>
              <th scope="row">Актеры</th>
              <td>{{ film.Actors }}</td>
            </tr>
            <tr>
              <th scope="row">Релиз</th>
              <td>{{ film.Released }}</td>
            </tr>
            <tr>
              <th scope="row">Длительность</th>
              <td>{{ film.Runtime }}</td>
            </tr>
            <tr>
              <th scope="row">Награды</th>
              <td>{{ film.Awards }}</td>
            </tr>
            <tr>
              <th scope="row">Рейтинг</th>
              <td>{{ film.imdbRating }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    back() {
      this.$router.go(-1);
    }
  },
  computed: {
    film() {
      return this.$store.state.film;
    }
  },
  components: {},
  mounted(){
  }
};
</script>

<style>
.film-info {
  background: rgba(62, 68, 74, 1);
  min-height: 100vh;
}
.wrapper-detail {
  display: flex;
  align-items: center;
}
.box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
}
</style>
