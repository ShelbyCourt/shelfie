const products = []

let id = 1

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },

    addProduct: (req, res) => {
        const {img, name, price} = req.body

        const newProduct = {img, name, price, id};
        // console.log(img, name, price, id);
        products.push(newProduct);

        id++

        res.status(200).send(products);
    }
}