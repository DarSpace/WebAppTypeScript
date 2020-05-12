var FieldType;
(function (FieldType) {
    FieldType["textBox"] = "text";
    FieldType["textArea"] = "textarea";
    FieldType["date"] = "date";
    FieldType["email"] = "email";
    FieldType["checkBox"] = "checkbox";
    FieldType["radio"] = "radio";
    FieldType["select"] = "select";
})(FieldType || (FieldType = {}));
var InputField = /** @class */ (function () {
    function InputField(name, label) {
        this.type = FieldType.textBox;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.element.type = this.type;
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = this.label;
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
        this.type = FieldType.textArea;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("textarea");
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = this.label;
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
        this.type = FieldType.date;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.element.type = this.type;
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = this.label;
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
        this.type = FieldType.email;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.element.type = this.type;
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = this.label;
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
    function SelectField(name, label, options) {
        var _this = this;
        this.type = FieldType.select;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("select");
        this.labelhtml = document.createElement("label");
        options.forEach(function (element) {
            _this.option1 = document.createElement("option");
            _this.option1.innerHTML = element;
            _this.option1.value = element;
            _this.element.appendChild(_this.option1);
        });
        this.labelhtml.innerHTML = this.label;
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
        this.type = FieldType.checkBox;
        this.name = name;
        this.label = label;
        this.div = document.createElement("div");
        this.element = document.createElement("input");
        this.element.type = this.type;
        this.labelhtml = document.createElement("label");
        this.labelhtml.innerHTML = this.label;
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
var App = /** @class */ (function () {
    function App() {
        this.form = new Form(1);
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
var Form = /** @class */ (function () {
    function Form(id) {
        this.ID = 0;
        this.prevValues = new Array();
        this.ID = id;
        this.fields = new Array(new InputField("name", " Imię: "), new InputField("surname", " Nazwisko: "), new DateField("data", " Data urodzenia: "), new EmailField("email", " Email: "), new CheckboxField("isAdult", " Ukończone 18 lat: "), new SelectField("studia", " Wybrany kierunek studiów: ", [
            "agh",
            "uj",
            "wsei",
        ]), new TextAreaField("uwagi", " Uwagi: "));
    }
    Form.prototype.showValues = function () {
        var _this = this;
        var test6 = document.querySelector("#formEnd");
        var boxAnkieta = document.createElement("div");
        var ankieta = {};
        for (var i = 0; i < this.fields.length; i++) {
            ankieta[this.fields[i].name] = this.fields[i].getValue();
            this.fields[i].getValue();
            console.log(this.fields[i].getValue());
            var akapit = document.createElement("p");
            akapit.innerText =
                this.fields[i].label + "  " + this.fields[i].getValue();
            boxAnkieta === null || boxAnkieta === void 0 ? void 0 : boxAnkieta.appendChild(akapit);
        }
        this.prevValues.push(ankieta);
        console.log(ankieta);
        test6 === null || test6 === void 0 ? void 0 : test6.appendChild(boxAnkieta);
        var button2 = document.createElement("button");
        button2.innerText = "remove";
        button2.addEventListener("click", function (e) {
            boxAnkieta.remove();
            //<-----
            var data = JSON.stringify(_this.prevValues);
            window.localStorage.setItem("data" + _this.ID, data);
        });
        boxAnkieta === null || boxAnkieta === void 0 ? void 0 : boxAnkieta.appendChild(button2);
        // zapisywanie do local storage
        var data = JSON.stringify(this.prevValues);
        window.localStorage.setItem("data" + this.ID, data);
    };
    return Form;
}());
var formCreate = new App();
