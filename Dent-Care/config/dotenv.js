import dotenv from 'dotenv';

dotenv.config();

const envConfig = {
    PORT: process.env.PORT,
    MONGO_URL: process.env.MONGO_URL
}

export default envConfig;