<!--
 * @Author: hhhhhq
 * @Date: 2021-07-04 17:19:13
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-04 20:47:21
 * @Description: file content
-->
<template>
  <form @submit.prevent="onSubmit">
    <label>
      email
      <input type="text" placeholder="username" v-model="userForm.email" />
    </label>

    <label>
      password
      <input
        type="password"
        placeholder="password"
        v-model="userForm.password"
      />
    </label>

    <button
      type="submit"
      @keydown.enter="onSubmit"
      :disabled="userState.isLoading"
    >
      {{ userState.isLoading ? "Loading..." : "Submit" }}
    </button>
  </form>
</template>

<script>
import { login } from "../api"
import useUserState from "../store/useUserState"
import { ref } from "vue"

export default {
  name: "UserLogin",
  setup() {
    const userForm = ref({
      email: "",
      password: "",
    })

    const { state: userState, updateIsLoading, updateUserData } = useUserState()

    const onSubmit = async () => {
      updateIsLoading(true)
      let response = await login()
      updateUserData(response)
      updateIsLoading(false)
    }

    return {
      userForm,
      onSubmit,
      userState,
    }
  },
}
</script>

<style></style>
