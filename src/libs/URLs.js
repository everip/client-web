const path = () => {
    return window.location.pathname;
};

const prevPath = () => {
    const currPath = path();
    return currPath.substring(0, currPath.lastIndexOf('/'));
};

const URLs = {
    path,
    prevPath,
}

export default URLs;