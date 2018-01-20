declare const _default: {
    accepted: {
        passes(value: any): boolean;
    };
    after: {
        passes(value: any, parameters: any): any;
        replacers(): string[];
    };
    after_or_equal: {
        passes(value: any, parameters: any): any;
        replacers(): string[];
    };
    alpha: {
        passes(value: any): any;
    };
    alpha_num: {
        passes(value: any): any;
    };
    array: {
        passes(value: any): boolean;
    };
    before: {
        passes(value: any, parameters: any): any;
        replacers(): string[];
    };
    before_or_equal: {
        passes(value: any, parameters: any): any;
        replacers(): string[];
    };
    between: {
        passes(value: any, attributes: any): void;
        replacers(): string[];
    };
    boolean: {
        passes(value: any): boolean;
    };
    confirmed: {
        passes(value: any): boolean;
    };
    date: {
        passes(value: any): boolean | undefined;
    };
    max: {
        passes(value: any, attributes: any): any;
        replacers(): string[];
    };
    min: {
        passes(value: any, attributes: any): any;
        replacers(): string[];
    };
    email: {
        passes(value: any): any;
    };
    required: {
        passes(value: any): Boolean;
    };
};
export default _default;
