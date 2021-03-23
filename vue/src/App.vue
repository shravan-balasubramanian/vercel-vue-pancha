<template>
  <div id="app">
    <div class="header">
      <form @submit.prevent="getSearchMovies">
        <input type="text" v-model="search" />
        <button type="submit">Go</button>
      </form>
    </div>
    <div class="results">
      <div v-for="result in movieResults" :key="result.title" class="result">
        <div class="image">
          <img :src="result.Poster" alt="Poster" />
        </div>
        <div class="details">
          <div class="title">{{ result.Title }}</div>
          <div class="year">{{ result.Year }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      movieResults: [],
      search: ""
    };
  },
  methods: {
    async getSearchMovies() {
      if (this.search.length > 0) {
        try {
          this.movieResults = (await (
          await fetch(`/api?url=${process.env.VUE_APP_API_URL}&s=${this.search}&apikey=${process.env.VUE_APP_API_KEY}`))
            .json()).Search.splice(1, 5);
        } catch (ex) {
          alert('error occured');
          // eslint-disable-next-line no-console
          console.error(`error with api ${JSON.stringify(ex)}`);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .header {
    display: flex;
    justify-content: center;
  }
  .results {
    margin-top: 20px;
    margin-left: 40%;
    .result {
      box-sizing: border-box;
      margin-top: 20px;
      border-radius: 5px;
      width: 50%;
      height: 100px;
      background: azure;
      display: flex;
      border: 2px solid lightblue;
      .image {
        width: 40%;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .details {
        text-align: center;
        margin-left: 10px;
        color: gray;
        .title {
          font-size: 15px;
          font-weight: 800;
        }
        .year {
          font-weight: 600;
        }
      }
    }
  }
}
</style>
