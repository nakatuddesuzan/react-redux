import { createStore } from "redux";
import rootReducer from "./reducers";
import initialState from "./reducers/initialState";
import * as courseActions from "./actions/courseActions";


// This is an Intergration test
// Our goal is to ensure that our actions, store and reducers are all interacting together as expected
it("should handle creating courses", () => {
  // arrange
  const store = createStore(rootReducer, initialState);
  const course = {
    title: "Writting clean code"
  };

  // act
  const action = courseActions.createCourseSuccess(course);
  store.dispatch(action);

  // assert
  const createdCourse = store.getState().courses[0];
  expect(createdCourse).toEqual(course);
});
