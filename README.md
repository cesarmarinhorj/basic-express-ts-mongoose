# basic-express-ts-mongoose
Basic start repository with express, typescript and mongoose

## Dependências

- typescript
- express
- mongoose
- rimraf
- pug
- body-parser
- dotenv


## Objetivos

- Estrutura básica para usar o Typescript com o Nodejs.

- npm scripts básicos

## Links

[tutorial mais completo possível](https://www.robinwieruch.de/mongodb-express-setup-tutorial/)
[interfaces no ts](https://www.webdevbr.com.br/interfaces-manual-typescript)
[partials](https://www.typescriptlang.org/docs/handbook/advanced-types.html)
[interfaces](https://www.webdevbr.com.br/interfaces-manual-typescript)

## Percalços

- **manipular o POST**
    - [handle-get-post-request-express-4](https://codeforgeek.com/handle-get-post-request-express-4/)

- **body do request não vem no POST**
    - [stackoverflow#9177049](https://stackoverflow.com/questions/9177049/express-js-req-body-undefined)



## Erros

- dotenv não funcionando ainda

## Testes

```typescript
interface Person {
    name: string;
    age: number;
}
type PersonPartial = Partial<Person>;

class Pessoa implements Person { 
        name: string;
};
class Povao implements PersonPartial { 
    age: number;
};

let joao = new Pessoa();
joao.name = "Joao";
console.log(joao);
console.log("name" in joao);
console.log("age" in joao);

let maria = new Povao();
maria.age = 32;
console.log(maria);
console.log("name" in maria);
console.log("age" in maria);

```