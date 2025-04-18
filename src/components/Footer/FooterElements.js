import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterContanier = styled.div`
background-color:#101522;

`;
export const FooterWrap = styled.div`
padding:48px 24px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
max-width:1100px;
margin:0 auto;
`;
export const FooterLinksContainer = styled.div`
    display:flex;
    justify-content:center;

    @media screen and (max-width:820px){
        padding-top:32px;
    }
`;
export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:column;
    
}
`;
export const FooterLinksItems = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    margin:16px;
    text-align:center;

    width:160px;
    color:#fff;

    @media screen and (max-width:420px){
        margin:0;
        padding:10px;
        width:100%;

    }
`;

export const FooterLinksTitle = styled.div`
    font-size:16px;
    margin-bottom:16px;
    font-weight:bold;
`;
export const FooterLinks = styled(Link)`
    color:#fff;
    text-decoration:none;
    margin-bottom:0.5rem;
    font-size:14px;
&:hover{
    color:#01bf71;
    transition:0.3s ease-out;
}
`;

export const SocialMedia = styled.div`
    width:100%;
    max-width:1000px;
`;
export const SocialMediaWrap = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    max-width:1100px;
    margin:40px auto;
    @media screen and (max-width:820px){
        flex-direction:column;

    }

`;
export const SocialLogo = styled(Link)`
color:#fff;
justify-self:start;
cursor:pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
margin-bottom:16px;
font-weight:bold;
`;
export const WebsiteRights = styled.small`
    color:#fff;
    margin-bottom:16px;

`;
export const SocialIcons = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:240px;


`;
export const SocailIconLink = styled.a`
    color:#fff;
    font-size:24px;

`;


