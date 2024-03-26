export function compose(...funcs: Array<(a: any) => any>): any {
  return funcs.reduce((a, b) => (c) => a(b(c)));
}

export function composeLeft(...funcs: Array<(a: any) => any>): any {
  return funcs.reduceRight((a, b) => (c) => a(b(c)));
}
