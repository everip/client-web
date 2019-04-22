import { Values } from '.';

const fromSpaceToPlus = (value) => {
    if (Values.valueable(value)) return value.replace(/ /gi, '+');
    return '';
}

const fromPlusToSpace = (value) => {
    if (Values.valueable(value)) return value.replace(/\+/gi, ' ');
    return '';
}

const Replaces = {
    fromSpaceToPlus,
    fromPlusToSpace,
}

export default Replaces;