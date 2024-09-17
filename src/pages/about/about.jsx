import React, { useEffect, useState } from 'react';
import Menu from '../../Menu/menu';
import './about.css';

export default function About() {
    const sentences = [
        "A Software Developer with passion towards full-stack development. 💻",
        "Always down to talk about anime and watches. ⌚️",
        "Experienced in building scalable web applications. 🚀",
        "Let's play a game of soccer. ⚽️"
    ];

    const [currentSentence, setCurrentSentence] = useState(sentences[0]);
    const [fade, setFade] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFade(false); // Start fading out
            setTimeout(() => {
                setCurrentSentence(prevSentence => {
                    const currentIndex = sentences.indexOf(prevSentence);
                    const nextIndex = (currentIndex + 1) % sentences.length;
                    return sentences[nextIndex];
                });
                setFade(true); 
            }, 500); 
        }, 2000); 

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [sentences]);

    return (
        <div className='about_page'>
            <div className='about_page_menu'>
                <Menu/>
            </div>
            <div className='about_page_content'>
                <h1>
                    Hey, I'm Ahraz
                </h1>
                <h3 className={`fade ${fade ? 'fade-in' : 'fade-out'}`}>
                    {currentSentence}
                </h3>
            </div>
        </div>
    );
}
