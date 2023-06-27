import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const adminLogin = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        SELECT * FROM administradores
        WHERE admin_user="${req.body.admin_user}"
        AND admin_password="${req.body.admin_password}"
        AND department_id="${req.body.department_id}"
        `
        ,(err, rows)=>{
            if(err) return res.json(err)
            if(rows.length === 0 ) return res.json({
                message: 'Datos incorrectos',
                rows: null
            })
            conn.release()
            return res.json({message: 'Datos correctos', rows})
        })
    })
}