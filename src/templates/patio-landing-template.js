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
            <h2 style={{ textAlign: 'center', color: 'white' }}> Browse our patio products </h2>
            <HomepageSegment>
                <Card onClick={() => activeImage === "andover_oxford" ? setActiveImage("none") : setActiveImage("andover_oxford")}>
                    {activeImage === "andover_oxford" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/ideal-andover-collection/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Andover 3 pc Oxford Gray color - Smooth.jpg' alt="Andover 3 pc Oxford Gray color - Smooth" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Andover 3 pc Oxford Gray color - Smooth.jpg' alt="Andover 3 pc Oxford Gray color - Smooth" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Andover 3pc - Smooth Oxford Gray</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_limestone" ? setActiveImage("none") : setActiveImage("cambridge_limestone")}>
                    {activeImage === "cambridge_limestone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone 3 pc Smooth - Limestone Quarry Blue.jpg' alt="Cambridge Ledgestone 3 pc Smooth - Limestone Quarry Blue" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone 3 pc Smooth - Limestone Quarry Blue.jpg' alt="Cambridge Ledgestone 3 pc Smooth - Limestone Quarry Blue" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone 3pc - Limestone Quarry Blue</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_harbor" ? setActiveImage("none") : setActiveImage("cambridge_harbor")}>
                    {activeImage === "cambridge_harbor" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone 3-pc Stone Harbor.jpg' alt="Cambridge Ledgestone 3-pc Stone Harbor" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone 3-pc Stone Harbor.jpg' alt="Cambridge Ledgestone 3-pc Stone Harbor" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone 3pc - Stone Harbor</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_onyx" ? setActiveImage("none") : setActiveImage("cambridge_onyx")}>
                    {activeImage === "cambridge_onyx" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3 pc Onyx Natural color Smooth.jpg' alt="Cambridge Ledgestone XL 3 pc Onyx Natural color Smooth" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3 pc Onyx Natural color Smooth.jpg' alt="Cambridge Ledgestone XL 3 pc Onyx Natural color Smooth" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone XL 3 pc - Onyx</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_bluestone" ? setActiveImage("none") : setActiveImage("cambridge_bluestone")}>
                    {activeImage === "cambridge_bluestone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3-pc - Bluestone blend.jpg' alt="Cambridge Ledgestone XL 3-pc - Bluestone blend" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3-pc - Bluestone blend.jpg' alt="Cambridge Ledgestone XL 3-pc - Bluestone blend" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone XL 3pc - Bluestone Blend</h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_sahara" ? setActiveImage("none") : setActiveImage("cambridge_sahara")}>
                    {activeImage === "cambridge_sahara" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3-pc - Sahara Chestnut Lite.jpg' alt="Cambridge Ledgestone XL 3-pc - Sahara Chestnut Lite" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge Ledgestone XL 3-pc - Sahara Chestnut Lite.jpg' alt="Cambridge Ledgestone XL 3-pc - Sahara Chestnut Lite" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge Ledgestone XL 3pc - Sahara Chestnut Lite</h4>
                </Card>
                <Card onClick={() => activeImage === "cityhall_paver" ? setActiveImage("none") : setActiveImage("cityhall_paver")}>
                    {activeImage === "cityhall_paver" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/brick-pavers/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/City Hall Paver Brick.jpg' alt="City Hall Paver Brick" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/City Hall Paver Brick.jpg' alt="City Hall Paver Brick" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>City Hall Paver Brick</h4>
                </Card>
                <Card onClick={() => activeImage === "giallo" ? setActiveImage("none") : setActiveImage("giallo")}>
                    {activeImage === "giallo" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/giallo-stone-product/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Giallo 24_ x 24_ with Artificial grass .jpg' alt="Giallo 24_ x 24_ with Artificial grass" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Giallo 24_ x 24_ with Artificial grass .jpg' alt="Giallo 24_ x 24_ with Artificial grass" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Giallo Stone with Artificial Grass</h4>
                </Card>
                <Card onClick={() => activeImage === "nantucket_flagging" ? setActiveImage("none") : setActiveImage("nantucket_flagging")}>
                    {activeImage === "nantucket_flagging" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/brick-pavers/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Nantucket Brick with Flagging and 3_8_ Aggregate pathways.jpg' alt="Nantucket Brick with Flagging and 3_8_ Aggregate pathways" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Nantucket Brick with Flagging and 3_8_ Aggregate pathways.jpg' alt="Nantucket Brick with Flagging and 3_8_ Aggregate pathways" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Nantucket Brick with Flagging</h4>
                </Card>
                <Card onClick={() => activeImage === "porcelain" ? setActiveImage("none") : setActiveImage("porcelain")}>
                    {activeImage === "porcelain" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/porcelain-tile/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Outdoor Porcelain.jpg' alt="Outdoor Porcelain" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Outdoor Porcelain.jpg' alt="Outdoor Porcelain" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Porcelain</h4>
                </Card>
                <Card onClick={() => activeImage === "sanded_rose" ? setActiveImage("none") : setActiveImage("sanded_rose")}>
                    {activeImage === "sanded_rose" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/brick-pavers/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Sanded Rose Brick.jpeg' alt="Sanded Rose Brick" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Sanded Rose Brick.jpeg' alt="Sanded Rose Brick" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Sanded Rose Brick</h4>
                </Card>
                <Card onClick={() => activeImage === "smokey_mountain_granite" ? setActiveImage("none") : setActiveImage("smokey_mountain_granite")}>
                    {activeImage === "smokey_mountain_granite" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/multiple-stone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Smokey Mountain Granite .jpg' alt="Smokey Mountain Granite " layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Smokey Mountain Granite .jpg' alt="Smokey Mountain Granite " layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Smokey Mountain Granite </h4>
                </Card>
                <Card onClick={() => activeImage === "unilock_copthorne_basalt" ? setActiveImage("none") : setActiveImage("unilock_copthorne_basalt")}>
                    {activeImage === "unilock_copthorne_basalt" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/copthorne-unilock/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Unilock Copthorne Basalt color w_Hollandstone Granite border.jpg' alt="Unilock Copthorne Basalt color w_Hollandstone Granite border" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Unilock Copthorne Basalt color w_Hollandstone Granite border.jpg' alt="Unilock Copthorne Basalt color w_Hollandstone Granite border" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Unilock Copthorne - Basalt</h4>
                </Card>
                <Card onClick={() => activeImage === "unilock_copthorne_burgundy" ? setActiveImage("none") : setActiveImage("unilock_copthorne_burgundy")}>
                    {activeImage === "unilock_copthorne_burgundy" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/copthorne-unilock/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Unilock Copthorne Burgundy color.jpg' alt="Unilock Copthorne Burgundy color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Unilock Copthorne Burgundy color.jpg' alt="Unilock Copthorne Burgundy color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Unilock Copthorne - Burgundy </h4>
                </Card>
                <Card onClick={() => activeImage === "unilock_umbriana" ? setActiveImage("none") : setActiveImage("unilock_umbriana")}>
                    {activeImage === "unilock_umbriana" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/beacon-hill-unilock/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Unilock Umbriana Summer Wheat color.jpg' alt="Unilock Umbriana Summer Wheat color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Unilock Umbriana Summer Wheat color.jpg' alt="Unilock Umbriana Summer Wheat color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Unilock Umbriana- Summer Wheat </h4>
                </Card>
                <Card onClick={() => activeImage === "unilock_courtstone" ? setActiveImage("none") : setActiveImage("unilock_courtstone")}>
                    {activeImage === "unilock_courtstone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/courtstone-unilock/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/UnilockCourtstone Basalt color.jpg' alt="UnilockCourtstone Basalt color" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/UnilockCourtstone Basalt color.jpg' alt="UnilockCourtstone Basalt color" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Unilock Courtstone - Basalt </h4>
                </Card>
                <Card onClick={() => activeImage === "cambridge_onyx_sahara" ? setActiveImage("none") : setActiveImage("cambridge_onyx_sahara")}>
                    {activeImage === "cambridge_onyx_sahara" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/cambridge-ledgestone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/Patios/Cambridge XL Toffe Onyx Lite and Sahara Chestnut Lite mix.jpg' alt="Cambridge XL Toffe Onyx Lite and Sahara Chestnut Lite mix" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/Patios/Cambridge XL Toffe Onyx Lite and Sahara Chestnut Lite mix.jpg' alt="Cambridge XL Toffe Onyx Lite and Sahara Chestnut Lite mix" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Cambridge XL - Onyx Lite/ Sahara Chestnut Lite mix</h4>
                </Card>
            </HomepageSegment>
        </Layout>
    );
}

export default FireplaceLandingTemplate;