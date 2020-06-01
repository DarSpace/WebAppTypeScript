import { InputField } from "./InputField";
import { DateField } from "./DateField";
import { EmailField } from "./EmailField";
import { CheckboxField } from "./CheckboxField";
import { SelectField } from "./SelectField";
import { TextAreaField } from "./TextAreaField";
import { Field } from "./Field";
import { SelectFieldApi } from "./SelectFieldApi";
import "./styles/styles.scss";

export class Form {
  fields: Field[];
  formElement: HTMLElement;
  NameBox: InputField;
  NameBox2: InputField;
  DateBox: DateField;
  EmailBox: EmailField;
  Check1: CheckboxField;
  SelektBox: SelectField;
  SelektBoxApi: SelectField;
  TestSelect: SelectField;

  prevValues: any[];
  ID: Number = Date.now();

  constructor(id: number) {
    this.prevValues = new Array();
    this.ID = id;
    id = Date.now();
    this.fields = new Array(
      new InputField("name", " Imię: ") as Field,
      new InputField("surname", " Nazwisko: ") as Field,
      new DateField("data", " Data urodzenia: ") as Field,
      new EmailField("email", " Email: ") as Field,
      new CheckboxField("isAdult", " Ukończone 18 lat: ") as Field,
      new SelectField("studia", " Wybrany kierunek studiów: ", [
        "agh",
        "uj",
        "wsei",
      ]) as Field,
      new SelectFieldApi("Kraje", " Gdzie Mieszkasz: ", []) as Field,
      new TextAreaField("uwagi", " Uwagi: ") as Field
    );
  }

  showValues(): void {
    let test6 = document.querySelector("#formEnd");
    let boxAnkieta = document.createElement("div");
    boxAnkieta.id = Date.now().toString();

    const ankieta: any = {};
    for (let i = 0; i < this.fields.length; i++) {
      ankieta[this.fields[i].name] = this.fields[i].getValue();
      this.fields[i].getValue();
      console.log(this.fields[i].getValue());

      let akapit = document.createElement("p");
      akapit.className = "title";
      let akapit2 = document.createElement("p");
      // akapit.id = Date.now().toString();
      akapit.id = boxAnkieta.id;

      akapit.innerText = this.fields[i].label;

      akapit2.innerText = this.fields[i].getValue();

      boxAnkieta?.appendChild(akapit);
      boxAnkieta?.appendChild(akapit2);
    }

    this.prevValues.push(ankieta);
    console.log(ankieta);
    test6?.appendChild(boxAnkieta);

    //========================================================================
    // przycisk do edycji ==================================================
    let button3 = <HTMLElement>document.createElement("button");
    button3.innerText = "edit";

    button3.addEventListener("click", (e) => {
      boxAnkieta.setAttribute("contenteditable", "true");
    });

    //
    let button4 = <HTMLElement>document.createElement("button");
    button4.innerText = "save";

    button4.addEventListener("click", (e) => {
      boxAnkieta.setAttribute("contenteditable", "false");

      let data = JSON.stringify(this.prevValues);
      window.localStorage.setItem("data" + this.ID, data);
    });

    //==========================================================================

    let button2 = <HTMLElement>document.createElement("button");
    button2.innerText = "remove";
    button2.addEventListener("click", (e) => {
      boxAnkieta.remove();
      //<-----
      let data = JSON.stringify(this.prevValues);
      window.localStorage.setItem("data" + this.ID, data);
    });
    boxAnkieta?.appendChild(button2);
    boxAnkieta?.appendChild(button3);
    boxAnkieta?.appendChild(button4);
    // zapisywanie do local storage
    let data = JSON.stringify(this.prevValues);
    window.localStorage.setItem("data" + this.ID, data);
  }
}
