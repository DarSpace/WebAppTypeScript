import { Field } from "./Field";
import { FieldType } from "./FieldType";

export class TextAreaField implements Field {
  name: string;
  label: string;
  type: FieldType = FieldType.textArea;
  element: HTMLTextAreaElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.name = name;
    this.label = label;
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLTextAreaElement>document.createElement("textarea");
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.labelhtml.innerHTML = this.label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test2 = document.querySelector("#box2");
    test2?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}
