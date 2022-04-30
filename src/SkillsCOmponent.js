import { Card, Figure } from "react-bootstrap";

const SkillsComponent = ({ title, skills }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          <h2>{title}</h2>
        </Card.Title>
        <Card.Text>
          {skills.map((skill) => (
            <Figure>
              <Figure.Image src={skill.src} />
              <Figure.Caption>{skill.skilltype}</Figure.Caption>
            </Figure>
          ))}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default SkillsComponent;
