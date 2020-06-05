const express= require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is up on port ",port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async()=>{
    // const task = await Task.findById('5ed7ba0169c5960e0c8d60f6')
    // await task.populate('owner').execPopulate()
    // console.log(task.owner)

    const user = await User.findById('5ed7b93e294628432c6c4239')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main()