import React from "react";
import { Container } from "react-bootstrap";
import styles from "./index.module.css";

interface Props {
  children?: any;
}

const MainLayout = ({ children }: Props) => {
  return (
    <Container className={styles.body} fluid>
      {children}
    </Container>
  );
};

export default MainLayout;
