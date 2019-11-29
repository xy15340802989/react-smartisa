const proxy = require("http-proxy-middleware")

module.exports = (app)=>{
    app.use("/api",proxy({
        target:"http://shopapi.smartisan.com",
        changeOrigin:true,
        pathRewrite:{
            "/api":""
        }

        
    }))
}