<template>
  <div id="the-graph">
    <v-row justify="center">
      <v-col xs="12" md="10" lg="8">
        <v-card v-if="countryData.length > 0" class="mx-auto text-center">
          <v-card-text>
            <div
              :class="{'headline font-weight gray--text': true, 'subtitle-1 font-weight-thin white--text': $vuetify.breakpoint.xs}"
            >Current cases: {{ countryData[countryData.length - 1].Cases }}</div>
          </v-card-text>

          <v-card-text>
            <GChart type="LineChart" :data="getCasesTable(countryData)" :options="options" />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GChart } from "vue-google-charts";

export default Vue.extend({
  name: "TheGraph",
  components: {
    GChart
  },
  data() {
    return {
      options: {
        title: "Número acumulado de casos por día",
        legend: { position: "top" },
        hAxis: {
          title: "Days"
        },
        vAxis: {
          title: "Casos acumulados"
        },
        backgroundColor: "#E0F7FA"
      }
    };
  },

  computed: {
    countryData() {
      return this.$store.getters.getCountryData;
    }
  },
  methods: {
    getCases: (data: Array<any>) => {
      return data.map(element => element.Cases);
    },

    getCasesTable: (data: Array<any>) => {
      const table = [
        ["Day", "Num Cases"],
        ...data.map((element, index) => [index, element.Cases])
      ];
      return table;
    }
  }
});
</script>