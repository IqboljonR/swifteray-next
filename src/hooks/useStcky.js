import { useState, useEffect, useRef, useCallback } from "react";
const useSticky = (defaultSticky = false) => {
    const [isSticky, setIsSticky] = useState(defaultSticky);
    const ref = useRef(null);
    const toggleSticky = useCallback(
        ({ top, bottom }) => {
            if (top <= 0 && bottom > 2 * 68) {
                !isSticky && setIsSticky(true);
            } else {
                isSticky && setIsSticky(false);
            }
        },
        [isSticky]
    );
    useEffect(() => {
        const handleScroll = () => {
            toggleSticky(ref.current.getBoundingClientRect());
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [toggleSticky]);
    return { ref, isSticky };
};
export default useSticky;