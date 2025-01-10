const nodemailer=require("nodemailer")

const transporter=nodemailer.createTransport({
    service:"Gmail",
    auth:{
        user:"bandiboyinapragnateja@gmail.com",
        pass:"emtbgmujllwlqzfe "
    }
})

module.exports=transporter







