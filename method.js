const student = {
    name: 'Samad',
    address: 'Savar , Dhaka',
    study: 'CSE',
    taka: 4000,
    exam: function () {
        return this.name + 'is participate in the annual exam';
    },
    improveExam: function (subjects) {
        this.exam();
        return `${this.name} is improved in the annual exam ${subjects}`;
    },
    anotherCost: function (amount) {
        this.taka = this.taka - amount;
        return this.taka;
    }
}
const examResult = student.exam();
// console.log(examResult)
const reExamResult = student.improveExam('Math');
// console.log(reExamResult);
const remaining = student.anotherCost(400);
console.log(remaining);
