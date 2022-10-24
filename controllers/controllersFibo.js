//SERIE FIBONACCI
const getFibo = async (req, res)=>{

    const {range} = req.query;
    var fibonacci = [0, 1];
    var limit = 20;

    if (range) limit = range;
    try{
        for (let i = 2; i < limit; i++){
         fibonacci.push (fibonacci[i-1] + fibonacci[i-2]);
    } return res.status(200).json({fibonacci});
    }
    catch{
        res.status(400).json({message:"Ha ocurrido un error inesperado"})
    }
};

        
 module.exports = getFibo;