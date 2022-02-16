import styled from "styled-components";

export const StyledNavigation = styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    justify-content: space-between;
    margin-top: 100px;
    margin-left: 40px;
    a, a:hover {
        text-decoration: none;
        color: #94969f;
    }
`

export const NavigationLinks = styled.div`
    span {
        padding: 0 5px;
        color: #94969f;
    }
    & > a:last-child {
        color: #000 ;
        font-weight: 500;
    }
`
export const SelectedNavigation = styled.div`
    font-size: 17px;
    & > span:first-child {
        font-weight: 500;
    }
    & > span:last-child{
        color: #94969f ;
    }
    `