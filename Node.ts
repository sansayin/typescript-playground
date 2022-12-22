class Node<T> {
  private value: T;
  private next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
  get Value(): T {
    return this.value;
  }
  set Value(value: T) {
    this.value = value;
  }
  get Next() {
    return this.next!;
  }
  set Next(node: Node<T>) {
    this.next = node;
  }
  print() {
    console.log(this);
  }
}
export { Node };
