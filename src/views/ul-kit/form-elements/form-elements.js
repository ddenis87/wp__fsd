// scss
import './form-elements.scss'

// javaScript
// - units component
import '@components/units/header-ul-kit/header-ul-kit.js'

// components form
import '@components/elements/text-field/text-field.js'
import Dropdown from '@components/elements/dropdown/dropdown.js'

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
