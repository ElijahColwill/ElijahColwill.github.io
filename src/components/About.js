import React from 'react';
import './About.css';

function About() {
    return (
        <>
            <div className='header'>
                <h1>About Me</h1>
            </div>
            <div className='about-container'>
                <div className='aci-image-wrap'>
                    <div className='aci-image-stack aci-image-stack--1'>
                        <img src={require('../images/img-1.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack aci-image-stack--2'>
                        <img src={require('../images/img-2.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack aci-image-stack--3'>
                        <img src={require('../images/img-3.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack aci-image-stack--4'>
                        <img src={require('../images/img-pr1.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack aci-image-stack--5'>
                        <img src={require('../images/img-pr4.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack aci-image-stack--6'>
                        <img src={require('../images/img-pr2.jpg').default} alt="About Me" />
                    </div>
                    <div className='aci-image-stack about-box-1'>
                        Hi, I'm Elijah. I'm a sophomore Computer and Data Science student at Purdue University interested in machine learning and its intersection with data science. Outside of computing, I engage in hiking and other outdoor and winter activities and explore the outdoors.
                    </div>
                    <div className='aci-image-stack about-box-2'>
                        Ethics is a core part of what I do and what I advocate for. Our work is changing the world, and with it comes an equally important responsiblity to ensure the systems we build leave no one behind. My work has included advocating for ethics education at Purdue and leading initatives designed to increase awareness in a field where responsiblity is critical.
                    </div>
                    <div className='aci-image-stack about-box-3'>
                        After a year of getting involved in leadership in my program, working with a diverse team on a year-long technical data science project, and growing my toolkit, I'm excited and ready for what's next.
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;
