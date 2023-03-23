import * as Tone from 'tone'
import React, { Component } from 'react'
import SC_Button from './SC_Button'
import SC_ToggleButtonSet from './SC_ToggleButtonSet'
import SC_Slider from './SC_Slider'

let synth
let pingPongDelay

export default class Container extends Component {
  constructor(props) {
    super(props)

    const synthSettings = {
      volume: -10,
      detune: 0,
      portamento: 0.03,
      envelope: {
        attack: 0.06,
        attackCurve: 'exponential',
        decay: 0.2,
        decayCurve: 'exponential',
        sustain: 0.2,
        release: 1.5,
        releaseCurve: 'exponential'
      },
      oscillator: {
        type: 'fatsquare',
        modulationType: 'triangle',
        // partialCount: 0,
        // partials: [],
        phase: 0,
        harmonicity: 0.5
      }
    }

    const pingPongDelaySettings = { wet: 0.2, delayTime: 0.5, maxDelayTime: 1 }

    this.state = {
      synthSettings,
      pingPongDelaySettings
    }
  }

  handleStart = () => {
    const { synthSettings, pingPongDelaySettings } = this.state
    synth = new Tone.Synth(synthSettings)

    pingPongDelay = new Tone.PingPongDelay(
      pingPongDelaySettings
    ).toDestination()

    synth.chain(pingPongDelay)

    // const distortionSettings = {
    //   wet: 1,
    //   distortion: 1,
    //   oversample: '4x'
    // }

    // const distortion = new Tone.Distortion(distortionSettings).toDestination()

    // const chorusSettings = {
    //   wet: 0.6,
    //   type: 'sine',
    //   frequency: 1.5,
    //   delayTime: 3.8,
    //   depth: 0.7,
    //   spread: 190
    // }

    // const chorus = new Tone.Chorus(chorusSettings).start()

    // const jcReverbSettings = {
    //   wet: 1,
    //   roomSize: 0.3
    // }

    // const tremoloSettings = {
    //   wet: 1,
    //   frequency: 10,
    //   type: 'sine',
    //   depth: 1,
    //   spread: 180
    // }

    // const vibratoSettings = {
    //   wet: 1,
    //   maxDelay: 0.005,
    //   frequency: 7,
    //   depth: 0.3,
    //   type: 'sine'
    // }

    // const phaserSettings = {
    //   wet: 1,
    //   frequency: 0.5,
    //   octaves: 4,
    //   stages: 8,
    //   Q: 10,
    //   baseFrequency: 450
    // }

    // const jcReverb = new Tone.JCReverb(jcReverbSettings).toDestination()

    // const tremolo = new Tone.JCReverb(jcReverbSettings).toDestination()
    // const tremolo = new Tone.Tremolo(tremoloSettings).toDestination()
    // const phaser = new Tone.Vibrato(phaserSettings).toDestination()

    // const freeverbSettings = {
    //   wet: 1,
    //   roomSize: 0.5,
    //   dampening: 10
    // }
    //
    // const freeverb = new Tone.Freeverb(freeverbSettings)

    // const channelSettings = { volume: 0, pan: 0, mute: false, solo: false }
    // const channel = new Tone.Channel(channelSettings).toDestination()

    // synth.chain(chorus, pingPongDelay, jcReverb, channel)
    // synth.chain(chorus, pingPongDelay, tremolo, channel)
    // synth.chain(chorus, pingPongDelay, vibrato, channel)

    // synth.chain(chorus, pingPongDelay, phaser, channel)
    // synth.triggerAttackRelease('E4', '1')

    // Тестовая мелодия
    const sequence = [
      {
        time: '0:0:1',
        noteName: 'C1',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:0:2',
        noteName: 'A1',
        duration: '1n',
        velocity: 1
      },
      {
        time: '0:0:3',
        noteName: 'G1',
        duration: '8n',
        velocity: 1
      },
      {
        time: '0:0:3',
        noteName: 'C1',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:0:4',
        noteName: 'E3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '1:0:0',
        noteName: 'D3',
        duration: '8n',
        velocity: 1
      },
      {
        time: '0:0:6',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:0:8',
        noteName: 'E4',
        duration: '8n',
        velocity: 0.7
      },
      {
        time: '0:0:9',
        noteName: 'B4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:1',
        noteName: 'B4',
        duration: '8n',
        velocity: 1
      },
      {
        time: '0:1:2',
        noteName: 'E2',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:3',
        noteName: 'D4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:4',
        noteName: 'E2',
        duration: '1n',
        velocity: 0.7
      },
      {
        time: '0:1:4',
        noteName: 'D4',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:8',
        noteName: 'G3',
        duration: '4n',
        velocity: 1
      },
      {
        time: '0:1:9',
        noteName: 'D1',
        duration: '8n',
        velocity: 1
      },
      {
        time: '2:0:0',
        noteName: 'A1',
        duration: '2n',
        velocity: 1
      },
      {
        time: '0:2:3',
        noteName: 'G1',
        duration: '8n',
        velocity: 1
      },
      {
        time: '2:0:6',
        noteName: 'C1',
        duration: '2n',
        velocity: 1
      },
      {
        time: '2:0:4',
        noteName: 'A1',
        duration: '1n',
        velocity: 1
      },
      {
        time: '2:0:7',
        noteName: 'G1',
        duration: '4m',
        velocity: 1
      },
      {
        time: '2:0:8',
        noteName: 'D4',
        duration: '4n',
        velocity: 0.7
      },
      {
        time: '2:5:0',
        noteName: 'E4',
        duration: '4m',
        velocity: 1
      },
      {
        time: '2:7:0',
        noteName: 'C4',
        duration: '8n',
        velocity: 1
      },
      {
        time: '2:8:0',
        noteName: 'E1',
        duration: '2n',
        velocity: 1
      },
      {
        time: '2:9:0',
        noteName: 'C1',
        duration: '2n',
        velocity: 1
      }
    ]

    // Создаём партию, добавляем в неё секвенцию
    // и включаем проигрывание
    const part = new Tone.Part((time, note) => {
      synth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, sequence).start(0)

    // Указываем длительность партии
    part.loopEnd = '3m'

    // Включаем зацикливание
    part.loop = true

    // Включаем звук в браузере
    // sampler.context.resume()

    // Включаем отсчёт времени в Tone.js
    Tone.Transport.start()
  }

  handleOscillatorTypeChange = (property, value) => {
    const { synthSettings } = this.state
    synth.oscillator.type = value
    synthSettings.oscillator.type = value

    this.setState({
      synthSettings
    })
  }

  handleDelayWetValueChange = (property, value) => {
    const { pingPongDelaySettings } = this.state
    pingPongDelay.wet.value = value
    pingPongDelaySettings.wet = value

    this.setState({
      pingPongDelaySettings
    })
  }

  render() {
    const { synthSettings, pingPongDelaySettings } = this.state
    const options = ['sine', 'square', 'sawtooth', 'triangle']

    return (
      <div className="Container">
        <SC_Button text="Portal 2" handleClick={this.handleStart} />

        <SC_ToggleButtonSet
          name="Type"
          options={options}
          value={synthSettings.oscillator.type}
          property="type"
          handleChange={this.handleOscillatorTypeChange}
        />

        <SC_Slider
          name="Delay Wet"
          min={0}
          max={1}
          step={0.01}
          value={pingPongDelaySettings.wet}
          property="wet"
          handleChange={this.handleDelayWetValueChange}
        />
      </div>
    )
  }
}
