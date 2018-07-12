import _ from 'lodash';
import { FETCH_USERS, FETCH_USER } from '../actions';

export default function (state = {}, action) {
    switch (action.type){
        case FETCH_USER:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_USERS:
          return _.mapKeys(action.payload,'id');

        default:
          return state;
    }
}
