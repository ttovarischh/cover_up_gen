import React, { Component } from 'react'
import SC_Button from '../../components/SC_Button'
import Header from '../../components/Header'
import HugeCard from '../../components/HugeCard'

function header() {
  return (
    <svg
      width="736"
      height="107"
      viewBox="0 0 736 107"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 95.9055H25.584V94.7961H22.88C17.888 94.7961 17.264 93.0703 17.264 87.1532V50.4182H45.76V87.1532C45.76 93.0703 45.24 94.7961 40.248 94.7961H37.44V95.9055H63.128V94.7961H59.384C54.392 94.7961 53.872 93.0703 53.872 87.1532V16.0254C53.872 10.1083 54.392 8.38249 59.384 8.38249H63.128V7.27304H37.44V8.38249H40.144C45.136 8.38249 45.76 10.1083 45.76 16.0254V48.1993H17.264V16.0254C17.264 10.1083 17.888 8.38249 22.88 8.38249H25.584V7.27304H0V8.38249H3.64C8.632 8.38249 9.152 10.1083 9.152 16.0254V87.1532C9.152 93.0703 8.632 94.7961 3.64 94.7961H0V95.9055Z"
        fill="black"
      />
      <path
        d="M73.0706 87.1532C73.0706 93.6866 74.8386 96.8917 78.3746 96.8917C83.6786 96.8917 88.9826 91.9608 92.4146 81.8525L114.359 16.0254C116.127 10.6014 116.647 8.25922 120.391 8.25922H121.015V7.27304H103.127V8.38249H107.911C111.759 8.38249 113.007 10.1083 113.007 12.3272C113.007 13.4366 112.695 14.7926 112.279 16.0254L97.7186 60.0334L96.9906 60.28V60.0334C96.9906 59.2938 96.8866 56.5818 96.2626 54.856L81.2866 14.4228C80.4546 12.2039 79.3106 9.2454 77.8546 8.62904V8.38249H85.2386V7.27304H65.1666V8.38249H66.7266C70.4706 8.38249 70.9906 10.3548 72.9666 16.0254L92.3106 68.7857C92.7266 70.1417 92.9346 71.3744 92.9346 72.6071C92.9346 73.7166 92.7266 74.826 92.4146 75.6889L91.5826 78.0311C89.5026 83.9482 86.5906 88.0161 78.8946 88.0161C77.4386 88.0161 74.5266 87.523 73.0706 87.1532Z"
        fill="black"
      />
      <path
        d="M127.007 105.891V107C132.103 107 135.535 100.836 135.535 91.591C135.535 88.2627 133.767 86.0438 130.959 86.0438C127.943 86.0438 126.279 88.0161 126.279 91.591C126.279 95.1659 127.943 97.015 130.959 97.015C131.687 97.015 132.727 96.6452 133.039 96.1521L133.351 96.3986C133.143 96.8917 133.039 98.2477 132.935 99.1106C132.415 102.562 129.815 105.891 127.007 105.891Z"
        fill="black"
      />
      <path
        d="M168.496 95.9055H194.08V94.7961H191.376C186.384 94.7961 185.76 93.0703 185.76 87.1532V9.49194H214.256V87.1532C214.256 93.0703 213.736 94.7961 208.744 94.7961H205.936V95.9055H231.624V94.7961H227.88C222.888 94.7961 222.368 93.0703 222.368 87.1532V16.0254C222.368 10.1083 222.888 8.38249 227.88 8.38249H231.624V7.27304H168.496V8.38249H172.136C177.128 8.38249 177.648 10.1083 177.648 16.0254V87.1532C177.648 93.0703 177.128 94.7961 172.136 94.7961H168.496V95.9055Z"
        fill="black"
      />
      <path
        d="M249.679 9.61521H257.271C270.375 9.61521 277.447 18.3675 277.447 34.3929C277.447 50.5415 270.375 59.1705 257.271 59.1705H251.447V17.8744C251.447 15.0392 250.927 12.2039 249.679 10.2316V9.61521ZM234.183 95.9055H259.663V94.7961H257.063C252.071 94.7961 251.447 94.1797 251.447 88.2627V61.3894H260.391C275.991 61.3894 286.495 50.6647 286.495 34.3929C286.495 18.121 275.991 7.27304 260.391 7.27304H234.183V8.38249H237.823C242.815 8.38249 243.335 8.99885 243.335 14.9159V88.2627C243.335 94.1797 242.815 94.7961 237.823 94.7961H234.183V95.9055Z"
        fill="black"
      />
      <path
        d="M290.018 95.9055H306.242L335.778 15.6555V87.1532C335.778 93.0703 335.258 94.7961 330.266 94.7961H327.458V95.9055H353.146V94.7961H349.402C344.41 94.7961 343.89 93.0703 343.89 87.1532V16.0254C343.89 10.1083 344.41 8.38249 349.402 8.38249H353.146V7.27304H336.818L307.282 87.523V16.0254C307.282 10.1083 307.906 8.38249 312.898 8.38249H315.602V7.27304H290.018V8.38249H293.658C298.65 8.38249 299.17 10.1083 299.17 16.0254V87.1532C299.17 93.0703 298.65 94.7961 293.658 94.7961H290.018V95.9055Z"
        fill="black"
      />
      <path
        d="M371.2 93.6866V93.4401C372.448 91.9608 372.968 89.9885 372.968 87.1532V16.0254C372.968 13.1901 372.448 11.0945 371.2 9.61521V9.49194H379.624C389.92 9.49194 396.888 16.1486 396.888 26.1336C396.888 35.8721 390.232 42.7753 381.08 42.7753H376.92V44.871H382.432C395.328 44.871 404.584 55.4724 404.584 70.265C404.584 84.318 395.952 93.6866 383.056 93.6866H371.2ZM355.704 95.9055H384.928C401.048 95.9055 413.632 85.674 413.632 70.265C413.632 57.6912 404.272 44.7477 390.752 43.6382V43.1452C400.32 41.5426 405.728 32.9136 405.728 25.8871C405.728 14.7926 395.848 7.27304 381.08 7.27304H355.704V8.38249H359.344C364.336 8.38249 364.856 8.99885 364.856 14.9159V88.2627C364.856 94.1797 364.336 94.7961 359.344 94.7961H355.704V95.9055Z"
        fill="black"
      />
      <path
        d="M426.819 47.8295H485.995C487.763 47.8295 489.219 46.3502 489.219 44.2546V43.6382C489.219 21.326 474.035 6.28687 455.939 6.28687C432.851 6.28687 417.563 24.2846 417.563 51.2811C417.563 78.6475 433.891 96.8917 455.731 96.8917C470.395 96.8917 482.043 89.4954 488.491 76.9217L486.931 75.5657C480.899 87.6463 469.979 94.6728 456.043 94.6728C438.259 94.6728 426.819 78.894 426.819 49.3088C426.819 48.8157 426.819 48.3226 426.819 47.8295ZM426.819 45.6106C427.755 21.5726 437.739 8.50576 455.523 8.50576C470.187 8.50576 479.963 22.5588 479.963 43.6382C479.963 44.3779 479.651 44.7477 479.131 44.7477L426.819 45.6106Z"
        fill="black"
      />
      <path
        d="M501.095 95.9055H535.831V94.7961H528.135C523.143 94.7961 522.623 94.1797 522.623 88.2627V9.49194H528.655C538.639 9.49194 541.967 11.8341 542.695 23.6682L543.007 28.8456L544.879 28.5991L543.319 0.123278L542.175 0.246548L542.695 7.27304H494.231L494.647 0.123278L493.607 0L492.047 28.5991L493.815 28.8456L494.231 23.6682C494.751 11.8341 498.287 9.49194 508.271 9.49194H514.511V88.2627C514.511 94.1797 513.991 94.7961 508.999 94.7961H501.095V95.9055Z"
        fill="black"
      />
      <path
        d="M547.28 95.9055H563.504L593.04 15.6555V87.1532C593.04 93.0703 592.52 94.7961 587.528 94.7961H584.72V95.9055H610.408V94.7961H606.664C601.672 94.7961 601.152 93.0703 601.152 87.1532V16.0254C601.152 10.1083 601.672 8.38249 606.664 8.38249H610.408V7.27304H594.08L564.544 87.523V16.0254C564.544 10.1083 565.168 8.38249 570.16 8.38249H572.864V7.27304H547.28V8.38249H550.92C555.912 8.38249 556.432 10.1083 556.432 16.0254V87.1532C556.432 93.0703 555.912 94.7961 550.92 94.7961H547.28V95.9055Z"
        fill="black"
      />
      <path
        d="M612.966 95.9055H639.486V94.7961H635.846C630.854 94.7961 630.23 94.0565 630.23 87.1532V43.7615H631.478C645.934 43.7615 648.222 58.6774 650.406 73.1002C652.278 85.674 654.046 97.3848 664.134 97.3848C666.734 97.3848 669.646 95.9055 672.558 92.8237L673.91 91.4677L673.286 90.6048L671.934 91.9608C670.062 93.6866 668.398 94.303 666.942 94.303C660.806 94.303 659.974 86.5369 658.934 76.7984C657.478 62.6221 655.502 46.72 638.966 42.159L638.862 41.6659L655.398 16.8883C659.766 10.3548 666.11 8.38249 670.686 8.38249H671.934V7.27304H648.95V8.38249H649.886C653.11 8.38249 655.294 9.49194 655.294 11.8341C655.294 12.9435 654.67 14.5461 653.422 16.3952L636.99 40.9263C635.95 42.4055 633.974 42.6521 630.23 42.6521V14.9159C630.23 8.99885 630.854 8.38249 635.846 8.38249H636.782V7.27304H612.966V8.38249H616.606C621.598 8.38249 622.118 8.99885 622.118 14.9159V87.1532C622.118 94.0565 621.598 94.7961 616.606 94.7961H612.966V95.9055Z"
        fill="black"
      />
      <path
        d="M672.864 95.9055H689.088L718.624 15.6555V87.1532C718.624 93.0703 718.104 94.7961 713.112 94.7961H710.304V95.9055H735.992V94.7961H732.248C727.256 94.7961 726.736 93.0703 726.736 87.1532V16.0254C726.736 10.1083 727.256 8.38249 732.248 8.38249H735.992V7.27304H719.664L690.128 87.523V16.0254C690.128 10.1083 690.752 8.38249 695.744 8.38249H698.448V7.27304H672.864V8.38249H676.504C681.496 8.38249 682.016 10.1083 682.016 16.0254V87.1532C682.016 93.0703 681.496 94.7961 676.504 94.7961H672.864V95.9055Z"
        fill="black"
      />
    </svg>
  )
}

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
    console.log(this.state.colorful)
    console.log(this.state.styl)
    if (this.state.colorful == 'true') {
      if (this.state.styl == 'abstract') {
        window.location.href = '/prototypes/5'
      } else if (this.state.styl == 'classic') {
        window.location.href = '/prototypes/4'
      }
    } else {
      if (this.state.styl) {
        if (this.state.styl == 'abstract') {
          window.location.href = '/prototypes/2'
        } else if (this.state.styl == 'classic') {
          window.location.href = '/prototypes/3'
        }
      }
    }
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
        <Header isDisabled="generate" />
        <div className="MainColumn">
          <HugeCard Icon={header} text1="Помоги нам подобрать для тебя самый лучший алгоритм генерации суперобложки! Ответь на несколько вопросов, о том, какой бы ты хотел видеть свою книгу">
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
                  text="Что-то, типа, черно-белое"
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
                  text="Люблю всякое экспериментальное"
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
