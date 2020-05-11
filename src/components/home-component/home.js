import React from 'react';
import './home.css';
//import WOW from '../../lib/wow/wow';
const Home = ()=>{

    return(
        <>
            <section id="intro">
                <div className="intro-container  fadeIn">
                    <h1 className="mb-4 pb-0">
                        
                        <span>Aikido</span>
                        <br/> 
                        Home Dojo
                    </h1>
                    <p  className="mb-4 pb-0"> <q id="quoting">It’s a home for everybody</q> </p>
                    <a href="https://www.youtube.com/watch?v=jDDaplaOz7Q" className="venobox play-btn mb-4" data-vbtype="video"
                        data-autoplay="true">
                    </a>
                    {/* <a href="#about" className="about-btn scrollto">About The Event</a> */}
                </div>  
            </section>
            <main id="main">
                <section id="">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>About The Event</h2>
                                <p>Sed nam ut dolor qui repellendus iusto odit. Possimus inventore eveniet accusamus error amet eius aut
                                accusantium et. Non odit consequatur repudiandae sequi ea odio molestiae. Enim possimus sunt inventore in
                                est ut optio sequi unde.</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>Where</h3>
                                <p>Downtown Conference Center, New York</p>
                            </div>
                            <div className="col-lg-3">
                                <h3>When</h3>
                                <p>Monday to Wednesday<br/>10-12 December</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );

}

export default Home;