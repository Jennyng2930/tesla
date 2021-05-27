import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

function Section({title, description, backgroundImg, leftBtnText, rightBtnText}) {
    
    return (
        <Wrap bgImage={backgroundImg}>
            <Fade bottom> 
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Buttons>
                <Fade top> 
                        <ButtonGroup>                      
                            <LeftButton>
                                {leftBtnText}
                            </LeftButton>
                            {/* if the right button exits, then add the 
                            right button. if right button is 0 string, then 
                            no need to show.  */}
                            { rightBtnText && 
                                <RightButton>
                                    {rightBtnText}
                                </RightButton>
                            }             
                        </ButtonGroup>
                    </Fade>  
                    < DownArrow src={"./images/down-arrow.svg"} />                      
            </Buttons>
            
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    display: flex;
    flex-direction: column;
    justify-content: space-between; 
    //vertical
    align-items: center; //horizontal;

`

const ItemText = styled.div` 
    padding-top: 15vh;
    text-align: center;
    // z-index: -1;
    
`

const ButtonGroup = styled.div `
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 600px){
        flex-direction: column;
    }
`

const LeftButton = styled.div `
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 10px;
    @media (max-width: 600px){ //nhi tu them vo!!!! qua hay
        width: 92vw;
        // align-items: center;
        // margin: 10px;
`   

const RightButton = styled(LeftButton) `
    background-color: white;
    color: black;
    opacity:0.75;
    // text-style: bold;
    
`

const DownArrow = styled.img`
    height: 40px;
    color: black;
    animation: animateDown infinite 1.5s;
`

const Buttons = styled.div``

