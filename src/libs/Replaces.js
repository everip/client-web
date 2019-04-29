import { Values } from '.';

const fromSpaceToPlus = (value) => {
    if (Values.valueable(value)) return value.replace(/ /gi, '+');
    return '';
}

const fromPlusToSpace = (value) => {
    if (Values.valueable(value)) return value.replace('+', ' ');
    return '';
}

const fromPlusToUnderLine = (value) => {
    if (Values.valueable(value)) return value.replace('+', '_');
    return '';
}

const Replaces = {
    fromSpaceToPlus,
    fromPlusToSpace,
    fromPlusToUnderLine
}

export default Replaces;