import React, { Children, Component } from 'react'
import SC_Button from './SC_Button'

export default class HugeCard extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div
        className={
          this.props.colorType == 'inverted'
            ? 'CardWrapper Info Inverted'
            : 'CardWrapper Info'
        }
      >
        <div>
          <div>
            {<this.props.Icon />}
          </div>
          <div className="ColumnsWrapper">
            <h2 id="fW" style={{ maxWidth: 629 }}>{this.props.text1}</h2>
            {this.props.text2 && <h2>{this.props.text2}</h2>}
          </div>
        </div>
        <div className="MainButtons">{this.props.children}</div>
      </div>
    )
  }
}
