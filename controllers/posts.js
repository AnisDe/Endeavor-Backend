const Poste = require('./models/poste');

module.exports.AddPost = async (req, res) => {


    const { title , name } = req.body;

    const poste = new Poste({
        name,
        title
    })
    console.log(poste);
    await poste.save();
    res.json(poste);
}

module.exports.listAllPost = async (req, res) => {

    const  post  = await Poste.find();
    console.log("the Post is",post)
        res.json( post);     
        
}