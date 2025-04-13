import React, { useState } from 'react';
import {HeroContainer,VideoBg,HeroBg,HeroContent,HeroH1,HeroP,HeroBtnWrapper,ArrowForward,ArrowRight} from './HeroElements';
import { Button } from '../ButtonElements';
import Video from '../../videos/video.mp4';

const HeroSection = () => {
    const [hover,setHover]=useState(false);
    const onHover =()=>{
        setHover(hover);
    }
  return (
    <>
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted playsInline src={Video} type='video/mp4' />
                
            </HeroBg>
        <HeroContent>
            <HeroH1>Virtual Banking Made Easy</HeroH1>
            <HeroP>Sign Up for a new account today receive $250 in credit towards your next payment </HeroP>
        <HeroBtnWrapper>
            <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover}>
                Get started {hover ?<ArrowForward/>:<ArrowRight/>}
            </Button>
        </HeroBtnWrapper>
        </HeroContent>
        </HeroContainer>
    </>
  )
}

export default HeroSection