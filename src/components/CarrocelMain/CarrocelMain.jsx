import "./CarrocelMain.css";
import { useEffect, useRef } from "react";


const images = [
    "./public/imagens/alongamento.png",
    "./public/imagens/meditacao.png",
    "./public/imagens/diario.png",
    "./public/imagens/respiracao.png",
    "./public/imagens/rotina.png",
];

export default function InfiniteCarousel() {
    const trackRef = useRef(null);

    useEffect(() => {
        const track = trackRef.current;
        let animationId;
        let position = 0;

        const speed = 0.3;

        const animate = () => {
            position -= speed;

      
            if (Math.abs(position) >= track.scrollWidth / 2) {
                position = 0;
            }

            track.style.transform = `translateX(${position}px)`;
            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => cancelAnimationFrame(animationId);
    }, []);

    return (
        <div className="carousel">
            <div className="carousel-track" ref={trackRef}>
                {[...images, ...images].map((img, index) => (
                    <div className="card" key={index}>
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}