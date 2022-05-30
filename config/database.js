import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config({ path: './config/.env' })

const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PASS,
    {
        dialect: "mysql",
        host: process.env.MYSQL_HOST
    }
)

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch((e) => console.log("error: ", e))

export default sequelize