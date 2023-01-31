import { Row } from "react-bootstrap";
import UserCard from "../../components/cards/card";
import Header from "../../components/header/header";
import Layout from "../../components/layout";
import Navigation from "../../components/navigation";
//import axios from 'axios';

const AllUsers = () => {
  // axios.get('https://us-central1-ti-reactjs-test.cloudfunctions.net/app/api/users')
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });

  return (
    <div>
      <Header />
      <Navigation />
      <Layout share={() => {}} export={() => {}} title={"Users"}>
        <Row>
          <UserCard
            name={"kelvin"}
            occupation={"dev"}
            description={"yesssss"}
            onClick={() => {}}
          />
        </Row>
      </Layout>
    </div>
  );
};

export default AllUsers;
