import './slider-bar__slider.scss'

export default class SliderBarSlider {
  constructor(option) {
    this.idSliderBar = option.id;
    document.getElementById(option.id + 'Body').addEventListener('click', () => this.clickSliderBody(event));
    document.getElementById(option.id + 'Slider').addEventListener('mousemove', () => this.sliderMove(event)); 

    this.moveProgressBar();
  }

  clickSliderBody(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    document.getElementById(this.idSliderBar + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    this.moveProgressBar();
  }

  moveProgressBar() {
    let parentCoordinat = document.getElementById(this.idSliderBar + 'Body').getBoundingClientRect();
    let sliderCoordinat = document.getElementById(this.idSliderBar + 'Slider').getBoundingClientRect();
    // let toCoordinat = document.getElementById(this.idSliderBar + 'To').getBoundingClientRect();
    let progressBar = document.getElementById(this.idSliderBar + 'ProgressBar');

    // progressBar.style.left = fromCoordinat.x - parentCoordinat.x + 'px';
    progressBar.style.width = sliderCoordinat.x - parentCoordinat.x + 'px';
    // progressBar.style.width = (toCoordinat.x - fromCoordinat.x) + 'px';
  }

  sliderMove(event) {
    let parentCoordinat = document.getElementById(this.idSliderBar + "Body").getBoundingClientRect();
    if (event.which == 1) {
      document.getElementById(this.idSliderBar + "Slider").style.left = event.clientX - (parentCoordinat.x + 10) + 'px';
    }
    this.moveProgressBar();
  }
}