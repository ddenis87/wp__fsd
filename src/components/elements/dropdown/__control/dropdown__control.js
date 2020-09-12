import './dropdown__control.scss'

export default class DropdownControl {
  constructor(idDropdown, listPropsItem) {
    this.idDropdown = idDropdown;
    this.listPropsItem = listPropsItem;
  }
  enableClear() { document.getElementById(this.idDropdown + 'Clear').classList.remove('dropdown__control-button_clear_disabled'); }
  disableClear() { document.getElementById(this.idDropdown + 'Clear').classList.add('dropdown__control-button_clear_disabled'); }

  setDropdownDefault(listPropsItem) {
    for (let i = 0; i < listPropsItem.length; i++) {
      listPropsItem[i].class.setValueDefault();
    }
    this.disableClear();
  }
}