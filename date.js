
exports.getDate = function () {
    const today = new Date();
    
    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    }

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function () {
    const today = new Date();
    
    const options = {
        weekday: 'long'
    }

    return today.toLocaleDateString("en-US", options);
}

// Capitalize the first symbol
exports.fSymbCap =  function (str) {
    return str.split('')[0].toUpperCase() + str.slice(1);
  }
