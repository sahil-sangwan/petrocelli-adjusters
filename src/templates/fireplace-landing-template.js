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
            <h2 style={{ textAlign: 'center', color: 'white' }}> Browse our fireplace products </h2>
            <HomepageSegment>
                <Card onClick={() => activeImage === "ct_oak_ashlar" ? setActiveImage("none") : setActiveImage("ct_oak_ashlar")}>
                    {activeImage === "ct_oak_ashlar" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/ct_oak.jpeg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/fireplaces/ct_oak.jpeg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>CT Oak Ashlar and Ledge 50/50 mix</h4>
                </Card>
                <Card onClick={() => activeImage === "harvest_cream_ashlar" ? setActiveImage("none") : setActiveImage("harvest_cream_ashlar")}>
                    {activeImage === "harvest_cream_ashlar" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/harvest_cream_bone_grout.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/fireplaces/harvest_cream_bone_grout.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Harvest Cream Ashlar with Ardex Grout Natural Bone color</h4>
                </Card>
                <Card onClick={() => activeImage === "hc_liberty_hill" ? setActiveImage("none") : setActiveImage("hc_liberty_hill")}>
                    {activeImage === "hc_liberty_hill" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/harvest_cream_liberty_hill.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/harvest_cream_liberty_hill.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Harvest Cream and Liberty Hill</h4>
                </Card>
                <Card onClick={() => activeImage === "lh_ashlar" ? setActiveImage("none") : setActiveImage("lh_ashlar")}>
                    {activeImage === "lh_ashlar" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_ashlar.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_ashlar.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Liberty Hill Ashlar</h4>
                </Card>
                <Card onClick={() => activeImage === "lh_ledge" ? setActiveImage("none") : setActiveImage("lh_ledge")}>
                    {activeImage === "lh_ledge" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_ledge.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_ledge.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Liberty Hill Ledge</h4>
                </Card>
                <Card onClick={() => activeImage === "lh_mosaic_corners" ? setActiveImage("none") : setActiveImage("lh_mosaic_corners")}>
                    {activeImage === "lh_mosaic_corners" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_mosaic_corners.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/liberty_hill_mosaic_corners.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Liberty Hill Mosaic and Yankee with Liberty Hill Corners</h4>
                </Card>
                <Card onClick={() => activeImage === "weymouth_granite" ? setActiveImage("none") : setActiveImage("weymouth_granite")}>
                    {activeImage === "weymouth_granite" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/weymouth-granite/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/weymouth_granite.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/weymouth_granite.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Weymouth Granite</h4>
                </Card>
                <Card onClick={() => activeImage === "nantucket_rounds" ? setActiveImage("none") : setActiveImage("nantucket_rounds")}>
                    {activeImage === "nantucket_rounds" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/nantucket_rounds.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/nantucket_rounds.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Nantucket Rounds and Old Redding Rounds Mix</h4>
                </Card>
                <Card onClick={() => activeImage === "italian_slate" ? setActiveImage("none") : setActiveImage("italian_slate")}>
                    {activeImage === "italian_slate" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/italian-black-slate/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/fireplaces/Italian_Black_Slate.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', height: '85%' }} objectPosition="center" src='../images/cards/fireplaces/Italian_Black_Slate.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Italian Black Slate</h4>
                </Card>
            </HomepageSegment>
        </Layout>
    );
}

export default FireplaceLandingTemplate;