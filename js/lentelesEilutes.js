import {eilute} from './eilute.js';

function lentelesEilutes(selector, data, menesiuArray) {
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data.length; j++) {
            if (data[i].month < data[j].month) {
                const temp = data[i];
                data[i] = data[j];
                data[j] = temp;
            }
        }
    }
    const DOM = document.querySelector(selector);
    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        HTML += eilute(data[i], menesiuArray[i]);
    }

    return DOM.innerHTML = HTML;
}

export {lentelesEilutes};