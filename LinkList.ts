import { Node } from "./Node";

class LinkList<T> {
  private head: Node<T> | null = null;
  private tail: Node<T> | null = null;
  private size = 0;
  constructor(value?: T, ...arr: T[]) {
    if (!value) return;
    this.head = new Node(value);
    this.size++;
    let p: Node<T> = this.head;
    arr.forEach((element) => {
      p.next = new Node(element);
      this.size++;
      p = p.next;
    });
    this.tail = p;
  }
  public get Size(): number {
    return this.size;
  }
  public appendList(a: LinkList<T>) {
    let p = a.head;
    while (p) {
      this.addTail(p.value);
      p = p.next;
    }
  }

  public appendNode(a: LinkList<T>, value: T): LinkList<T> {
    a.addTail(value);
    return a;
  }

  public addTail(value: T): Node<T> {
    const node = new Node(value);
    if (this.size == 0) {
      this.head = this.tail = node;
    } else {
      if (this.tail) {
        this.tail.next = node;
        this.tail = node;
      }
    }
    this.size++;
    return node;
  }

  public addHead(value: T): Node<T> {
    const p = new Node(value);
    p.next = this.head;
    this.head = p;
    this.size++;
    return p;
  }

  public chopHead(): Node<T> | null {
    if (this.size == 0) return null;
    const p = this.head;
    if(this.head) this.head = this.head.next;
    this.size--;
    return p;
  }

  public chopTail(): T |null {
    if (this.size == 0) return null;
    if (this.size == 1) {
      let ret = null;
      this.head?ret = this.head.value:{};
      this.size--;
      this.head = this.tail = null;
      return ret;
    }
    let f = this.head;
    let s = null;
    while (f && f != this.tail) {
      s = f;
      f = f.next;
    }
    this.size--;
    this.tail = s;
    s ? (s.next = null) : {};
    return f&&f.value;
  }

  public push(value: T) {
    this.addTail(value);
  }

  public pop(): T | null {
    return this.chopTail();
  }

  public search(value: T): boolean {
    let p = this.head;
    while (p != null) {
      if (p.value == value) {
        return true;
      }
      p = p.next;
    }
    return false;
  }

  public remove(value: T): Node<T> | null {
    let fast = this.head;
    let slow = null;
    while (fast && fast.value != value) {
      slow = fast;
      fast = fast.next;
    }
    if (fast && slow) {
      slow.next = fast.next;
      fast.next = null;
    }
    return fast;
  }

  //public filter(pivot: T, list: NNodeCList<T>): NNodeCList<T>[] {
  //  let left = new NNodeCList<T>();
  //  let right = new NNodeCList<T>();
  //  let p = list.head;
  //  list.print()
  //  while (p?.next) {
  //    console.log("VALUE:", p.value, " PIVOT:", pivot)
  //    if (p.value > pivot) {
  //      left.addTail(p.value)
  //      console.log("LEFT ADD:", p.value)
  //    }
  //    else {
  //      right.addTail(p.value)
  //      console.log("RIGH ADD:", p.value)
  //    }
  //    p = p.next
  //  }
  //  console.log("LEFT:")
  //  left.print()
  //  console.log("RIGHT:")
  //  right.print()
  //  return [left, right];
  //}
  //
  public getArray(): T[] {
    const array: T[] = [];
    let p = this.head;
    while (p) {
      array.push(p.value);
      p = p.next;
    }
    return array;
  }

  static sort<T>(list: LinkList<T>): LinkList<T> {
    if (!list.head || !list.head.next) {
      return list;
    }
    const pivot = list.head;
    let leftList: LinkList<T> = new LinkList();
    let rightList: LinkList<T> = new LinkList();
    let currentNode = pivot.next;
    //pivot.next = null!;

    while (currentNode) {
      if (currentNode.value < pivot.value) {
        leftList.addTail(currentNode.value);
      } else {
        rightList.addTail(currentNode.value);
      }
      currentNode = currentNode.next;
    }

    leftList = this.sort(leftList);
    rightList = this.sort(rightList);

    leftList.addTail(pivot.value);
    leftList.appendList(rightList);
    return leftList;
  }

  public print(msg: string) {
    let p = this.head;
    msg = msg + " :";
    let output: string = msg;
    while (p) {
      output = output + p.value + " ";
      p = p.next;
    }
    console.log(output);
  }
}

export { LinkList };
