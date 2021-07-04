<!--
 * @Author: hhhhhq
 * @Date: 2021-07-04 12:05:26
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-04 21:25:31
 * @Description: file content
-->
<template>
  <ul>
    <li v-for="movie in movies" :key="movie.id">
      {{ movie.title }}
      <span v-if="movie.requiresLogin">(login required)</span>
      <button v-if="isLoggedIn" @click="removeMovie(movie.id)">x</button>
    </li>
  </ul>
  <button v-if="isLoggedIn" @click="onAddMovieClick">Add Movie</button>
</template>

<script>
import useMovieState from "../store/useMovieState"
import useUserState from "../store/useUserState"

export default {
  name: "MovieList",
  setup() {
    const {
      getNumberOfMovies,
      getMovies,
      addMovie,
      removeMovie,
    } = useMovieState()
    const { getIsLoggedIn } = useUserState()

    const onAddMovieClick = () => {
      addMovie({
        id: getNumberOfMovies().value + 1,
        title: `Movie ${getNumberOfMovies().value + 1}`,
      })
    }

    return {
      movies: getMovies(),
      onAddMovieClick,
      isLoggedIn: getIsLoggedIn(),
      removeMovie,
    }
  },
}
</script>

<style></style>
