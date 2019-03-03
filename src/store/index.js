import Vue from 'vue'
import Vuex from 'vuex'
/* eslint-disable */
import { HTTP, Routes } from "@/components/Server/API";
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        list: [],
        search: '',
        film: {},
        filmId: ''
    },
    mutations:{
        list(state){
          if(state.search != ''){
          HTTP.get(Routes.getList, {
              params: {
                apikey: "1977b733",
                s: state.search
                // i: 'tt0082009'
              }
            })
              .then(data => {
                state.list = data.data.Search;
                setTimeout(() => {
                  // console.log(state.list)
                }, 200);
              })
              .catch(error => {
                console.log(error);
              });
            }
        },
        search(state, inputValue){
          state.search = inputValue
        },
        filmId(state, id){
          state.filmId = id
        },
        film(state){
          HTTP.get(Routes.getlist,{
            params: {
              apikey: "1977b733",
              i: state.filmId
            }
          })
          .then(data => {
            state.film = data.data
            setTimeout(()=>{
              // console.log(state.film)
            })
          })
          .catch(error => {
            console.log(error)
          })
        }

    }
})