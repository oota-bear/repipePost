<template>
  <v-app>
    <Header />
    <v-content>
    <v-row class="mt-16">
        <v-col cols="6" align="center">
          <h3>
            レシピを登録する
          </h3>
        </v-col>
    </v-row>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="9" align="left" style="height:35px">
        <p v-if="recipeTitle && recipeTitle.length >= 30"
        class="red--text"
        >
        30文字以上は入力できません。
        </p>
        <p v-else>あと{{30-recipeTitle.length}}文字入力できます</p>

      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3" class="mt-3" align="right">
        <p>
          タイトル
        </p>
      </v-col>
      <v-col cols="4">
        <v-text-field outlined
        maxlength="30"
        v-model="recipeTitle"
        >
        </v-text-field>
      </v-col>
      <v-col cols="2">
        <v-btn
        class="mt-2"
        :disabled="nextButtonSubmit"
        @click="nextPage"
        >次へ</v-btn>
      </v-col>
    </v-row>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';

export default Vue.extend({
    name: 'recipeInputTitle',
    components: {
        Header
    },
data :function() {
    return {
    recipeTitle:""
    }
},
methods:{
    nextPage(){
      this.$router.push({name:"recipeInputInfo"});    }
},
computed:{
    nextButtonSubmit() {
        if(this.recipeTitle == ''){
            return true
        }
        else{
            return false
        }
    }
}
})
</script>