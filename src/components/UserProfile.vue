<!--
 * @Author: hhhhhq
 * @Date: 2021-07-04 18:14:44
 * @LastEditors: hhhhhq
 * @LastEditTime: 2021-07-04 20:50:48
 * @Description: file content
-->
<template>
  <div>
    <h3>User: {{ fullName }}</h3>
    <button @click="updateIsLoggedIn(false)">Log out</button>
  </div>
</template>

<script>
import useUserState from "../store/useUserState"
export default {
  name: "UserProfile",
  setup() {
    const { getFullName, updateIsLoggedIn } = useUserState()

    return {
      fullName: getFullName(),
      updateIsLoggedIn,
    }
  },
}
</script>

<style></style>
