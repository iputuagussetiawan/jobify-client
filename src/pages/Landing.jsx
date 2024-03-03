import React from 'react';
import styled from 'styled-components';

const StyledBtn=styled.button`
  font-size: 32px;
  background-color: red;
  color: white;
`

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing</h1>
      <StyledBtn> Read More</StyledBtn>

      <div className="content">
        Some Content
      </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`
  background-color: red;

  .content{
    background-color: orange;
  }
`

export default Landing