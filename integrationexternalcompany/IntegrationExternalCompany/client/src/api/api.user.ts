import { IUserAuth } from "../components/shared/models/user.model";

const isAuthUser = async (userAuth: IUserAuth):  Promise<boolean> => (await (await fetch('login', {
        method: 'POST',
        body: JSON.stringify(userAuth),
        headers: { 'Content-type': 'application/json; charset=UTF-8' },
    })).json());

const usersData = async () => (await (await fetch('get')).json()); 

export { isAuthUser, usersData }