import {User} from './user.model'
export class AuthService{
    currentUser:User

    updateCurrentUser(firstName, lastName){
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
    }
}