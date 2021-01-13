import { useState, useEffect } from 'react';

const getWindowSize = (w: number, h: number) => {
    const { innerWidth, innerHeight } = window;
    const width = innerWidth - w;
    const height = innerHeight - h;
    return { width, height };
};

const useGetWindowSize = (w = 0, h = 0) => {
    const [windowSize, setWindowSize] = useState(getWindowSize(w, h));
    useEffect(() => {
        const handleResize = () => {
            setWindowSize(getWindowSize(w, h));
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowSize;
};

export default useGetWindowSize