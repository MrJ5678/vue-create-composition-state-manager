import { reactive, readonly, computed } from "vue"
import useUserState from "./useUserState"

const defaultState = {
  movies: [
    { id: 1, title: "Movie 1", requiresLogin: false },
    { id: 2, title: "Movie 2", requiresLogin: true },
    { id: 3, title: "Movie 3", requiresLogin: false },
  ],
}

const state = reactive(defaultState)

const getters = {
  getNumberOfMovies: () => {
    return computed(() => state.movies.length)
  },
  getMovies() {
    return computed(() => {
      const { getIsLoggedIn } = useUserState()

      if (getIsLoggedIn().value) {
        return state.movies
      }
      return state.movies.filter(movie => movie.requiresLogin === false)
    })
  },
}

const actions = {
  addMovie(movie) {
    state.movies.push(movie)
  },
  removeMovie(movieId) {
    let movieIndex = state.movies.findIndex(movie => movie.id === movieId)

    state.movies.splice(movieIndex, 1)
  },
}

export default () => ({
  state: readonly(state),
  ...getters,
  ...actions,
})
