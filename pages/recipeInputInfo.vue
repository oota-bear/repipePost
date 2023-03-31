<template>
    <v-app>
      <Header />
        <v-content>
          <v-row class="mt-16">
            <v-col cols="3" align="center">
              <h3>
                材料の入力
              </h3>
            </v-col>
          </v-row>
          <v-row v-for="(num,index) in materials" v-bind:key="index">
            <v-col class="mt-3" cols="2" align="right">
              材料名：
            </v-col>
            <v-col cols="2" align="center">
              <v-text-field outlined v-model="num.name"
              >
              </v-text-field>
            </v-col>
            <v-col class="mt-3" cols="1" align="left">
              分量単位：
            </v-col>
            <v-col cols="1" class="ml-n14" align="left">
              <v-select
                class="ml-n50"
                outlined
                v-model="num.scaleTypeId"
                :items="scaleTypes"
                item-text="name"
                item-value="id"
              >
              </v-select>
            </v-col>
            <v-col cols="1">
              <v-text-field
                outlined
                v-model="num.scale"
                type="number">
              </v-text-field>
            </v-col>
            <v-col cols="2" class="mt-4">
             <p v-if="num.scaleTypeId == 1">
                g
             </p>
             <p v-if="num.scaleTypeId == 4">
                ml
             </p>
             <p v-if="num.scaleTypeId == 5">
                本
             </p>
             <p v-if="num.scaleTypeId == 6">
                個
             </p>
             <p v-if="num.scaleTypeId == 7">
                缶
             </p>
            </v-col>
          </v-row>
          <v-row >
            <v-col v-if="(materialAddFlug == 1)" cols="3" class="ml-n10 red--text" align="right">
              *材料が入力されていません
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="8" align="right">
              <v-btn @click="addMaterial()">
                追加する
              </v-btn>
            </v-col>
          </v-row>
          <v-row class="mt-20">
            <v-col cols="10" align="center">
              <v-btn color="red" class="white--text" @click="registMaterials()">
                登録
              </v-btn>
            </v-col>
          </v-row>
        </v-content>
    </v-app>
</template>
<script lang="ts">
import Vue from 'vue';
import Header from '~/components/Header.vue';
import type { ScaleType, Materials } from '$prisma/client'

export default Vue.extend({
    name: 'recipeInputInfo',
    components: {
        Header
    },
data: function(){
    return{
        materials: [] as Materials[],
        scaleTypes: [] as ScaleType[],
        materialAddFlug: 0
    }
},
methods: {
    addMaterial() {
        const maxId = Math.max(...this.materials.map((p) => p.id));
        if(this.materials[maxId-1].name == "" || this.materials[maxId-1].scale == 0){
          this.materialAddFlug = 1
        }
        else{
          this.materialAddFlug = 0
          this.materials.push({
              id:maxId + 1,
              name:"",
              scaleTypeId:0,
              scale:0
          })
        }
    },
    //DB取得処理
    async getScaleTypes() {
      const get = await this.$api.ScaleTypes.$get()
      if(get != undefined){
        this.scaleTypes = get
      }
    },
    //材料登録
    async registMaterials() {
      await this.$api.Materials.$post({ body: this.materials})
    },
    async addArrayMAterials() {
      this.materials.push({
        id:1,
        name:"",
        scaleTypeId:0,
        scale:0
      })
    }
},
watch: {
  /*
    materials: {handler:function(newType,oldType){
    },
    deep: true,
    immediate: false
  },
  */
},
async fetch() {
  await this
},
mounted() {
   this.getScaleTypes()
   this.addArrayMAterials()
}
})
</script>
