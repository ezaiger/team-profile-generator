const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // employee properties
        super(name, id, email);
        // engineer property: GitHub username
        this.github = github;
    }
    // engineer methods
    getGithub() {
        return this.github
    }

    getRole() {
        return 'Engineer';
    }
};

module.exports = Engineer;