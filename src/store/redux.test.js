import reducer from './reducers';
import * as ActionTypes from './actions';

let initialState = {
    contact : null,
    contactMessageSendResult:false,
    schedule:null
}

test('contact in reducer store contact', () => {

    expect(reducer(initialState,{
        type :ActionTypes.CONTACT , 
        payload:{contact:"some-contact"} }))
        .toEqual({
            contact : "some-contact",
            contactMessageSendResult:false,
            schedule:null
        });
  });