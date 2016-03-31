// Compiled using typings@0.6.10
// Source: https://raw.githubusercontent.com/DefinitelyTyped/DefinitelyTyped/5c3e47967affa3c4128a3875d1664ba206ae1b0f/del/del.d.ts
// Type definitions for del v1.2.0
// Project: https://github.com/sindresorhus/del
// Definitions by: Asana <https://asana.com>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


declare module "del" {
    import glob = require("glob");

    function Del(pattern: string): Promise<string[]>;
    function Del(pattern: string, options: Del.Options): Promise<string[]>;

    function Del(patterns: string[]): Promise<string[]>;
    function Del(patterns: string[], options: Del.Options): Promise<string[]>;

    module Del {
        function sync(pattern: string, options?: Options): string[];
        function sync(patterns: string[], options?: Options): string[];

        interface Options extends glob.IOptions {
            force?: boolean
        }
    }

    export = Del;
}