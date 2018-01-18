import Rule from "./Rule";
export default class Integer extends Rule {
    passes(attribute: any, value: any): any;
    message(): string;
}
