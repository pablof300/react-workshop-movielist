import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import styles from "../assets/styles.module.css";

export default class Movie extends React.Component {
  render() {
    return (
      <Card>
        {/* Task: use movie props to render dynamic information */}
        <Image
          src="https://www.gsmr.com/sites/default/files/imagecache/event_image/01KEYARTBU18169_KA_PE%20Resized.png"
          size="medium"
        />
        <Card.Content>
          <Card.Header>Polar express</Card.Header>
          <Card.Meta>2004</Card.Meta>
          <Card.Description>best movie ever!!!!</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            <Icon name="user" />
            9.5/10
          </a>
        </Card.Content>
      </Card>
    );
  }
}
