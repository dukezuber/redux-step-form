import { combineReducers } from 'redux';
import Auth from './userReducer'
import Contact from './contact';
import PersonalDetails from './personal';
import Education from './Education';



const Root =combineReducers({
    Auth,
    Contact,
    PersonalDetails,
    Education

})

export default Root;