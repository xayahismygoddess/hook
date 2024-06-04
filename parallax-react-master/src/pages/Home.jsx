import React, { useEffect, useState } from 'react'
import IMG1 from '../assets/Bag.jpg';
import IMG2 from '../assets/FBT.jpg';
import IMG3 from '../assets/Sus.jpg';
import IMG4 from '../assets/FDC.jpg'; 

const Home = () => {

    const [offsetY, setOffsetY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setOffsetY(window.pageYOffset);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='styled-home'>
            <section className='parallax-container'>
                <div className='parallax' style={{ transform: `translateY(${offsetY * 0.125}px)` }}>
                    <h1 style={{ transform: `translateY(${offsetY * 0.175}px)` }}>Green Go</h1>
                    <div className='footer-hero'>
                    
                       
                    </div>
                    <div className='gradient' />
                </div>
            </section>

            <section className='activities'>
                <div className='grid'>
                    <div className='item'>
                        <img src={IMG1} alt="activity" />
                        <h3> </h3>
                    </div>
                    <div className='item'>
                        <img src={IMG2} alt="activity" />
                        <h3> </h3>
                    </div>
                    <div className='item'>
                        <img src={IMG3} alt="activity" />
                        <h3>  </h3>
                    </div>
                    <div className='item'>
                        <img src={IMG4} alt="activity" />
                        <h3> </h3>
                    </div>
                </div>
            </section>

            <section className='contact'>
               
                <p>
                    <span>Green Go ©</span>

                </p>
            </section>
        </div>
    )
}

export default Home