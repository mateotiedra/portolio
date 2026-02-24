import React, { useEffect, useRef } from 'react';

function ScrollSpeedTracker({ onChange }) {
    const lastScrollTop = useRef(0); // To store the last scroll position
    const lastTimestamp = useRef(0); // To store the last timestamp

    useEffect(() => {
        const handleScroll = (event) => {
            const currentScrollTop = window.scrollY || document.documentElement.scrollTop;
            const currentTimestamp = Date.now();

            // Calculate scroll speed
            const deltaScroll = currentScrollTop - lastScrollTop.current;
            const deltaTime = currentTimestamp - lastTimestamp.current;

            if (deltaTime > 0) {
                const speed = Math.abs(deltaScroll / deltaTime) * 1000; // Speed in pixels per second
                onChange(speed);
            }

            // Update last values
            lastScrollTop.current = currentScrollTop;
            lastTimestamp.current = currentTimestamp;
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [onChange,]);

    return (
        <>
        </>
    );
}

export default ScrollSpeedTracker;