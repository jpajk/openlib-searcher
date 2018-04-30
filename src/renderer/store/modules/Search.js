import axios from 'axios'
import { SEARCH_URL } from '../../constants'

const state = {
  typedPhrase: '',
  waiting: false,
  waitTime: 3,
  fetchedResults: []
}

const getters = {
  waiting: state => {
    return state.waiting
  },

  fetchedResults: state => {
    return state.fetchedResults
  }
}

const mutations = {
  SET_TYPED_PHRASE (state, payload) {
    state.typedPhrase = payload
  },
  SET_WAIT_TIME (state, payload) {
    state.waitTime = payload
  },
  SET_WAITING (state, payload) {
    state.waiting = payload
  },
  SET_FETCHED_RESULTS (state, payload) {
    state.fetchedResults = payload
  }
}

const actions = {
  typePhrase (context, payload) {
    context.commit('SET_TYPED_PHRASE', payload)

    if (context.state.waiting) {
      context.commit('SET_WAIT_TIME', 3)
      return
    }

    context.commit('SET_WAITING', true)

    let timeoutFunction = function () {
      setTimeout(() => {
        if (context.state.waitTime === 0) {
          context.commit('SET_WAITING', false)
          context.commit('SET_WAIT_TIME', 3)
          context.dispatch('searchApi')
        } else {
          context.commit('SET_WAIT_TIME', context.state.waitTime - 1)
          timeoutFunction()
        }
      }, 300)
    }

    timeoutFunction()
  },

  searchApi (context) {
    axios.get(SEARCH_URL + '?q=' + context.state.typedPhrase + '&limit=10')
      .then(function (response) {
        console.log('my response', response)
        context.commit('SET_FETCHED_RESULTS', response.data.docs)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
