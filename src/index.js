import { DOM_CONTENT } from './scripts/initialDOM.js';
import { DOM_EVENTS } from './scripts/DOMEvents.js';

import './styles/normalize.css'
import './styles/style.css';

document.addEventListener('DOMContentLoaded', () => {
    DOM_CONTENT();
    DOM_EVENTS();
})