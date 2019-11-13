import * as courseActions from "./courseActions";
import * as types from "./actionTypes";
import { courses } from "../../../tools/mockData";
import thunk from "redux-thunk";
import fetchMock from "fetch-mock";
import configureMockStore from "redux-mock-store";

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe("Async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  describe("load courses thunk", () => {
    it("should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses", () => {
        // this captures all fetch calls and responds with some mock data
        // mimics the response that the API would return but avoids making an actual API call
      fetchMock.mock("*", {
        body: courses,
        headers: { "content-type": "application/json" }
      });

      // declare actions expected to be fired from the thunk
      const expectedActions = [
        { type: types.BEGIN_API_CALL },
        { type: types.LOAD_COURSES_SUCCESS, courses }
      ];

      // create mock redux store by calling mockStore
      // initialize the store to contain the empty array of courses
      const store = mockStore( {courses: []})

      // dispatch the loadCourses action which returns a promise
      return store.dispatch(courseActions.loadCourses()).then(() => {
          expect(store.getActions()).toEqual(expectedActions)
      })
    });
  });
});

describe("createCourseSuccess", () => {
  it("should create a CREATE_COURSE_SUCCESS action", () => {
    // arrange
    const course = courses[0];
    const expectedAction = {
      type: types.CREATE_COURSE_SUCCESS,
      course
    };
    // act
    const action = courseActions.createCourseSuccess(course);

    //aseert
    expect(action).toEqual(expectedAction);
  });
});
