import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const adminLogin = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        SELECT * FROM administradores
        WHERE admin_user="${req.body.admin_user}"
        AND admin_password="${req.body.admin_password}"
        `
        ,(err)=>{
            !err ? res.json({message: 'Datos correctos'})
            :res.json(err)
            conn.release()
        })
    })
}