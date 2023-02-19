import express from 'express'
import cors from 'cors'
import axios from 'axios'

const app = express()
const port = 4000

app.use(cors())

app.get('/api/trips', (req, res) => {
  const { keyword } = req.query
  const tag = keyword ? JSON.parse(keyword) : ''

  axios
    .get('http://localhost:9000/trips')
    .then((response) => {
      const trips = response.data.filter((trip) =>
        [trip.title, trip.description, ...trip.tags].some((text) =>
          text.toLowerCase().includes(tag.toLowerCase())
        )
      )
      res.status(200).json({ trips })
    })
    .catch((error) => {
      console.error('Server Error' + error)
      res.status(500).send('Internal Server Error')
    })
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})
