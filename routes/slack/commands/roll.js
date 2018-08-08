function die(sides) {
    return Math.floor(Math.random() * Math.floor(sides));
}

module.exports = (req, res) => {
    // TODO other rolls than just 1d20
    
    let roll = die(20);
    res.send('You rolled a ' + roll);
};
