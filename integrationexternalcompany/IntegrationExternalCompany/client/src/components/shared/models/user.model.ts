export interface IUser {
    id: number;
    login: string;
    fullName: string;
    key: string;
    company: string;
}
export interface IUserAuth {
    Login: string;
    Key: string;
    Remember:  boolean;
}