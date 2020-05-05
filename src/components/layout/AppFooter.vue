<template>
  <div id="app-footer">
    <v-footer app color="primary" dark absolute>
      <v-col class="text-center" cols="12">
        <v-icon>mdi-copyright</v-icon>
        {{ new Date().getFullYear() }} —
        <strong>CECATA</strong>
      </v-col>
    </v-footer>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppFooter"
});
</script>