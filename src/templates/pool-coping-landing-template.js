import React from 'react';
import Layout from '../components/layout/layout';
import HomepageSegment from '../components/homepageSegment';
import Card from '../components/imageCard';
import { StaticImage } from 'gatsby-plugin-image';
import Zoom from 'react-medium-image-zoom';
import { useState } from 'react';

function FireplaceLandingTemplate() {
    const [activeImage, setActiveImage] = useState("none");
    return (
        <Layout>
            <h2 style={{ textAlign: 'center', color: 'white' }}> Browse our pool coping products </h2>
            <HomepageSegment>
                <Card onClick={() => activeImage === "black_granite" ? setActiveImage("none") : setActiveImage("black_granite")}>
                    {activeImage === "black_granite" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pool-design/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Black Granite Coping.jpg' alt="Black Granite Coping" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Black Granite Coping.jpg' alt="Black Granite Coping" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Black Granite Coping</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_coping" ? setActiveImage("none") : setActiveImage("bluestone_coping")}>
                    {activeImage === "bluestone_coping" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pool-coping/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping.jpg' alt="Bluestone Coping" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping.jpg' alt="Bluestone Coping" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Coping</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_coping_2" ? setActiveImage("none") : setActiveImage("bluestone_coping_2")}>
                    {activeImage === "bluestone_coping_2" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pool-coping/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 2.jpg' alt="Bluestone Coping #2" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 2.jpg' alt="Bluestone Coping #2" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Coping - Example 2</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_coping_3" ? setActiveImage("none") : setActiveImage("bluestone_coping_3")}>
                    {activeImage === "bluestone_coping_3" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pool-coping/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 3 .jpg' alt="Bluestone Coping #3" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 3 .jpg' alt="Bluestone Coping #3" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Coping - Example 3</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_coping_4" ? setActiveImage("none") : setActiveImage("bluestone_coping_4")}>
                    {activeImage === "bluestone_coping_4" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pool-coping/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 4.jpg' alt="Bluestone Coping #4" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping 4.jpg' alt="Bluestone Coping #4" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Coping - Example 4</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_giallo" ? setActiveImage("none") : setActiveImage("bluestone_giallo")}>
                    {activeImage === "bluestone_giallo" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/giallo-stone-product/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping with Giallo Pavers.jpeg' alt="Bluestone Coping with Giallo Pavers" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Bluestone Coping with Giallo Pavers.jpeg' alt="Bluestone Coping with Giallo Pavers" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Coping with Giallo Pavers</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_onyx" ? setActiveImage("none") : setActiveImage("cambridge_onyx")}>
                    {activeImage === "cambridge_onyx" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose - Onyx Natural color.jpg' alt="Cambridge Bullnose - Onyx Natural color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose - Onyx Natural color.jpg' alt="Cambridge Bullnose - Onyx Natural color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Bullnose - Onyx</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_sandstone" ? setActiveImage("none") : setActiveImage("cambridge_sandstone")}>
                    {activeImage === "cambridge_sandstone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose - Sandstone Lite color.jpg' alt="Cambridge Bullnose - Sandstone Lite color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose - Sandstone Lite color.jpg' alt="Cambridge Bullnose - Sandstone Lite color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Bullnose - Sandstone Lite</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_mocha" ? setActiveImage("none") : setActiveImage("cambridge_mocha")}>
                    {activeImage === "cambridge_mocha" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose Coping - Mocha color.jpg' alt="Cambridge Bullnose Coping - Mocha color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Bullnose Coping - Mocha color.jpg' alt="Cambridge Bullnose Coping - Mocha color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Bullnose - Mocha</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_ledgestone_coal" ? setActiveImage("none") : setActiveImage("cambridge_ledgestone_coal")}>
                    {activeImage === "cambridge_ledgestone_coal" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Ledgestone Coping - Coal color.jpg' alt="Cambridge Ledgestone Coping - Coal color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Cambridge Ledgestone Coping - Coal color.jpg' alt="Cambridge Ledgestone Coping - Coal color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone - Coal</h4>
                </Card>
                <Card onClick={() => activeImage === "giallo_biege" ? setActiveImage("none") : setActiveImage("giallo_biege")}>
                    {activeImage === "giallo_biege" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/giallo-stone-product/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Giallo Coping -Beige color.jpeg' alt="Giallo Coping -Beige color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Giallo Coping -Beige color.jpeg' alt="Giallo Coping -Beige color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Giallo - Biege</h4>
                </Card>
                <Card onClick={() => activeImage === "giallo_paving" ? setActiveImage("none") : setActiveImage("giallo_paving")}>
                    {activeImage === "giallo_paving" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/giallo-stone-product/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Giallo coping with Giallo Paving - Full Range color.jpeg' alt="Giallo coping with Giallo Paving - Full Range color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Giallo coping with Giallo Paving - Full Range color.jpeg' alt="Giallo coping with Giallo Paving - Full Range color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Giallo Coping and Paving</h4>
                </Card>
                <Card onClick={() => activeImage === "giallo_coping" ? setActiveImage("none") : setActiveImage("giallo_coping")}>
                    {activeImage === "giallo_coping" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/giallo-stone-product/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/pool-coping/Giallo Coping.jpg' alt="Giallo Coping" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/pool-coping/Giallo Coping.jpg' alt="Giallo Coping" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Giallo</h4>
                </Card>
            </HomepageSegment>
        </Layout>
    );
}

export default FireplaceLandingTemplate;