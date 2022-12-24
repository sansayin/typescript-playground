import { LinkList } from "./LinkList";
import { Sleep } from "./utils";

const int_array: number[] = [1, 2, 3, 4];
const str_array: string[] = ["1", "2", "3", "4"];

int_array.forEach((element) => {
  console.log(element);
  console.log(typeof element);
});

str_array.forEach((element) => {
  console.log(element);
  console.log(typeof element);
});

console.log("Mix arrays using any");
const mixed  = [...int_array, ...str_array];
console.log(mixed);
if (typeof int_array[0] == typeof str_array[0]) {
  console.log("Type Match!");
} else {
  console.log("Type Not Match!");
}

if (int_array[0].toString() == str_array[0]) {
  console.log("Value Match!");
} else {
  console.log("Value Not Match!");
}

if (int_array[0] == Number(str_array[0])) {
  console.log("Value Match!");
} else {
  console.log("Value Not Match!");
}

int_array.forEach((item) => item * 2);
console.log(int_array);

const new_int_arr = int_array.map((item) => item * 2);
console.log(new_int_arr);

function quickSortF<T>(arr: T[]): T[] {
  // Base case
  if (!arr.length) return [];

  // This is a ES6 addition, it uses destructuring to pull out the
  // first value and the rest, similar to how other functional languages
  // such as Haskell, Scala do it. You can then use the variables as
  // normal below
  const [head, ...tail] = arr;
  // here we are using the arrow functions, and taking full
  // advantage of the concise syntax, the verbose version of
  // function(e) => { return e < head } is the same thing
  // so we end up with the partition part, two arrays,
  // one smaller than the pivot and one bigger than the
  // pivot, in this case is the head variable
  const left = tail.filter((e) => e < head);
  const right = tail.filter((e) => e >= head);

  // this is the conquer bit of divide-and-conquer
  // recursively run through each left and right array
  // until we hit the if condition which returns an empty
  // array. These results are all connected using concat,
  // and we get our sorted array.
  return quickSortF(left).concat(head, quickSortF(right));
}
console.log("TS QuickSort");
const q7 = quickSortF([11, 8, 14, 3, 6, 2, 7]);
console.log(q7);

const ee: boolean = int_array.some((e) => e > 3);
console.log(ee);

const [head, _h2, $hh, ...tail] = [5, 11, 8, 14, 3, 6, 2, 7];
const left = tail.filter((e) => e < head);
const right = tail.filter((e) => e >= head);
console.log($hh);
console.log(tail);

const list2 = new LinkList();
list2.addTail(5);
console.log("Add 5:");
console.log(list2.getArray());
list2.addTail(4);
console.log("Add 4:");
console.log(list2.getArray());
list2.addTail(3);
console.log("Add 3:");
console.log(list2.getArray());

list2.chopHead();
console.log("Chop Head:");
console.log(list2.getArray());
list2.addHead(6);
console.log("Add Head:");
console.log(list2.getArray());

const list3 = new LinkList(1, 2, 3, 4);

console.log("List3:", list3);

list3.addTail(5);
console.log("Add 5:");
console.log(list3.getArray());
list3.addTail(6);
console.log("Add 6:");
console.log(list3.getArray());
list3.addTail(7);
console.log("Add 7:");
console.log(list3.getArray());
list3.chopHead();
console.log("Chop Head:");
console.log(list3.getArray());

const stack = new LinkList();
stack.push(5);
console.log(stack.getArray());
stack.pop();
console.log(stack.getArray());
console.log("Find Node 3:", stack.search(3));
stack.appendList(list3);
console.log("New List:");
console.log(stack.getArray());
console.log("Find Node 3:", stack.search(3));
let e =4;
const ARR = stack.getArray();
console.log(ARR);
const q_sort = new LinkList(9, 6, 10, 5, 7);
console.log(q_sort.getArray());
const sorted = LinkList.sort(q_sort);
sorted.print("Sorted: ");
q_sort.print("Origin: ");
async function Wait(ms: number) {
  await Sleep(ms);
  console.log("Waiting...");
}
Wait(1000).then(() => {
  const _stack = new LinkList("a", "b", "c");
  _stack.chopHead();
  _stack.chopTail();
  _stack.search("b");
  _stack.print("");
  _stack.chopTail();
  _stack.print("");

  const items = [1, 2, 3, null];
  console.log("Type: ", typeof items);
});

const empty_link = new LinkList()
empty_link.print("Empty_Link")
const e_ret = empty_link.chopTail()
console.log(e_ret)
const e_ret1 =empty_link.addTail(1)
console.log(e_ret1);
empty_link.print("Before Remove:")
console.log(empty_link.remove(1))
empty_link.print("After Remove:")
empty_link.pop()
empty_link.print("After POP::")
empty_link.chopHead()
empty_link.print("should be empty ")
empty_link.appendList(q_sort)
empty_link.print("shoule be big ")
