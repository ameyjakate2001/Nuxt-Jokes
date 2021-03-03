<template>
  <div>
    <searchJoke @search-text="searchText" />
    <h2>Joke Page</h2>
    <div>
      <joke v-for="joke in jokes" :id="joke.id" :key="joke.id" :joke="joke.joke" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import joke from '../../components/joke'
import searchJoke from '../../components/search-joke'
export default {
  components: {
    joke,
    searchJoke
  },
  data () {
    return {
      jokes: []
    }
  },
  head () {
    return {
      title: 'Dad Jokes',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'This is the best Dad Jokes on the Web'
        }
      ]
    }
  },
  async created () {
    const config = {
      headers: {
        Accept: 'application/json'
      }
    }
    try {
      const res = await axios.get('https://icanhazdadjoke.com/search', config)
      this.jokes = res.data.results
    } catch (err) {
      alert(err)
    }
  },
  methods: {
    async searchText (text) {
      const config = {
        headers: {
          Accept: 'application/json'
        }
      }
      try {
        const res = await axios.get(`https://icanhazdadjoke.com/search?term=${text}`, config)
        this.jokes = res.data.results
      } catch (err) {
        alert(err)
      }
    }
  }
}
</script>

<style scoped>

</style>