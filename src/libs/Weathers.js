const format = (value) => {
    switch (value.toLowerCase()) {
        case 'clear':
            return 'sun';
        case 'clouds':
            return 'cloud';
        case 'fog':
        case 'haze':
        case 'mist':
        case 'smoke':
        case 'dust':
        case 'sand':
        case 'ash':
        case 'squall':
            return 'fog';
        case 'rain':
        case 'drizzle':
            return 'rain';
        case 'snow':
            return 'snow';
        case 'thunderstorm':
            return 'storm';
        case 'tornado':
            return 'tornado';
        default: return '';
    }
}

const formatByCardinal = (value) => {
    switch (true) {
        case (value === 0):
            return '북풍';
        case (value < 90):
            return '북동풍';
        case (value === 90):
            return '동풍';
        case (value < 180):
            return '남동풍';
        case (value === 180):
            return '남풍';
        case (value < 270):
            return '남서풍';
        case (value === 270):
            return '서풍';
        case (value < 360):
            return '북서풍';
        default:
            return '';
    }
}

const fromKelvinsToCelsius = (value) => {
    return (value - 273.15).toFixed(1);
}

const Weathers = {
    format,
    formatByCardinal,
    fromKelvinsToCelsius
}

export default Weathers;