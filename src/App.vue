<!--
 * @Author: hhhhhq
 * @Date: 2021-07-04 12:02:58
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-04 20:49:16
 * @Description: file content
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <UserLogin v-if="!userState.isLoggedIn" />
  <UserProfile v-else />
  <MovieList />
  <div>Number of movies: {{ numberOfMovie }}</div>
</template>

<script>
import useMovieState from "./store/useMovieState"
import useUserState from "./store/useUserState"
import UserLogin from "./components/UserLogin.vue"
import UserProfile from "./components/UserProfile.vue"
import MovieList from "./components/MovieList.vue"

export default {
  name: "App",
  components: { MovieList, UserLogin, UserProfile },
  setup() {
    const { getNumberOfMovies } = useMovieState()
    const { state: userState, getIsLoggedIn } = useUserState()

    return {
      numberOfMovie: getNumberOfMovies(),
      isLoggedIn: getIsLoggedIn(),
      userState,
    }
  },
}
</script>
