export default {
  mongoUrl: global.__MONGO_URI__ || 'mongodb://localhost:27017/node-course-manguinho',
  port: process.env.PORT || 5050
}
