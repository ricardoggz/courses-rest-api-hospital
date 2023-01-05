import { DatabaseModel } from "../index.js";
export class UserModel {
    database
    constructor(){
       this.database = new DatabaseModel()
    }
    getUsers(req, res){
        this.database.pool.query('SELECT * FROM usuarios', (err, rows)=>{
            if(err) return res.json(err)
            return res.json(rows)
        })
    }
}