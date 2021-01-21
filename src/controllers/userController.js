import md5 from 'md5'
import userModel from '../models/userModel'

async function create(req, res) {
  try {
    await userModel.create({
      name: req.body.name,
      email: req.body.email,
      password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
    })

    return res.status(201).send({ msg: 'Deu tudo certo' })
  } catch (error) {
    return res.status(400).send({ erro: 'Tudo Cagado!!!!' })
  }
}

async function getAll(req, res) {
  try {
    const data = await userModel.find()

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ erro: 'Esta tudo cagado!!', error })
  }
}

async function getByName(req, res) {
  try {
    const data = await userModel.findOne({ name: req.body.name }, 'name email')

    return res.status(200).send({ data })
  } catch (error) {
    return res.status(400).send({ erro: 'Deu merda', error })
  }
}

async function Update(req, res) {
  try {
    await userModel.findByIdAndUpdate(req.params.id, {
      $set: {
        name: req.body.name,
        email: req.body.email,
        password: md5(req.body.password, process.env.GLOBAL_SALT_KEY),
      },
    })

    return res.status(200).send({ msg: 'Tudo atualizado!!' })
  } catch (error) {
    return res.status(400).send({ erro: 'Tudo cagado!!' })
  }
}

async function remove(req, res) {
  try {
    await userModel.findByIdAndRemove(req.params.id)

    return res.status(200).send({ msg: 'Tudo Removido!!!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'tudo cagado!!', error })
  }
}

export default { create, getAll, remove, getByName, Update }
