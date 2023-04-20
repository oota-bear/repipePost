
<template>
  <div>
  <v-row>
    <v-col cols="3">
    </v-col>
    <v-col cols="1" >
        <h3>検索結果</h3>
    </v-col>
    <v-col cols="3">
      {{searchResult}}件
    </v-col>
  </v-row>
  <v-row>
    <v-col>
    {{ getSearchResult.title }}
    </v-col>
  </v-row>
</div>
</template>

<script lang="ts">
import {Vue} from 'nuxt-property-decorator';
import type { RecipeTitle } from '.prisma/client';

export default Vue.extend ({
   name: "RecipeSearchResult",
   props: {
     searchResult:{
        type: Object as () => RecipeTitle,
        required: true
     }
   },
   data: function() {
    return {
      getSearchResult: this.searchResult
    }
   },
   mounted() {
     this.a()
   },
   methods: {
    a() {
      // console.log(searchResult)
    }
   }
})
</script>s