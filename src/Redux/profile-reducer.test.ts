import {
    addPostActionCreator,
    deletePostActionCreator,
    ProfilePageType,
    profileReducer,
    ProfileType
} from "./profile-reducer";

// 1. test start data
let state: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 5},
        {id: 2, message: 'It\'s my first post', likesCount: 23},
        {id: 3, message: 'It\'s my second post', likesCount: 1},
        {id: 4, message: 'blabla', likesCount: 15},
    ],
    profile: null as ProfileType | null,
    status: '',
};

it('new post should be added', () => {

    let action = addPostActionCreator('it-kamasutra.com');
// 2. action
    let newState = profileReducer( state , action);


    // 3. expectation
   expect(newState.posts.length).toBe(5);
});

it('message of new post should be correct', () => {
// 1. test start data

    let action = addPostActionCreator('it-kamasutra.com');
// 2. action
    let newState = profileReducer( state , action);

    // 3. expectation
    expect(newState.posts[4].message).toBe('it-kamasutra.com');
});

it('delete post, length of messages should be decrement', () => {
// 1. test start data

    let action = deletePostActionCreator(3);
// 2. action
    let newState = profileReducer( state , action);

    // 3. expectation
    expect(newState.posts.length).toBe(3);
});

