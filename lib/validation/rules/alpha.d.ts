import Rule from './Rule';
export default class Alpha extends Rule {
    passes($attribute: any, $value: any): void;
    message(): void;
}
