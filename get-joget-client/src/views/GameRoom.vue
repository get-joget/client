<template lang="html">
  <div class="">
    <div class="content">
      <div class="container">
        <h1>GAME ROOM</h1>
        {{player}}
        {{arrow}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // data: function () {
  //   return {
  //     test: ''
  //   }
  // },
  computed: {
    player () {
      return this.$store.state.players
    },
    arrow () {
      return this.$store.state.arrow
    }
  }
}
</script>

<style lang="css">
</style>
