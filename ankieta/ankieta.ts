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
    this.div = <HTMLElement>document.createElement("div");
    this.element = <HTMLSelectElement>document.createElement("select");
    this.name = name;
    this.labelhtml = <HTMLLabelElement>document.createElement("label");
    this.option1 = <HTMLOptionElement>document.createElement("option");
    this.option1.innerHTML = "AGH";
    this.option1.value = "AGH";
    this.option2 = <HTMLOptionElement>document.createElement("option");
    this.option2.innerHTML = "UJ";
    this.option2.value = "UJ";
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
  name: string;
  label: string;
  type: FieldType;
  element: HTMLInputElement;
  labelhtml: HTMLLabelElement;
  div: HTMLElement;
  nameBox: HTMLElement;
  surname: HTMLElement;
  date: HTMLElement;
  email: HTMLElement;
  checkBox: HTMLElement;
  selectBox: HTMLElement;
  textArea: HTMLElement;

  constructor(
    name: string,
    surname: string,
    data: Date,
    email: string,
    checkBox: boolean,
    select: string,
    uwagi: string
  ) {
    this.div = <HTMLElement>document.createElement("div");
    this.nameBox = <HTMLElement>document.createElement("div");
    this.nameBox.append("Imię: " + name);
    this.surname = <HTMLElement>document.createElement("div");
    this.surname.append("Nazwisko: " + surname);
    this.date = <HTMLElement>document.createElement("div");
    this.date.append("Data Urodzenia: " + data);
    this.email = <HTMLElement>document.createElement("div");
    this.email.append("Email: " + email);
    this.checkBox = <HTMLElement>document.createElement("div");
    this.checkBox.append("Czy masz ukończone 18 lat: " + checkBox);
    this.selectBox = <HTMLElement>document.createElement("div");
    this.selectBox.append("Wybrana uczelnia to: " + select);
    this.textArea = <HTMLElement>document.createElement("div");
    this.textArea.append("uwagi: " + uwagi);

    this.div.appendChild(this.nameBox);
    this.div.appendChild(this.surname);
    this.div.appendChild(this.date);
    this.div.appendChild(this.email);
    this.div.appendChild(this.checkBox);
    this.div.appendChild(this.selectBox);
    this.div.appendChild(this.textArea);

    const test6 = document.querySelector("#formEnd");
    test6?.appendChild(this.div);
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
  prevValues: DescriptionBox[];
  constructor(id: string) {
    this.fields = new Array();
    this.prevValues = new Array();
    this.NameBox = new InputField("Name", "Imię");
    this.NameBox2 = new InputField("Surname", "Nazwisko");
    this.DateBox = new DateField("Data", "data urodzenia");
    this.EmailBox = new EmailField("email", "podaj Email");
    this.Check1 = new CheckboxField("box1", "Czy masz ukończone 18 lat");
    this.SelektBox = new SelectField("select", "Wybrany kierunek studiów");
    this.TextAreaBox = new TextAreaField("TextArea1", " uwagi");
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
  }
}

const formCreate = new App();
