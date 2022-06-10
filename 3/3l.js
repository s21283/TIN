function Student(name, surname, indexNumber, grades){
    this.name = name;
    this.surname = surname;
    this.indexNumber = indexNumber;
    this.grades = grades;

    this.average = arr => arr.reduce((a,b) => a + b, 0) / arr.length

    this.getInfo = function(){
        console.log(`${this.name} ${this.surname} ${this.average(this.grades)}`);
    }
}

let student1 = new Student("Mateusz", "Nowak", "2137", [2, 3, 3, 4, 5]);
student1.getInfo();