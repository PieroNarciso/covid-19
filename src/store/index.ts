import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    domain: 'https://api.covid19api.com/country/',
    lastUrl: '/status/confirmed/live',
    items: [
      {
        id: 1,
        text: "Peru",
        value: "peru"
      },
      {
        id: 2,
        text: "Chile",
        value: "chile"
      },
      {
        id: 3,
        text: "Mexico",
        value: "mexico"
      }
    ],
    countryData: [],
    headers: [
      {
        text: 'Country',
        align: 'start',
        sortable: false,
        value: 'Country'
      },
      { text: 'Date', value: 'Date' },
      { text: 'Latitud', value: 'Lat', sortable: false },
      { text: 'Longitude', value: 'Lon', sortable: false },
      { text: 'Status', value: 'Status', sortable: false },
      { text: 'Cases', value: 'Cases' }
    ],

    countries: []
  },
  getters: {
    getItems: state => state.items,
    getCountryData: state => state.countryData,
    getHeaders: state => state.headers,
    getCountries: state => state.countries
  },
  mutations: {
    updateCountryData: (state, data) => {
      state.countryData = data
    },

    updateCountries: (state, data) => {
      state.countries = data
    }
  },
  actions: {
    getDataByCountry: (context, country: string) => {
      axios
        .get(context.state.domain + country + context.state.lastUrl)
        .then(res => {
          context.commit('updateCountryData', res.data)
        })
        .catch(err => console.log(err))
    },

    getCountries: (context) => {
      axios.get('https://api.covid19api.com/countries')
        .then(res => {
          context.commit('updateCountries', res.data)
        })
        .catch(err => console.log(err))
    }
  },
  modules: {
  },
})
