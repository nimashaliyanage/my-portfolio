export const getImgUrl = (path) => {
    return new URL(`/Assets/${path}`, import.meta.url).href;
}