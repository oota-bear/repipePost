<template>
  <v-app>
    <Header />
    <div class="mt-16">
    <v-row align="right" class="ml-20">
      <v-col cols="4">
        <h3 align="right">
          レシピ管理サイト
        </h3>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="6" class="mr-20">
        <v-btn align="right">
          レシピを登録する
        </v-btn>
      </v-col>
    </v-row>
  </div>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import type { Task } from '$prisma/client'
import UserBanner from '~/components/UserBanner.vue'
import Logo from '~/components/Logo.vue'
import Header from'~/components/Header.vue'

export default Vue.extend({
  components: {
    UserBanner,
    Logo,
    Header
  },
  data() {
    return {
      tasks: [] as Task[],
      newLabel: ''
    }
  },
  async fetch() {
    await this.fetchTasks()
  },
  methods: {
    async fetchTasks() {
      this.tasks = await this.$api.tasks.$get()
    },
    async createTask() {
      if (!this.newLabel) return

      await this.$api.tasks.post({ body: { label: this.newLabel } })
      this.newLabel = ''
      await this.fetchTasks()
    },
    async toggleDone(task: Task) {
      await this.$api.tasks
        ._taskId(task.id)
        .patch({ body: { done: !task.done } })
      await this.fetchTasks()
    },
    async deleteTask(task: Task) {
      await this.$api.tasks._taskId(task.id).delete()
      await this.fetchTasks()
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
