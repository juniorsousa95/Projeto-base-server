const app = require('../infra/app');
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>console.log(`Server runing at port ${PORT}`))
