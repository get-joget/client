<template lang="html">
  <div class="">
    <section class="hero is-fullheight">
      <!-- <img is-bg-img src="http://hdwallpapersrocks.com/wp-content/uploads/2013/11/Amazing-dance-of-beautiful-girl.jpg"> -->
        <div class="hero-body">
          <div class="container has-text-centered">
            <div class="columns is-centered">
              <div class="column is-4">
                <h1>GET JOGET</h1>
                <div class="field">
                  <p class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                      <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-check"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-icons-left">
                    <input class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                      <i class="fas fa-lock"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click='login'>
                      Login
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      <!-- </img> -->
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    login () {
      this.$router.push('/room')
    }
  }
}
</script>

<style lang="css">
</style>
