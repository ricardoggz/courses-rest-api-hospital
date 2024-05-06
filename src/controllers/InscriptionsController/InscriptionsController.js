import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export const getPregradeInscriptions = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT * FROM estudiantes_pregrado
      `, (err, rows)=>{
        if(err) return res.satus(500).json(err)
        return res.json(rows)
      })
  })
}

export const getPosgradeInscriptions = (req, res)=>{
    db.pool.getConnection((err, conn)=>{
      if(err) throw new Error(err)
      conn.query(`
        SELECT * FROM estudiantes_posgrado
      `, (err, rows)=>{
        if(err) return res.satus(500).json(err)
        return res.json(rows)
      })
  })
}