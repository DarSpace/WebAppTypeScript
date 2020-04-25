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
        return this.element;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
var NameBox = new InputField("Name", "Imię");
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
        return this.element;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
var TextAreaBox = new TextAreaField("co polecasz", " TextAreaBox1");
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
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
var DateBox = new DateField("Data", "data");
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
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var EmailBox = new EmailField("email", "podaj Email");
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
        return this.element;
    };
    SelectField.prototype.getValue = function () {
        return this.element.value;
    };
    return SelectField;
}());
var SelektBox = new SelectField("cos", "Iddds");
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
        return this.element;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.value;
    };
    return CheckboxField;
}());
var Check1 = new CheckboxField("box1", "Imię");
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
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () { };
    Form.prototype.getValue = function () { };
    return Form;
}());
