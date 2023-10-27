import React from 'react';
import Layout from '../components/layout/layout';
import HomepageSegment from '../components/homepageSegment';
import Card from '../components/imageCard';
import { StaticImage } from 'gatsby-plugin-image';
import { useState } from 'react';

function StepsLandingTemplate() {
    const [activeImage, setActiveImage] = useState("none");
    return (
        <Layout>
            <h2 style={{ textAlign: 'center', color: 'white' }}> Browse our steps </h2>
            <HomepageSegment>
                <Card onClick={() => activeImage === "used_granite_brick" ? setActiveImage("none") : setActiveImage("used_granite_brick")}>
                    {activeImage === "used_granite_brick" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/recycled-granite/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/used-granite-brick.JPG' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/used-granite-brick.JPG' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Used Granite Steps with Canal St. Brick</h4>
                </Card>
                <Card onClick={() => activeImage === "used_granite_fieldstone" ? setActiveImage("none") : setActiveImage("used_granite_fieldstone")}>
                    {activeImage === "used_granite_fieldstone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/recycled-granite/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/used-granite-fieldstone.JPG' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/used-granite-fieldstone.JPG' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Used Granite Steps with Fieldstone</h4>
                </Card>
                <Card onClick={() => activeImage === "antique_granite_libertyhill" ? setActiveImage("none") : setActiveImage("antique_granite_libertyhill")}>
                    {activeImage === "antique_granite_libertyhill" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/antique-granite-libertyhill.JPG' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/antique-granite-libertyhill.JPG' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Antique Granite Treads with Liberty Hill thin veneer</h4>
                </Card>
                <Card onClick={() => activeImage === "natural_stone" ? setActiveImage("none") : setActiveImage("natural_stone")}>
                    {activeImage === "natural_stone" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/pq-thin-stone/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/PQ - Natural Stone Landings.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/PQ - Natural Stone Landings.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Natural Landings</h4>
                </Card>
                <Card onClick={() => activeImage === "smokey_mtn_lexington" ? setActiveImage("none") : setActiveImage("smokey_mtn_lexington")}>
                    {activeImage === "smokey_mtn_lexington" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/smokey-mtn-lexington.PNG' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/smokey-mtn-lexington.PNG' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Smokey Mt. Treads with Lexington thin veneer</h4>
                </Card>
                <Card onClick={() => activeImage === "smokey_mtn_oldredding" ? setActiveImage("none") : setActiveImage("smokey_mtn_oldredding")}>
                    {activeImage === "smokey_mtn_oldredding" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/smokey-mtn-oldredding.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/smokey-mtn-oldredding.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Smokey Mt. Treads with Old Redding thin veneer</h4>
                </Card>
                <Card onClick={() => activeImage === "antique_granite_stone_risers" ? setActiveImage("none") : setActiveImage("antique_granite_stone_risers")}>
                    {activeImage === "antique_granite_stone_risers" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/Steps - Antique Granite Treads with stone risers.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/Steps - Antique Granite Treads with stone risers.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Antique Granite Treads with stone risers</h4>
                </Card>
                <Card onClick={() => activeImage === "bluestone_treads" ? setActiveImage("none") : setActiveImage("bluestone_treads")}>
                    {activeImage === "bluestone_treads" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/Steps - Bluestone Treads with Conn. Green stone.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/Steps - Bluestone Treads with Conn. Green stone.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Treads with Conn Green wallstone</h4>
                </Card>
                <Card onClick={() => activeImage === "smokey_mt" ? setActiveImage("none") : setActiveImage("smokey_mt")}>
                    {activeImage === "smokey_mt" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/thin-stone-veneer-ct/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/Steps_Smokey_Mt.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/Steps_Smokey_Mt.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Bluestone Steps</h4>
                </Card>
                <Card onClick={() => activeImage === "used_granite" ? setActiveImage("none") : setActiveImage("used_granite")}>
                    {activeImage === "used_granite" ?
                        <div style={{
                            width: '100%', height: '100%', position: 'fixed', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(3px)', zIndex: '99', top: '0px',
                            left: '0px'
                        }}>
                            <a href='/products/recycled-granite/'><h4 style={{ textDecoration: 'none', marginTop: '5vh', color: 'white' }}>Click to see product details</h4></a>
                            <StaticImage style={{ borderRadius: '10px 10px 10px 10px', aspectRatio: '1', height: '80vh', top: '5vh' }} objectPosition="center" src='../images/cards/steps/Used Granite Steps.jpg' alt="Plymouth Quarries" layout="constrained" />
                        </div>
                        : <StaticImage style={{ borderRadius: '10px 10px 0 0', width: '100%', height: '100%' }} objectPosition="center" src='../images/cards/steps/Used Granite Steps.jpg' alt="Plymouth Quarries" layout="fullWidth" />}
                    <h4 style={{ textDecoration: 'none', margin: '2px', color: 'black' }}>Used Granite Steps</h4>
                </Card>
            </HomepageSegment>
        </Layout>
    );
}

export default StepsLandingTemplate;