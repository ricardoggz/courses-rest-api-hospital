import { DatabaseModel } from "../../models/index.js"

const db = new DatabaseModel()

export function getDirections(req, res) {
    db.pool.getConnection((err, conn) => {
        if (err) return res.json(err)
        conn.query('SELECT * FROM paginas', (err, rows) => {
            if (err) return res.json(err)
            return res.json(rows)
        })
    })
}

export function getInvestigatorsById(req, res) {
    db.pool.getConnection((err, conn) => {
        if (err) return res.json(err)
        conn.query(`
            SELECT
            investigador_nombre,
            investigador_foto,
            investigador_sintesis,
            investigadores.laboratorio_id,
            laboratorio_nombre
            FROM investigadores
            INNER JOIN laboratorios
            ON investigadores.laboratorio_id = laboratorios.laboratorio_id
            WHERE investigadores.laboratorio_id = ${req.params.id}
            `, (err, rows) => {
            if (err) return res.json(err)
            return res.json(rows)
        })
    })
}

export function getInvestigators(req, res) {
    db.pool.getConnection((err, conn) => {
        if (err) return res.json(err)
        conn.query(`SELECT * FROM investigadores`, (err, rows) => {
            if (err) return res.json(err)
            return res.json(rows)
        })
    })
}