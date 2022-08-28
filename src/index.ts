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

//objects literals -> {prop: value} -> dicionario
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