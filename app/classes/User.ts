export class User {
    constructor(
        public username: string,
        public email: string,
        public motto: string,
        public favorite?: string
    ){}
}