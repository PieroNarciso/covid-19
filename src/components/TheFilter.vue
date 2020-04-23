<template>
  <div id="the-filter">
    <form>
      <v-autocomplete
        :items="countries"
        item-text="Country"
        item-value="Slug"
        label="Select Country"
        @change="getDataByCountry"
        @submit.prevent
        hide-no-data
        hide-selected
        prepend-icon="mdi-database-search"
      ></v-autocomplete>
      <v-progress-linear v-if="showLoader" indeterminate rounded height="6" class="mb-3"></v-progress-linear>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheFilter",
  computed: {
    items() {
      return this.$store.getters.getItems;
    },

    countries() {
      return this.$store.getters.getCountries;
    },
    showLoader() {
      return this.$store.getters.getShowLoader;
    }
  },
  methods: {
    getDataByCountry: function(country: string) {
      this.$store.dispatch("changeShowLoader", true);
      this.$store.dispatch("getDataByCountry", country);
    }
  },
  beforeCreate() {
    this.$store.dispatch("getCountries");
  }
});
</script>