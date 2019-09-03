let user = {
	age: 33,
	name: 'Aditya',
	magic: true,
	scream: function() {
		console.log('AHHH');
	}
}

user.age; //O(1)
user.spell = 'Expilliarmus'; //O(1)
user.scream();

//Map --> Gives you some order
//Set --> No duplicate keys
