import { Card, Col } from "react-bootstrap";

const UserCard = () => {
  return (
    <Col>
      <Card>
        <Card.Body>
          <div className="d-flex justify-content-end">
            <div
              className="dropdown dropdown-inline"
              data-toggle="tooltip"
              title=""
              data-placement="left"
              data-original-title="Quick actions"
            >
              <a
                href="/"
                className="btn btn-clean btn-hover-light-primary btn-sm btn-icon"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="ki ki-bold-more-hor"></i>
              </a>
              <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                <ul className="navi navi-hover">
                  <li className="navi-header font-weight-bold py-4">
                    <span className="font-size-lg">Choose Label:</span>
                    <i
                      className="flaticon2-information icon-md text-muted"
                      data-toggle="tooltip"
                      data-placement="right"
                      title=""
                      data-original-title="Click to learn more..."
                    ></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default UserCard;
