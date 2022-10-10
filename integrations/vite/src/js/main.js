// Import our custom CSS
import '../scss/main.scss'
import '../scss/utility.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })
