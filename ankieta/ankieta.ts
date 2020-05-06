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
  option1: HTMLOptionElement;
  option2: HTMLOptionElement;
  div: HTMLElement;

  constructor(name: string, label: string) {
    // trzeci parametr tablica
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLSelectElement>document.createElement("select");
    this.name = name;
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.option1 = <HTMLOptionElement>document.createElement("option");
    // this.option1.innerHTML = "AGH";
    // this.option1.value = "AGH";
    this.option2 = <HTMLOptionElement>document.createElement("option");
    // this.option2.innerHTML = "UJ";
    // this.option2.value = "UJ";
    this.element.appendChild(this.option1);
    this.element.appendChild(this.option2);
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

class DescriptionBox {
  local: Field[];
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;
  button2: HTMLElement;
  box: HTMLElement;

  nameBox: HTMLElement;
  surname: HTMLElement;
  date: HTMLElement;
  email: HTMLElement;
  checkBox: HTMLElement;
  selectBox: HTMLElement;
  textArea: HTMLElement;

  constructor(
    nameBox: string,
    surname: string,
    date: Date,
    email: string,
    checkBox: boolean,
    selectBox: string,
    textArea: string
  ) {
    this.div = <HTMLElement>document.createElement("div");
    this.nameBox = <HTMLElement>document.createElement("div");
    this.nameBox.append(Z1 + nameBox);
    this.surname = <HTMLElement>document.createElement("div");
    this.surname.append(Z2 + surname);
    this.date = <HTMLElement>document.createElement("div");
    this.date.append(Z3 + date);
    this.email = <HTMLElement>document.createElement("div");
    this.email.append(Z4 + email);
    this.checkBox = <HTMLElement>document.createElement("div");
    this.checkBox.append(Z5 + checkBox);
    this.selectBox = <HTMLElement>document.createElement("div");
    this.selectBox.append(Z6 + selectBox);
    this.textArea = <HTMLElement>document.createElement("div");
    this.textArea.append(Z7 + textArea);
    this.box = <HTMLElement>document.createElement("div");
    this.button2 = <HTMLElement>document.createElement("button");
    this.button2.innerText = "remove";
    this.div
      .appendChild(this.nameBox)
      .appendChild(this.surname)
      .appendChild(this.date)
      .appendChild(this.email)
      .appendChild(this.checkBox)
      .appendChild(this.selectBox)
      .appendChild(this.textArea)
      .appendChild(this.box)
      .appendChild(this.button2);

    const test6 = document.querySelector("#formEnd");
    test6?.appendChild(this.div);
    this.removeButton();
  }

  removeButton(): void {
    this.button2.addEventListener("click", (e) => {
      this.div.remove();
    });
  }
}

//=====

class App {
  form: any;
  constructor() {
    this.form = new Form("1");

    this.createButton();
  }

  createButton(): void {
    const button = document.createElement("button");
    button.innerText = "create";
    document.querySelector("#box2")?.appendChild(button);

    button.addEventListener("click", (e) => {
      this.form.showValues();
    });
  }
}

const Z1 = " Imię: ";
const Z2 = " Nazwisko: ";
const Z3 = " Data urodzenia: ";
const Z4 = " Email: ";
const Z5 = " Ukończone 18 lat: ";
const Z6 = " Wybrany kierunek studiów: ";
const Z7 = " Uwagi: ";

class Form {
  // zrobic to tablica
  fields: Field[];
  formElement: HTMLElement;
  NameBox: InputField;
  NameBox2: InputField;
  DateBox: DateField;
  EmailBox: EmailField;
  Check1: CheckboxField;
  SelektBox: SelectField;
  TextAreaBox: TextAreaField;
  prevValues: DescriptionBox[];
  ID: Number = 0;
  constructor(id: string) {
    this.fields = new Array();
    this.prevValues = new Array();
    this.NameBox = new InputField("Name", Z1);
    this.NameBox2 = new InputField("Surname", Z2);
    this.DateBox = new DateField("Data", Z3);
    this.EmailBox = new EmailField("email", Z4);
    this.Check1 = new CheckboxField("box1", Z5);
    this.SelektBox = new SelectField("select", Z6);
    this.TextAreaBox = new TextAreaField("TextArea1", Z7);
    //this.formElement = document.getElementById(id);
  }
  /*
  render(): void {
    this.NameBox.render();
    this.NameBox2.render();
    this.DateBox.render();
    this.EmailBox.render();
    this.Check1.render();
    this.SelektBox.render();
    this.TextAreaBox.render();
  }
*/
  showValues(): void {
    this.NameBox.getValue();
    this.NameBox2.getValue();
    this.DateBox.getValue();
    this.EmailBox.getValue();
    this.Check1.getValue();
    this.SelektBox.getValue();
    this.TextAreaBox.getValue();

    console.log(this.NameBox.getValue());
    console.log(this.NameBox2.getValue());
    console.log(this.DateBox.getValue());
    console.log(this.EmailBox.getValue());
    console.log(this.Check1.getValue());
    console.log(this.SelektBox.getValue());
    console.log(this.TextAreaBox.getValue());

    this.prevValues.push(
      new DescriptionBox(
        this.NameBox.getValue(),
        this.NameBox2.getValue(),
        this.DateBox.getValue(),
        this.EmailBox.getValue(),
        this.Check1.getValue(),
        this.SelektBox.getValue(),
        this.TextAreaBox.getValue()
      )
    );
    let data = JSON.stringify(this.prevValues);
    window.localStorage.setItem("data", data);
  }
}

const formCreate = new App();

//const serializedValue = descriptionBox.serialize();
//localStorage.setItem("values", serializedValue);
