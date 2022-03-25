import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import DUMMY from "./data.json";

const Alerts = () => {
  const cleanHTML = (data) => {};

  return (
    <ListGroup className="mt-5 px-5">
      {DUMMY.map((city, id) => (
        <ListGroup.Item
          key={id}
          className="py-3 mt-3 border rounded d-flex justify-content-between align-items-center"
        >
          <h5 className="my-0">{city.title}</h5>
          <div
            dangerouslySetInnerHTML={{ __html: cleanHTML(city.balloonText) }}
          ></div>
          <Button
            variant="outline-danger"
            as={Link}
            to={{ pathname: "/alert/create", state: { ...city } }}
          >
            Send alert
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default Alerts;
