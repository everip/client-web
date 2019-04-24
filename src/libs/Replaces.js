import { Values } from '.';

const fromSpaceToPlus = (value) => {
    if (Values.valueable(value)) return value.replace(/ /gi, '+');
    return '';
}

const fromPlusToUnderLine = (value) => {
    if (Values.valueable(value)) return value.replace('+', '_');
    return '';
}

const Replaces = {
    fromSpaceToPlus,
    fromPlusToUnderLine
}

export default Replaces;