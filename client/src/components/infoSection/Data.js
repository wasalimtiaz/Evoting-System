import img1 from '../../images/svg-7.svg';
import img2 from '../../images/svg-2.svg';
import img3 from '../../images/svg-8.svg';

export const homeObjOne = {
    id:'about',
    lightBg:false,
    lightText:true,
    lightTextDesc:true,
    topLine:'Maximum Productivity',
    headline:'Make your decision making process modern, secure, and effective.',
    description:'Our online voting systems let you upgrade from manually counting ballots without sacrificing the integrity of your vote.',
    buttonLabel:'Get Started',
    imgStart: false,
    //img:require('../../images/svg-1.svg'),
    img:img1,
    alt:'Car',
    dark: true,
    primary: true,
    darkText:false,
}

export const homeObjTwo = { 
    id:'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine:'Unlimited Access',
    headline:'An online voting system with your needs at the forefront.',
    description:'From secure polling software to the management of complex voting events - we offer a range of eVoting solutions that exceed expectation.',
    buttonLabel:'Learn More',
    imgStart: true,
    //img:require('../../images/svg-2.svg'),
    img:img2,
    alt:'Bank',
    dark: false,
    primary: false,
    darkText:true,
}

export const homeObjThree = {
    id:'signup',
    lightBg:true,
    lightText:false,
    lightTextDesc:false,
    topLine:'Connect To Cast',
    headline:'Creating an account is extremely easy',
    description:'Get everyting set up and ready in under 10 minutes. All you need to do is add your information and you are ready to cast vote. ',
    buttonLabel:'Start Now',
    imgStart: false,
    //img:require('../../images/svg-3.svg'),
    img:img3,
    alt:'Paper',
    dark: false,
    primary: false,
    darkText:true,
}