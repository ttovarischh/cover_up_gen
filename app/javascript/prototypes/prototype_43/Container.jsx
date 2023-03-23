import React, { Component } from 'react'
import SC_ToggleButton from './SC_ToggleButton'
import SC_Button from './SC_Button'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { shift, enthropy, effect, save } = props

    this.state = {
      shift,
      enthropy,
      effect,
      save
    }
  }

  componentDidMount() {
    this.props.initSketch('sketch')
  }

  handleSaveCanvas = () => {
    const { setStoreSave } = this.props
    const { save } = this.state
    setStoreSave(!save)

    this.setState({
      save: !save
    })
  }

  handleShiftChange = () => {
    const { setStoreShift } = this.props
    const { shift } = this.state
    setStoreShift(!shift)

    this.setState({
      shift: !shift
    })
  }

  handleEnthropyChange = () => {
    const { setStoreEnthropy } = this.props
    const { enthropy } = this.state
    setStoreEnthropy(!enthropy)

    this.setState({
      enthropy: !enthropy
    })
  }

  handleEffectChange = () => {
    const { setStoreEffect } = this.props
    const { effect } = this.state
    setStoreEffect(!effect)

    this.setState({
      effect: !effect
    })
  }

  render() {
    const { shift, enthropy, effect } = this.state

    return (
      <div className="Container">
        <div className="sketch" id="sketch"></div>

        <div className="interface">
          <SC_ToggleButton
            text="shift"
            isOn={shift}
            handleClick={this.handleShiftChange}
          />

          <SC_ToggleButton
            text="enthropy"
            isOn={enthropy}
            handleClick={this.handleEnthropyChange}
          />

          <SC_ToggleButton
            text="effect"
            isOn={effect}
            handleClick={this.handleEffectChange}
          />
          <SC_Button handleClick={this.handleSaveCanvas} text={'save me'} />
        </div>
      </div>
    )
  }
}
