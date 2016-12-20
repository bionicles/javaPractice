var students = [
	{first_name : 'Michael', last_name : 'Jordan'},
	{first_name : 'John', last_name : 'Rosales'},
	{first_name : 'Mark', last_name : 'Guillen'},
	{first_name : 'KB', last_name : 'Tonel'},
];

function studentsAndInstructors(students) {
	for (var studentNumber in students){
		console.log(students[studentNumber].first_name + " " + students[studentNumber].last_name);
	}
}

studentsAndInstructors();