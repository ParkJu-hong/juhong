import React from 'react';
import {Link} from 'react-router-dom';

const Gallery = () => {
    return ( 
    <section className="gallery">
    <Link to="/"><img alt="hi" src="https://developer.mozilla.org/static/img/favicon144.png"></img></Link>
    <Link to="/gallery"><img alt="hi" src="google_.png"></img></Link>
    <Link to="/about"><img alt="hi" src="https://developer.mozilla.org/static/img/favicon144.png"></img></Link>
    </section>
    );
};

export default Gallery