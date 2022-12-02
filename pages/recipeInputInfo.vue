<template>
    <v-app>
        <Header />
        <v-content>
          <h1>aaa</h1>
        </v-content>
    </v-app>
</template>
<script>
import Vue from 'vue';
import Header from '~/components/Header.vue';

export default Vue.extend({
    name: 'recipeInputTitle',
    components: {
        Header
    },
})
</script>
