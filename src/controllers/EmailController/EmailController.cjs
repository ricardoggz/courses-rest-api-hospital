const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host:'mail.himfg.edu.mx',
    port:465,
    secure:true,
    auth:{
        user:'cemesatel@himfg.edu.mx',
        pass:'Himce.162*/#'
    }
})
const sendEmail = async(req, res)=>{
    try {
        const message = await transporter.sendMail({
            from:'cemesatel@himfg.edu.mx',
            to: req.body.student_email,
            subject:'Datos de inscripción',
            html:`
                <h2>Inscripción exitosa</h2>
                <br />
                <span>Curso: ${req.body.course_name}</a>
                <br />
                <span>Inicia: ${req.body.course_start_date}</span>
                <br />
                <span>Termina: ${req.body.course_finish_date}</span>
                <br />
                <span>Sede: ${req.body.course_place}</span>
                <br />
                <span>Liga activa de curso: ${req.body.course_url}</span>
                <br />
                <span>Contraseña de curso: ${req.body.course_password}</span>
                <br />
                <span>Correo de usuario: ${req.body.student_email}</span>
                <br />
                <span>Contraseña de usuario: ${req.body.student_password}</span>
                <br />
                <span>Referencia de pago: ${req.body.payment_reference}</span>
            `
        })
        return res.json({
            message: 'Correo envíado',
        })
    } catch (error) {
        return res,json(error)
    }
}
module.exports={
    sendEmail
}