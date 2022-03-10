import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mr.Rocky </span>
            from <span className="purple"> New Jersey, USA.</span>
            <br />I am a developer.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Texting & Calling friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Going on social media 
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping the family
            </li>
            <li className="about-activity">
              <ImPointRight /> Going to school
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "I'm just here trying to be the next Elon Musk."{" "}
          </p>
          <footer className="blockquote-footer">Mr.Rocky</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
