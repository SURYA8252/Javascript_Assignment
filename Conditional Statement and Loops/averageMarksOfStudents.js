function computeGrade(students) {
    let totalMarks = 0;
    for (let student of students) {
        totalMarks += student.marks;
    }
    let averageMarks = totalMarks / students.length;
    
    let grade;
    if (averageMarks < 60) {
        grade = 'F';
    } else if (averageMarks < 70) {
        grade = 'D';
    } else if (averageMarks < 80) {
        grade = 'C';
    } else if (averageMarks < 90) {
        grade = 'B';
    } else {
        grade = 'A';
    }
    
    console.log(`Average Marks: ${averageMarks}`);
    console.log(`Grade: ${grade}`);
}

// Example usage:
let students = [
    {name: 'David', marks: 80},
    {name: 'Vinoth', marks: 77},
    {name: 'Divya', marks: 88},
    {name: 'Ishitha', marks: 95},
    {name: 'Thomas', marks: 68}
];
computeGrade(students);
