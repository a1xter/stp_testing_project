import styled from "styled-components";

export const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 632px;
    padding: 16px;
`
export const TextWrapper = styled.div`
    width: 100%;
    margin-bottom: 32px;
`
export const PostsTitle = styled.div`
    font-family: Avenir Next, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #324552;
`
export const PostsBody = styled(PostsTitle)`
    font-weight: 400;
    font-size: 14px;
    margin: 24px 0 48px 0;
`
export const Button = styled.button`
    height: 30px;
    border: 1px solid #324552;
    background-color: #F8FAFB;
    padding: 0 8px;
    cursor: pointer;
    :hover {
      transition-duration: 500ms;
      background-color: #324552;
      color: #fff;
    }
`
export const CardWrapper = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: 32px;
`
export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 260px;
    padding: 16px;
    margin-right: 16px;
    background-color: #F8FAFB;
`
export const CardTitle = styled.div`
    font-family: Avenir Next, sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #324552;
    margin-bottom: 24px;
`
export const CardText = styled(CardTitle)`
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    margin-bottom: 8px;
`
export const PostSection = styled.section`
    display: flex;
    justify-content: flex-start;
    padding: 16px;
`
export const CardBottom = styled.div`
    display: flex;
    flex-direction: column;
    
`