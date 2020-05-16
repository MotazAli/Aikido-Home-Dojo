import React,{useEffect} from 'react';
import './home.css';
import WOW from 'wowjs';
import Morihei_Ueshiba from '../../img/said_master/Morihei_Ueshiba.jpg'; 
// import Moriteru_Ueshiba_and_MOHAMED_ELSAID from '../../img/said_master/s6.jpg';
import Moriteru_Ueshiba_and_MOHAMED_ELSAID_2 from '../../img/said_master/s7.jpg';
import Moriteru_Ueshiba from '../../img/said_master/moritue_2.jpg';
import MOHAMED_MOSTAFA from '../../img/mm_master/m2.jpg';

//import WOW from '../../lib/wow/wow';
const Home = ()=>{

    useEffect(()=>{
        new WOW.WOW().init();
    },[]);



    return(
        <>
            <section id="intro">
                <div className="intro-container  wow fadeIn">
                    <h1 className="mb-4 pb-0">
                        
                        <span>Aikido</span>
                        <br/> 
                        Home Dojo
                    </h1>
                    <p  className="mb-4 pb-0"> <q id="quoting">It’s a home for everybody</q> </p>
                    <a href="https://www.facebook.com/Aikido.Home.Dojo/videos/210250380163961/" className="venobox play-btn mb-4" data-vbtype="video"
                        data-autoplay="true">
                    </a>
                    {/* <a href="#about" className="about-btn scrollto">About The Event</a> */}
                </div>  
            </section>
            <main id="main">
                <section id="" className="wow fadeInUp">
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Origins</h2>
                                <p>Aikido is a modern Japanese martial art developed 
                                    by <b>Morihei Ueshiba</b> as a synthesis of his martial studies, 
                                    philosophy. 
                                    Ueshiba's goal was to create an art that practitioners 
                                    could use to defend themselves while also protecting 
                                    their attackers from injury.
                                    Aikido's fundamental principles include: irimi(entering), atemi, kokyu-ho (breathing control),
                                    sankaku-ho (triangular principle) and tenkan (turning) 
                                    movements that redirect the opponent's attack momentum. 
                                    Its curriculum comprises various techniques, 
                                    primarily throws and joint locks. 
                                    It also includes a weapons system encompassing 
                                    the bokken, tantō and jō.</p>
                            </div>
                            <div className="col-lg-2">
                                
                            </div>
                            <div className="col-lg-4 ">
                                <div id="overlay">
                                <img id="overlay_img" alt="Morihei Ueshiba"  src={Morihei_Ueshiba}/>

                                </div>

                                {/* <h3>When</h3>
                                <p>Monday to Wednesday<br/>10-12 December</p> */}
                            </div>
                        </div>
                    </div>
                    <br/>
                </section>
            
                <section id="" className="wow fadeInUp">
                    <br/>
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4 ">
                                <div id="overlay">
                                <img  height="390" width="290" alt="Moriteru Ueshiba"  src={Moriteru_Ueshiba}/>

                                </div>

                                {/* <h3>When</h3>
                                <p>Monday to Wednesday<br/>10-12 December</p> */}
                            </div>
                            <div className="col-lg-2">
                                
                            </div>
                            <div className="col-lg-6">
                                <h2>Ueshiba's Family</h2>
                                <p><b>Moriteru Ueshiba</b> is the grandson of the founder of Aikido (Morihei Ueshiba) 
                                and the son of the second Doshu (Kissomaru Ueshiba).
                                Moriteru Ueshiba graduated from university in 1976 and 
                                became master of the Aikido World Headquarters in 1986. 
                                In 1996 he was named chairman of the Aikikai Foundation, 
                                and in 1999 he became Aikido Doshu (the head of the Aikikai).
                                    
                                    The Aikikai is the original school of Aikido. 
                                    It is centered on the Aikikai Foundation in Japan, 
                                    and its figurehead is the Doshu (the family heir of the founder of Aikido). 
                                    It is represented globally through the International Aikido Federation.
                                    Moriteru Ueshiba spread the Aikido art and culture over 140 countries around the world,
                                    and Egypt was one of the top.
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                </section>
            
                {/* <section id="overlay_break">
                    <img id="overlay_img" alt="Moriteru Ueshiba - MOHAMED ELSAID"  src={Moriteru_Ueshiba_and_MOHAMED_ELSAID}/>

                </section> */}

                 <section id="overlay_elsaid"></section>

                 <section id="" className="wow fadeInUp">
                    <br/>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h2>Egypt</h2>
                                <p> <b>Mohamed El-Sayed </b> (Shihan),the Chairman of the Egyptian Aikido Association 
                                    and the founter of Aikido Aikikai in Egypt 1980 , He was a Judo player in the late 1970s 
                                    before beginning interest and dedicate the art of Aikido and being a first Aikido player 
                                    in Egypt. In 1985 he received the first black belt. 
                                    After that he planned to forming an Aikido team and spread that art 
                                    to as many sports facilities and among the youth arround the country until now  </p>
                            
                                    {/* <div id="overlay">
                                <img id="" height="200" width="300" alt="Moriteru Ueshiba with MOHAMED ELSAID"  src={Moriteru_Ueshiba_and_MOHAMED_ELSAID}/>

                                </div> */}
                            </div>
                            
                            <div className="col-lg-2">
                                
                            </div>
                            <div className="col-lg-4 ">
                                <div id="overlay">
                                <img id="" height="390" width="290" alt="Moriteru Ueshiba with MOHAMED ELSAID "  src={Moriteru_Ueshiba_and_MOHAMED_ELSAID_2}/>

                                </div>

                                {/* <h3>When</h3>
                                <p>Monday to Wednesday<br/>10-12 December</p> */}
                            </div>
                        </div>
                    </div>
                    <br/>
                </section>

                {/* <section id="overlay_mostafa"></section> */}

                <section id="" className="wow fadeInUp">
                    <br/>
                    <div className="container">
                        <div className="row">
                            
                            <div className="col-lg-4 ">
                                <div id="overlay">
                                <img  height="390" width="290" alt="Mohamed Mostafa"  src={MOHAMED_MOSTAFA}/>

                                </div>

                                {/* <h3>When</h3>
                                <p>Monday to Wednesday<br/>10-12 December</p> */}
                            </div>
                            <div className="col-lg-2">
                                
                            </div>
                            <div className="col-lg-6">
                                <h2>Aikido Home Dojo</h2>
                                <p>It's an academy and one of the top academies in Egypt for 
                                    teaching and practicing the art of Aikido.
                                    the Founder of the academy is <b>Mohamed Mostafa</b>, 
                                    he is an Aikido Nidan (2 Dan Black belt)
                                    he mastered that art from Mohamed El-Sayed (Shihan) and 
                                    create that academy to share all the knowledge, techniques and 
                                    his way of life (mind, body and spirit) to everyone.
                                    he believe's that it is necessary to spread health 
                                        awareness and culture to create a productive generation 
                                        able to create this nation and preserve its capacity, 
                                        thus, he thought of forming best Aikido academy the<b> Aikido Home Dojo </b> 
                                        which a home for everybody .  
                                    
                                </p>
                            </div>
                            
                        </div>
                    </div>
                    <br/>
                </section>

                <br/>


            </main>
        </>
    );

}

export default Home;