class Student {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}


class Bootcamp {
    constructor(name, level, students) {
        this.name = name;
        this.level = level;
        this.students = [];

    }
    registerStudent(studentToRegister) {
        if (!studentToRegister.name || !studentToRegister.email) {
            console.log('Invalid name or email');
            return false;
        }

        for (const newStudent of this.students) {
            if (newStudent.email === studentToRegister.email) {
                console.log('This email has already been registered.');
                return false;
            }
        }
        this.students.push(studentToRegister);
        console.log("You have been successfully registered to the bootcamp.");
        return true;
    }
    listStudents() {
        if (this.students.length === 0) {
            console.log(`No students are resgistered to the ${this.name} bootcamp.`);
            return false;
        } else {
            console.log(`The student registered in ${this.name} are:`);
            for (const student of this.students) {
                console.log(`Name: ${student.name} - Email: ${student.email}`);
            }
            return true;
        }
    }
}



testStudent = new Student('Bugs Bunny', 'bugs@bunny.com');
console.log(testStudent);
if (testStudent.name === 'Bugs Bunny' && testStudent.email === 'bugs@bunny.com') {
    console.log('TASK 1: PASS');
}


reactBootcamp = new Bootcamp("React", "Advanced");
console.log(reactBootcamp);
if (reactBootcamp.name === 'React' && reactBootcamp.level === 'Advanced'
    && Array.isArray(reactBootcamp.students) && reactBootcamp.students.length === 0) {
    console.log('TASK 2: PASS');
}

const runTest = (bootcamp, student) => {
    const attemptOne = bootcamp.registerStudent(student);
    const attemptTwo = bootcamp.registerStudent(student);
    const attemptThree = bootcamp.registerStudent(new Student("Babs Bunny"));
    if ( attemptOne && !attemptTwo && !attemptThree) {
        console.log("TASK 3: PASS");
    }

    bootcamp.registerStudent(new Student('Babs Bunny', 'babs@bunny.com'));
    if (bootcamp.listStudents()) {
        console.log("TASK 4: PASS 1/2");
    }
    bootcamp.students = [];
    if (!bootcamp.listStudents()) {
        console.log("TASK 4: PASS 2/2");
    }
};
runTest(reactBootcamp, testStudent);



