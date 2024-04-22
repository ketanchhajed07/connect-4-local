import styled from "styled-components";

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 85%);
  height: 16rem;
  width: 28.5rem;
  /* background-color: #f8da30; */

  & > img {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export default Info;
