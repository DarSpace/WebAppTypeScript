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
        this.label = label;
        this.labelhtml.htmlFor = this.name;
        this.element.name = this.name;
        this.div.appendChild(this.element);
        this.div.appendChild(this.labelhtml);
    }
    InputField.prototype.render = function () {
        return this.element;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "textarea";
        this.labelhtml = document.createElement("label");
        this.label = label;
        this.labelhtml.htmlFor = this.name;
        this.element.name = this.name;
        this.div.appendChild(this.element);
        this.div.appendChild(this.labelhtml);
    }
    TextAreaField.prototype.render = function () {
        return this.element;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
var DateField = /** @class */ (function () {
    function DateField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "date";
        this.labelhtml = document.createElement("label");
        this.label = label;
        this.labelhtml.htmlFor = this.name;
        this.element.name = this.name;
        this.div.appendChild(this.element);
        this.div.appendChild(this.labelhtml);
    }
    DateField.prototype.render = function () {
        return this.element;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.name = name;
        this.element.type = "email";
        this.labelhtml = document.createElement("label");
        this.label = label;
        this.labelhtml.htmlFor = this.name;
        this.element.name = this.name;
        this.div.appendChild(this.element);
        this.div.appendChild(this.labelhtml);
    }
    EmailField.prototype.render = function () {
        return this.element;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var App = /** @class */ (function () {
    function App() {
        this.form = new Form("1");
    }
    return App;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
    }
    return Form;
}());
/*
////let d = new InputField("input", "Input");
///let x = document.getElementById("test");

//x?.appendChild(d.render());
*/
