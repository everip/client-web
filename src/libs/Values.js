const valueable = (value) => {
    if (value === undefined || value === null || value === '') return false;
    return true;
}

const valuabled = (value) => {
    if (valueable(value)) return value;
    return '';
}

const Values = {
    valueable,
    valuabled
}

export default Values;