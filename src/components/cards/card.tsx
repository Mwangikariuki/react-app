import { Card, Col } from "react-bootstrap";
import profile from "../../public/profile.png";
import styles from "./index.module.css";

interface CardProps {
  name: string;
  occupation: string;
  description: string;
  onClick: () => void;
}

const UserCard = (props: CardProps) => {
  return (
    <Col>
      <Card>
        <div className="card shadow-md">
          <div className={`${styles.holing_profile}`}>
            <img
              className={`${styles.circular_image}`}
              src={profile}
              alt="profile"
            ></img>
          </div>
          <p className={styles.name_tag}>{props.name}</p>
          <p className={`text-muted ${styles.email_tag}`}>{props.occupation}</p>
          <Card.Body>
            <p className="card-text">{props.description}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button
                  onClick={props.onClick}
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
              </div>
            </div>
          </Card.Body>
        </div>
      </Card>
    </Col>
  );
};

export default UserCard;
