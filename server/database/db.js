
import mongoose from 'mongoose'

const Connection = async(username, password) => {
   const URL = `mongodb+srv://${username}:${password}@ecommerce-web.tdqpcn2.mongodb.net/`
    try {
      await  mongoose.connect(URL, {
            useUnifiedTopology: true, 
            useNewURLParser: true
        });
        console.log('Connected Successfully')
    } catch (err) {
        console.log('Error connect database ',err.message)
    }
}

export default Connection
