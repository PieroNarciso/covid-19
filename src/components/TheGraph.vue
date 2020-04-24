<template>
  <div id="the-graph">
    <v-row justify="center">
      <v-col xs="12" md="10" lg="8">
        <v-card v-if="countryData.length > 0" color="green" class="mx-auto text-center">
          <v-card-text>
            <v-sheet color="green darken-1">
              <v-sparkline color="white" line-width="1" :value="getCases(countryData)"></v-sparkline>
            </v-sheet>
          </v-card-text>
          <v-card-text>
            <div
              :class="{'headline font-weight-thin white--text': true, 'subtitle-1 font-weight-thin white--text': $vuetify.breakpoint.xs}"
            >Current cases: {{ countryData[countryData.length - 1].Cases }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TheGraph",
  computed: {
    countryData() {
      return this.$store.getters.getCountryData;
    }
  },
  methods: {
    getCases: (data: Array<any>) => {
      return data.map(element => element.Cases);
    }
  }
});
</script>