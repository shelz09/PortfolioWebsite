import { useEffect, useState } from "react"
//id, size, x, y, opactity, animationduration - stars

export const StarBackground = () => {
    const [stars, setstars] = useState([]);
    const [meteors, setMeteors] = useState([])
    useEffect(()=>{
        generateStars();
        generateMeteors();
        const handleResize = () =>{
        generateStars();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    
    const generateStars = () => {
        const numberofStars = Math.floor(window.innerWidth * window.innerHeight / 3000);
        const newStars = [];

        for(let i=0; i<numberofStars; i++){
        newStars.push(
            {
                id:i,
                size:Math.random() * 3 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2,
            }
        );
        setstars(newStars);
        };
    }
    //id, size, x, y, delay, animationduration - meteors
    const generateMeteors = () => {
        const numberofMeteors = 5;
        const newMeteors = [];

        for(let i=0; i<numberofMeteors; i++){
        newMeteors.push(
            {
                id:i,
                size:Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 20,
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3,
            }
        );
        setMeteors(newMeteors);
        };
    }

    return <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((stars) => (
            <div key={stars.id} className="star animate-pulse-subtle" style={{
                width: stars.size + "px",
                height:stars.size + "px",
                left:stars.x + "%",
                top:stars.y + "%",
                opcatity:stars.opacity,
                animationDuration:stars.animationDuration + "s"
            }}></div>
        )
        )}
        {meteors.map((meteors) => (
            <div key={meteors.id} className="meteor animate-meteor" style={{
                width: meteors.size*30 + "px",
                height:meteors.size*1.5 + "px",
                left:meteors.x + "%",
                top:meteors.y + "%",
                animationDelay:meteors.delay,
                animationDuration:meteors.animationDuration + "s"
            }}></div>
        )
        )}
    </div>
}