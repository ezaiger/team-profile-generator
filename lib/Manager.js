const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // employee properties
        super(name, id, email);
        // manager property
        this.officeNumber = officeNumber;
    }
    
    // manager methods
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return 'Manager';
    }

};

module.exports = Manager;