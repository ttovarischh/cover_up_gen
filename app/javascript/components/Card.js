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
              {this.props.subtype == 'mainpage' && (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'baseline'
                    }}
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7287 17L9.63921 15.9197L16.0653 9.50282H0V7.95169H16.0653L9.63921 1.53478L10.7287 0.454529L19.0014 8.72726L10.7287 17Z"
                        fill="black"
                      />
                    </svg>
                    <h2>
                      Печатай прямо на домашнем принтере для книг небольших
                      форматов
                    </h2>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'baseline'
                    }}
                  >
                    <svg
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.7287 17L9.63921 15.9197L16.0653 9.50282H0V7.95169H16.0653L9.63921 1.53478L10.7287 0.454529L19.0014 8.72726L10.7287 17Z"
                        fill="black"
                      />
                    </svg>
                    <h2>
                      Используй рандомайзер или настраивай визуал под себя
                    </h2>
                  </div>
                </div>
              )}
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
            id={this.props.id}
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
