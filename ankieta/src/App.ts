import { Form } from "./Form";
//import { socket } from "./client";

import "./styles/styles.scss";
class App {
  form: any;
  div: HTMLElement;
  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket("ws://localhost:8080");
    this.form = new Form(1);
    this.createButton();
  }

  createButton(): void {
    const button = document.createElement("button");
    button.id = "send";
    button.innerText = "create";
    document.querySelector("#box2")?.appendChild(button);

    button.addEventListener("click", (e) => {
      this.socket.send("new message");
      this.form.showValues();
    });
  }
}

const formCreate = new App();

//   npx webpack -w
//   none server.js
