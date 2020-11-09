import React from "react";
import {
  Card,
  Container,
  Segment,
  Form,
  Divider,
  Header,
  Checkbox,
  Button
} from "semantic-ui-react";
import styles from "../assets/styles.module.css";
import Movie from "./Movie";

export default class MovieScreen extends React.Component {
  // Task: Add a constructor to initialize empty state
  constructor(props) {
      super(props)
  }

  // Task: update state to add new movie (called when pressing submit on form)
  submitNewMovie = () => {
  };

  render() {
    return (
      <Card raised className={styles.movieScreen}>
        <Card.Content>
          <Card fluid>
            <Card.Header>
              {/* Task: Add some padding to the header */}
              <h2>My Holiday Movies</h2>
            </Card.Header>
            <Card.Content>
              <Card.Group>
                {/* Render your holiday movies using the movie component and state here (hint: use map)*/}
              </Card.Group>
            </Card.Content>
          </Card>
          <Divider></Divider>
          <Card fluid>
            <Card.Header>
              {/* Task: Add some padding to the header */}
              <h2>Add new movie</h2>
            </Card.Header>
            <Card.Content>
              {/* Task: Add a form with the five Form.Field (movie name, movie image link, movie year, personal comment, personal rating) and submit button */}
              <Form>
              </Form>
            </Card.Content>
          </Card>
        </Card.Content>
      </Card>
    );
  }
}
