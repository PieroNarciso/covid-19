<template>
  <div id="table-data">
    <template v-if="countryData.length > 0">
      <v-row justify="center">
        <v-col xs="12" md="10" lg="8">
          <v-data-table
            :headers="headers"
            :items="countryData"
            :sort-by="['Cases']"
            :sort-desc="[true]"
            class="elevation-1"
          >
            <template v-slot:item.Date="{ item }">{{ getDate(item.Date) }}</template>
            <template v-slot:item.Cases="{ item }">
              <v-chip :color="getColor(item.Cases)" dark>{{ item.Cases }}</v-chip>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-row justify="center">
        <v-col xs="12" md="6">
          <v-alert type="info">Select a country to view the data</v-alert>
        </v-col>
      </v-row>
    </template>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import moment from "moment";

export default Vue.extend({
  name: "TableData",
  computed: {
    countryData() {
      return this.$store.getters.getCountryData;
    },
    headers() {
      return this.$store.getters.getHeaders;
    }
  },
  methods: {
    getDate: function(date: string) {
      return moment(date).format("MMMM Do YYYY");
    },
    getColor: function(nCases: number) {
      if (nCases > 10000) return "red";
      else if (nCases > 5000) return "deep-orange";
      else if (nCases > 1000) return "orange";
      else if (nCases > 800) return "amber";
      else if (nCases > 500) return "yellow darken-1";
      else return "green";
    }
  }
});
</script>