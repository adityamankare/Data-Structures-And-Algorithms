class LinkedList {
	constructor(value){
		this.head = {
			value: value,
			next: null
		}
		this.tail = this.head;
		this.length = 1;
	}
	append(value){ //O(1) time complexity
		const newNode = {
			value: value,
			next: null
		};
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value){ //O(1) time complexity
		const newNode = {
			value: value,
			next: null
		};
		newNode.next = this.head;
		this.head = newNode;
		this.length++;	
		return this;
	}
	printList(){ //O(n) time complexity
		const array = [];
		let currentNode = this.head;
		while(currentNode !== null){
			array.push(currentNode.value);
			currentNode = currentNode.next;
		}
		return array;
	}
	insert(index, value){ //O(n) time complexity
		if (index === parseInt(index, 10)){
			if(index >= this.length){
				return this.append(value);
			}
			const newNode = {
				value: value,
				next: null
			};
			const leader = this.traverseToIndex(index-1)
			const holdingPointer = leader.next;
			leader.next = newNode;
			newNode.next = holdingPointer;
			this.length++;
			return this;
		}
	}
	traverseToIndex(index){ //O(n) time complexity
		let counter = 0;
		let currentNode = this.head;
		while(counter !== index){
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode
	}
	remove(index){ //O(n) time complexity
		if (index === parseInt(index, 10)){
			const leader = this.traverseToIndex(index);
			const unwantedNode = leader.next;
			leader.next = unwantedNode.next;
			this.length--;
			return this;
		}
	}
} //O(n) space complexity of entire linked list

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.remove(0);

myLinkedList.printList();


