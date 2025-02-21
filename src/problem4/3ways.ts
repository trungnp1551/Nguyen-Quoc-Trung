function sum_to_n_a(n: number): number {
  return (n * (n + 1)) / 2;
}
// Complexity Analysis:
// Time Complexity: O(1): The function computes the result in a single arithmetic operation, regardless of n.
// Space Complexity: O(1): Only a single variable (n) is used, with no additional memory allocation.
// ✅ Pros:
// Most efficient solution with constant time complexity.
// Works well for very large values of n without performance concerns.
// ❌ Cons:
// Limited to cases where integer arithmetic does not overflow.
// Not as intuitive for those unfamiliar with the formula.


function sum_to_n_b(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
      sum += i;
  }
  return sum;
}
// Complexity Analysis:
// Time Complexity: O(n): The function runs a loop from 1 to n, performing a constant-time addition in each iteration.
// Space Complexity: O(1): Only a few variables (sum and i) are used, so memory usage remains constant regardless of n.
// ✅ Pros:
// Simple and easy to understand.
// Efficient for small to medium values of n.
// ❌ Cons:
// Slower for very large values of n due to linear time complexity.


function sum_to_n_c(n: number): number {
  if (n === 1) return 1;
  return n + sum_to_n_c(n - 1);
}
// Complexity Analysis:
// Time Complexity: O(n): The function calls itself recursively n times, each time performing an addition.
// Space Complexity: O(n): Each recursive call adds a new function frame to the call stack, leading to O(n) memory usage.
// ✅ Pros:
// Elegant and expresses the problem in a straightforward mathematical way.
// Useful in functional programming paradigms.
// ❌ Cons:
// Stack overflow risk: For large values of n, the recursion depth might exceed the maximum stack size, leading to a crash.
// Less efficient than an iterative solution due to function call overhead.


console.log(sum_to_n_a(5));
console.log(sum_to_n_b(6));
console.log(sum_to_n_c(7));
// For efficiency → Use the formula (O(1)).
// For clarity → Use the loop (O(n)).
// Avoid recursion for large n due to stack limitations.