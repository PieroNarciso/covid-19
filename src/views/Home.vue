<template>
  <div class="home">
    <v-container>
      <v-row justify="center">
        <v-col xs="12" md="6">
          <the-filter></the-filter>
        </v-col>
      </v-row>
      <the-graph></the-graph>
      <table-data></table-data>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import TheFilter from "@/components/TheFilter.vue";
import TableData from "@/components/TableData.vue";
import TheGraph from "@/components/TheGraph.vue";

export default {
  name: "Home",
  components: {
    TheFilter,
    TableData,
    TheGraph
  }
};
</script>
