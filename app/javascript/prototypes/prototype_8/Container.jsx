import * as Tone from 'tone'
import React, { Component } from 'react'

import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)
  }

  handleClick = () => {
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

    const synth = new Tone.Synth(synthSettings)

    // const distortionSettings = {
    //   wet: 1,
    //   distortion: 1,
    //   oversample: '4x'
    // }

    // const distortion = new Tone.Distortion(distortionSettings).toDestination()

    const chorusSettings = {
      wet: 0.6,
      type: 'sine',
      frequency: 1.5,
      delayTime: 3.8,
      depth: 0.7,
      spread: 190
    }

    const chorus = new Tone.Chorus(chorusSettings).start()

    const pingPongDelaySettings = { wet: 0.2, delayTime: 0.5, maxDelayTime: 1 }

    const pingPongDelay = new Tone.PingPongDelay(pingPongDelaySettings)

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

    const phaserSettings = {
      wet: 1,
      frequency: 0.5,
      octaves: 4,
      stages: 8,
      Q: 10,
      baseFrequency: 450
    }

    // const jcReverb = new Tone.JCReverb(jcReverbSettings).toDestination()

    // const tremolo = new Tone.JCReverb(jcReverbSettings).toDestination()
    // const tremolo = new Tone.Tremolo(tremoloSettings).toDestination()
    const phaser = new Tone.Vibrato(phaserSettings).toDestination()

    // const freeverbSettings = {
    //   wet: 1,
    //   roomSize: 0.5,
    //   dampening: 10
    // }
    //
    // const freeverb = new Tone.Freeverb(freeverbSettings)

    const channelSettings = { volume: 0, pan: 0, mute: false, solo: false }
    const channel = new Tone.Channel(channelSettings).toDestination()

    // synth.chain(chorus, pingPongDelay, jcReverb, channel)
    // synth.chain(chorus, pingPongDelay, tremolo, channel)
    // synth.chain(chorus, pingPongDelay, vibrato, channel)
    synth.chain(chorus, pingPongDelay, phaser, channel)

    synth.triggerAttackRelease('E4', '1')

    //
    //
    // Мелодия
    //
    //

    // Целые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '1m',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'G4',
    //     duration: '1m',
    //     velocity: 1
    //   }
    // ]

    // Четвертные ноты играются в четвертные интервалы
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   }
    // ]

    // Шестнадцатые ноты
    // const sequence = [
    //   {
    //     time: '0:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '0:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   //
    //   {
    //     time: '1:0:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:0:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:1:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:0',
    //     noteName: 'C3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:1',
    //     noteName: 'E3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:2',
    //     noteName: 'G3',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:2:3',
    //     noteName: 'B4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:0',
    //     noteName: 'G4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:1',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:2',
    //     noteName: 'C4',
    //     duration: '4n',
    //     velocity: 1
    //   },
    //   {
    //     time: '1:3:3',
    //     noteName: 'E4',
    //     duration: '4n',
    //     velocity: 1
    //   }
    // ]

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

  render() {
    return (
      <div className="Container">
        <SC_Button text="Portal 2" handleClick={this.handleClick} />
      </div>
    )
  }
}
