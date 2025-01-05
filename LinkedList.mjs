class Node {
    // 클래스를 인스턴스화했을 때 자동으로 호출되는 생성자 생성
    constructor(data, next = null) {
        // 초기화
        this.data = data;
        this.next = next;
    }
}

// 연결리스트 만들기
class LinkedList {
    constructor() {
        this.head = null; //연결리스트의 시작을 가리키는 head
        this.count = 0; //총 저장된 노드의 수를 저장하는 count
    }

    // 연결리스트의 모든 원소를 출력
    printAll() {
        let currentNode = this.head;
        let text = "[";

        // 리스트 끝까지 순회
        while (currentNode != null) {
            // console.log("currentNode.data: ", currentNode.data);

            text += currentNode.data;
            //끝날떄까지 next노드 참조
            currentNode = currentNode.next;

            if (currentNode != null) {
                text += ", ";
            }
        }

        text += "]";
        console.log("text: ", text);
    }

    // 리스트의 모든 원소 제거하는 함수
    clear() {
        this.head = null; //참조하는 것을 없앰
        this.count = 0; //리스트 비움
    }

    // 원하는 인덱스에 데이터를 삽입하는 함수
    insertAt(index, data) {
        //삽입할 위치, 삽입할 데이터

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
            this.head = newNode; //새로 생성한 노드를 head로 변경
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
            newNode.next = currentNode.next;
            currentNode.next = newNode;
        }
        this.count++;
    }

    // 마지막 데이터 뒤에 삽입하는 함수
    insertLast(data) {
        this.insertAt(this.count, data);
    }

    // 특정 데이터 삭제하는 함수: 매개변수로 인덱스만 받으면 제거할 수 있게 함
    deleteAt(index) {
        if(index >= this.count || index < 0){
            throw new Error("제거할 수 없습니다.");
        }

        //노드를 순회 할 변수 생성
        let currentNode = this.head;

        // 첫 번째 노드를 제거
        if (index == 0) {
            let deletedNode = this.head; //삭제 될 노드 저장
            this.head = this.head.next; //head에 다음 노드를 지정
            this.count--; //삭제 됐으니 카운트 하나 삭제
            return deletedNode;
        }else { // head(첫 번째 노드)를 제외한 노드를 제거
            // 제거할 이전 노드까지 순회
            
            for(let i = 0; i < index - 1; i++){
                currentNode = currentNode.next;
            }
            let deletedNode = currentNode.next; // 제거한 노드 반환
            currentNode.next = currentNode.next.next; // 제거한 이전 노드가 제거할 노드의 next를 가리키게 함
            this.count--;
            return deletedNode;
        }
    }

    deleteLast(){
        return this.deleteAt(this.count - 1);//인덱스는 리스트의 카운터보다 1 작은 값을 넘겨줌
        //만일 데이터가 세개라면 2번 인덱스가 마지막 데이터임
    }

    //해당 인덱스의 노드를 읽는 함수
    getNodeAt(index){
        if(index >= this.count || index < 0){
            throw new Error('범위를 넘어갔습니다.')
        }

        let currentNode = this.head; //리스트 순회할 변수 생성
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode;
    }
}

export { Node, LinkedList };
