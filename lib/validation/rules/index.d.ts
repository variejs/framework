declare const _default: {
    max: {
        passes(value: any, attributes: any): any;
        message(): string;
        replacers(): string[];
    };
    min: {
        passes(value: any, attributes: any): any;
        message(): string;
        replacers(): string[];
    };
    email: {
        passes(value: any): any;
        message(): string;
    };
    required: {
        passes(value: any): Boolean;
        message(): string;
    };
};
export default _default;
