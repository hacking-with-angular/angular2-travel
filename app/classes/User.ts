export class User {
    // 如果是可选的参数的话,后面的参数也必须是可选的
    constructor(
        public username: string,
        public email: string,
        public motto: string,
        public favorite?: string
    ){}
}