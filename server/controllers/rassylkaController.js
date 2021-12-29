const db = require('../../db.js')

class RassylkaController{
    async createRassylka(req, res){
        const{email_rassylka} = req.body
        const rassylka = await db.query('call rassylka_insert($1)', [email_rassylka])
        res.json()
    }
    async getAllRassylka(req, res){
        const rassylka = await db.query('select * from rassylka')
        res.json(rassylka.rows)
    }
    async getRassylka(req, res){
        const id = req.params.id
        const rassylka = await db.query('select * from rassylka where id_rassylka = $1', [id])
        res.json(rassylka.rows[0])
    }
    async updateRassylka(req, res){
        const {id_rassylka, email_rassylka} = req.body
        const rassylka = await db.query('call rassylka_update($1, $2)', [id_rassylka, email_rassylka])
        res.json()
    }
    async deleteRassylka(req, res){
        const id = req.query.id
        const rassylka = await db.query('delete from rassylka where id_rassylka = $1', [id])
        res.json()
    }
}

module.exports = new RassylkaController