// enum FieldType {
//   textBox = "text",
//   textArea = "textarea",
//   date = "date",
//   email = "email",
//   checkBox = "checkbox",
//   radio = "radio",
//   select = "select",
// }

// interface Field {
//   name: string;
//   label: string;
//   type: FieldType;
//   render(): HTMLElement;
//   getValue(): any;
// }

// class InputField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.textBox;
//   element: HTMLInputElement;
//   labelhtml: HTMLLabelElement;
//   div: HTMLElement;

//   constructor(name: string, label: string) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLInputElement>document.createElement("input");
//     this.element.type = this.type;
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test1 = document.querySelector("#box2");
//     test1?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

//-----
// class TextAreaField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.textArea;
//   element: HTMLTextAreaElement;
//   labelhtml: HTMLLabelElement;
//   div: HTMLElement;

//   constructor(name: string, label: string) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLTextAreaElement>document.createElement("textarea");
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test2 = document.querySelector("#box2");
//     test2?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

//------
// class DateField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.date;
//   element: HTMLInputElement;
//   labelhtml: HTMLLabelElement;
//   div: HTMLElement;

//   constructor(name: string, label: string) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLInputElement>document.createElement("input");
//     this.element.type = this.type;
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test3 = document.querySelector("#box2");
//     test3?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

//-----
// class EmailField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.email;
//   element: HTMLInputElement;
//   labelhtml: HTMLLabelElement;
//   div: HTMLElement;

//   constructor(name: string, label: string) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLInputElement>document.createElement("input");
//     this.element.type = this.type;
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test4 = document.querySelector("#box2");
//     test4?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

//---
// class SelectField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.select;
//   element: HTMLSelectElement;
//   labelhtml: HTMLLabelElement;
//   option1: HTMLOptionElement;
//   div: HTMLElement;

//   constructor(name: string, label: string, options: string[]) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLSelectElement>document.createElement("select");
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     options.forEach((element) => {
//       this.option1 = <HTMLOptionElement>document.createElement("option");
//       this.option1.innerHTML = element;
//       this.option1.value = element;
//       this.element.appendChild(this.option1);
//     });
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test5 = document.querySelector("#box2");
//     test5?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

//-------------

// class CheckboxField implements Field {
//   name: string;
//   label: string;
//   type: FieldType = FieldType.checkBox;
//   element: HTMLInputElement;
//   labelhtml: HTMLLabelElement;
//   div: HTMLElement;

//   constructor(name: string, label: string) {
//     this.name = name;
//     this.label = label;
//     this.div = <HTMLElement>document.createElement("div");
//     this.element = <HTMLInputElement>document.createElement("input");
//     this.element.type = this.type;
//     this.labelhtml = <HTMLLabelElement>document.createElement("label");
//     this.labelhtml.innerHTML = this.label;
//     this.element.name = this.name;
//     this.div.appendChild(this.labelhtml);
//     this.div.appendChild(this.element);

//     const test6 = document.querySelector("#box2");
//     test6?.appendChild(this.div);
//   }
//   render(): HTMLElement {
//     return this.div;
//   }
//   getValue(): any {
//     return this.element.value;
//   }
// }

// class App {
//   form: any;
//   div: HTMLElement;
//   constructor() {
//     this.form = new Form(1);
//     this.createButton();
//   }

//   createButton(): void {
//     const button = document.createElement("button");
//     button.innerText = "create";
//     document.querySelector("#box2")?.appendChild(button);

//     button.addEventListener("click", (e) => {
//       this.form.showValues();
//     });
//   }
// }

// class Form {
//   fields: Field[];
//   formElement: HTMLElement;
//   NameBox: InputField;
//   NameBox2: InputField;
//   DateBox: DateField;
//   EmailBox: EmailField;
//   Check1: CheckboxField;
//   SelektBox: SelectField;
//   TextAreaBox: TextAreaField;
//   prevValues: any[];
//   ID: Number = 0;

//   constructor(id: number) {
//     this.prevValues = new Array();
//     this.ID = id;
//     this.fields = new Array(
//       new InputField("name", " Imię: ") as Field,
//       new InputField("surname", " Nazwisko: ") as Field,
//       new DateField("data", " Data urodzenia: ") as Field,
//       new EmailField("email", " Email: ") as Field,
//       new CheckboxField("isAdult", " Ukończone 18 lat: ") as Field,
//       new SelectField("studia", " Wybrany kierunek studiów: ", [
//         "agh",
//         "uj",
//         "wsei",
//       ]) as Field,
//       new TextAreaField("uwagi", " Uwagi: ") as Field
//     );
//   }

//   showValues(): void {
//     let test6 = document.querySelector("#formEnd");
//     let boxAnkieta = document.createElement("div");

//     const ankieta: any = {};
//     for (let i = 0; i < this.fields.length; i++) {
//       ankieta[this.fields[i].name] = this.fields[i].getValue();
//       this.fields[i].getValue();
//       console.log(this.fields[i].getValue());
//       let akapit = document.createElement("p");
//       akapit.innerText =
//         this.fields[i].label + "  " + this.fields[i].getValue();
//       boxAnkieta?.appendChild(akapit);
//     }
//     this.prevValues.push(ankieta);
//     console.log(ankieta);
//     test6?.appendChild(boxAnkieta);
//     let button2 = <HTMLElement>document.createElement("button");
//     button2.innerText = "remove";
//     button2.addEventListener("click", (e) => {
//       boxAnkieta.remove();
//       //<-----
//       let data = JSON.stringify(this.prevValues);
//       window.localStorage.setItem("data" + this.ID, data);
//     });
//     boxAnkieta?.appendChild(button2);
//     // zapisywanie do local storage
//     let data = JSON.stringify(this.prevValues);
//     window.localStorage.setItem("data" + this.ID, data);
//   }
// }

// const formCreate = new App();
