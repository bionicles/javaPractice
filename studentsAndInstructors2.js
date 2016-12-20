var users = {
 'Students': [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
  ],
 'Instructors': [
     {first_name : 'Michael', last_name : 'Choi'},
     {first_name : 'Martin', last_name : 'Puryear'}
  ]
 }

function studentsAndInstructors(users) {
	console.log("Students");
	for (var student in users.Students){
		var studentLength = (users.Students[student].first_name.length + users.Students[student].last_name.length);
		console.log(student + " - " + users.Students[student].first_name + " " + users.Students[student].last_name + " - " + studentLength);
	}
	console.log("Instructors")
	for (var instructor in users.Instructors){
		var instructorLength = (users.Instructors[instructor].first_name.length + users.Instructors[instructor].last_name.length);
		console.log(instructor + " - " + users.Instructors[instructor].first_name + " " + users.Instructors[instructor].last_name + " - " + instructorLength);
	}
}

studentsAndInstructors(users);