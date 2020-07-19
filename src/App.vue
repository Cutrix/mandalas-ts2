<template>
  <div>
   <router-view/>
  </div>
</template>

<script lang="ts">
import Home from "@/components/Home.vue";
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
    Home,
  },
})
export default class App extends Vue {
    private mounted() {
    }
}
</script>

<style>
</style>
