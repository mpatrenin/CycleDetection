// Classes for linked list and element of linked list
class ListElement {
    data: any;
    next: ListElement | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }   

}

class LinkedList {
    head: ListElement | null;
    
    constructor() {
        this.head = null;
    }

    addNodeToLinkedList (newNode: any) {
        let node = new ListElement(newNode);
        let tempNode: ListElement;

        if (this.head === null) {
            this.head = node
        } else {
            tempNode = this.head;
            while (tempNode.next) {
                tempNode = tempNode.next;
            }
            tempNode.next = node;
        }
    }
}
 
// Loop detection
const detectLoopInLinkedList = (LinkedList: LinkedList) => {
    let slowPointer = LinkedList.head;
    let fastPointer = LinkedList.head;
    let result = false;
     
    while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;

        if (slowPointer === fastPointer) {
            result = true;
            break;
        }

    }
    return result;
}

// Test function
 const testCycleDetectionInLinkedList = () => {
    let newlist = new LinkedList;
    newlist.addNodeToLinkedList(1);
    newlist.addNodeToLinkedList('some string');
    newlist.addNodeToLinkedList(true);
    newlist.addNodeToLinkedList("");
    newlist.head.next.next.next = newlist.head;
    
    console.log(detectLoopInLinkedList(newlist))
}

testCycleDetectionInLinkedList();
