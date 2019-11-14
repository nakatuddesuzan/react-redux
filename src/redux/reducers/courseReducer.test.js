import courseReducer from "./courseReducer";
import * as courseActions from "../actions/courseActions";

it("should add a course when passed the CREATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      title: "A"
    },
    {
      title: "B"
    }
  ];

  const newCourse = {
    title: "C"
  };

  const action = courseActions.createCourseSuccess(newCourse);

  // act
  const newState = courseReducer(initialState, action);

  // assert
  expect(newState.length).toEqual(3);
  expect(newState[0].title).toEqual("A");
  expect(newState[1].title).toEqual("B");
  expect(newState[2].title).toEqual("C");
});

it("should update a course when passed the UPDATE_COURSE_SUCCESS", () => {
  // arrange
  const initialState = [
    {
      id: 1,
      title: "A"
    },
    {
      id: 2,
      title: "B"
    }
  ];

  const course = {
    id: 2,
    title: "New Title"
  };

  const action = courseActions.updateCourseSuccess(course);

  // act
  const newState = courseReducer(initialState, action);
  const updatedCourse = newState.find(a => a.id == course.id);
  const untouchedCourse = newState.find(a => a.id == 1);

  // assert
  expect(updatedCourse.title).toEqual("New Title");
  expect(untouchedCourse.title).toEqual("A");
  expect(newState.length).toEqual(2);
});
