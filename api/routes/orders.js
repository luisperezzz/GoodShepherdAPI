const express = require('express');
const router = express.Router();

router.get('/', (request, response, next) => {
    response.status(200).json({
        message:'Orders were fetched'
    });
});

router.post('/', (request, response, next) => {
    const order = {
        productID: request.body.productID,
        quantity: request.body.quantity
    };
    response.status(201).json({
        message:'Order was created',
        order: order
    });
});

router.get('/:orderID', (request, response, next) => {
    response.status(200).json({
        message:'Order details',
        orderID: request.params.orderID
    });
});

router.delete('/:orderID', (request, response, next) => {
    response.status(200).json({
        message:'Order deleted',
        orderID: request.params.orderID
    });
});

module.exports = router;