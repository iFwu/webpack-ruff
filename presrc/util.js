export function turnOffAll (ignore) {
  // ignore becasue when turn off the light then immediately turn on, it won't work
  if (ignore !== 'r') { $('#led-r').turnOff() }
  if (ignore !== 'g') { $('#led-g').turnOff() }
  if (ignore !== 'b') { $('#led-b').turnOff() }
}
