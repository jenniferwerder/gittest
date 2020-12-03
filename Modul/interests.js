import user from './user';

export class interests extends user{
    constructor (user, interests) {
        super(user);
        user.interests = interests; 
    }

}



