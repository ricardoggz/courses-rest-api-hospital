export function getDirections(req, res){
    db.pool.getConnection((err, conn)=>{
        if(err) return res.json(err)
        conn.query('SELECT * FROM paginas', (err, rows)=>{
            if(err) return res.json(err)
            return res.json(rows)
        })
    })
}