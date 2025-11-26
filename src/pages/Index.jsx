import React, {useState} from 'react';
import Journal from "../components/Journal.jsx";
import Hero from "../components/Hero.jsx";
import Contact from "../components/Contact.jsx";
import AboutHero from "../components/About-Hero.jsx";

const Index = () => {

    const [isNight, setIsNight] = useState(false);

    return (
        <div>
            <AboutHero isNight={isNight} />
            {/* <Hero isNight={isNight} setIsNight={setIsNight} /> */}
            <Journal isNight={isNight}/>
            <Contact isNight={isNight}/>
            <Hero isNight={isNight} setIsNight={setIsNight} />
        </div>
    );

};

export default Index;