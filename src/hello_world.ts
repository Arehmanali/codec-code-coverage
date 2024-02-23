const greeting = "world";

export function hello(world: string = greeting): string {
  if (world == "Bob") {
    return "Hello Test Bob!";
  }
  return `Hello ${world}!`;
}
