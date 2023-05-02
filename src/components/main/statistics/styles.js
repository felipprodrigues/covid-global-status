import styled, {css} from "styled-components";

const tableSpecs = css`
  display: grid;
  grid-template-columns: ${(props) => props.gridColumns};
  grid-gap: .75rem;
`

export const Container = styled.div`
  display: flex;
  flex: 0 1;
`

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(39, 26, 48);
  border-radius: 10px;
  padding: 1rem;
  position: relative;
`

export const TableLabel = styled.h3`

`

export const TableHead = styled.div`
  ${tableSpecs};
  padding: 1.5rem 0;
  position: sticky;
  top: 2%;
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
