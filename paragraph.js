class Paragraph extends HTMLElement {
    constructor() {
      super();
  
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" });
      //append a clone of the template content to the shadow root
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }
}

customElements.define('my-paragraph', Paragraph);