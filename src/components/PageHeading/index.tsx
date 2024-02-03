import React from 'react'
import { Container } from 'react-bootstrap'
import styles from './Pageheading.module.css';

interface PageHeadingProps {
  title: string;
}

const PageHeading: React.FC<PageHeadingProps> = ({ title }) => {
  return (
    <Container className={styles.headingContainer}>
      <h1>{title}</h1>
    </Container>
  )
}

export default PageHeading
