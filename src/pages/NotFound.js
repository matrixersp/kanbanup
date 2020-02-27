import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  font-family: 'Source Sans Pro';
  color: #36475b;
  margin: 30px auto;
  h1 {
    font-weight: normal;
  }
`;

export default function NotFound() {
  return (
    <Container>
      <h1>Error 404. Page Not Found!</h1>
    </Container>
  );
}
