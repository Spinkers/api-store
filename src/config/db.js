if(process.env.NODE_ENV == "production"){
    module.exports = {mongoURI: ""}
}else{
    module.exports = {mongoURI: "mongodb://localhost/test"}
}

