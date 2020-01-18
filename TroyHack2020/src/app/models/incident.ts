export class Incident {
    constructor(
        public subject: string,
        public sender: string,
        public details: string,
        public votes: number,
        public send_date: Date
    ) { }
}