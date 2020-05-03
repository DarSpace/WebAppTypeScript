var FieldType;
(function (FieldType) {
    FieldType["textBox"] = "text";
    FieldType["textArea"] = "textarea";
    FieldType["date"] = "date";
    FieldType["email"] = "email";
    FieldType["checkBox"] = "checkbox";
    FieldType["radio"] = "radio";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "text";
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test1 = document.querySelector("#box2");
        test1 === null || test1 === void 0 ? void 0 : test1.appendChild(this.div);
    }
    InputField.prototype.render = function () {
        return this.div;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
//-----
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("textarea");
        this.name = name;
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test2 = document.querySelector("#box2");
        test2 === null || test2 === void 0 ? void 0 : test2.appendChild(this.div);
    }
    TextAreaField.prototype.render = function () {
        return this.div;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
//------
var DateField = /** @class */ (function () {
    function DateField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "date";
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test3 = document.querySelector("#box2");
        test3 === null || test3 === void 0 ? void 0 : test3.appendChild(this.div);
    }
    DateField.prototype.render = function () {
        return this.div;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
//-----
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "email";
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test4 = document.querySelector("#box2");
        test4 === null || test4 === void 0 ? void 0 : test4.appendChild(this.div);
    }
    EmailField.prototype.render = function () {
        return this.div;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
//---
var SelectField = /** @class */ (function () {
    function SelectField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("select");
        this.name = name;
        this.labelhtml = document.createElement("label");
        this.option1 = document.createElement("option");
        // this.option1.innerHTML = "AGH";
        // this.option1.value = "AGH";
        this.option2 = document.createElement("option");
        // this.option2.innerHTML = "UJ";
        // this.option2.value = "UJ";
        this.element.appendChild(this.option1);
        this.element.appendChild(this.option2);
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test5 = document.querySelector("#box2");
        test5 === null || test5 === void 0 ? void 0 : test5.appendChild(this.div);
    }
    SelectField.prototype.render = function () {
        return this.div;
    };
    SelectField.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectField;
}());
//-------------
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "checkbox";
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = label;
        this.element.name = this.name;
        this.div.appendChild(this.labelhtml);
        this.div.appendChild(this.element);
        var test6 = document.querySelector("#box2");
        test6 === null || test6 === void 0 ? void 0 : test6.appendChild(this.div);
    }
    CheckboxField.prototype.render = function () {
        return this.div;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.value;
    };
    return CheckboxField;
}());
var DescriptionBox = /** @class */ (function () {
    function DescriptionBox(name, surname, data, email, checkBox, select, uwagi) {
        this.div = document.createElement("div");
        this.nameBox = document.createElement("div");
        this.nameBox.append(Z1 + name);
        this.surname = document.createElement("div");
        this.surname.append(Z2 + surname);
        this.date = document.createElement("div");
        this.date.append(Z3 + data);
        this.email = document.createElement("div");
        this.email.append(Z4 + email);
        this.checkBox = document.createElement("div");
        this.checkBox.append(Z5 + checkBox);
        this.selectBox = document.createElement("div");
        this.selectBox.append(Z6 + select);
        this.textArea = document.createElement("div");
        this.textArea.append(Z7 + uwagi);
        /*
        this.div.appendChild(
          this.nameBox &&
            this.surname &&
            this.date &&
            this.email &&
            this.checkBox &&
            this.selectBox &&
            this.textArea
        ); */
        this.div
            .appendChild(this.nameBox)
            .appendChild(this.surname)
            .appendChild(this.date)
            .appendChild(this.email)
            .appendChild(this.checkBox)
            .appendChild(this.selectBox)
            .appendChild(this.textArea);
        // this.div.appendChild(this.date);
        //this.div.appendChild(this.email);
        // this.div.appendChild(this.checkBox);
        //this.div.appendChild(this.selectBox);
        //this.div.appendChild(this.textArea);
        var test6 = document.querySelector("#formEnd");
        test6 === null || test6 === void 0 ? void 0 : test6.appendChild(this.div);
    }
    return DescriptionBox;
}());
//=====
var App = /** @class */ (function () {
    function App() {
        this.form = new Form("1");
        this.createButton();
    }
    App.prototype.createButton = function () {
        var _this = this;
        var _a;
        var button = document.createElement("button");
        button.innerText = "create";
        (_a = document.querySelector("#box2")) === null || _a === void 0 ? void 0 : _a.appendChild(button);
        button.addEventListener("click", function (e) {
            _this.form.showValues();
        });
    };
    return App;
}());
var Z1 = " Imię: ";
var Z2 = " Nazwisko: ";
var Z3 = " Data urodzenia: ";
var Z4 = " Email: ";
var Z5 = " Ukończone 18 lat: ";
var Z6 = " Wybrany kierunek studiów: ";
var Z7 = " Uwagi: ";
var Form = /** @class */ (function () {
    function Form(id) {
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
    Form.prototype.showValues = function () {
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
        this.prevValues.push(new DescriptionBox(this.NameBox.getValue(), this.NameBox2.getValue(), this.DateBox.getValue(), this.EmailBox.getValue(), this.Check1.getValue(), this.SelektBox.getValue(), this.TextAreaBox.getValue()));
    };
    return Form;
}());
var formCreate = new App();
