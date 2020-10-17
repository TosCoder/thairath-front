import styled from 'styled-components'

export const StyledModal = styled.div`
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(125, 125, 125, 0.91) !important;
    z-index: 2;
    top: 0;
    left: 0;
`

export const StyledThisNews = styled.div`
    position: relative;
    top: 17px;
    background-color: #ffffff;
    width: 935px;
    height: 600px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
`

export const StyledBtnClose = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.875rem;
    font-weight: 300;
    z-index: 4;
    line-height: 3rem;
    text-align: center;
    cursor: pointer;
    filter: invert(1);
    margin-top: 24px;
    margin-right: 24px;
`

export const StyledTextCaption = styled.p`
    position: absolute;
    font-size: 0.875rem;
    padding: 0px 16px 10px 16px;
    z-index: 4;
    color: black;
    text-align: justify;
    text-decoration: none;
`
export const StyledHeaderCaption = styled.div`
    padding: 16px ;
    color: rgb(1,180,0);
    font-size: 16px;
    font-weight: 500;
`

export const StyledLogo = styled.img`
    border-radius: 50%;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: block;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    overflow: hidden;
    position: relative;
    width: 32px;
    margin-right: 10px;
`


