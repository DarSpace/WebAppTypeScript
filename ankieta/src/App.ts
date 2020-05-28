import { Form } from "./Form";
import "./styles/styles.scss";
class App {
  form: any;
  div: HTMLElement;
  constructor() {
    this.form = new Form(1);
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

const formCreate = new App();
