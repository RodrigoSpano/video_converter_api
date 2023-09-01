import app from './index'

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`sv running at port ${port}`))