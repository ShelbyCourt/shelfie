module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.getInventory()
        .then(inventory => res.status(200).send('It worked!!!'))
        .catch(err => res.status(500).send(err))
    }
}