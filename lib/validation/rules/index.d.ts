declare const _default: {
    min: {
        passes(value: any, attributes?: any): any;
        message(attributes: any): string;
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
