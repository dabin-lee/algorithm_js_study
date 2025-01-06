//스택을 이전에 만들었던 연결리스트로 만들 예정
import { LinkedList } from "./LinkedList.mjs";

// stack class 생성
class Stack{
  //생성자를 만들어 스택이 초기화할 떈 빈 리스트를 생성하도록 함.
  constructor(){
    this.list = new LinkedList()
  }

  //데이터를 삽입하는 함수
  push(data){
    this.list.insertAt(0, data)
  }

  // 데이터를 꺼내는 함수
  // pop은 연결리스트의 head에서 꺼내면 되기 때문에 index 0 을 제거하면 됨.
  pop(){
    try {
      return this.list.deleteAt(0) //제거된 노드는 반환해줌
    } catch (error) {
      return null;
    }
  }

  // 스택의 Top에있는 데이터를 참조만 하고 제거하지는 않음.
  peek(){
    return this.list.getNodeAt(0) //첫번째 노드를 읽어오고 탐색함
  }

  //스택이 비어있으면 true 비어있지 않으면 false
  isEmpty(){
    return (this.list.count == 0)
  }
}

export { Stack }

// 연결리스트를 구현할 때 빈 리스트를 지우면 예외를 던지도록 했는데 예외가 발생하면 null을 리턴해주도록 함