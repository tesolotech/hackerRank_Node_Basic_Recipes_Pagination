const rec = require('../recipes.json');

exports.getReceipts = (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 3;
    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};
    if (endIndex < rec.length) {
        results.next = {
            page: page + 1,
            limit: limit
        };
    }
    if (startIndex > 0) {
        results.previous = {
            page: page - 1,
            limit: limit
        };
    }

    let response = {
        status: 200,
        message: "SUCEESS",
        data: rec.slice(startIndex, endIndex)
    }
    res.status(200).json(response);

}

