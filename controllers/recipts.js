const rec = require('../recipes.json');

exports.getReceipts = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    let response = {
        status: 200,
        message: "SUCEESS",
        data: rec.slice(startIndex, endIndex)
    }
    res.status(200).json(response);

}

