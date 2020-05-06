import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: 'https://api.covid19api.com/total/country/',
    lastUrl: '/status/confirmed',
    showLoader: false,
    countryData: [],
    headers: [
      {
        text: 'Country',
        align: 'start',
        sortable: false,
        value: 'Country'
      },
      { text: 'Date', value: 'Date' },
      // { text: 'Latitud', value: 'Lat', sortable: false },
      // { text: 'Longitude', value: 'Lon', sortable: false },
      { text: 'Status', value: 'Status', sortable: false },
      { text: 'Cases', value: 'Cases' }
    ],

    countries: []
  },
  getters: {
    getCountryData: state => state.countryData,
    getHeaders: state => state.headers,
    getCountries: state => state.countries,
    getShowLoader: state => state.showLoader
  },
  mutations: {
    updateCountryData: (state, data) => {
      state.countryData = data
    },

    updateCountries: (state, data) => {
      state.countries = data
    },

    changeShowLoader: (state, data: boolean) => {
      state.showLoader = data;
    }
  },
  actions: {
    getDataByCountry: (context, country: string) => {
      axios
        .get(context.state.domain + country + context.state.lastUrl)
        .then(res => {
          context.commit('updateCountryData', res.data);
          context.commit('changeShowLoader', false);
        })
        .catch(err => console.log(err))
    },

    getCountries: (context) => {
      axios.get('https://api.covid19api.com/countries')
        .then(res => {
          res.data.sort((a, b) => {
            if (a.Country > b.Country) {
              return 1;
            }
            if (a.Country < b.Country) {
              return -1;
            }
            return 0;
          });
          context.commit('updateCountries', res.data);
        })
        .catch(err => console.log(err))
    },

    changeShowLoader: (context, data: boolean) => {
      context.commit('changeShowLoader', data);
    }
  },
  modules: {
  },
})
