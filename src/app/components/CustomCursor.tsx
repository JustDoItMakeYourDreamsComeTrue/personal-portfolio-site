import React, { useEffect, useState } from "react";

export function CustomCursor() {
    const [pos, setPos] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
    });
    const [hover, setHover] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName === "A" ||
                target.tagName === "BUTTON" ||
                target.closest("a") ||
                target.closest("button");
            setHover(!!isInteractive);
        };
        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseover", handleMouseOver);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div
                className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-75"
                style={{
                    transform: `translate3d(${pos.x - 6}px, ${
                        pos.y - 6
                    }px, 0) scale(${hover ? 1.5 : 1})`,
                }}
            />
            <div
                className={`fixed top-0 left-0 w-9 h-9 border-2 ${
                    hover ? "border-cyan-400" : "border-cyan-400/50"
                } rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100`}
                style={{
                    transform: `translate3d(${pos.x - 18}px, ${
                        pos.y - 18
                    }px, 0) scale(${hover ? 1.8 : 1})`,
                }}
            />
        </>
    );
}
