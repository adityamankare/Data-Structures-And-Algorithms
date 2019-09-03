class HashTable {
	//constructor
	constructor(size){
		this.data = new Array(size);
	}

	//hash function
	_hash(key) { 
		 let hash = 0;
		 for(let i = 0; i < key.length; i++){
			 hash = (hash + key.charCodeAt(i) * i) % this.data.length; 
			 // the 'charCodeAt()' method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index
		 }
		 return hash;
	} // O(1)

	//set method
	set(key, value){
		let address = this._hash(key);
		if(!this.data[address]){
			this.data[address] = [];
		}
		this.data[address].push([key, value]);
		return this.data;
	} // O(1)

	//get method
	get(key){
		let address = this._hash(key);
		const currentBucket = this.data[address];
		if(currentBucket){
			for(let i = 0; i < currentBucket.length; i++){
				if(currentBucket[i][0] === key){
					return currentBucket[i][1];
				}
			}
		}
		return undefined
	} // O(1) if no collisions

	//keys method
	keys(){
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray;
  } // O(n) 

	values(){
    const valuesArray = [];
    for (let i = 0; i < this.data.length; i++){
      if(this.data[i]){
        valuesArray.push(this.data[i][0][1])
      }
    }
    return valuesArray;
  } // O(n)
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
myHashTable.keys()
myHashTable.values()
