class NNodeCList<T>{
  private head: NNodeC<T> | null = null;
  private tail: NNodeC<T> | null = null;
  private size: number = 0;
  constructor(value?: T, ...arr: T[]) {
    if (!value)  return ;
    this.head = new NNodeC(value);
    this.size++;
    let p: NNodeC<T> = this.head;
    arr.forEach(element => {
      p.Next = new NNodeC(element);
      this.size++;
      p = p.Next;
    });
    this.tail = p;
  }
  public get Size(): Number {
    return this.size;
  }
  static appendList<T>(a: NNodeCList<T>, b: NNodeCList<T>){
    let p = b.head;
    while(p){
      a.addTail(p.Value!)
      p = p.Next;
    }
    return a;
  }

  static appendNode<T>(a: NNodeCList<T>, value: T): NNodeCList<T> | null {
    a.addTail(value)
    return a;
  }

  public addTail(value: T): NNodeC<T> {
    if (!value) return null!;
    let node = new NNodeC(value)
    if (this.size == 0) {
      this.head = this.tail = node
    } else {
      if(this.tail){
        this.tail.Next = node;
        this.tail = node;
      }
    }
    this.size++;
    return node;
  }

  public addHead(value: T): NNodeC<T> {
    let p = new NNodeC(value);
    p.setNext(this.head!);
    this.head = p;
    this.size++;
    return p;
  }

  public chopHead(): NNodeC<T>|null {
    if (this.size == 0) return null;
    let p = this.head;
    this.head = this.head!.Next;
    this.size--;
    return p;
  }

  public chopTail(): T {
    if (this.size == 0) return null!;
    if (this.size == 1) {
      let ret = this.head?.Value
      this.size--;
      this.head = this.tail = null
      return ret!;
    };
    let f:any = this.head;
    let s:any = null;
    while (f && f != this.tail) {
      s = f;
      f = f.Next
    }
    this.size--;
    this.tail = s;
    s.setNext(null);
    return f.Value
  }

  public push(value: T) {
    this.addTail(value)
  }

  public pop(): T {
    return this.chopTail()
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

  public remove(value: T): NNodeC<T> {
    let fast:any = this.head;
    let slow:any = null;
    while (fast && fast.Value != value) {
      slow = fast;
      fast = fast.Next
    }
    let ret = fast
    slow.Next = fast?.Next
    ret.Next = null;
    return ret;
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
    let array: T[] = [];
    let p = this.head;
    while (p) {
      array.push(p.Value)
      p = p.Next
    }
    return array;
  }

//  static sort<T>(list: NNodeCList<T>): NNodeCList<T>[] {
//    let pivot = list.chopHead()
//    console.log("POP Head:", pivot.Value)
//    let [left, right] = list.filter(pivot.Value, list)
//    //process.exit()
//    return NNodeCList.sort(NNodeCList.appendList(NNodeCList.appendNode(left, pivot), right))
//  }

  public print() {
    let p = this.head;
    let msg: string = "";
    while (p) {
      msg = msg + " " + p.Value
      p = p.Next;
    }
    console.log(msg)
  }
};

const Sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}


class NNodeC<T>{
  private value: T;
  private next: NNodeC<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
  get Value(): T{
    return this.value
  }
  set Value(value: T) {
    this.value = value
  }
  get Next() {
    return this.next!;
  }
  set Next(node: NNodeC<T>) {
    this.next = node;
  }
  setNext(node: NNodeC<T>){
    this.next = node;
  }
  print() {
    console.log(this);
  }
};
export { NNodeCList, NNodeC , Sleep}
