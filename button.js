class Button extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});

    const button = document.createElement('button');
    button.setAttribute('class', 'btn');  
    button.setAttribute('content', 'Click Me');
    button.textContent = 'Click Me';

    const label = document.createElement('label');
    label.setAttribute('class', 'message');  
    label.innerText = 'Initial State'

    shadow.appendChild(label);
    shadow.appendChild(button);
  }

  //Called when the element is mounted on the DOM
  connectedCallback() {
    const buttonElement = this.shadowRoot.querySelector('button');
    buttonElement.addEventListener('mousedown', this._handleMouseDown.bind(this));
    buttonElement.addEventListener('mouseup', this._handleMouseUp.bind(this));
    this.shadowRoot.appendChild(buttonElement);
  }

  _handleMouseDown() {
    console.log('mouse down');
    const messageElement = this.shadowRoot.querySelector('label');
    messageElement.innerText = 'Mouse Down ';
  }

  _handleMouseUp() {
    console.log('mouse up');
    const messageElement = this.shadowRoot.querySelector('label');
    messageElement.innerText = 'Mouse Up ';
  }
}

window.customElements.define('wc-button', Button);
