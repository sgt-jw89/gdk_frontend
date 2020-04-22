import React, {Component} from 'react';
import styled from 'styled-components';

const LoadingDiv = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10000;
  background: white;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;

  div {
      text-align: center;
      margin: 0 auto;

      h2 {
          margin-bottom: 5px;
          color: ${props => props.theme.colorTextDark};
          font-size: ${props => props.theme.fontSizeXxl};
      }

      span {
          color: ${props => props.theme.colorTextLight};
      }
  }
`

const Spinner = styled.div`
  width: 25px;
  height: 25px;

  position: relative;
  margin: 100px auto;

  .double-bounce1, .double-bounce2 {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #37DE8A;
      opacity: 0.6;
      position: absolute;
      top: 0;
      left: 0;

      -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
      animation: sk-bounce 2.0s infinite ease-in-out;
  }

  .double-bounce2 {
      -webkit-animation-delay: -1.0s;
      animation-delay: -1.0s;
  }

  @-webkit-keyframes sk-bounce {
      0%, 100% { -webkit-transform: scale(0.0) }
      50% { -webkit-transform: scale(1.0) }
  }

  @keyframes sk-bounce {
      0%, 100% { 
          transform: scale(0.0);
          -webkit-transform: scale(0.0);
      } 50% { 
          transform: scale(1.0);
          -webkit-transform: scale(1.0);
      }
  }
`

const StyledSpan = styled.span`
  margin-top: 20px;
  font-size: 1rem;
`;

const Loading = (props) => {
  if (props.show) {
      return ( null ) 
  } else if (!props.show) {
      return <LoadingDiv>
          <div>
              <Spinner>
                  <div className="double-bounce1"></div>
                  <div className="double-bounce2"></div>
              </Spinner>
              <br/>
              <StyledSpan>Lade Daten ...</StyledSpan>
          </div>
      </LoadingDiv>
  }
}

export default Loading;