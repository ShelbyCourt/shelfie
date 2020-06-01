const products = []

let id = 1

module.exports = {
    getInventory: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => res.status(500).send(err))
    },

    createProduct: (req, res) => {
        const {id, name, price, img} = req.body;
//        const newProduct = {id, name, price, img};
        const db = req.app.get('db');
        //products.push(newProduct)

        db.create_product(id, name, price, img)
        .then(products => res.status(200).send(products))
        .catch( err => res.status(500).send(err))
        //console.log(newProduct);
        // console.log(price);
        // console.log(id);
        //console.log(img)

    },
}