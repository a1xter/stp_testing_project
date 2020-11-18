import styled from "styled-components";
import userIcon from "../../../static/icons/user-icon.svg"

export const img = {
    userIcon
}

export const MenuItem = styled.div`
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 16px;
      cursor: pointer;
`
export const UserText = styled.div`
    font-family: Avenir Next, sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #324552;
    margin-left: 8px;
`
export const NavSection = styled.section`
    overflow-y: scroll;
    width: 190px;
    padding: 16px;
    background-color: #F8FAFB;
`