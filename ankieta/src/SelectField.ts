import { Field } from "./Field";
import { FieldType } from "./FieldType";

export class SelectField implements Field {
  name: string;
  label: string;
  type: FieldType = FieldType.select;
  element: HTMLSelectElement;
  labelhtml: HTMLLabelElement;
  option1: HTMLOptionElement;
  div: HTMLElement;

  constructor(name: string, label: string, options: string[]) {
    this.name = name;
    this.label = label;
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLSelectElement>document.createElement("select");
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    options.forEach((element) => {
      this.option1 = <HTMLOptionElement>document.createElement("option");
      this.option1.innerHTML = element;
      this.option1.value = element;
      this.element.appendChild(this.option1);
    });
    this.labelhtml.innerHTML = this.label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test5 = document.querySelector("#box2");
    test5?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}
