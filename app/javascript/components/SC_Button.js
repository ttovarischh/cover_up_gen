import React, { PureComponent } from 'react'

export default class SC_Button extends PureComponent {
  constructor(props) {
    super(props)
  }

  render() {
    const { text, handleClick, buttonType, buttonLink, children, id } = this.props

    if (buttonType == 'link') {
      return (
        <a href={buttonLink}>
          <div className="SC_Button">{text}</div>
        </a>
      )
    } else if (buttonType == 'iconAction') {
      return (
        <div className="SC_Button" onClick={handleClick}>
          {children}
        </div>
      )
    } else if (buttonType == 'select') {
      return (
        <div className="SC_ButtonPlus" id={id} onClick={handleClick}>
          <h2>{text}</h2>
          <div className="TagsWrapper">{children}</div>
        </div>
      )
    } else {
      return (
        <div className="SC_Button" onClick={handleClick}>
          {text}
        </div>
      )
    }
    return <></>
  }
}
