import BlHelloWorld from "./hello-world"
export interface InstallationOptions {
  size: string
}
export function install (vue: typeof Vue, options: InstallationOptions): void
/** Button Component */
export class HelloWorld extends BlHelloWorld {}