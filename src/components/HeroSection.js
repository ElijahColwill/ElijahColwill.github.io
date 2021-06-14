import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src={require('../videos/video-1.mp4').default} autoPlay loop muted />
            <h1>Elijah Colwill</h1>
            <p>Software Developer, Data Scientist</p>
            <div className='hero-btns'>
                <Button className='btns' buttonStyle='btn--outline'
                    buttonSize='btn--large' to='/resume'>
                    <i class="fas fa-file-alt"/> &nbsp;RESUME    
                </Button>
                <Button className='btns' buttonStyle='btn--primary'
                    buttonSize='btn--large' to='/github-rd' target="_blank">
                    <i class="fas fa-code-branch"/> &nbsp;GITHUB    
                </Button>   
            </div>            
        </div>
    );
}

export default HeroSection;
