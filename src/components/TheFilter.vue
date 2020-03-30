<template>
  <div id="the-filter">
    <form>
      <v-select
        :items="countries"
        item-text="Country"
        item-value="Slug"
        label="Select Country"
        @change="getDataByCountry"
        menu-props="auto"
      ></v-select>
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
    }
  },
  methods: {
    getDataByCountry: function(country: string) {
      this.$store.dispatch("getDataByCountry", country);
    }
  },
  beforeCreate() {
    this.$store.dispatch("getCountries");
  }
});
</script>