export const random = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
};

export const randomColor = () => {
    return `hsl(${Math.floor(Math.random() * 360)}deg 80% 60%)`;
};