const state = {
  typedPhrase: '',
  waiting: false,
  waitTime: 3
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
  }
}

const actions = {
  searchApi (context, payload) {
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
          console.log('stopped waiting')
        } else {
          context.commit('SET_WAIT_TIME', context.state.waitTime - 1)
          timeoutFunction()
        }
      }, 300)
    }

    timeoutFunction()
  }
}

export default {
  state,
  mutations,
  actions
}
