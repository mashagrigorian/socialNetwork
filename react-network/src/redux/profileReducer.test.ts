import profileReducer, {actions} from "./profileReducer";

let state = {
  posts: [
    { id: 1, message: "Hi, how are you", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 25 },
    { id: 3, message: "Blabla", likesCount: 11 },
    { id: 4, message: "dada", likesCount: 12 },
  ],
  profile: null,
  status: "",
  newPostText: ''
};

it("length of posts should be incremented", () => {
  //1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(5);
});

it("message of new post should be corect", () => {
  //1. test data
  let action = actions.addPostActionCreator("it-kamasutra.com");
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts[4].message).toBe("it-kamasutra.com");
});

it("after deleting length should be decremented", () => {
  //1. test data
  let action = actions.deletePost(1);
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(3);
});

it(`after deleting length should not be decremented if id is incorrect`, () => {
  //1. test data
  let action = actions.deletePost(1000);
  // 2. action
  let newState = profileReducer(state, action);

  //3. expectation
  expect(newState.posts.length).toBe(4);
});
