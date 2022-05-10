const Questions = require('./models/questions');



module.exports.listQuestions =  async (req, res) => {
    const question = await Questions.find({});
    res.send({ question });
}

module.exports.getQuestionOfLevel =  async (req, res) => {


    //var name = req.params.nameofcour;
    //res.send(name);
    var qs = Array[Questions] ;
    Questions.find({ $and :[ {nameofcour: req.params.nameofcour },{ level : req.params.level }] }, function (err, question) {
        if (err) { return err }
        res.send({ question });
        
    })
   
}

module.exports.addQuestion = async (req, res) => {
    let correct_answer = req.body.correct_answer;
    let option_1 = req.body.option_1;
    let option_2 = req.body.option_2;
    let option_3 = req.body.option_3;
    let option_4 = req.body.option_4;
    let question = req.body.question;
    let nameofcour = req.body.nameofcour;
    let level = req.body.level;
    let newquestion = {
        correct_answer: correct_answer,
        option_1: option_1,
        option_2: option_2,
        option_3: option_3,
        option_4: option_4,
        question: question,
        nameofcour: nameofcour,
        level: level,

    }
    //console.log(newquestion.nbLevel);
    const questions= new Questions(newquestion);
    //cour.images = req.files.map(f => ({ url: f.path, filename: f.filename }));
    await questions.save();
    res.send(questions);
    console.log(questions)

}