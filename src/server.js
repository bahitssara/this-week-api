const app = require('./app')
const { PORT } = require('./config')

app.listen(PORT, () => {
    console.log(`Sever is listening at http://localhost:${PORT}`)
});