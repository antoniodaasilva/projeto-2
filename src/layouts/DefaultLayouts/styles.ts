import styled from "styled-components";

export const LayoutContainer = styled.div`
  max-width: 74rem;
  height: calc(100vh - 10rem);
  margin: 5rem;
  padding: 2.5rem;
  background: ${({theme}) => theme["gray-800"]};
`