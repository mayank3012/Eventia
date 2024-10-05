// global.d.ts
declare global {
    namespace NodeJS {
        interface Global {
            mongoose: {
                conn: any;
                promise: any;
            };
        }
    }
}

// This is required to prevent the file from being treated as a script file
export { };
