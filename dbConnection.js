const Sequelize = require("sequelize")
const sequelize = new Sequelize(
process.env.DATABASE_NAME,
process.env.DATABASE_USERNAME,
process.env.DATABASE_PASSWORD,
{
host:process.env.DATABASE_HOST,
dialect:"mysql"
})
const connectionDB = async()=>{
await sequelize
.authenticate()
.then(async()=>{
await sequelize.sync({alter:true})
console.log("DB CONNECTED AND SYNC")
})
.catch((err)=>{
console.log(err)
})
}
module.exports={
sequelize:sequelize,
connectionDB:connectionDB
}