import React from 'react'
import { SidebarContainer, Icons, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements'
const Sidebar = ({isOpen,toggle}) => {

    console.log('dascscdsacsadsadc', isOpen)
    return (
        <>
            <SidebarContainer isOpen={isOpen} onClick={toggle}> 
                <Icons>
                    <CloseIcon />
                </Icons>
                <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                        <SidebarRoute to='/signin'>
                            Sign In
                        </SidebarRoute>
                    </SideBtnWrap>
                </SidebarWrapper>
            </SidebarContainer>
        </>
    )
}

export default Sidebar