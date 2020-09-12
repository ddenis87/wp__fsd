import DropdownPropsItem from './__item/dropdown-props__item.js'

export default class DropdownProps {
  constructor(option) {
    this.id = option.id;
    this.typeSelectTitle = option.typeSelectTitle;
    this.propsMask = option.propsMask;
    this.arrProps = [];
    let dropdownPropsItem = document.querySelectorAll(`#${this.id}Slider .dropdown-props__item`);

    for (let i = 0; i < dropdownPropsItem.length; i++) {
      let dropdownPropsItemClass = new DropdownPropsItem({
        'id': dropdownPropsItem[i].id,
        'propsDefault' : option.propsDefault[i],
        'propsLimit': option.propsLimit[i]
      });
      this.arrProps.push(dropdownPropsItemClass);
    }

    this.setValueDefault();
    this.updateSelectTitle(this.typeSelectTitle);
  }

  setValueDefault() {
    for (let i = 0; i < this.arrProps.length; i++) {
      this.arrProps[i].setValueDefault();
    }
    this.updateSelectTitle(this.typeSelectTitle);
  }
  getValue() {
    let values = [];
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