module.exports.getDate = function () {
    const today = new Date()
    const options = {
        weekday: 'long', 
        day: 'numeric',
        month: 'long'}
        return today.toLocaleDateString('fr-FR', options);
}