<template>
  <div>
    <nuxt-link to="/jokes">Back to all Jokes</nuxt-link>
    <h3>{{ myjoke.joke }}</h3>
    <hr>
    <small>Joke ID: {{ $route.params.id }}</small>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'singlejoke',
  data () {
    return {
      myjoke: {}
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get(`https://icanhazdadjoke.com/j/${this.$route.params.id}`, config)
      this.myjoke = res.data
    } catch (err) {
      alert(err)
    }
  }
}
</script>

<style>

</style>