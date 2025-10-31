import React, {useState} from 'react';
import Journal from "../components/Journal.jsx";
import Hero from "../components/Hero.jsx";
import Contact from "../components/Contact.jsx";

const Index = () => {

    const [isNight, setIsNight] = useState(false);

    return (
        <div>
            <Hero isNight={isNight} setIsNight={setIsNight} />
            <Journal isNight={isNight}/>
            <Contact isNight={isNight}/>
        </div>
    );

};

export default Index;