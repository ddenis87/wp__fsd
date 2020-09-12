import './__date/dropdown-date__date';

export default class DropdownDate {
  constructor(option) {
    this.id = option.id;
    if (option.range) { this.range = option.range; } else { this.range = false; }
    let optionCalendar = {
      minDate: new Date()
    }
    if (option.range) {optionCalendar.range = option.range;}

    this.listPropsItem = [];
    this.airCalendar = $('#' + this.id + 'Calendar');
    this.airCalendar.datepicker(optionCalendar)
    

    document.getElementById(this.id + 'Slider').classList.add('dropdown-body__slider-date');
    document.getElementById(this.id + 'Control').classList.add('dropdown-body__control-date');
    this.setValueDefault();
  }
  setValueDefault() {
    this.airCalendar.datepicker().data('datepicker').clear();
    if (this.range == false) {
      document.getElementById(this.id + 'SelectTitle').innerText = 'ДД.ММ.ГГГГ';
    } else {
      document.getElementById(this.id + 'SelectTitle').innerText = 'ДД.ММ - ДД.ММ';
    }
  }
  getValue() {
    return this.airCalendar.datepicker().data('datepicker').selectedDates;
  }
  updateSelectTitle() {
    if (this.range == false) {
      document.getElementById(this.id + 'SelectTitle').innerText = this.formatedDate(this.airCalendar.datepicker().data('datepicker').selectedDates);
    } else {
      if (this.airCalendar.datepicker().data('datepicker').selectedDates.length == 2) {
        document.getElementById(this.id + 'SelectTitle').innerText = this.formatedDateRange(this.airCalendar.datepicker().data('datepicker').selectedDates);
      }
    }
  }
  formatedDate(noFormat) {
    let formatDate = '';
    let dateNow = new Date(noFormat);
    let dd = (+dateNow.getDate() < 10) ? '0' + dateNow.getDate() : dateNow.getDate();
    let mm = (+dateNow.getMonth() < 10) ? '0' + (+dateNow.getMonth() + 1) : +dateNow.getMonth() + 1;
    let yyyy = dateNow.getFullYear();
    formatDate = dd + '.' + mm + '.' + yyyy;
    return formatDate;
  }
  formatedDateRange(noFormat) {
    let formatDate = '';
    let option = {
      day: '2-digit',
      month: 'short'
    };
    formatDate = Intl.DateTimeFormat('ru-RU',option).format(new Date(noFormat[0])).slice(0, -1) + ' - ' +
                  Intl.DateTimeFormat('ru-RU',option).format(new Date(noFormat[1])).slice(0, -1)
    return formatDate;
  }
}