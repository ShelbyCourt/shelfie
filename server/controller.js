module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.getInventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    }
}