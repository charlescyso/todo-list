import { DOM_CONTENT } from './scripts/initialDOM.js';
import { DOM_EVENTS } from './scripts/DOMEvents.js';


document.addEventListener('DOMContentLoaded', () => {
    DOM_CONTENT();
    DOM_EVENTS();
})