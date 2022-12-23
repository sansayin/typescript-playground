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
      p.Next = new Node(element);
      this.size++;
      p = p.Next;
    });
    this.tail = p;
  }
  public get Size(): number {
    return this.size;
  }
  public appendList(a: LinkList<T>) {
    let p = a.head;
    while (p) {
      this.addTail(p.Value);
      p = p.Next;
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
        this.tail.Next = node;
        this.tail = node;
      }
    }
    this.size++;
    return node;
  }

  public addHead(value: T): Node<T> {
    const p = new Node(value);
    p.Next = this.head!;
    this.head = p;
    this.size++;
    return p;
  }

  public chopHead(): Node<T> | null {
    if (this.size == 0) return null;
    const p = this.head;
    this.head = this.head!.Next;
    this.size--;
    return p;
  }

  public chopTail(): T | null {
    if (this.size == 0) return null;
    if (this.size == 1) {
      const ret = this.head?.Value;
      this.size--;
      this.head = this.tail = null;
      return ret;
    }
    let f = this.head;
    let s = null;
    while (f && f != this.tail) {
      s = f;
      f = f.Next;
    }
    this.size--;
    this.tail = s;
    s ? (s.Next = null) : {};
    return f.Value;
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
      if (p.Value == value) {
        return true;
      }
      p = p.Next;
    }
    return false;
  }

  public remove(value: T): Node<T> {
    let fast = this.head;
    let slow;
    while (fast && fast.Value != value) {
      slow = fast;
      fast = fast.Next;
    }
    const ret = fast;
    slow.Next = fast.Next;
    ret.Next = undefined;
    return ret!;
  }

  //public filter(pivot: T, list: NNodeCList<T>): NNodeCList<T>[] {
  //  let left = new NNodeCList<T>();
  //  let right = new NNodeCList<T>();
  //  let p = list.head;
  //  list.print()
  //  while (p?.Next) {
  //    console.log("VALUE:", p.Value, " PIVOT:", pivot)
  //    if (p.Value > pivot) {
  //      left.addTail(p.Value)
  //      console.log("LEFT ADD:", p.Value)
  //    }
  //    else {
  //      right.addTail(p.Value)
  //      console.log("RIGH ADD:", p.Value)
  //    }
  //    p = p.Next
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
      array.push(p.Value);
      p = p.Next;
    }
    return array;
  }

  static sort<T>(list: LinkList<T>): LinkList<T> {
    if (!list.head || !list.head.Next) {
      return list;
    }
    const pivot = list.head!;
    let leftList: LinkList<T> = new LinkList();
    let rightList: LinkList<T> = new LinkList();
    let currentNode = pivot.Next;
    //pivot.Next = null!;

    while (currentNode) {
      if (currentNode.Value < pivot.Value) {
        leftList.addTail(currentNode.Value);
      } else {
        rightList.addTail(currentNode.Value);
      }
      currentNode = currentNode.Next;
    }

    leftList = this.sort(leftList);
    rightList = this.sort(rightList);

    leftList.addTail(pivot.Value);
    leftList.appendList(rightList);
    return leftList;
  }

  public print(msg: string) {
    let p = this.head;
    msg = msg + " :";
    let output: string = msg;
    while (p) {
      output = output + p.Value + " ";
      p = p.Next;
    }
    console.log(output);
  }
}

export { LinkList };
