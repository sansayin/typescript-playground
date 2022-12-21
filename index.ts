let message: string = "Hello World!"
let int_array: number[] = [1, 2, 3, 4];
const str_array: string[] = ["1", "2", "3", "4"];

int_array.forEach(element => {
    console.log(element)
    console.log(typeof element)
});

str_array.forEach(element => {
    console.log(element)
    console.log(typeof element)
});

let mixed: any[] = [
    ...int_array,
    ...str_array
]
if (typeof int_array[0] == typeof str_array[0]) {
    console.log("Type Match!")
} else {
    console.log("Type Not Match!")
}

if ((int_array[0]).toString() == str_array[0]) {
    console.log("Value Match!")
} else {
    console.log("Value Not Match!")
}

if (int_array[0] == Number(str_array[0])) {
    console.log("Value Match!")
} else {
    console.log("Value Not Match!")
}

int_array.forEach(item => item * 2)
console.log(int_array)

const new_int_arr = int_array.map(item => item * 2)
console.log(new_int_arr)

function quickSortF(arr: any[]): any[] {
    // Base case
    if (!arr.length)
        return []

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
    const left = tail.filter(e => e < head);
    const right = tail.filter(e => e >= head);

    // this is the conquer bit of divide-and-conquer
    // recursively run through each left and right array
    // until we hit the if condition which returns an empty
    // array. These results are all connected using concat,
    // and we get our sorted array.
    return quickSortF(left).concat(head, quickSortF(right))

}

const q7 = quickSortF([11, 8, 14, 3, 6, 2, 7])
console.log(q7)


let ee: Boolean = int_array.some(e => e > 3)
console.log(ee)

const [head, _h2, $hh, ...tail] = [5, 11, 8, 14, 3, 6, 2, 7];
const left = tail.filter(e => e < head)
const right = tail.filter(e => e >= head)
console.log($hh)
console.log(tail)

import { NNodeCList, NNodeC } from "./linklist"


let list2 = new NNodeCList();
list2.addTail(5)
console.log("Add 5:")
console.log(list2.getArray())
list2.addTail(4)
console.log("Add 4:")
console.log(list2.getArray())
list2.addTail(3)
console.log("Add 3:")
console.log(list2.getArray())

list2.chopHead();
console.log("Chop Head:")
console.log(list2.getArray())
list2.addHead(6)
console.log("Add Head:")
console.log(list2.getArray())


let list3 = new NNodeCList(1, 2, 3, 4);

console.log("List3::", list3)

list3.addTail(5)
console.log("Add 5:")
console.log(list3.getArray())
list3.addTail(6)
console.log("Add 6:")
console.log(list3.getArray())
list3.addTail(7)
console.log("Add 7:")
console.log(list3.getArray())
list3.addTail(null)
console.log("Add null:")
console.log(list3.getArray())
list3.chopHead();
console.log("Chop Head:")
console.log(list3.getArray())

let stack = new NNodeCList();
stack.push(5);
console.log(stack.getArray())
let pop = stack.pop();
console.log(stack.getArray())
console.log("Find Node 3:", stack.search(3));
NNodeCList.appendList(stack, list3)
console.log("New List:")
console.log(stack.getArray())
console.log("Find Node 3:", stack.search(3));

let ARR = stack.getArray()
console.log(ARR)


let q_sort = new NNodeCList(9, 6, 10, 5);
console.log(q_sort.getArray())
let q = q_sort.remove(6)
console.log("Removed:", q.Value)
//q_sort.addTail(new NNodeC(8))
console.log(q_sort.getArray())
//NNodeCList.sort(q_sort)

let empty_stack = new NNodeCList();
empty_stack.chopHead();
empty_stack.chopTail();
empty_stack.search(3);
console.log(empty_stack.getArray())
