const channel = {
    volume: 0,
    mute: false
}

const sequence = {
  steps: [
    {
      time: '0:0:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.8
    },
    {
      time: '0:1:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:2:0',
      noteName: 'A2',
      duration: '4n',
      velocity: 0.6
    },
    {
      time: '0:3:0',
      noteName: 'A1',
      duration: '4n',
      velocity: 0.8
    }
  ],
  duration: '1m'
}

const pingPongDelay = {
  wet: 0.4,
  delayTime: 0.25,
  maxDelayTime: 1
}

export { channel, sequence, pingPongDelay }