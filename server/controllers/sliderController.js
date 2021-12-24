const db = require('../../db.js')

class SliderController{
    async createSlider(req, res){
        const{product_id, opisanie_slider, title_slider} = req.body
        const slider = await db.query('call slider_insert($1, $2, $3)', [product_id, opisanie_slider, title_slider])
        res.json()
    }
    async getAllSlider(req, res){
        const slider = await db.query('select * from slider')
        res.json(slider.rows)
    }
    async getSlider(req, res){
        const id = req.params.id
        const slider = await db.query('select * from slider where id_slider = $1', [id])
        res.json(slider.rows[0])
    }
    async updateSlider(req, res){
        const {id_slider, product_id, opisanie_slider, title_slider} = req.body
        const slider = await db.query('call slider_update($1, $2, $3, $4)', [id_slider, product_id, opisanie_slider, title_slider])
        res.json()
    }
    async deleteSlider(req, res){
        const id = req.query.id
        const slider = await db.query('delete from slider where id_slider = $1', [id])
        res.json()
    }
}

module.exports = new SliderController