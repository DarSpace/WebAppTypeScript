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

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test1 = document.querySelector("#box2");
    test1?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}
const NameBox = new InputField("Name", "Imię");
//-----
class TextAreaField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLTextAreaElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");

    this.element = <HTMLTextAreaElement>document.createElement("textarea");
    this.name = name;

    this.labelhtml = <HTMLLabelElement>document.createElement("label");

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test2 = document.querySelector("#box2");
    test2?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}
const TextAreaBox = new TextAreaField("co polecasz", " TextAreaBox1");
//------
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

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test3 = document.querySelector("#box2");
    test3?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}

const DateBox = new DateField("Data", "data");
//-----
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

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test4 = document.querySelector("#box2");
    test4?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}
const EmailBox = new EmailField("email", "podaj Email");
//---
class SelectField implements Field {
  name: string;
  label: string;
  type: FieldType;
  element: HTMLSelectElement;
  labelhtml: HTMLLabelElement;

  div: HTMLElement;

  constructor(name: string, label: string) {
    this.div = <HTMLElement>document.createElement("div");

    this.element = <HTMLSelectElement>document.createElement("select");
    this.name = name;
    this.labelhtml = <HTMLLabelElement>document.createElement("label");

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test5 = document.querySelector("#box2");
    test5?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}
const SelektBox = new SelectField("cos", "Iddds");
//-------------

class CheckboxField implements Field {
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
    this.element.type = "checkbox";
    this.labelhtml = <HTMLLabelElement>document.createElement("label");

    this.labelhtml.innerHTML = label;
    this.element.name = this.name;
    this.div.appendChild(this.labelhtml);
    this.div.appendChild(this.element);

    const test6 = document.querySelector("#box2");
    test6?.appendChild(this.div);
  }
  render(): HTMLElement {
    return this.element;
  }
  getValue(): any {
    return this.element.value;
  }
}
const Check1 = new CheckboxField("box1", "Imię");

//=====

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
    this.formElement = document.getElementById(id);
  }

  render(): void {}

  getValue(): void {}
}
