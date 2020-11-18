import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    background-color: #F8FAFB;
    border-radius: 4px;
    padding: 16px;
    margin-top: 16px;
`
export const SecondRow = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const CommentBody = styled.div`
    font-family: Avenir Next, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #324552;
`
export const CommentText = styled(CommentBody)`
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    margin-right: 16px;
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