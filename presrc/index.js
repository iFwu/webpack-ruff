import { turnOffAll } from './util'
// npm modules need to use require()
import { createStore } from 'redux'

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
const store = createStore(counter)

var increase = function increase () {
  store.dispatch({
    type: 'INCREMENT'
  })
}
var decrease = function decrease () {
  store.dispatch({
    type: 'DECREMENT'
  })
}

var unsubscribe = store.subscribe(function () {
  var state = store.getState()
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

$.ready(function (error) {
  if (error) {
    console.log(error)
    return
  }
  $('#button-k2').on('push', function () {
    increase()
  })
  $('#button-k3').on('push', function () {
    decrease()
  })
})

$.end(function () {
  unsubscribe()
})
