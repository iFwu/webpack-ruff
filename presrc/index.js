const Redux = require('redux')

function turnOffAll (ignore) {
  // ignore becasue when turn off the light then immediately turn on, it won't work
  if (ignore !== 'r') { $('#led-r').turnOff() }
  if (ignore !== 'g') { $('#led-g').turnOff() }
  if (ignore !== 'b') { $('#led-b').turnOff() }
}

function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}
const store = Redux.createStore(counter)

const increase = () => {
  store.dispatch({
    type: 'INCREMENT'
  })
}
const decrease = () => {
  store.dispatch({
    type: 'DECREMENT'
  })
}

const unsubscribe = store.subscribe(() => {
  const state = store.getState()
  console.log(state)
  if (state > 0) {
    turnOffAll('g')
    $('#led-g').turnOn()
  }
  if (state === 0) {
    turnOffAll('b')
    $('#led-b').turnOn()
  }
  if (state < 0) {
    turnOffAll('r')
    $('#led-r').turnOn()
  }
})

$.ready((error) => {
  if (error) {
    console.log(error)
    return
  }
  $('#button-k2').on('push', () => {
    increase()
  })
  $('#button-k3').on('push', () => {
    decrease()
  })
})

$.end(() => {
  unsubscribe()
})
