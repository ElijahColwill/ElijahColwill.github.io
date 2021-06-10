import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Technical Projects</h1>
            <div className="cards__container">
                <div className="class__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src={require('../images/img-pr1.jpg').default}
                        text="Fully Responsive React.js Portfolio Website"
                        label='JS, React.js, CSS, HTML'
                        path="./projects"
                        />
                        <CardItem 
                        src={require('../images/img-pr2.jpg').default}
                        text="Machine Learning Python Project"
                        label='Python'
                        path="./projects"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                        src={require('../images/img-pr3.jpg').default}
                        text="Snake in C++ with OpenGL"
                        label='C++, OpenGL'
                        path="./projects"
                        />
                        <CardItem 
                        src={require('../images/img-pr4.jpg').default}
                        text="HTML Parser with Data Processing"
                        label='C, HTML'
                        path="./projects"
                        />
                        <CardItem 
                        src={require('../images/img-pr5.jpg').default}
                        text="Social Network with Accounts, Friends, and Profiles"
                        label='Java'
                        path="./projects"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
