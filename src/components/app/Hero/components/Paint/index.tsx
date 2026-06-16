import { useEffect, useMemo, useRef, useState } from "react";
import { random, randomColor } from "@utils/index";

export const Paint = ({ children }: { children: React.ReactNode }) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const [size, setSize] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        if (!containerRef.current) return;

        const observer = new ResizeObserver(([entry]) => {
            const { width, height } = entry.contentRect;

            setSize({
                width,
                height,
            });
        });

        observer.observe(containerRef.current);

        return () => observer.disconnect();
    }, []);

    const pointer = useMemo(() => Math.round(Math.random() * 3 + 2), []);

    const Pointers = useMemo(() => Array.from({ length: pointer }).map((_, i) => {
        const pointerSizeMin = Math.min(size.width, size.height);
        if (pointerSizeMin === 0) return null;
        const pointerSize = pointerSizeMin * (random(20, 70) / 100);
        const posX = random(0, size.width - pointerSize);
        const posY = random(0, size.height - pointerSize);
        return (
        <Pointer key={i} index={i} size={pointerSize} posX={posX} posY={posY} />
    )}), [size]);

    return (
        <div ref={containerRef} className="relative">
            {Pointers}
            {children}
            <p>{size.width} x {size.height}</p>
        </div>
    );
};

const Pointer = ({ size, posX, posY, index }: { size: number, posX: number, posY: number, index: number }) => {
    const color = randomColor();
    return (
        <div className="absolute rounded-full mix-blend-screen blur-2xl" style={{
            width: size,
            height: size,
            left: posX,
            top: posY,
            backgroundColor: color,
            animation: "grow 0.6s ease-out both",
            animationDelay: `${index * 0.2}s`,
        }}>
            <p>Pointer</p>
        </div>
    );
};

export default Paint;
