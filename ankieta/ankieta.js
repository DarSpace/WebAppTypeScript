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
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () { };
    Form.prototype.getValue = function () { };
    return Form;
}());
var App = /** @class */ (function () {
    function App() {
        this.form = new Form("1");
    }
    return App;
}());
////let d = new InputField("input", "Input");
///let x = document.getElementById("test");
//x?.appendChild(d.render());
