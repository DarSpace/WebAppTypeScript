import { Field } from "./Field";
import { FieldType } from "./FieldType";

export class SelectFieldApi implements Field {
  name: string;
  label: string;
  type: FieldType = FieldType.select;
  element: HTMLSelectElement;
  labelhtml: HTMLLabelElement;
  option: HTMLOptionElement;
  div: HTMLElement;

  constructor(name: string, label: string, options: string[]) {
    this.name = name;
    this.label = label;
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLSelectElement>document.createElement("select");
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.fetchOptions<{ name: string; region: string }>(
      "https://restcountries.eu/rest/v2/all"
    ).then((data) => {
      data
        .filter((x) => x.region === "Europe")
        .map((x) => x.name)
        .forEach((element) => {
          let option = <HTMLOptionElement>document.createElement("option");
          option.text = element;
          option.value = element;
          this.element.options.add(option);
        });
    });

    this.labelhtml.innerHTML = this.label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test5 = document.querySelector("#box2");
    test5?.appendChild(this.div);
  }
  fetchOptions<T>(url: string): Promise<T[]> {
    return fetch(url)
      .then((res) => res.json())
      .then((res) => {
        return res;
      })

      .catch((e) => {
        console.log("API errore fetching ");
      });
  }

  render(): HTMLElement {
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}
