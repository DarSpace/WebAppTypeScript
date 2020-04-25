enum FieldType {
  textBox = "text",
  textArea = "textarea",
  date = "date",
  email = "email",
  checkBox = "checkbox",
  radio = "radio",
}

interface Field {
  name: string;
  label: string;
  type: FieldType;
  render(): HTMLElement;
  getValue(): any;
}

class InputField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLInputElement>document.createElement("input");
    this.name = name;
    this.element.type = "text";
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.label = label;
    this.labelhtml.htmlFor = this.name;
    this.element.name = this.name;
    this.div.appendChild(this.element);
    this.div.appendChild(this.labelhtml);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}

class TextAreaField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLInputElement>document.createElement("input");
    this.name = name;
    this.element.type = "textarea";
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.label = label;
    this.labelhtml.htmlFor = this.name;
    this.element.name = this.name;
    this.div.appendChild(this.element);
    this.div.appendChild(this.labelhtml);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}


class DateField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLInputElement>document.createElement("input");
    this.name = name;
    this.element.type = "date";
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.label = label;
    this.labelhtml.htmlFor = this.name;
    this.element.name = this.name;
    this.div.appendChild(this.element);
    this.div.appendChild(this.labelhtml);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}


class EmailField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLInputElement>document.createElement("input");
    this.name = name;
    this.element.type = "email";
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.label = label;
    this.labelhtml.htmlFor = this.name;
    this.element.name = this.name;
    this.div.appendChild(this.element);
    this.div.appendChild(this.labelhtml);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}














class App {
  form: any;
  constructor() {
    this.form = new Form("1");
  }
}

class Form {
  fields: Field[];
  formElement: HTMLElement;
  constructor(id: string) {
    this.fields = new Array();
    



}

/*
////let d = new InputField("input", "Input");
///let x = document.getElementById("test");

//x?.appendChild(d.render());
*/
