//tsc --init -> informar q aq é um projeto ts -> cria tsconfig.json
//tsc -> compila a pasta src e os arquivos ts
//tsc -w -> compilacao automatica


const x:number = 10; //criacao de variavle igual do js
//:tipo_variavel -> padronizacao -> tipagem ts(string,number...)
console.log(x);

//inferencia x annotation
let y = 12; //inferencia
//let y:number = 12; -> annotation -> mais explicito

// String -> S maiusculo -> objeto
// string -> s minusculo -> tipo de dado

//array
const numeros: number[] = [1,2,3];
console.log(numeros);
console.log(numeros.length); //= len
numeros.push(5); //adicionar a lista

//tuplas
let tupla: [number, string, string[]]; //diferenca q cada index é antes tipado, mas é modificavel
tupla = [2,"teste", ["oi", "tchau"]];
console.log(tupla);
tupla.push(10); //adicionando o 10 msm sem ter informado
console.log(tupla);

//objects literals -> {prop: value} -> dicionario -> passando os tipos
const user: {name:string, age:number} = {
    name: "Lucca",
    age: 20,
}
console.log(user);
console.log(user.age);

//any -> valor q aceita qualquer tipo de dado -> tipo *args
let a:any = 0;
a = "teste";
console.log(a);
a = true;
console.log(a);
a = 10;
console.log(a);


//union type -> uniao de tipos
let id: string | number = "10";
id = 200;


//type alias -> compartilhando tipos
type myidtype = number | string;
const userid: myidtype = 10;

//enum -> enumera colecao
enum Size{
    P = "Pequeno",
    M = "Medio",
    G = "Grande",
};

const camisa = { //dicionario
    name:"Camisa masculina",
    size:Size.G,
};

console.log(camisa);

//literal types -> aquela variavel só vai aceitar aquele valor
let teste: "algumvalor";
/*Pode se usar tbm como:
let user: "autenticado" | null
aonde ela pode inicializar null
e em algum momento poder receber o tal valor
tendo apenas estes estados */

//funcoes
function soma(a:number, b:number){ //necessario tipar os argumentos
    
    return a + b;
}
console.log(soma(10,10));


//tipando retorno da funcao
function sayheeloTo(name: string): string{

    return `Hello ${name}`;
    //concatenacao se usa crase(`) e ${variavel}
}
console.log(sayheeloTo("Lucca"));

//tiopando funcao q nao tem retorno -> tipagem void
function logger(msg:string): void{

    console.log(msg);
}
logger("Mensagem");

//argumentos opcionais
function greeting(name:string, greet?:string){ //greet opcional

    //tratar para saber se o greet foi passado ou nao
    if(greet){
        console.log(`Ola ${greet} ${name}`);
    }else{
        console.log(`Ola ${name}`);
    }

}
greeting("Jose");

//interfaces -> padroniza algo para reutilizar como tipo
interface MathFunctionParams{
    n1: number,
    n2: number,
}
function somaNumeros(nums: MathFunctionParams){

    return nums.n1 + nums.n2;
}

console.log(somaNumeros({n1:10, n2:10}));

function mult(nums: MathFunctionParams){

    return nums.n1 * nums.n2;
}

console.log(mult({n1:2, n2:2}));


//narrowing -> checagem de tipos
function facaAlgo(info: number | boolean){

    if(typeof info == "number"){
        return console.log(`O numero é ${info}`); 
    }else{
        return console.log("Nao foi passado um numero");
    }
}
facaAlgo(10);
facaAlgo(true);


//generics -> um tipo de dado nao importa, apenas execute a funcao
function showArrayItems<t>(arr: t[]){ //<t> -> algo que remeta o tipo generico / espera um array de qualquer tipo
    arr.forEach((item)=>{ //exibir cada item
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1,2,3];
const a2 = ["item 1","item 2"];
showArrayItems(a1);
showArrayItems(a2);

//classes -> POO
class User{
    name
    age
    role //nao tipadas
    isApproved

    //tipando variaveis no inicializador(constructor)
    constructor(name: string, age:number, role: string, isApproved:boolean){
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUsername(){
        console.log(`O nome do usuario é ${this.name}`);

    }

    showAge(canShow: boolean){
        if(canShow){
            console.log(`A idade do usuario ${this.name} é ${this.age}`);
        }else{
            console.log("O usuario nao habilitou exibir sua idade");
        }

    }
}

const joao = new User("Joao", 20, "Staff", true);
console.log(joao);
joao.showUsername();
joao.showAge(true);

//interfaces em classes -> dita como a classe ira se comportar
//padronizar diversas classes
interface IVeicle{
    brand: string
    showBrand(): void
}

class Car implements IVeicle{

    brand
    wheels

    constructor(brand:string, wheels:number){
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`);
    }
}

const carro = new Car("BMW", 4);
console.log(carro);
carro.showBrand();

//herança
//car = classe pai
class SuperCar extends Car{

    engine

    constructor(brand:string, wheels:number, engine:string){
        super(brand, wheels);
        this.engine = engine;
    }
}

const supra = new SuperCar("TOYOTA", 4, "2JZ");
console.log(supra);
supra.showBrand();//herdou do pai


//decorators -> validacao de dados, construir evento observavel em uma classe ou funcao
//@faz_alo() -> igual python
//descomentar "experimentalDecorators" do config.json
function baseParmeters(){ //constructor decorator
    return function<T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            created_at = new Date();
        }
    }
}
//implementacao do decorator
@baseParmeters()
class Person{
    name

    constructor(name:string){
        this.name = name;
    }
}
//quero q automaticamente me gere um id e data de criacao
const pessoa = new Person("Maria");
console.log(pessoa)
