import CarImage from '../../images/car.svg';
import DataImage from '../../images/dataAnalys.svg';
import PiggyBank from '../../images/piggyBank.svg';
export const homeObjOne={
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDecs:true,
    topLine:'Premium Bank',
    headLine:'Unlimited Transactions with zero fees',
    description:'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel:'Get Started',
    imgStart:false,
    img:CarImage,
    alt:'Car',
    Dark:true,
    primary:true,
    darkText:false
};

export const homeObjTwo={
    id:'discover',
    lightBg:true,
    lightText:false,
    lightTextDecs:false,
    topLine:'Unlimited Access',
    headLine:'Login to your account at any time',
    description:'We have you covered no matter where you are located. All you need is an internet connection and a phone or computer',
    buttonLabel:'Learn More',
    imgStart:true,
    img:PiggyBank,
    alt:'PiggyBank',
    Dark:false,
    primary:false,
    darkText:true
};

export const homeObjThree={
    id:'signup',
    lightBg:true,
    lightText:false,
    lightTextDecs:false,
    topLine:'Join our team',
    headLine:'Creating an account is extremely easy',
    description:"Get everything set up and ready in under 10 minutes. All you need to do is add your information and you're ready to go.",
    buttonLabel:'Get Started',
    imgStart:false,
    img:DataImage,
    alt:'Car',
    Dark:false,
    primary:false,
    darkText:true
};
