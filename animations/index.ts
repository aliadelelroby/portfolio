export const transition = { delay: 0.2, duration: 0.6 };
export const toTop = {
    initial: { y: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};
export const toButtom = {
    initial: { y: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};
export const toLeft = {
    initial: { x: -30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};
export const toRight = {
    initial: { x: 30, opacity: 0 },
    animate: { y: 0, opacity: 1 },
};
export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
};
export const fadeOut = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
};
