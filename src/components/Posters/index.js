import React from 'react';
import Carousel from 'react-bootstrap/Carousel'

const Posters = () => {
    return (<Carousel style={{ margin: "0px 100px" }}>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://imgur.com/96OnkX7.png"
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://imgur.com/KtGxwnN.png"
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://imgur.com/p0wdadG.png"
                alt="Third slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://imgur.com/p0wdadG.png"
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>);
}

export default Posters;