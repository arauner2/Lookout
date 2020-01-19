export class Incident {
    constructor(
        public subject: string,
        public sender: string,
        public details: string,
        public votes: number = 0,
        public send_date: Date,
        public id: string = ''
    ) { }
}