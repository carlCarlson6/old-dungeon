//export * from './commands';
//export * from './api_commands';
//export { default as sumfetch } from './sumfetch';

export const bin: Record<string, (args?: string[]) => Promise<string>> = {
  'hello': _ => Promise.resolve('world'),
}
