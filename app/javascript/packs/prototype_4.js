import { Slider } from '../prototypes/prototype_4/app'

let audioCtx
let oscillator

function createOscillator() {
  // create web audio api context
  audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  // create Oscillator node
  oscillator = audioCtx.createOscillator();

  oscillator.type = 'square';
  oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
  oscillator.connect(audioCtx.destination);
  oscillator.start();
}

function changeOscillatorFrequency() {
  const slider = document.getElementById('uhh')
  oscillator.frequency.setValueAtTime(sl.value, audioCtx.currentTime); // value in hertz
}

function createSlider() {
  const container = document.getElementById('prototype_4')
  const sl = document.getElementById('uhh')

  sl.addEventListener('contentchange', () => {
    // changeOscillatorFrequency()
      alert("Works!")
  })
}


document.addEventListener('DOMContentLoaded', () => {
  console.log('Test ', getRandomArbitrary(0, 1))

  const container = document.getElementById('prototype_4')
  const frame = document.createElement('div')
  const app = document.createElement('div')
  const name = document.createElement('div')
  const rec_a = document.createElement('div')
  const rec_b = document.createElement('div')
  const rec_c = document.createElement('div')
  const rec_d = document.createElement('div')
  const rec_e = document.createElement('div')
  const w_one = document.createElement('div')
  const w_two = document.createElement('div')
  const w_three = document.createElement('div')
  const w_four = document.createElement('div')
  const w_five = document.createElement('div')
  const w_six = document.createElement('div')
  const side = document.createElement('div')
  const side_l = document.createElement('div')
  const but = document.createElement('div')
  const circle = document.createElement('div')
  const smile = document.createElement('div')
  const no_smile = document.createElement('div')
  const circle_one = document.createElement('div')
  const circle_two = document.createElement('div')
  const circle_three = document.createElement('div')
  const circle_four = document.createElement('div')
  const b_one = document.createElement('div')
  const b_two = document.createElement('div')
  const b_three = document.createElement('div')
  const line_a = document.createElement('div')
  const line_b = document.createElement('div')
  const line_c = document.createElement('div')
  const line_d = document.createElement('div')
  const line_e = document.createElement('div')
  const line_f = document.createElement('div')
  const line_u = document.createElement('div')

  but.innerText = '✺'
  name.innerText = 'second//oscillator//1409'
  smile.innerText = '☺'
  no_smile.innerText = '☹'

  frame.classList.add('frame')
  app.setAttribute("id", "app");
  frame.classList.add('frame')
  circle.classList.add('circle')
  name.classList.add('name')
  rec_a.classList.add('rec_a')
  rec_b.classList.add('rec_b')
  rec_e.classList.add('rec_e')
  rec_c.classList.add('rec_c')
  rec_d.classList.add('rec_d')
  w_one.classList.add('w_one', 'triangle')
  w_two.classList.add('w_two', 'triangle')
  w_three.classList.add('w_three', 'triangle')
  w_four.classList.add('w_four', 'triangle')
  w_five.classList.add('w_five', 'triangle')
  w_six.classList.add('w_six', 'triangle')
  but.classList.add('but')
  line_a.classList.add('line_a')
  line_b.classList.add('line_b')
  line_c.classList.add('line_c')
  line_d.classList.add('line_d')
  line_e.classList.add('line_e')
  line_f.classList.add('line_f')
  line_u.classList.add('line_u')
  side.classList.add('side')
  side_l.classList.add('side', 'l')
  circle_one.classList.add('circle_one')
  circle_two.classList.add('circle_two')
  circle_three.classList.add('circle_three')
  circle_four.classList.add('circle_four')
  smile.classList.add('smile')
  no_smile.classList.add('no_smile')
  b_one.classList.add('b_one', 'triangle')
  b_two.classList.add('b_two', 'triangle')
  b_three.classList.add('b_three', 'triangle')



  container.appendChild(frame)
  container.appendChild(app)

  frame.appendChild(but)
  container.appendChild(name)
  container.appendChild(rec_a)
  container.appendChild(rec_b)
  container.appendChild(rec_e)
  container.appendChild(rec_c)
  container.appendChild(rec_d)
  container.appendChild(circle)
  container.appendChild(w_one)
  container.appendChild(w_two)
  container.appendChild(w_three)
  container.appendChild(w_four)
  container.appendChild(w_five)
  container.appendChild(w_six)
  container.appendChild(line_a)
  container.appendChild(line_b)
  container.appendChild(line_c)
  container.appendChild(line_d)
  container.appendChild(line_e)
  container.appendChild(line_f)
  container.appendChild(line_u)
  container.appendChild(side)
  container.appendChild(side_l)
  container.appendChild(smile)
  container.appendChild(no_smile)
  side.appendChild(circle_one)
  side_l.appendChild(circle_two)
  container.appendChild(circle_three)
  container.appendChild(circle_four)
  container.appendChild(b_one)
  container.appendChild(b_two)
  container.appendChild(b_three)

  // slider app options
  const opts = {
      DOMselector: '#app',
      sliders: [
          {
              radius: 100,
              min: 0,
              max: 1000,
              step: 10,
              initialValue: 440,
              color: '#79ff39',
              id: 'slider'
          }
      ]
  };

  // instantiate the slider
  const slider = new Slider(opts);
  slider.draw();


  // slider.classList.add('uh')
  // createSlider()

  frame.addEventListener('click', () => {
    createOscillator()
  })

})
