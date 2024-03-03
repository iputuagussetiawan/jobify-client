import React from 'react';
import styled from 'styled-components';

const StyledBtn=styled.button`
  font-size: 32px;
  background-color: red;
  color: white;
`

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <StyledBtn> Read More</StyledBtn>
    </div>
  )
}

export default Landing