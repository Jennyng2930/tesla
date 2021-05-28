import React from 'react';
import styled from 'styled-components';
import Section from './Section';


function Home() {
    return (
        <Container>
            <Section    
                title="Model S"
                description= "Order Online for Touchless Delivery"
                backgroundImg="https://cdn.vox-cdn.com/thumbor/-pJN8SXIOo6Fm6JHBlG3GptwOuQ=/0x0:3520x1816/1200x800/filters:focal(1479x627:2041x1189)/cdn.vox-cdn.com/uploads/chorus_image/image/68730355/Screen_Shot_2021_01_27_at_3.26.14_PM.0.png"
                leftBtnText="Custom Order"
                rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model Y"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model 3"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model X"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Lowest Cost Solar Panels in America"
            description= "Money-back guarantee"
            backgroundImg="solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Solar for New Roofs"
            description= "Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            backgroundImg="solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Accessories"
            description= ""
            backgroundImg="accessories.jpg"
            leftBtnText="Shop Now"
            rightBtnText=""
            />
            
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: 10;
`