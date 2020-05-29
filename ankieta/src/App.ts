import { Form } from "./Form";
// import { Client } from './client';
// import { Server } from './server';
import "./styles/styles.scss";
class App {
  form: any;
  div: HTMLElement;
  // Server: Server;
  // Client: Client;
  constructor() {
    // this.Server = new Server(8080);
    // this.Client = new Client("ws://localhost:8080");
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

//   npx webpack -w
//   none server.js
