import { DateCountPipe } from "./date-count.pipe";

export class GitUser {
    constructor(
        public avatar_url:string,
        public html_url: any,
        public followers:number,
        public following:number,
        public login:string,
        public public_repos:number,
        public location:string,
        public email:string,
        public created_at: Date,
        public bio: string
        ){}
}
