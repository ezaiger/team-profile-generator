const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // employee properties
        super(name, id, email);
        // intern property
        this.school = school;
    }
    // intern methods
    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
};

module.exports = Intern;