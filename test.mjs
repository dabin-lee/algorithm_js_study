import { Node, LinkedList } from "./LinkedList.mjs";

// 데이터 입력
let node1 = new Node(1)
let node2 = new Node(2)
let node3 = new Node(3)

// 노드 연결
node1.next = node2
node2.next = node3

console.log(node1.data); //1
console.log(node1.next.data); //2
console.log(node1.next.next.data); //3

let list = new LinkedList()
console.log("========== insertAt() 다섯 번 호출");
list.insertAt(0, 0)
list.insertAt(1, 1)
list.insertAt(2, 2)
list.insertAt(3, 3)
list.insertAt(4, 4)
list.printAll();

