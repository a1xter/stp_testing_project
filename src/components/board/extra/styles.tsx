import styled from "styled-components";

interface TProps {
    isSelected: boolean
}

export const Section = styled.section`
    overflow-y: scroll;
`

export const UserWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 800px;
    height: 68px;
    padding: 8px 16px;
    margin: 16px;
    border: 1px solid ${ (props:TProps) => props.isSelected ? "#324552" : "#F8FAFB" };
    background-color: #F8FAFB;
    cursor: pointer;
`
export const UserTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
`
export const UserTextRow = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`
export const UserName = styled.div`
    font-family: Avenir Next,sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    margin-right: 24px;
    color: #324552;
`
export const UserText = styled.div`
    font-family: Avenir Next,sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    margin-right: 24px;
    color: #324552;
`
export const Button = styled.button`
    width: 119px;
    height: 30px;
    border: 1px solid #324552;
    background-color: #F8FAFB;
    cursor: pointer;
    :hover {
      transition-duration: 500ms;
      background-color: #324552;
      color: #fff;
    }
`
export const StyledPaginateContainer = styled.div`
  .pagination {
    display: flex;
    justify-content: space-between;
    margin: 32px 0;
    color: #324552;
    padding: 0 16px;
    outline: none;
   
    li {
      font-family: Avenir Next,sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      cursor: pointer;
      list-style-type: none;
      a {
        outline: none;
      }
    }
  }
  .break-me {
    cursor: default;
  }
  .active {
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: transparent;
    width: 24px;
    border-radius: 4px;
    background-color: #F8FAFB;
    color: #324552;
  }
`