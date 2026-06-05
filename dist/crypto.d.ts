declare const _default: {
    encrypt_v1: (data: unknown, key?: string) => string;
    decrypt_v1: (data: string, key?: string) => any;
    encrypt_v2: (data: unknown, key?: string) => {
        pack: string;
        tag: string;
    };
    decrypt_v2: (data: string, tag: string, key?: string) => any;
};
export default _default;
