const fib = (n: number): number => n <= 0 ? 1 : n * fib(n-1);
export default fib;