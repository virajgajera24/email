var usermodel = require("../model/usermodel");
var nodemailer = require('nodemailer');

exports.insert = async(req,res) => {
    
    var data= await user.create(req.body);

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'virajgajera24@gmail.com',
          pass: 'kqpmqazfddcwcebz'
        }
      });
      
      var mailOptions = {
        from: 'virajgajera24@gmail.com',
        to: req.body.email,
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

    res.status(200).json({
        data
    })
}

exports.get_data = async(req,res) =>{
       
    var data = await usermodel.find();

    res.status(200).json({
        data
    })
}
