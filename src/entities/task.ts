import { randomUUID } from "node:crypto";

export class Task {
    id: string;
    name: string;
    creator: string;
    assignee: string;
    time: number;

    constructor({ name, creator, assignee, time }: Record <string, any>) {
        this.id = randomUUID()
        this.name = name
        this.creator = creator
        this.assignee = assignee
        this.time = time
    }
}
