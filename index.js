// QUESTION 109:
const CurrentTime = new Date();
if (CurrentTime.getHours() < 12) {
    console.log("Good Morning");
}
// QUESTION 110:
function assignGrade(score) {
    if (score >= 90) {
        console.log("Grade A1");
    }
    else if (score >= 80) {
        console.log("Grade A");
    }
    else if (score >= 70) {
        console.log("Grade B");
    }
    else if (score >= 60) {
        console.log("Grade C");
    }
    else if (score >= 50) {
        console.log("Grade D");
    }
    else {
        console.log("Fail!!");
    }
}
assignGrade(89);
assignGrade(64);
assignGrade(92);
assignGrade(40);
// QUESTION 111:
function categorizaPersonAge(age) {
    if (age < 13) {
        console.log("Your are child!!"); //less than 13
    }
    else if (age > 13 && age <= 19) {
        console.log("Your are teenager!!"); //greater than 13 and less Or equal to 19
    }
    else {
        console.log("Your are adult!!"); //greater than 19
    }
}
categorizaPersonAge(12);
categorizaPersonAge(19);
categorizaPersonAge(30);
export {};
