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
        passes(value: any, parameters: any): boolean | undefined;
        replacers(): string[];
    };
    boolean: {
        passes(value: any): boolean;
    };
    date: {
        passes(value: any): boolean | undefined;
    };
    different: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    email: {
        passes(value: any): any;
    };
    image: {
        passes(value: any): void;
    };
    integer: {
        passes(value: any): any;
    };
    max: {
        passes(value: any, attributes: any): any;
        replacers(): string[];
    };
    mimetypes: {
        passes(files: any, parameters: any): boolean;
        replacers(): string[];
    };
    min: {
        passes(value: any, attributes: any): any;
        replacers(): string[];
    };
    numeric: {
        passes(value: any): any;
    };
    regex: {
        passes(value: any, parameters: any): boolean;
    };
    required: {
        passes(value: any): Boolean;
    };
    required_if: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    required_unless: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    required_with: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    required_with_all: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    required_without: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    required_without_all: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    same: {
        passes(value: any, parameters: [], data: {}): Boolean;
        replacers(): string[];
    };
    size: {
        passes(value: any, parameters: []): Boolean;
    };
    url: {
        passes(value: any): Boolean;
    };
};
export default _default;
