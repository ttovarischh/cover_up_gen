import React, { Component } from 'react'

export default class Footer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="FooterWrapper">
        <div className="Row">
          <svg
            width="96"
            height="68"
            viewBox="0 0 96 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M85.0674 60.7925C91.1208 53.3185 94.6755 44.2052 94.6755 34.3703C94.6755 24.5353 91.1208 15.422 85.0674 7.94807"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M13.7614 34C13.7614 15.6535 29.0021 0.750003 47.8407 0.750005C66.6793 0.750006 81.9199 15.6535 81.9199 34C81.9199 52.3465 66.6793 67.25 47.8407 67.25C29.002 67.25 13.7614 52.3465 13.7614 34Z"
              stroke="black"
              strokeWidth="1.5"
            />
            <path
              d="M10.6084 60.7925C4.55495 53.3185 1.00033 44.2052 1.00033 34.3703C1.00033 24.5353 4.55495 15.422 10.6084 7.94807"
              stroke="black"
              strokeWidth="1.5"
            />
          </svg>
          <p>
            Cover Up Generator © 2023 Предприниматель может зарегистрировать
            логотип в качестве товарного знака в Роспатенте, чтобы защитить
            его от копирования и незаконного.
          </p>
        </div>
        <div className="Row">
          <a>
            <h2>Vk</h2>
          </a>
          <a>
            <h2>LinkedIn</h2>
          </a>
          <a>
            <h2>Behance</h2>
          </a>
          <a>
            <h2>YouTube</h2>
          </a>
          <a>
            <h2>GitHub</h2>
          </a>
        </div>
        <div className="Row">
          <a>
            <h2>О сервисе</h2>
          </a>
          <a>
            <h2>Инструкция к генератору</h2>
          </a>
          <a>
            <h2>Генерировать</h2>
          </a>
          <a>
            <h2>Политика конфиденциальности</h2>
          </a>
          <a>
            <h2>Cookies</h2>
          </a>
        </div>
      </div>
    )
  }
}
