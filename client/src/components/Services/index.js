import React from 'react'
import Icon1 from '../../images/svg-9.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'

import {ServicesContainer, ServicesH1, ServicesH2,ServicesWrapper, ServicesCard, ServicesIcon,ServicesP} from './ServicesElements'

const Services = () => {
    return (
        <ServicesContainer id='services'>
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
            <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>Get Yourself Registered</ServicesH2>
            <ServicesP>Register your CNIC and Biometrics in central database.</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>Connect to App</ServicesH2>
            <ServicesP>Sign in with the provided credentials (username and password).</ServicesP>
            </ServicesCard>
            <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>Cast Vote</ServicesH2>
            <ServicesP>Register your vote effectively and in a hastle free manner.</ServicesP>
            </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
