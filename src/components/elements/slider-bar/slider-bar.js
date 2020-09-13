import './slider-bar.scss';
import SliderBarSlider from './__slider/slider-bar__slider';
import SliderBarRange from './__range/slider-bar__range';

export default class SliderBar {
  constructor(option) {
    this.idElement = option.id;
    
    switch(option.type) {
      case 'slider':
        this.sliderBarElement = new SliderBarSlider(option); break;
      case 'range':
        this.sliderBarElement = new SliderBarRange(option); break;
    }

  }

  
}