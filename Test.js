const users = [
  { id: 1, name: "Alex", age: 25, score: 82, createdAt: "2024-06-10" },
  { id: 2, name: "Maria", age: 19, score: 91, createdAt: "2023-11-02" },
  { id: 3, name: "John", age: 30, score: 75, createdAt: "2025-01-15" },
  { id: 4, name: "Sofia", age: 22, score: 88, createdAt: "2022-08-21" },
  { id: 5, name: "Victor", age: 27, score: 65, createdAt: "2023-03-14" },
  { id: 6, name: "Elena", age: 24, score: 99, createdAt: "2025-02-05" },
  { id: 7, name: "Nikita", age: 20, score: 73, createdAt: "2024-12-01" },
  { id: 8, name: "Diana", age: 29, score: 84, createdAt: "2023-09-17" },
];

const arr = [1243, 25, 2341, 3234, 12123, 354, 6345234, 2346, 452];
// users.sort((a, b) => b.age - a.age);

// console.log(users);

function getRandomItems(arr, n) {
  return [...arr].sort(() => Math.random() - 0.5).slice(0, n);
}

console.log(getRandomItems(arr, 3));
