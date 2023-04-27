<template>
  <v-app>
    <Head></Head>
    <div class="mt-16">
    <v-row align="right" class="ml-20 w-100">
      <v-col cols="7">
        <h3 align="right">
          レシピ管理サイト
        </h3>
      </v-col>
    </v-row>
    <v-row  class="ml-20">
      <v-col cols="7" class="mt-3">
        <h3 align=" right">
          レシピ検索
        </h3>
      </v-col>
      <v-col cols="3">
        <v-text-field
          v-model="searchRecipeTitle"
          outlined
        >
        </v-text-field>
      </v-col>
      <v-col>
        <v-col cols="2">
        <v-btn
          @click="searchRecipe()"
        >検索</v-btn>
      </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
      </v-col>
      <v-col cols="1">
        <h3>検索結果</h3>
      </v-col>
      <v-col cols="3">{{ searchResult.length }}件</v-col>
    </v-row>
    <div v-if="searchResult.length !== 0">
      <v-row v-for="(item) in searchResult.length" :key="item.id" class="w-100">
        <v-col cols="3"></v-col>
        <v-col cols="4">{{  item.title}}</v-col>
      </v-row>
    </div>
  </div>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import type { RecipeTitle } from '@prisma/client';
import Head from'../components/Header.vue';
// import RecipeSearchResult from '../components/Top/recipeSearchResult.vue'

export default Vue.extend({
  name:"Top",
  components: {
    Head
  },
  data: function() {
    return {
      searchRecipeTitle:'',
      getInfo: '',
      searchResult: [] as RecipeTitle[],
    }
  },
methods: {
  async searchRecipe() {
    // const getResult =  await this.$api.RecipeTitle.$get({config:{params:{title:"肉"}}});
    const getResult =  await this.$api.RecipeTitle._title(this.searchRecipeTitle).$get({config:{params:{title:this.searchRecipeTitle}}})
    if(getResult !== undefined){
      this.searchResult = getResult
      if(getResult.length === 0){
        alert('取得結果は0件です。')
      }

    }
    else{
      alert('取得に失敗しました。');
    }
  }
}
})
</script>

<style scoped>
.container {
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 100vh;
}

.title {
  font-family: Quicksand, 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.tasks {
  width: 300px;
  padding: 0;
  margin: 20px auto 0;
  list-style-type: none;
  text-align: left;
}

.tasks > li {
  margin-top: 10px;
  border-bottom: 1px solid #eee;
}
</style>
