"use strict";
//tsc --init -> informar q aq é um projeto ts -> cria tsconfig.json
//tsc -> compila a pasta src e os arquivos ts
//tsc -w -> compilacao automatica
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const x = 10; //criacao de variavle igual do js
//:tipo_variavel -> padronizacao -> tipagem ts(string,number...)
console.log(x);
//inferencia x annotation
let y = 12; //inferencia
//let y:number = 12; -> annotation -> mais explicito
// String -> S maiusculo -> objeto
// string -> s minusculo -> tipo de dado
//array
const numeros = [1, 2, 3];
console.log(numeros);
console.log(numeros.length); //= len
numeros.push(5); //adicionar a lista
//tuplas
let tupla; //diferenca q cada index é antes tipado, mas é modificavel
tupla = [2, "teste", ["oi", "tchau"]];
console.log(tupla);
tupla.push(10); //adicionando o 10 msm sem ter informado
console.log(tupla);
//objects literals -> {prop: value} -> dicionario -> passando os tipos
const user = {
    name: "Lucca",
    age: 20,
};
console.log(user);
console.log(user.age);
//any -> valor q aceita qualquer tipo de dado -> tipo *args
let a = 0;
a = "teste";
console.log(a);
a = true;
console.log(a);
a = 10;
console.log(a);
//union type -> uniao de tipos
let id = "10";
id = 200;
const userid = 10;
//enum -> enumera colecao
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
;
const camisa = {
    name: "Camisa masculina",
    size: Size.G,
};
console.log(camisa);
//literal types -> aquela variavel só vai aceitar aquele valor
let teste;
/*Pode se usar tbm como:
let user: "autenticado" | null
aonde ela pode inicializar null
e em algum momento poder receber o tal valor
tendo apenas estes estados */
//funcoes
function soma(a, b) {
    return a + b;
}
console.log(soma(10, 10));
//tipando retorno da funcao
function sayheeloTo(name) {
    return `Hello ${name}`;
    //concatenacao se usa crase(`) e ${variavel}
}
console.log(sayheeloTo("Lucca"));
//tiopando funcao q nao tem retorno -> tipagem void
function logger(msg) {
    console.log(msg);
}
logger("Mensagem");
//argumentos opcionais
function greeting(name, greet) {
    //tratar para saber se o greet foi passado ou nao
    if (greet) {
        console.log(`Ola ${greet} ${name}`);
    }
    else {
        console.log(`Ola ${name}`);
    }
}
greeting("Jose");
function somaNumeros(nums) {
    return nums.n1 + nums.n2;
}
console.log(somaNumeros({ n1: 10, n2: 10 }));
function mult(nums) {
    return nums.n1 * nums.n2;
}
console.log(mult({ n1: 2, n2: 2 }));
//narrowing -> checagem de tipos
function facaAlgo(info) {
    if (typeof info == "number") {
        return console.log(`O numero é ${info}`);
    }
    else {
        return console.log("Nao foi passado um numero");
    }
}
facaAlgo(10);
facaAlgo(true);
//generics -> um tipo de dado nao importa, apenas execute a funcao
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["item 1", "item 2"];
showArrayItems(a1);
showArrayItems(a2);
//classes -> POO
class User {
    //tipando variaveis no inicializador(constructor)
    constructor(name, age, role, isApproved) {
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUsername() {
        console.log(`O nome do usuario é ${this.name}`);
    }
    showAge(canShow) {
        if (canShow) {
            console.log(`A idade do usuario ${this.name} é ${this.age}`);
        }
        else {
            console.log("O usuario nao habilitou exibir sua idade");
        }
    }
}
const joao = new User("Joao", 20, "Staff", true);
console.log(joao);
joao.showUsername();
joao.showAge(true);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é ${this.brand}`);
    }
}
const carro = new Car("BMW", 4);
console.log(carro);
carro.showBrand();
//herança
//car = classe pai
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const supra = new SuperCar("TOYOTA", 4, "2JZ");
console.log(supra);
supra.showBrand(); //herdou do pai
//decorators -> validacao de dados, construir evento observavel em uma classe ou funcao
//@faz_alo() -> igual python
//descomentar "experimentalDecorators" do config.json
function baseParmeters() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.created_at = new Date();
            }
        };
    };
}
//implementacao do decorator
let Person = class Person {
    constructor(name) {
        this.name = name;
    }
};
Person = __decorate([
    baseParmeters()
], Person);
//quero q automaticamente me gere um id e data de criacao
const pessoa = new Person("Maria");
console.log(pessoa);
