import React, { Component } from 'react'
import SC_Button from '../../components/SC_Button'
import Header from '../../components/Header'
import HugeCard from '../../components/HugeCard'

export default class Container extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      author: '',
      about: '',
      colorful: '',
      styl: ''
    }
  }

  handleSendToLocalStorage = () => {
    new Promise((resolve, reject) => {
      localStorage.setItem('bookName', this.state.name)
      localStorage.setItem('bookAuthor', this.state.author)
      localStorage.setItem('bookAbout', this.state.about)
      console.log('Almost Done')
      resolve()
    })
    console.log('Done')
    window.location.href = "/prototypes/42";
  }

  handleNameType = (event) => {
    const { name } = this.state
    console.log(name)
    this.setState({
      name: event.target.value
    })
  }

  handleAuthorType = (event) => {
    const { author } = this.state
    console.log(author)
    this.setState({
      author: event.target.value
    })
  }

  handleAboutType = (event) => {
    const { about } = this.state
    console.log(about)
    this.setState({
      about: event.target.value
    })
  }

  render() {
    const { colorful, styl } = this.state

    return (
      <div className="Container">
        <Header></Header>
        <div className="MainColumn">
          <HugeCard text1="Помоги нам подобрать для тебя самый лучший алгоритм генерации суперобложки! Ответь на несколько вопросов, о том, какой бы ты хотел видеть свою книгу">
            {colorful == '' ? (
              <>
                <SC_Button
                  buttonType="select"
                  text="Что-то такое, ну, цветное"
                  id="option1"
                  handleClick={() => this.setState({ colorful: 'true' })}
                >
                  <div className="Tag">#A</div>
                </SC_Button>
                <SC_Button
                  buttonType="select"
                  text="Что-то типа, черно-белое"
                  handleClick={() => this.setState({ colorful: 'false' })}
                >
                  <div className="Tag">#B</div>
                </SC_Button>
                <div className="abIMG"></div>
              </>
            ) : styl == '' ? (
              <>
                <SC_Button
                  buttonType="select"
                  text="Люблю всякое абстрактное"
                  id="option3"
                  handleClick={() => this.setState({ styl: 'abstract' })}
                >
                  <div className="Tag">#A</div>
                </SC_Button>
                <SC_Button
                  buttonType="select"
                  id="option4"
                  text="Давайте что-нибудь классическое"
                  handleClick={() => this.setState({ styl: 'classic' })}
                >
                  <div className="Tag">#B</div>
                </SC_Button>
              </>
            ) : (
              <div className="FinalWrapper">
                <div className="NameAuthorWrapper">
                  <input
                    name="myInput"
                    placeholder="Наименование книги"
                    onChange={this.handleNameType}
                  />
                  <input
                    name="mySecondInput"
                    placeholder="Имя автора"
                    onChange={this.handleAuthorType}
                  />
                </div>
                <textarea
                  id="myTA"
                  name="myTextearea"
                  placeholder="Описание"
                  onChange={this.handleAboutType}
                />
                <SC_Button
                  text="Погнали!"
                  handleClick={this.handleSendToLocalStorage}
                >
                  <div className="Tag">#B</div>
                </SC_Button>
              </div>
            )}
          </HugeCard>
          <div className="StepsWrapper">
            <a href={colorful == 'true' ? '/' : '/prototypes/42'}>
              <div className={colorful !== '' ? 'Step Done' : 'Step'}></div>
            </a>
            <div className={styl !== '' ? 'Step Done' : 'Step'}></div>
            <div className="Step"></div>
          </div>
        </div>
      </div>
    )
  }
}
