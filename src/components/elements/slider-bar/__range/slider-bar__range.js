import './slider-bar__range.scss'

export default class SliderBarRange {
  constructor(option) {
    this.idSliderBar = option.id;
    document.getElementById(option.id + 'Body').addEventListener('click', () => this.clickSliderBody(event));
    document.getElementById(option.id + 'From').addEventListener('mousemove', () => this.sliderMoveFrom(event)); 
    document.getElementById(option.id + 'To').addEventListener('mousemove', () => this.sliderMoveTo(event)); 
    this.moveProgressBar();
  }

  clickSliderBody(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + 'Body').getBoundingClientRect();
    let fromCoordinat = document.getElementById(this.idSliderBar + 'From').getBoundingClientRect();
    let toCoordinat = document.getElementById(this.idSliderBar + 'To').getBoundingClientRect();

    if ( Math.abs(event.clientX - fromCoordinat.x) < Math.abs(event.clientX - toCoordinat.x) ) {
      document.getElementById(this.idSliderBar + 'From').style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    } else {
      document.getElementById(this.idSliderBar + 'To').style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
      
    }
    this.moveProgressBar();
  }

  moveProgressBar() {
    let parentCoordinat = document.getElementById(this.idSliderBar + 'Body').getBoundingClientRect();
    let fromCoordinat = document.getElementById(this.idSliderBar + 'From').getBoundingClientRect();
    let toCoordinat = document.getElementById(this.idSliderBar + 'To').getBoundingClientRect();
    let progressBar = document.getElementById(this.idSliderBar + 'ProgressBar');

    progressBar.style.left = fromCoordinat.x - parentCoordinat.x + 'px';
    progressBar.style.width = (toCoordinat.x - fromCoordinat.x) + 'px';
  }

  sliderMoveFrom(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    if (event.which == 1) {
      document.getElementById(this.idSliderBar + "From").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    }
    this.moveProgressBar();
  }
  sliderMoveTo(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    if (event.which == 1) {
      document.getElementById(this.idSliderBar + "To").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    }
    this.moveProgressBar();
  }
}