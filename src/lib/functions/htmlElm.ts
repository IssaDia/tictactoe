// function CustomElement(name: string) {
//   return function (constructor: typeof HTMLElement) {
//     customElements.define(name, constructor);
//   };
// }

// @CustomElement("html-elm")
export class HTMLElm extends HTMLElement {
  constructor(public elm: string, public classes: string, public parent: HTMLElement, public id: string) {
    super();

    this.elm = elm as string;
    this.classes = classes as string;
    this.parent = parent as HTMLElement;
    this.id = id;

    this.attachShadow({ mode: "open" });

    const wrapper = document.createElement(elm) as HTMLElement;
    wrapper.className += this.classes;
    wrapper.id = id;
    console.log(parent);

    parent.append(wrapper);

    this.shadowRoot?.appendChild(wrapper);
  }

  connectedCallback() {
    this.innerHTML = "Hello world";
  }
}

window.customElements.define("html-elm", HTMLElm);
