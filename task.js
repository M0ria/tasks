class Task {
    name
    creator
    assignee
    time

    constructor({ name, creator, assignee, time }) {
        this.name = name
        this.creator = creator
        this.assignee = assignee
        this.time = time
    }
}

module.exports = Task