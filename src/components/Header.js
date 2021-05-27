import React, { useState } from 'react'
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import {selectCars } from '../features/car/carSlice';
import {useSelector} from 'react-redux'


function Header() {
    

    const [burgerStatus, setBurgerStatus] = useState(false);
    //initially is the burger status is close ~ false
    const cars = useSelector(selectCars)
   
    return (
        <Container>
            <Logo>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
            </Logo>
            <Menu>
                {cars && cars.map((car,index) => 
                    <a key={index} href="#"> {car} </a>
                )}
                <a href="#"> Solar Roof </a>
                <a href="#"> Solar Panel </a>
            </Menu>

            <RightMenu>
                <a href = "#"> Shop</a> 
                <a href = "#"> Tesla Account</a>
                <CustomMenu onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper> 
                    <CustomClose onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index) => 
                    <li key={index}><a  href="#"> {car}</a></li>
                )}
                <li><a href="#"> Existing Inventory</a></li>
                <li><a href="#"> Used Inventory</a></li>
                <li><a href="#"> Trade-in</a></li>
                <li><a href="#"> Cyber Truck</a></li>
                <li><a href="#"> Roadaster</a></li>     
            </BurgerNav>

        </Container>
    )
}

export default Header

const Container = styled.div `
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left: 0;
    right: 0;
    z-index: 1;
    
`
const Logo = styled.div`
    cursor: pointer;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    @media (max-width: 768px){
        display: none;
    };
    
    a {
        font-weight: 400;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        @media (max-width: 960px){
            font-weight: 400; 
            padding: 0 5px;
            font-size: 12px;
        }
    }
    
    `

const RightMenu = styled.div`
    display:flex;

    a {
        font-weight: 450;
        text-transform: uppercase;
        margin-right: 10px;
        @media (max-width: 960px){
            font-weight: 400; 
            padding: 0 5px;
            font-size: 12px;  
        }
        @media (max-width: 768px){
            display: none;  
        }       
    }

`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
   
`

const BurgerNav = styled.div`
    position: fixed; 
    //bcos it is always gonna be fixed, on the top right corner. 
    top:0;
    right: 0;
    bottom: 0;
    background: white;
    // opacity: 0.85;
    width: 300px;   
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props=> props.show ? 'translateX(0)' : 'translateX(100%)'};
    //                               if  true          if  false move 100% to the right
    //100% means expand 100%, 0 means no expand, show the menu bar
    transition: transform 0.2s;
    li {
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,.2);
        a{
            font-weight: 600;
        }
    }

`

const CustomClose = styled(ClearIcon)`
    cursor: pointer;

`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;

`