<template>
  <v-app>
    <app-header></app-header>
    <v-content>
      <router-view></router-view>
    </v-content>
    <app-footer></app-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";

import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default Vue.extend({
  name: "App",

  components: {
    AppHeader,
    AppFooter
  },

  data: () => ({
    //
  })
});
</script>
