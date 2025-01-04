class Node {
    // 클래스를 인스턴스화했을 때 자동으로 호출되는 생성자 생성
    constructor(data, next = null) {
        // 초기화
        this.data = data;
        this.next = next;
    }
}


// 연결리스트 만들기
class LinkedList{
    constructor() {
        this.head = null; //연결리스트의 시작을 가리키는 head
        this.count = 0; //총 저장된 노드의 수를 저장하는 count
    }

    // 연결리스트의 모든 원소를 출력
    printAll() {
        let currentNode = this.head
        let text = "["

        // 리스트 끝까지 순회
        while (currentNode != null) {
            // console.log("currentNode.data: ", currentNode.data);

            text += currentNode.data
            //끝날떄까지 next노드 참조
            currentNode = currentNode.next;

            if (currentNode != null) {
                text += ", "
            }
        }

        text += "]"
        console.log('text: ', text);
    }

    // 원하는 인덱스에 데이터를 삽입하는 함수
    insertAt(index, data) { //삽입할 위치, 삽입할 데이터

        // 예외처리 먼저: 연결리스트의 크기보다 큰 곳에 삽입하거나 음수 위치에 삽일 할 경우 에러처리
        if (index > this.count || index < 0) {
            throw new Error("범위를 넘어갔습니다.");
        }

        // 새로 삽입 할 노드 생성 
        let newNode = new Node(data);

        // 새로 삽입할 노드 연결
        /**
         * case1. 리스트의 가장 앞부분에 삽입 : 새로 삽입하는 노드가 head가 되어야 하는 경우
         * case2. 가장 앞 부분을 제외한 나머지 부분에 삽입하는 경우: head Node에서 next 목표 index까지 계속 참조해서 이동
         */
        if (index == 0) {
            newNode.next = this.head; //새로 생성된 노드를 head를 가리키게 해줌
            this.head = newNode;//새로 생성한 노드를 head로 변경
        } else {
            /**
                currentNode로 세 번째 떨어진 노드 전까지 이동 시킴
                newNode가 currentNode가 가리키던 노드를 가리키게 한다.
                currentNode가 newNode를 가리키게 한다.
             */

    
            //삽입하려는 노드 바로 전까지 가기 위한 변수 생성 : 헤드에서 시작하기 때문에 head로 초기화
            let currentNode = this.head;

            // 2. 목표 인덱스까지 next를 이용해 이동 시킴
            for (let i = 0; i < index - 1; i++) {                
                currentNode = currentNode.next;
            }
            newNode.next = currentNode.next
            currentNode.next = newNode 
        }
        this.count++
    }
    
}



export {Node, LinkedList}
