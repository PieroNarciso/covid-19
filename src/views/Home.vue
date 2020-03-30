<template>
  <div class="home">
    <v-container>
      <the-filter></the-filter>
      <table-data></table-data>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFilter from "@/components/TheFilter.vue";
import TableData from "@/components/TableData.vue";

export default {
  name: "Home",
  components: {
    TheFilter,
    TableData
  }
};
</script>
