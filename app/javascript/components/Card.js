import React, { Children, Component } from 'react'
import SC_Button from './SC_Button'

export default class Card extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    if (this.props.type == 'info') {
      return (
        <div
          className={
            this.props.colorType == 'inverted'
              ? 'CardWrapper Info Inverted'
              : 'CardWrapper Info'
          }
        >
          <div>
            {this.props.children}
            <div className="ColumnsWrapper">
              <h2 style={{ maxWidth: 629 }}>{this.props.text1}</h2>
              {this.props.text2 && <h2>{this.props.text2}</h2>}
            </div>
          </div>
          <SC_Button
            buttonType="link"
            buttonLink={this.props.buttonLink}
            text={this.props.buttonText}
          ></SC_Button>
        </div>
      )
    } else if (this.props.type == 'exampleWide' || 'exampleSquare') {
      return (
        <>
          <div
            className={
              this.props.type == 'exampleWide'
                ? 'Example Wide'
                : 'Example Square'
            }
          >
            <div className="Gradient">
              <h2>{this.props.bookName}</h2>
              <div className="TagsWrapper">{this.props.children}</div>
            </div>
          </div>
        </>
      )
    } else {
      return (
        <>
          <div className="CardWrapper">
            <h1>hElolo wordl</h1>
          </div>
        </>
      )
    }
    return <></>
  }
}
