import React from 'react'
import Icon1 from '../../images/chart2.svg'
import Icon2 from '../../images/chart.svg'
import Icon3 from '../../images/dataAnalys.svg'
import { SerivcesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP} from './ServicesElements'
const Services = () => {
  return (
    <>
    <SerivcesContainer id='services'>
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1}/>
                <ServicesH2>Reduces Expenses</ServicesH2>
                <ServicesP>We help reduce your fees and increase four overall revenue.</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2}/>
                <ServicesH2>Virtul Offices</ServicesH2>
                <ServicesP>You can Access our platform online anywhere in the world</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3}/>
                <ServicesH2>Premium Benefits</ServicesH2>
                <ServicesP>Unlock our special membership card that return 5% cashback.</ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </SerivcesContainer>
    </>
  )
}

export default Services