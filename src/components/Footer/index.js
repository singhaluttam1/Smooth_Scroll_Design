import React from 'react'
import { FooterContanier, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinksItems, FooterLinksTitle, FooterLinks, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocailIconLink } from './FooterElements'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

const Footer = () => {
    const toggleHome=()=>{
        scroll.scrollToTop()
      }
    return (
        <FooterContanier>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>About Us</FooterLinksTitle>
                            <FooterLinks to="/how-it-works">How it works</FooterLinks>
                            <FooterLinks to="/careers">Careers</FooterLinks>
                            <FooterLinks to="/investors">Investors</FooterLinks>
                            <FooterLinks to="/terms">Terms of Service</FooterLinks>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Contact Us</FooterLinksTitle>
                            <FooterLinks to="/contact">Contact</FooterLinks>
                            <FooterLinks to="/support">Support</FooterLinks>
                            <FooterLinks to="/destinations">Destinations</FooterLinks>
                            <FooterLinks to="/sponsorships">Sponsorships</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinksItems>
                            <FooterLinksTitle>Videos</FooterLinksTitle>
                            <FooterLinks to="/submit-video">Submit Video</FooterLinks>
                            <FooterLinks to="/ambassadors">Ambassadors</FooterLinks>
                            <FooterLinks to="/agency">Agency</FooterLinks>
                            <FooterLinks to="/influencer">Influencer</FooterLinks>
                        </FooterLinksItems>

                        <FooterLinksItems>
                            <FooterLinksTitle>Social Media</FooterLinksTitle>
                            <FooterLinks href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</FooterLinks>
                            <FooterLinks href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</FooterLinks>
                            <FooterLinks href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">YouTube</FooterLinks>
                            <FooterLinks href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</FooterLinks>
                        </FooterLinksItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>
                            dolla
                        </SocialLogo>
                        <WebsiteRights>
                            dolla © 2020 {new Date().getFullYear()} All Rights Reserved.
                        </WebsiteRights>
                        <SocialIcons>
                            <SocailIconLink href='/' target="_blank" aria-label="Facebook"><FaFacebook /></SocailIconLink>
                            <SocailIconLink href='/' target="_blank" aria-label="Instagram"><FaInstagram /></SocailIconLink>
                            <SocailIconLink href='/' target="_blank" aria-label="Youtube"><FaYoutube /></SocailIconLink>
                            <SocailIconLink href='/' target="_blank" aria-label="Twitter"><FaTwitter /></SocailIconLink>
                            <SocailIconLink href='/' target="_blank" aria-label="Linkedin"><FaLinkedin /></SocailIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContanier>
    )
}

export default Footer