const express = require('express')
const app = express()

app.listen(3000, err => {
  if (err) {
    return console.log(err)
  }
  console.log('---- 打开 http://localhost:3000 吧----')
})

app.get('/', (req, res) => {
  res.cookie('httpOnly','set',{
    httpOnly:true
  })
  res.cookie('name','yx')
  res.cookie('age',24)
  res.send(`<h1>hello world!</h1>`)
})
app.get('/user', (req, res) => {
  res.cookie('child','user')
  res.cookie('user','hcc',{
    path: '/user',
    httpOnly: true
  })
  res.send('<h1>hello world user!</h1>')
})



















// app.get('/', (req, res) => {
//   res.cookie('expires','10秒后消失',{
//     expires: new Date(Date.now()+5000)
//   })
//   res.cookie('max-age','timeout',{
//     maxAge: 5000
//   })
//   res.cookie('name','hcc')
//   res.cookie('namess','yx')
//   res.send(`<h1>hello world!</h1><script>setTimeout(() => {
//     console.log(document.cookie)
//   },6000)</script>`)
// })
// app.get('/user', (req, res) => {
//   res.cookie('user','hcc',{
//     path: '/user',
//     httpOnly: true
//   })
//   res.send('<h1>hello world user!</h1>')
// })
