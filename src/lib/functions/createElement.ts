// export const createHTMLElement = (elm: string, classes: string[], parent: HTMLHtmlElement) => {
//   const htmlElm = document.createElement(elm);
//   htmlElm?.classList.add(...classes);
//   parent?.append(htmlElm);

//   return htmlElm;
// };

export class createHTMLElement extends HTMLElement {
  elm: HTMLElement;
  classes: string[];
  parent: HTMLElement;

  constructor(elm: string, classes: string[], parent: HTMLElement) {
    super();
    this.elm = document.createElement(elm) as HTMLElement;
    this.classes = classes;
    this.parent = parent;
  }

  set htmlElement(elm: string) {
    this.elm = document.createElement(elm) as HTMLElement;
  }

  set htmlClasses(classes: string[]) {
    this.classes = classes;
  }

  set htmlParent(parent: HTMLElement) {
    this.parent = parent;
  }

  get createElement() {
    const createdElement = this.elm.classList.add(...this.classes);
    this.parent.append(createdElement);
    return createdElement;
  }
}
