const rec = require('../recipes.json');

exports.getReceipts = (req, res) => {
    if (req.query.page && req.query.limit) {
        const page = parseInt(req.query.page);
        const limit = parseInt(req.query.limit);
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
    } else if (req.query.page) {
        let response = {
            status: 200,
            message: "SUCEESS",
            data: rec.slice(req.query.page, 3)
        }
        res.status(200).json(response);
    } else {

        res.status(200).json(rec.slice(0, 3));
    }


}

