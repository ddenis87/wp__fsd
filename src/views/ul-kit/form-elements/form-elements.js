// scss
import './form-elements.scss'

// javaScript
// - units component
import '@components/units/ul-kit/header/header.js'

// components form
import '@components/elements/text-field/text-field.js'
import '@components/elements/toggle/toggle.js'
import '@components/elements/button-box/button-box.js'
import Dropdown from '@components/elements/dropdown/dropdown.js'
import SliderBar from '@components/elements/slider-bar/slider-bar'

let roomProps = new Dropdown({
  id: 'propsRoom',
  type: 'props',
  typeSelectTitle: 'text',
  propsDefault: [2,2,0],
  propsLimit: [[1,5],[1,7],[0,2]],
  propsMask: [
    ['спальня','спальни','спален'],
    ['кровать','кровати','кроватей'],
    ['ванная комната','ванные комнаты','ванных комнат'],
  ],
})
let entryDate = new Dropdown({
  id: 'entryDate',
  type: 'date',
})
let outDate = new Dropdown({
  id: 'outDate',
  type: 'date',
})
let rangeDate = new Dropdown({
  id: 'rangeDate',
  type: 'date',
  range: true
})

let sumSlider = new SliderBar(
  {
    id: 'sumSlider',
    type: 'range'
  }
);