const fs = require('fs')
const bodyParser = require('body-parser')
const jsonServer = require('json-server')
const jwt = require('jsonwebtoken')
const cors = require('cors')


const server = jsonServer.create()
const userdb = JSON.parse(fs.readFileSync('./users.json', 'UTF-8'))

server.use(cors())
server.use(bodyParser.urlencoded({extended: true}))
server.use(bodyParser.json())
server.use(jsonServer.defaults());

const SECRET_KEY = '123456789'
const expiresIn = '1h'

function createToken(payload){
    return jwt.sign(payload, SECRET_KEY, {expiresIn})
}

function isAuthenticated({email, password}){
    return userdb.users.findIndex(user => user.email === email && user.password === password) !== -1
}

server.post('/api/auth/register', (req, res) => {

    const {email, password} = req.body;
    if(!email || !password){
        const status = 401
        const message = 'cadastre um usuario'
        res.status(status).json({status, message})
        return
    }else if (isAuthenticated({email, password})) {
        const status = 401
        const message = 'Usuario já Cadastrado.'
        res.status(status).json({status, message})
        return
    }
    
    fs.readFile("./users.json", (err, data)=>{
        if(err){
            const status = 401
            const message = err;
            res.status(status).json({status, message})
            return;
        }

        data = JSON.parse(data.toString())

        let last_item_id = data.users[data.users.length - 1].id 

        data.users.push({ id: last_item_id + 1, email: email, password: password });

        let writeData = fs.writeFile("./users.json", 
            JSON.stringify(data),
            (err, result)=>{
                if(err){
                    const status = 401
                    const message = err;
                    res.status(status).json({status, message})
                    return;
                }
            }
        )
    })
    const access_token = createToken({email, password})
    res.status(200).json({access_token})
})
  
server.post('/api/auth/login', (req, res) => {
    const {email, password} = req.body
    
    if (!isAuthenticated({email, password})) {
      const status = 401
      const message = 'Email ou senha incorretos'
      res.status(status).json({status, message})
      return
    }
    const access_token = createToken({email, password})
    res.status(200).json({access_token})
})

server.listen(5000,()=>{
    console.log("executando o servidor rest fake");
})