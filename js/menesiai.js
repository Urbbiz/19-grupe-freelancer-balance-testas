import {data} from './data.js';
import {lentelesEilutes} from './lentelesEilutes.js';
import {lentelesFooter} from './lentelesFooter.js';


const menesiai = [
    'Sausis',
    'Vasaris',
    'Kovas',
    'Balandis',
    'Gegužė',
    'Birželis',
    'Liepa',
    'Rugpjūtis',
    'Rugsėjis',
    'Spalis',
    'Lapkritis',
    'Gruodis'
];


lentelesEilutes ('.table-contnt',data, menesiai);
lentelesFooter ('.table-footer', data);