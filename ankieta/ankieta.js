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
var App = /** @class */ (function () {
    function App() {
        this.form = new Form("1");
    }
    return App;
}());
var Form = /** @class */ (function () {
    function Form(id) {
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
    Form.prototype.render = function () {
        this.NameBox.render();
        this.NameBox2.render();
        this.DateBox.render();
        this.EmailBox.render();
        this.Check1.render();
        this.SelektBox.render();
        this.TextAreaBox.render();
    };
    Form.prototype.getValue = function () {
        this.NameBox.getValue();
        this.NameBox2.getValue();
        this.DateBox.getValue();
        this.EmailBox.getValue();
        this.Check1.getValue();
        this.SelektBox.getValue();
        this.TextAreaBox.getValue();
    };
    return Form;
}());
var formCreate = new App();
