import styled from 'styled-components'
import Card from '../shared/card/card.component'

export const CardContainer = styled(Card)`
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
