class Node<T> {
  public readonly value: T;
  public next: Node<T>|null;
  constructor(value: T) {
    this.value = value;
    this.next =null;
  }
  print() {
    console.log(this);
  }
}
export { Node };
