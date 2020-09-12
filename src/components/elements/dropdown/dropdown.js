"use strict"
// - SCSS
import './dropdown.scss';
// - JS
import DropdownProps from './dropdown-props.js';
import DropdownDate from './dropdown-date.js';
import DropdownControl from './__control/dropdown__control.js';

export default class Dropdown {
  constructor(option) {
    this.id = option.id;
    this.typeSelectTitle = option.typeSelectTitle;
    this.type = option.type;
    this.DropdownSlider = {};
    let isControl = ('control' in option && option.control == true) ? true : false;

    document.getElementById(this.id).addEventListener('blur', () => this.dropdownClose());
    document.getElementById(this.id + 'ButtonDrop').addEventListener('click', () => this.dropdownSwitch());
    document.getElementById(this.id + 'Slider').addEventListener('click', (event) => this.dropdownSliderClick(event));
    switch(this.type) {
      case 'props': 
        this.DropdownSlider = new DropdownProps(option); 
        break;
      case 'date':
        this.DropdownSlider = new DropdownDate(option);
        isControl = true;
        break;
    }
    if (isControl) {
      this.DropdownControl = new DropdownControl(this.id, this.listPropsItem);
      document.getElementById(this.id + 'Control').classList.remove('dropdown__control_noneDisplay');
    }
  }

  dropdownSwitch() {
    document.getElementById(this.id + 'Slider').classList.toggle('dropdown-body__slider-drop');
    document.getElementById(this.id + 'Box').classList.toggle('dropdown-body__select-drop');
  }
  dropdownClose() {
    document.getElementById(this.id + 'Slider').classList.remove('dropdown-body__slider-drop');
    document.getElementById(this.id + 'Box').classList.remove('dropdown-body__select-drop');
  }
  dropdownSliderClick(event) {
    if (this.type == 'date') {
      if (this.DropdownControl) this.DropdownControl.enableClear();
      this.dropdownUpdateSelectTitle();
    }
    if (event.target.id.slice(-9) == 'Increment' || event.target.id.slice(-9) == 'Decrement') {
      if (this.DropdownControl) this.DropdownControl.enableClear();
      this.dropdownUpdateSelectTitle();
    } else if (event.target.id.slice(-5) == 'Clear') {
        this.dropdownSetDefault();
        if (this.DropdownControl) this.DropdownControl.disableClear();
    } else if (event.target.id.slice(-5) == 'Apply') {
        this.dropdownClose();
    }
  }
  dropdownUpdateSelectTitle() {
    this.DropdownSlider.updateSelectTitle(this.typeSelectTitle);
  }
  dropdownSetDefault() {
    this.DropdownSlider.setValueDefault();
  }
  dropdownGetValue() {
    return this.DropdownSlider.getValue();
  }
}