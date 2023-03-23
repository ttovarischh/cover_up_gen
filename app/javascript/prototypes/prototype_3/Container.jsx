import React, { Component } from 'react'
import SC_Button from '../../components/SC_Button'
import Header from '../../components/Header'

export default class Container extends Component {
  constructor(props) {
    super(props)

    const { shift, enthropy, effect, save, name } = props

    this.state = {
      shift,
      enthropy,
      effect,
      save,
      name,
      bookName: '',
      bookAuthor: '',
      bookAbout: ''
    }
  }
  componentDidMount() {
    this.props.initSketch('sketch1', 'sketch2', 'sketch3')
    let value = localStorage.getItem('bookName')
    let value2 = localStorage.getItem('bookAuthor')
    let value3 = localStorage.getItem('bookAbout')

    this.setState({
      bookName: value,
      bookAuthor: value2,
      bookAbout: value3
    })
  }

  handleSaveCanvas = () => {
    const { setStoreSave } = this.props
    const { save } = this.state
    setStoreSave(!save)

    this.setState({
      save: !save
    })
  }

  handleNameType = (event) => {
    const { setStoreName } = this.props
    const { name } = this.state
    setStoreName(name)
    console.log(name)

    this.setState({
      name: event.target.value
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
    const { shift, enthropy, effect, save, name, bookName } = this.state

    return (
      <div className="Container">
        <Header></Header>
        <div className="MainColumn">
          <div className="BookColumn">
            <div className="sketch" id="sketch1">
              <div className="shadow leftShadow"></div>
            </div>
            <div className="sketch" id="sketch2">
              <div className="shadow centerShadow"></div>
              <div className="shadow centerShadowTwo"></div>
            </div>
            <div className="sketch" id="sketch3">
              <div className="shadow rightShadow"></div>
            </div>
          </div>
          <div className="MainButtons">
            <SC_Button
              buttonType="iconAction"
              handleClick={this.handleSaveCanvas}
            >
              <svg
                width="35"
                height="40"
                viewBox="0 0 35 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.7838 36.774L16.7839 36.774C17.1877 37.1793 17.8438 37.1772 18.2449 36.7739L18.245 36.7738L31.5493 23.3777L31.6897 23.2363L31.5489 23.0954L30.3718 21.9172L30.2303 21.7755L30.0888 21.9172L18.7807 33.2363L18.7806 33.2364C18.7114 33.3057 18.6562 33.3404 18.6191 33.355C18.5987 33.3631 18.5875 33.3639 18.5831 33.3636C18.5797 33.3606 18.5718 33.3517 18.5625 33.33C18.5465 33.2926 18.5322 33.2287 18.5322 33.1318V0.980469V0.780469H18.3322H16.6674H16.4674V0.980469V33.1318C16.4674 33.2308 16.4531 33.2962 16.4371 33.3345C16.4287 33.3545 16.4216 33.3636 16.418 33.3673C16.413 33.3672 16.4022 33.3658 16.3837 33.3583C16.3459 33.3431 16.2897 33.3073 16.2189 33.2364L16.2189 33.2363L4.91068 21.9172L4.76919 21.7755L4.6277 21.9172L3.4506 23.0954L3.30965 23.2365L3.45034 23.3779L16.7838 36.774ZM16.4213 33.367C16.4212 33.3671 16.4208 33.3671 16.4202 33.3672L16.4213 33.367ZM34.1664 39.2186H34.3664V39.0186V37.3521V37.1521H34.1664H0.833496H0.633496V37.3521V39.0186V39.2186H0.833496H34.1664Z"
                  fill="black"
                  stroke="black"
                  stroke-width="0.4"
                />
              </svg>
            </SC_Button>
            <SC_Button
              buttonType="iconAction"
              handleClick={() => window.location.reload()}
            >
              <svg
                width="35"
                height="38"
                viewBox="0 0 35 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 3.47452C7.04473 3.47452 0 12.4091 0 20.7373C0 29.0652 7.04463 38 17.5 38C27.9553 38 35 29.0654 35 20.7373H32.7638C32.7638 28.0176 26.6134 35.7939 17.5002 35.7939C8.38628 35.7939 2.23662 28.0727 2.23662 20.7924C2.23662 13.5121 8.38698 5.73577 17.5002 5.73577C22.6997 5.73577 26.893 8.4934 29.3532 11.3061L19.1775 11.0856L19.1217 13.2915L32.8198 13.5124L32.5964 0L30.3601 0.0550133L30.5278 9.32044C27.62 6.17694 23.147 3.47437 17.5007 3.47437L17.5 3.47452Z"
                  fill="black"
                />
              </svg>
            </SC_Button>
          </div>
        </div>
        <div className="InterfaceWrapper">
          <div className="IntefaceItem">
            <h2>
              УПРАВЛЯТЬ<br></br>&emsp;&ensp;РЕЖИМОМ ЦВЕТА
            </h2>
            <div className="ToggleLabels">
              <p>ON</p>
              <p>OFF</p>
            </div>
            <div className={effect ? 'Disabled' : ''}>
              <div
                className={
                  shift ? 'TogglerWrapper Active' : 'TogglerWrapper InActive'
                }
              >
                <div
                  className={
                    shift
                      ? 'TogglerToggle TTActive'
                      : 'TogglerToggle TTInActive'
                  }
                  onClick={this.handleShiftChange}
                ></div>
              </div>
            </div>
          </div>
          <div className="IntefaceItem Special">
            <h2>
              УПРАВЛЯТЬ<br></br>&emsp;&ensp;ЗАПОЛНЕННОСТЬЮ
            </h2>
            <SC_Button
              buttonType="iconAction"
              handleClick={this.handleEffectChange}
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 2.66116L23.9283 14.6286L24.048 14.952L24.3714 15.0717L36.3388 19.5L24.3714 23.9283L24.048 24.048L23.9283 24.3714L19.5 36.3388L15.0717 24.3714L14.952 24.048L14.6286 23.9283L2.66116 19.5L14.6286 15.0717L14.952 14.952L15.0717 14.6286L19.5 2.66116Z"
                  stroke="white"
                  stroke-width="1.5"
                />
              </svg>
            </SC_Button>
            <SC_Button
              buttonType="iconAction"
              handleClick={() => window.location.reload()}
            >
              <svg
                width="27"
                height="31"
                viewBox="0 0 27 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.1022 0.25H12.9335L12.8703 0.406472L0.768154 30.4065L0.629573 30.75H1H1.92127H2.09008L2.15316 30.5934L6.0683 20.876H20.9729L24.8465 30.5926L24.9093 30.75H25.0787H26H26.3671L26.2326 30.4084L14.4236 0.40843L14.3612 0.25H14.191H13.1022ZM6.60362 19.5357L13.6433 1.91759L20.4429 19.5357H6.60362Z"
                  fill="white"
                  stroke="white"
                  stroke-width="0.5"
                />
              </svg>
            </SC_Button>
          </div>
          <div className="IntefaceItem">
            <h2>
              УПРАВЛЯТЬ<br></br>&emsp;&ensp;РЕЖИМОМ ИНВЕРСИИ
            </h2>
            <div className="ToggleLabels">
              <p>ON</p>
              <p>OFF</p>
            </div>
            <div className={shift ? 'Disabled' : ''}>
              <div
                className={
                  effect ? 'TogglerWrapper Active' : 'TogglerWrapper InActive'
                }
              >
                <div
                  className={
                    effect
                      ? 'TogglerToggle TTActive'
                      : 'TogglerToggle TTInActive'
                  }
                  onClick={this.handleEffectChange}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
