<template>
  <v-app>
    <Header />
    <div class="mt-16">
    <v-row class="ml-20">
      <v-col cols="4" align="right">
        <h3>
          レシピ管理サイト
        </h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" class="mr-20">
        <v-btn
          @click="gotoPost"
        >
          レシピを登録する
        </v-btn>
      </v-col>
    </v-row>
  </div>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Header from'~/components/Header.vue'
export default Vue.extend({
  components: {
    Header
  },
  methods: {
    gotoPost(){
      console.log("aa")
      this.$router.push({name:"recipeInputTitle"});
    }
  }
})
</script>
