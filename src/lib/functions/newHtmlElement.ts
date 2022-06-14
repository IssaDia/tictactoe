// export const createHTMLElement = (elm: string, classes: string[], parent: HTMLHtmlElement) => {
//   const htmlElm = document.createElement(elm);
//   htmlElm?.classList.add(...classes);
//   parent?.append(htmlElm);

//   return htmlElm;
// };

export class NewHTMLElement extends HTMLElement {
  elm: HTMLElement;
  classes: string[];

  constructor(elm: string, classes: string[]) {
    super();
    this.elm = document.createElement(elm) as HTMLElement;
    this.classes = classes;
  }

  set htmlElement(elm: string) {
    this.elm = document.createElement(elm) as HTMLElement;
  }

  set htmlClasses(classes: string[]) {
    this.classes = classes;
  }

  get createElement(): HTMLElement {
    const createdElement = this.elm;
    createdElement.classList.add(this.classes.join());

    return createdElement;
  }
}

window.customElements.define("new-html-element", NewHTMLElement);
