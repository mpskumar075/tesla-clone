import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <div>
            <Container>
                 <Section 
                 title="Model S"
                 description="Order online for fast delivery"
                 backgroundImg="model-s.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
                  />
                 <Section 
                 title="Model Y"
                 description="Order online for fast delivery"
                 backgroundImg="model-y.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
                 />
                 <Section
                 title="Model 3"
                 description="Order online for fast delivery"
                 backgroundImg="model-3.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
                  />
                 <Section 
                 title="Model x"
                 description="Order online for fast delivery"
                 backgroundImg="model-x.jpg"
                 leftBtnText="Custom Order"
                 rightBtnText="Existing Inventory"
                 />

                 <Section 
                 title="Lowest Cost Solar Panels"
                 description="Money-back gurantee"
                 backgroundImg="solar-panel.jpg"
                 leftBtnText="Order now"
                 rightBtnText="Learn more"
                 />

                 <Section 
                 title="Solar for New Roofs"
                 description="Just be Eco-friendly"
                 backgroundImg="solar-roof.jpg"
                 leftBtnText="Order now"
                 rightBtnText="Learn more"
                 />

                 <Section 
                 title="Accessories"
                 description=""
                 backgroundImg="accessories.jpg"
                 leftBtnText="Order now"
                 
                 />
                 
            </Container>
        </div>
    )
}

export default Home;

const Container = styled.div`
height: 100vh;
z-index: 10;
`
