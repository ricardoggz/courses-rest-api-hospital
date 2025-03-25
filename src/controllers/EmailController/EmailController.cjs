const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: 'mail.himfg.edu.mx',
    port: 465,
    secure: true,
    auth: {
        user: 'lcruz@himfg.edu.mx',
        pass: 'Himuz.162*/#'
    }
})
const sendEmail = async (req, res) => {
    try {
        const message = await transporter.sendMail({
            from: 'lcruz@himfg.edu.mx',
            to: req.body.student_email,
            subject: 'Datos de inscripción',
            html: `
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
                <span>Liga activa de curso: ${req.body.course_url === 'no aplica' ? 'No aplica' : 'https://himfg.edu.mx/cursos2025/' + req.body.course_url}</span>
                <br />
                <span>Contraseña de curso: ${req.body.course_password === 'no aplica' ? 'No aplica' : req.body.course_password}</span>
                <br />
                <span>Correo de usuario: ${req.body.student_email}</span>
                <br />
                <span>Contraseña de usuario: ${req.body.student_password}</span>
                <br />
                <span>Referencia de pago: ${req.body.payment_reference}</span>
                <br />
                <h1>LEER CON ATENCIÓN</h1>
                <br />
                <b>Requisitos para la emisión de constancia</b>
                <br />
                <p>
                    1._ Realizar <b>evaluación (esta aparecerá al finalizar la última transmisión en vivo):</b> 
                     Dispone de 2 oportunidades, cualquier intento posterior no será válido. <b/>ES DE CARÁCTER 
                    OBLIGATORIO. La evaluación estará activa por diez días después del término del curso.</b>
                </p>
                <br />
                <p>
                    2._ Acreditar con un mínimo del 80%. Recibirá su constancia mediante correo
                     electrónico quince días de después del término del curso.
                </p>
                <br />
                <p>
                    3._ <b>Confirmar la recepción de la constancia.</b> Tendrá un máximo de cinco días 
                    dos horas para confirmar de recibido o en su caso solicitar correción, unavez cumplido 
                    este tiempo y no tener respuesta será invalidada por protección de datos del asistente.
                </p>
                <br />
                ${req.body.modality_id === 1 || req.body.modality_id === 3 ?
                    `
                    <p>
                        Gracias por su interés en esta actividad académica del Hospital Infantil de México Federico Gómez.
                    </p>
                    <br />
                    <p>
                        En caso de que su asistencia sea de modo presencial, la dirección del Hospital es Dr. Márquez # 162, Col. Doctores, C.P. 06720, Alcaldía Cuauhtémoc, Ciudad de México y el ingreso a la institución es por la puerta 5, ubicada en la calle de Dr. Jiménez, casi esquina con Dr. Márquez.
                    </p>
                    <br/>
                    <p>
                        A su arribo, es importante mencionar el nombre del curso al que asiste y el área en que se lleva a cabo, ya sea el Auditorio Dr. Jesús Kumate, la Unidad de Aulas de Enseñanza o el 6º. Piso de la Unidad de Hemato-Oncología e Investigación, así como proporcionar una identificación oficial para acceder a las instalaciones.
                    </p>
                    <br />
                    <p>
                        Cabe mencionar que en caso de tratarse de un curso en modalidad híbrida, recibirá también el link de acceso a la plataforma para que pueda consultar les ponencias grabadas hasta por 10 días y acceder a la evaluación que se aplica para acreditar los cursos.
                    </p>
                    `
                    :
                    ``
                }
            `
        })
        return res.json({
            message: 'Correo envíado',
            body: req.body
        })
    } catch (error) {
        return res, json(error)
    }
}
module.exports = {
    sendEmail
}