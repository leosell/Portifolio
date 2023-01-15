import express from 'express'
import contact_model from '../contact.model.js'
import cors from 'cors';

const contact = express.Router()

contact.post('/', cors(), async (req, res) => {
    const { name, email, telephone, comments } = req.body

    const newLead = new contact_model({ name, email, telephone, comments })

    const saveNewLead = await newLead.save().catch((error) => {
        console.log(`Erro - ${error}`)
        res
            .status(500)
            .json({ erro: `Não foi possivel salvar o lead do email ${email}` })
    })

    if (saveNewLead) {
        console.log(saveNewLead)
        res.json({ message: `Lead cadastrado - ${email}` })
    }
})

export default contact;