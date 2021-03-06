import productModel from '../models/productModel'

async function create(req, res) {
  try {
    const { filename: image } = req.file

    const [name] = image.split('.')
    const filename = `${name}.jpg`

    await productModel.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      image: filename,
    })

    return res.status(201).send({ msg: 'Deu certo o create!!' })
  } catch (error) {
    return res.status(400).send({ msg: 'Deu Merda, tudo cagado!', error })
  }
}

async function getAll(req, res) {
  try {
    const data = await productModel.find()

    return res.status(201).send({ data })
  } catch (error) {
    return res.status(400).send({ msg: 'Tudo CAGADO!', error })
  }
}

export default { create, getAll }
