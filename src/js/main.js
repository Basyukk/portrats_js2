import modals from './modules/modals';
import sliders from './modules/sliders';
import showMoreStyles from './modules/showMoreStyles';
import forms from './modules/forms';
import calc from './modules/calc';
import filter from './modules/filter';
import pictureSize from './modules/pictureSize';

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    forms();
    filter();
    showMoreStyles('.button-styles', '#styles .row');
    calc('#size', '#material', '#options', '.promocode', '.calc-price');
    pictureSize('.sizes-block');

});

