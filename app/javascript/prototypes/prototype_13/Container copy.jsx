import * as Tone from 'tone'
import React, { Component } from 'react'

import * as bassSettings from './tunes/bass.js'
import * as melodySettings from './tunes/melody.js'
import * as drumsSettings from './tunes/drums.js'

import ToneSynth from './modules/ToneSynth.jsx'
import Channel from './modules/Channel.jsx'
import Delay from './modules/Delay.jsx'
import Chorus from './modules/Chorus.jsx'
import SC_Button from './components/SC_Button.jsx'

let bassSynth
let bassChorus
let bassPingPongDelay

let melodySynth
let melodyChorus
let melodyPingPongDelay

let samplerChannel
let samplerPingPongDelay

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      bassSettings,
      melodySettings,
      drumsSettings
    }
  }

  handleStart = () => {
    const { bassSettings, melodySettings, drumsSettings } = this.state

    bassSynth = new Tone.Synth(bassSettings.synth)
    bassChorus = new Tone.Chorus(bassSettings.chorus).start()
    bassPingPongDelay = new Tone.PingPongDelay(
      bassSettings.pingPongDelay
    ).toDestination()

    bassSynth.chain(bassChorus, bassPingPongDelay)

    const bassPart = new Tone.Part((time, note) => {
      bassSynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, bassSettings.sequence.steps).start(0)

    bassPart.loopEnd = bassSettings.sequence.duration
    bassPart.loop = true

    melodySynth = new Tone.Synth(melodySettings.synth)
    melodyChorus = new Tone.Chorus(melodySettings.chorus).start()
    melodyPingPongDelay = new Tone.PingPongDelay(
      melodySettings.pingPongDelay
    ).toDestination()

    melodySynth.chain(melodyChorus, melodyPingPongDelay)

    const melodyPart = new Tone.Part((time, note) => {
      melodySynth.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, melodySettings.sequence.steps).start(0)

    melodyPart.loopEnd = melodySettings.sequence.duration
    melodyPart.loop = true

    const sampler = new Tone.Sampler({
      urls: {
        A1: '00001-Linn-9000-BassDrumrum1.mp3',
        A2: '00026-Linn-Linndrum-SnareDrum.mp3'
      },
      baseUrl: 'http://localhost:3000/samples/'
      // onload: () => {
      //   sampler.triggerAttackRelease(["A1", "A2", "A1", "A2"], 0.5);
      // }
    })

    samplerChannel = new Tone.Channel(drumsSettings.channel);

    samplerPingPongDelay = new Tone.PingPongDelay(
      drumsSettings.pingPongDelay
    ).toDestination()

    // sampler.chain(samplerChannel)

    sampler.chain(samplerChannel, samplerPingPongDelay)

    const drumsPart = new Tone.Part((time, note) => {
      sampler.triggerAttackRelease(
        note.noteName,
        note.duration,
        time,
        note.velocity
      )
    }, drumsSettings.sequence.steps).start(0)

    drumsPart.loopEnd = drumsSettings.sequence.duration
    drumsPart.loop = true

    Tone.Transport.start()
  }

  handleBassValueChange = (property, value) => {
    const { bassSettings } = this.state

    if (property === 'synthType') {
      bassSynth.oscillator.type = value
      bassSettings.synth.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      bassPingPongDelay.wet.value = value
      bassSettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      bassChorus.wet.value = value
      bassSettings.chorus.wet = value
    } else if (property === 'synthEnvelopeAttack') {
      bassSynth.envelope.attack = value
      bassSettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      bassSynth.envelope.decay = value
      bassSettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      bassSynth.envelope.sustain = value
      bassSettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      bassSynth.envelope.release = value
      bassSettings.synth.envelope.release = value
    }

    this.setState({
      bassSettings
    })
  }

  handleDrumsValueChange = (property, value) => {
    const { drumsSettings } = this.state

    if (property === 'channelVolume') {
      samplerChannel.volume.value = value
      drumsSettings.channel.volume = value
    } else if (property === 'channelMute') {
      samplerChannel.mute = value
      drumsSettings.channel.volume = value
    } else if (property === 'pingPongDelayWet') {
      samplerPingPongDelay.wet.value = value
      drumsSettings.pingPongDelay.wet = value
    }

    this.setState({
      drumsSettings
    })
  }

  handleMelodyValueChange = (property, value) => {
    const { melodySettings } = this.state

    if (property === 'synthType') {
      melodySynth.oscillator.type = value
      melodySettings.synth.oscillator.type = value
    } else if (property === 'pingPongDelayWet') {
      melodyPingPongDelay.wet.value = value
      melodySettings.pingPongDelay.wet = value
    } else if (property === 'chorusWet') {
      melodyChorus.wet.value = value
      melodySettings.chorus.wet = value
    } else if (property === 'synthEnvelopeAttack') {
      melodySynth.envelope.attack = value
      melodySettings.synth.envelope.attack = value
    } else if (property === 'synthEnvelopeDecay') {
      melodySynth.envelope.decay = value
      melodySettings.synth.envelope.decay = value
    } else if (property === 'synthEnvelopeSustain') {
      melodySynth.envelope.sustain = value
      melodySettings.synth.envelope.sustain = value
    } else if (property === 'synthEnvelopeRelease') {
      melodySynth.envelope.release = value
      melodySettings.synth.envelope.release = value
    }

    this.setState({
      melodySettings
    })
  }

  render() {
    const { bassSettings, melodySettings, drumsSettings } = this.state

    return (
      <div className="Container">
        <div className="synthwrapper">
          <div className="row">
            <SC_Button
              text="ADC synth starter"
              handleClick={this.handleStart}
            />
          </div>
          <div className="row">
            <div className="column">
              <Delay
                settings={bassSettings}
                handleValueChange={this.handleBassValueChange}
              />
              <Chorus
                settings={bassSettings}
                handleValueChange={this.handleBassValueChange}
              />
              <Channel
                settings={drumsSettings}
                handleValueChange={this.handleDrumsValueChange}
              />
              <Delay
                settings={drumsSettings}
                handleValueChange={this.handleDrumsValueChange}
              />
            </div>
            <div className="divider"></div>
            <div className="column">
              <ToneSynth
                settings={bassSettings}
                handleValueChange={this.handleBassValueChange}
              />
            </div>
          </div>
        </div>
        <div className="synthwrapper">
          <div className="row">
            <h1>Synth #2 settings</h1>
          </div>
          <div className="row">
            <div className="column">
              <Delay
                settings={melodySettings}
                handleValueChange={this.handleMelodyValueChange}
              />
              <Chorus
                settings={melodySettings}
                handleValueChange={this.handleMelodyValueChange}
              />
            </div>
            <div className="divider"></div>
            <div className="column">
              <ToneSynth
                settings={melodySettings}
                handleValueChange={this.handleMelodyValueChange}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
