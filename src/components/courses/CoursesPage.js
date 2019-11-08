import React from "react";

class CoursesPage extends React.Component {
  state = {
    //this is called a class field
    course: {
      title: ""
    }
  };

  handleChnge = event => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({ course });
  };

  handleSubmit = event => {
      event.preventDefault();
      alert(this.state.course.title)
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Courses</h1>
        <h3>Add course</h3>
        <input
          type="text"
          onChange={this.handleChnge}
          value={this.state.value}
        />
        <input type="submit" value="Save" />
      </form>
    );
  }
}

export default CoursesPage;
