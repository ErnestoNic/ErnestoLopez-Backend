const { query, validationResult } = require("express-validator")

const fibonacciRules = ()=>{
    return[
        query('range').isNumeric(+0).withMessage('range no es numerico').escape(),
    ]
};

const validate = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
      return res.status(400).json({
        errors: errors.array()
      });
    }
    next();
};

module.exports = {fibonacciRules, validate};
