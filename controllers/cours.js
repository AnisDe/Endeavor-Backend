const Cour = require('./models/cours');
const User = require('./models/user');

// module.exports.addCours = async (req, res) => {
 
//     const { email } = req.body;
//         console.log("the Email is",email)
//         const user = await User.findOne({email : email});
//         await user.updateOne({ level : "1" });
//         await user.updateOne({ etat : "ACTIVE"});
//         res.send(user);
// }

module.exports.listCours = async (req, res) => {
    const cours = await Cour.find({});
    res.send({ cours });
}


module.exports.addCours = async (req, res) => {
    let name = req.body.name;
    let description = req.body.description;
    let nbLevel = req.body.nbLevel;
    let img = req.body.images;
    let newcour = {
        name: name,
        description: description,
        nbLevel: nbLevel,
        images: img

    }
    console.log(newcour.nbLevel);
    const cour = new Cour(newcour);
    //cour.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await cour.save();
    res.send(cour);
    console.log(cour)

}

module.exports.editCours = (req, res) => {
    Cour.findOne({ id: req.params.id }, async (err, Modifiedcour) => {
        if (!Modifiedcour) {
            console.log('cour invalid.');
        }
        const { name, description, nbLevel, images } = req.body;
        //const imgs = req.files.map(f => ({ url: f.path, filename: f.filename }))
        //Modifiedcour.images.push(...imgs);
        if (name != "") { Modifiedcour.name = name; }
        if (description != "") { Modifiedcour.description = description; }
        if (nbLevel != "") { Modifiedcour.nbLevel = nbLevel; }
        if (images != "") { Modifiedcour.images = images; }

        await Modifiedcour.save();
        console.log('cour Modified!');
        res.send('cour Modified');
    });

}


module.exports.deleteCours = (req, res) => {
    Cour.findByIdAndDelete(req.params.id, (err) => {
        console.log()
        if (err) {
            res.send(err);
        } else {

            res.send("Cour Deleted or not found");
        }
    })
}