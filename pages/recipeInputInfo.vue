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
          <v-row v-for="(num,index) in this.materials" v-bind:key="index">
            <v-col class="mt-3" cols="2" align="right">
              材料名：
            </v-col>
            <v-col cols="2" align="center">
              <v-text-field outlined v-model="num.material"
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
                v-model="num.scaleType"
                :items="scaleTypes"
                item-text="name"
                item-value="Id"
              >
              </v-select>
            </v-col>
            <v-col cols="1">
              <v-text-field
                outlined
                v-model="num.scale">
              </v-text-field>
            </v-col>
            <v-col cols="2" class="mt-4">
             <p v-if="num.scaleType == 0">
                g
             </p>
             <p v-if="num.scaleType == 3">
                ml
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
              <v-btn color="red" class="white--text">
                登録
              </v-btn>
            </v-col>
          </v-row>
        </v-content>
    </v-app>
</template>
<script>
import Vue from 'vue';
import Header from '~/components/Header.vue';

export default Vue.extend({
    name: 'recipeInputInfo',
    components: {
        Header
    },
data: function(){
    return{
        materials:[
            {
              Id:0,
              material:"",
              scaleType:0,
              scale:0
            }
        ],
        scaleTypes:[
            {
                Id:0,
                name:"グラム"
            },
            {
                Id:1,
                name:"大さじ"
            },
            {
                Id:2,
                name:"小さじ"
            },
            {
                Id:3,
                name:"ml"
            }
        ],
        materialAddFlug: 0
    }
},
methods: {
    addMaterial() {
        const maxId = Math.max(...this.materials.map((p) => p.Id));
        if(this.materials[maxId].material == "" || this.materials[maxId].scale == 0){
          this.materialAddFlug = 1
        }
        else{
          this.materialAddFlug = 0
          this.materials.push({
              Id:maxId + 1,
              material:"",
              scaleType:0,
              scale:0
          })
        }
       
    }
},
watch: {
    materials: {handler:function(newType,oldType){
    },
    deep: true,
    immediate: false
  },
}
})
</script>
