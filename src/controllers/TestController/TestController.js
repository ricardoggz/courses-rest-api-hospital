import { DatabaseModel } from "../../models/index.js";

const db = new DatabaseModel()

export function getTests(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query('SELECT * FROM examenes', (err, rows)=>{
            if(err) return res.json(err)
            return res.json(rows)
        })
    })
}

export function deleteTest(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            DELETE FROM examenes WHERE test_id ="${req.body.test_id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Exámen eliminado correctamente'
            })
        })
    })
}

export function editTest (req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query(`
            UPDATE examenes SET
            test_name = "${req.body.test_name}"
            WHERE test_id = "${req.params.id}"
        `, (err)=>{
            if(err) return res.json(err)
            return res.json({
                message: 'Exámen actualizado correctamente'
            })
        })
    })
}

export function addTest(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) throw new Error(err)
        conn.query(`
        INSERT INTO examenes(
            test_name
        )
        VALUES(
            "${req.body.test_name}"
        )
        `
        ,(err)=>{
            if(err) return res.json(err)
            conn.release()
            return res.json({message:'Exámen agregado correctamente'})
        })
    })
}