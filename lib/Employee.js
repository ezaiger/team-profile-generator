class Employee {
    constructor(name, id, email) {
        // employee properies
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // employee methods
    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;