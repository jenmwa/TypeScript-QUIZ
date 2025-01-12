export interface IAnswerOption {
  optionText: string;
  isCorrect: boolean;
}

export interface IQuizQuestion {
  id: number;
  questionText: string;
  codeExample?: string;
  answer1: IAnswerOption;
  answer2: IAnswerOption;
  answer3: IAnswerOption;
}

export const questions: IQuizQuestion[] = [
  {
    id: 1,
    questionText: 'Vilken är den rätta typen för en variabel x som innehåller ett nummer i TypeScript?',
    answer1: { optionText: 'string', isCorrect: false },
    answer2: { optionText: 'number', isCorrect: true },
    answer3: { optionText: 'boolean', isCorrect: false },
  },
  {
    id: 2,
    questionText:
      'Vilket alternativ deklarerar ett interface för ett objekt med egenskaperna name (string) och age (number)?',
    answer1: { optionText: 'interface IPerson { name: string, age: number }', isCorrect: true },
    answer2: { optionText: 'interface IPerson { name: string; age: string }', isCorrect: false },
    answer3: { optionText: 'interface IPerson { name: number; age: number }', isCorrect: false },
  },
  {
    id: 3,
    questionText:
      'Hur deklarerar du en funktion greet som tar ett argument name (string) och returnerar ett hälsningsmeddelande (string)?',
    answer1: { optionText: "function greet(name: string): string { return 'Hello ' + name; }", isCorrect: true },
    answer2: { optionText: "function greet(name: number): string { return 'Hello ' + name; }", isCorrect: false },
    answer3: { optionText: "function greet(name: string) { return 'Hello ' + name; }", isCorrect: false },
  },
  {
    id: 4,
    questionText: 'Vad är syftet med typen any i TypeScript?',
    answer1: {
      optionText: 'Den kan innehålla vilken typ av värde som helst, och TypeScript kommer inte att kontrollera typfel.',
      isCorrect: true,
    },
    answer2: { optionText: 'Den används för att förhindra runtime-fel i din applikation.', isCorrect: false },
    answer3: { optionText: 'Den används bara för att deklarera tomma objekt.', isCorrect: false },
  },
  {
    id: 5,
    questionText: 'Vad är resultatet av följande kod?',
    codeExample: `
    let value: string | number = "hello"; 
    value = 42;`,
    answer1: { optionText: 'string', isCorrect: false },
    answer2: { optionText: 'number', isCorrect: false },
    answer3: { optionText: 'string | number', isCorrect: true },
  },
  {
    id: 6,
    questionText: 'Vilket av följande alternativ definierar korrekt en klass i TypeScript?',
    answer1: {
      optionText: 'class Animal { name: string; constructor(name: string) { this.name = name; } }',
      isCorrect: true,
    },
    answer2: {
      optionText: 'class Animal { name: number; constructor(name: string) { this.name = name; } }',
      isCorrect: false,
    },
    answer3: {
      optionText: "class Animal { name: string; constructor() { this.name = 'Default'; } }",
      isCorrect: false,
    },
  },
  {
    id: 7,
    questionText: 'Vad är skillnaden mellan ett interface och en type i TypeScript?',
    answer1: {
      optionText:
        'Ett interface kan användas för att definiera objektets struktur, medan en type är mer flexibel och kan definiera unioner, intersectioner, etc.',
      isCorrect: true,
    },
    answer2: { optionText: 'Interfaces är långsammare än typer.', isCorrect: false },
    answer3: { optionText: 'Typer används endast för funktioner, inte objekt.', isCorrect: false },
  },
  {
    id: 8,
    questionText: 'Vad är skillnaden mellan en dependency och en devDependency i ett Node.js-projekt?',
    answer1: {
      optionText:
        'Dependencies är paket som behövs för att köra applikationen, medan devDependencies används för utvecklingsverktyg och tester.',
      isCorrect: true,
    },
    answer2: {
      optionText:
        'Dependencies används endast i produktionsmiljöer, medan devDependencies används enbart i utvecklingsmiljöer.',
      isCorrect: false,
    },
    answer3: {
      optionText:
        'devDependencies installeras automatiskt om du kör `npm install`, medan dependencies måste installeras manuellt.',
      isCorrect: false,
    },
  },
  {
    id: 9,
    questionText: 'Vilken typ kommer TypeScript att inferera för variabeln x i följande kod?',
    codeExample: `
    let x = "hello";
    `,
    answer1: { optionText: 'string', isCorrect: true },
    answer2: { optionText: 'any', isCorrect: false },
    answer3: { optionText: 'number', isCorrect: false },
  },
  {
    id: 10,
    questionText: 'Hur deklarerar du en valfri parameter i en TypeScript-funktion?',
    answer1: { optionText: "function greet(name?: string): string { return 'Hello ' + name; }", isCorrect: true },
    answer2: { optionText: "function greet(name: string?): string { return 'Hello ' + name; }", isCorrect: false },
    answer3: {
      optionText: "function greet(name: string, age?: number): string { return 'Hello ' + name; }",
      isCorrect: false,
    },
  },
  {
    id: 11,
    questionText: 'Vilket av följande alternativ är det korrekta sättet att ärva en klass i TypeScript?',
    answer1: { optionText: 'class Dog extends Animal { }', isCorrect: true },
    answer2: { optionText: 'class Dog inherits Animal { }', isCorrect: false },
    answer3: { optionText: 'class Dog : Animal { }', isCorrect: false },
  },
  {
    id: 12,
    questionText: 'Vad gör readonly-modifieraren i TypeScript?',
    answer1: { optionText: 'Gör en egenskap i ett objekt oföränderlig efter initialisering.', isCorrect: true },
    answer2: { optionText: 'Gör egenskapen skrivbar men endast under de första 10 minuterna.', isCorrect: false },
    answer3: { optionText: 'Gör egenskapen synlig endast inom klassen.', isCorrect: false },
  },
  {
    id: 13,
    questionText: 'Vilket av följande är det korrekta sättet att definiera ett enum i TypeScript?',
    answer1: { optionText: 'enum Color { Red, Green, Blue }', isCorrect: true },
    answer2: { optionText: "enum Color { 'Red', 'Green', 'Blue' }", isCorrect: false },
    answer3: { optionText: 'enum Color = { Red, Green, Blue }', isCorrect: false },
  },
  {
    id: 14,
    questionText: 'Vad är typen på följande variabel?',
    codeExample: `
    type A = { name: string };
    type B = { age: number };
    type C = A & B;`,
    answer1: { optionText: '{ name: string; age: number }', isCorrect: true },
    answer2: { optionText: '{ name: string } | { age: number }', isCorrect: false },
    answer3: { optionText: '{ name: number; age: number }', isCorrect: false },
  },
  {
    id: 15,
    questionText: 'Vilken funktion skulle returnera typen never?',
    answer1: { optionText: 'En funktion som kastar ett fel.', isCorrect: true },
    answer2: { optionText: 'En funktion som aldrig terminerar (t.ex. en oändlig loop).', isCorrect: false },
    answer3: { optionText: 'En funktion som alltid returnerar ett värde.', isCorrect: false },
  },
  {
    id: 16,
    questionText: 'Vad gör följande TypeScript-funktion?',
    codeExample: `
    function identity<T>(arg: T): T {
    return arg;
    }
    `,
    answer1: { optionText: 'Returnerar argumentet som typen T.', isCorrect: true },
    answer2: { optionText: 'Returnerar argumentet som typen any.', isCorrect: false },
    answer3: { optionText: 'Returnerar argumentet som en string.', isCorrect: false },
  },
  {
    id: 17,
    questionText:
      'Vilket av följande är det korrekta sättet att definiera en klass-egenskap som endast kan nås inuti klassen?',
    answer1: { optionText: 'private name: string;', isCorrect: true },
    answer2: { optionText: 'public name: string;', isCorrect: false },
    answer3: { optionText: 'protected name: string;', isCorrect: false },
  },
  {
    id: 18,
    questionText: 'Vad kommer att vara typen på name i följande kod?',
    codeExample: `
    const user = { 
    name: "Alice", age: 25 };
    const { name } = user;
    `,
    answer1: { optionText: 'string', isCorrect: true },
    answer2: { optionText: 'number', isCorrect: false },
    answer3: { optionText: '{ name: string; age: number; }', isCorrect: false },
  },
  {
    id: 19,
    questionText:
      'Vilket av följande är den korrekta syntaxen för att definiera ett typalias för en funktion som tar ett nummer och returnerar en string?',
    answer1: { optionText: 'type MyFunction = (x: number) => string;', isCorrect: true },
    answer2: { optionText: 'type MyFunction = string => number;', isCorrect: false },
    answer3: { optionText: 'type MyFunction = (x: string) => number;', isCorrect: false },
  },
  {
    id: 20,
    questionText: 'Hur importerar du en modul som heter math i TypeScript om du använt export default för modulen?',
    answer1: { optionText: "import { math } from './math';", isCorrect: false },
    answer2: { optionText: "import math from './math';", isCorrect: true },
    answer3: { optionText: "import * as math from './math';", isCorrect: false },
  },
];
