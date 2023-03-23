import React, { Component } from 'react'
import SC_Slider from '../components/SC_Slider.jsx'

export default class Chorus extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { settings, handleValueChange } = this.props

    return (
      <div className="Delay">
        <SC_Slider
          name="Chorus Wet"
          min={0}
          max={1}
          step={0.01}
          value={settings.chorus.wet}
          property="chorusWet"
          handleChange={handleValueChange}
        />
      </div>
    )
  }
}
