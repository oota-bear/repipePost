<template>
  <v-app-bar app absolute color="orange" class="bar_style" dense>

<v-spacer></v-spacer>
<!-- ログインしていたらログアウト、ログインしていなかったら登録、ログインボタンの表示-->
<div>
  <v-btn depressed
      color="blue lighten-1">ユーザー登録</v-btn>
  <v-btn class="right">ログイン</v-btn>
</div>
</v-app-bar>
  </template>
  <script>
  import SideMenu from '~/components/SideMenu.vue'
  export default {
    name: "Header",
    computed: {
    },
    data() {
    },
    components: {
        SideMenu
    },
    methods: {
    }
  };
  </script>