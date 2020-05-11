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
        // trzeci parametr tablica
        this.div = document.createElement("div");
        this.element = document.createElement("select");
        this.name = name;
        this.labelhtml = document.createElement("label");
        this.option1 = document.createElement("option");
        this.option1.innerHTML = "AGH";
        this.option1.value = "AGH";
        this.option2 = document.createElement("option");
        this.option2.innerHTML = "UJ";
        this.option2.value = "UJ";
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
    function DescriptionBox() {
        // this.div = <HTMLElement>document.createElement("div");
        // this.nameBox = <HTMLElement>document.createElement("div");
        // this.nameBox.append(" Imię: " + nameBox);
        // this.surname = <HTMLElement>document.createElement("div");
        // this.surname.append(" Nazwisko: " + surname);
        // this.date = <HTMLElement>document.createElement("div");
        // this.date.append(" Data urodzenia: " + date);
        // this.email = <HTMLElement>document.createElement("div");
        // this.email.append(" Email: " + email);
        // this.checkBox = <HTMLElement>document.createElement("div");
        // this.checkBox.append(" Ukończone 18 lat: " + checkBox);
        // this.selectBox = <HTMLElement>document.createElement("div");
        // this.selectBox.append(" Wybrany kierunek studiów: " + selectBox);
        // this.textArea = <HTMLElement>document.createElement("div");
        // this.textArea.append(" Uwagi: " + textArea);
        // this.box = <HTMLElement>document.createElement("div");
        this.button2 = document.createElement("button");
        this.button2.innerText = "remove";
        this.div;
        // .appendChild(this.nameBox)
        // .appendChild(this.surname)
        // .appendChild(this.date)
        // .appendChild(this.email)
        // .appendChild(this.checkBox)
        // .appendChild(this.selectBox)
        // .appendChild(this.textArea)
        // .appendChild(this.box)
        // .appendChild(this.button2);
        var test6 = document.querySelector("#formEnd");
        test6 === null || test6 === void 0 ? void 0 : test6.appendChild(this.div);
        this.removeButton();
    }
    DescriptionBox.prototype.removeButton = function () {
        var _this = this;
        this.button2.addEventListener("click", function (e) {
            _this.div.remove();
        });
    };
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
            _this.form.render();
            _this.form.showValues();
        });
    };
    return App;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.ID = 0;
        this.prevValues = new Array();
        this.fields = new Array(new InputField("Name", " Imię: "), new InputField("Surname", " Nazwisko: "), new DateField("Data", " Data urodzenia: "), new EmailField("email", " Email: "), new CheckboxField("box1", " Ukończone 18 lat: "), new SelectField("select", " Wybrany kierunek studiów: "), new TextAreaField("TextArea1", " uwagi: "));
        //this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        // this.NameBox.render();
        // this.NameBox2.render();
        // this.DateBox.render();
        // this.EmailBox.render();
        // this.Check1.render();
        // this.SelektBox.render();
        // this.TextAreaBox.render();
        for (var j = 0; j < this.fields.length; j++) {
            this.fields[j].render();
            console.log(this.fields[j].render());
        }
    };
    Form.prototype.showValues = function () {
        for (var i = 0; i < this.fields.length; i++) {
            this.fields[i].getValue();
            console.log(this.fields[i].getValue());
            this.prevValues.push(this.fields[i].getValue());
        }
        var data = JSON.stringify(this.prevValues);
        window.localStorage.setItem("data", data);
    };
    return Form;
}());
var formCreate = new App();
