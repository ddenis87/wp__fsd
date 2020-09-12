import DropdownPropsItem from './__item/dropdown-props__item.js'

export default class DropdownProps {
  constructor(option) {
    this.id = option.id;
    this.typeSelectTitle = option.typeSelectTitle;
    this.propsMask = option.propsMask;
    // if (option.titleDefault) { this.titleDefault = option.titleDefault; }
    // this.values = {'value': []}
    this.arrProps = [];
    let dropdownPropsItem = document.querySelectorAll(`#${this.id}Slider .dropdown-props__item`);
    // console.log(dropdownPropsItem);
    // document.getElementById(this.id + 'Slider').addEventListener('click', (event) => this.clickSlider(event));

    for (let i = 0; i < dropdownPropsItem.length; i++) {
      let dropdownPropsItemClass = new DropdownPropsItem({
        'id': dropdownPropsItem[i].id,
        'propsDefault' : option.propsDefault[i],
        'propsLimit': option.propsLimit[i]
      });
      // this.arrProps.push({'id': dropdownPropsItem[i].id, 'class': dropdownPropsItemClass});
      this.arrProps.push(dropdownPropsItemClass);
    }
    // console.log(this.arrProps)
    // if (option.control == false) document.getElementById(this.id + 'Control').classList.add('dropdown__control_noneVisibility')

    // this.dropdownControl = new DropdownControl(this.id, this.arrProps);
    // this.updateTitle();
    // this.setDropdownDefault(option);
    this.setValueDefault();
    this.updateSelectTitle(this.typeSelectTitle);
  }

  // clickSlider(event) {
  //   if (event.target.id.slice(-9) == 'Increment' || event.target.id.slice(-9) == 'Decrement') {
  //     // this.dropdownControl.enableClear();
  //     this.updateSelectTitle(this.typeSelectTitle);
  //   }
  //   //  else if (event.target.id.slice(-5) == 'Clear') {
  //   //   this.dropdownControl.setDropdownDefault(this.listPropsItem);
  //   //   if (this.titleDefault) document.getElementById(this.idDropdown + 'Title').innerText = this.titleDefault;
  //   // } else if (event.target.id.slice(-5) == 'Apply') {
  //   //   this.dropdownClose();
  //   // }
  // }

  setValueDefault() {
    for (let i = 0; i < this.arrProps.length; i++) {
      // this.arrProps[i].class.setValueDefault();
      this.arrProps[i].setValueDefault();
    }
    this.updateSelectTitle(this.typeSelectTitle);
  }
  getValue() {
    let values = [];
    // this.values.value.length = 0;
    for (let propsItem of this.arrProps) {
      values.push({'id': this.id + '__' + propsItem.idPropsItem, 'value': propsItem.value });
    }
    return values;
  }

  updateSelectTitle(typeSelectTitle) {
    let title = '';
    switch(typeSelectTitle) {
      case 'text': {
        for (let i = 0; i < this.arrProps.length; i++) {
          let value = this.arrProps[i].value;
          switch (true) {
            case (value == 0):
            case (value > 4):
              title += value + ' ' + this.propsMask[i][2];
              break;
            case (value == 1):
              title += value + ' ' + this.propsMask[i][0];
              break;
            case (1 < value < 5):
              title += value + ' ' + this.propsMask[i][1];
              break;
          }
          if (i < this.arrProps.length - 1) title += ', '
        }
      } break;
      case 'sum': {
        let value = 0;
        for (let i = 0; i < this.arrProps.length; i++) {
          value += this.arrProps[i].value;
        }
        switch (true) {
          case (value == 0):
          case (value > 4):
            title += value + ' ' + this.propsMask[0][2];
            break;
          case (value == 1):
            title += value + ' ' + this.propsMask[0][0];
            break;
          case (1 < value < 5):
            title += value + ' ' + this.propsMask[0][1];
            break;
        }
      } break;
    }
    document.getElementById(this.id + 'SelectTitle').innerText = title;
  }
}