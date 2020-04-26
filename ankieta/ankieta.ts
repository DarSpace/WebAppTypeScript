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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

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
    return this.div;
  }
  getValue(): any {
    return this.element.value;
  }
}

/*
function  createBox() {
const NameBox = new InputField("Name", "Imię");
const NameBox2 = new InputField("Surname", "Nazwisko");
const DateBox = new DateField("Data", "data urodzenia");
const EmailBox = new EmailField("email", "podaj Email");
const Check1 = new CheckboxField("box1", "Czy masz ukończone 18 lat");
const SelektBox = new SelectField("select", "Wybrany kierunek studiów");
const TextAreaBox = new TextAreaField("TextArea1", " uwagi");
*/
//};
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
  NameBox: InputField;
  NameBox2: InputField;
  DateBox: DateField;
  EmailBox: EmailField;
  Check1: CheckboxField;
  SelektBox: SelectField;
  TextAreaBox: TextAreaField;
  constructor(id: string) {
    this.fields = new Array();
    this.NameBox = new InputField("Name", "Imię");
    this.NameBox2 = new InputField("Surname", "Nazwisko");
    this.DateBox = new DateField("Data", "data urodzenia");
    this.EmailBox = new EmailField("email", "podaj Email");
    this.Check1 = new CheckboxField("box1", "Czy masz ukończone 18 lat");
    this.SelektBox = new SelectField("select", "Wybrany kierunek studiów");
    this.TextAreaBox = new TextAreaField("TextArea1", " uwagi");
    this.formElement = document.getElementById(id);
  }

  render(): void {}

  getValue(): void {}
}
