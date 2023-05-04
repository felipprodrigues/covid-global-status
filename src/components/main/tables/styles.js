import styled, {css} from "styled-components";

const tableSpecs = css`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  grid-gap: .75rem;
  padding: 1rem;
`

export const Container = styled.div`
  display: flex;
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  position: relative;
  background-color:  #432d53;
  width: 100%;
  `

export const TableLabel = styled.h3`
  padding: 1.5rem;
`

export const TableHead = styled.div`
  ${tableSpecs};
  background-color: rgb(39, 26, 48);
  position: sticky;
  top: 0;
  z-index: 999;
`

export const TableBody = styled.div`
  ${tableSpecs};
`

export const TableElement = styled.div`
  padding: .75rem 0;
  position: relative;
  z-index: 998;

  & > span {
    display: flex;

    & > img {
      margin-right: .5rem;
      max-width: 20px;
      width: 100%;
      height: 18px;
    }
  }

`
