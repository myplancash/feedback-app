import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  margin: 20px 0;
  // margin: -12px 0 0 -12px;
  // width: calc(100% + 12px);
  // gap: 1rem;
  gap: calc(5vh + 5px) calc(5vw + 5px);
  // height: 100vh;

  background-color: #fff;
  color: #333;
  border-radius: 15px;
  padding: 40px 50px;
  position: relative;

  /* box-shadow: 0 0 50px rgba(0, 0, 0, 0.315); */

  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;

  h1 {
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .reverse {
    background-color: rgba(0, 0, 0, 0.4);
    color: #fefefe;
  }
`
