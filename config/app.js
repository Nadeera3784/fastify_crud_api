module.exports = {
    app: {
        environment : "development",
        base_url    :  "http://127.0.0.1:3000/",
        allowedMimeType : ['image/jpeg', 'image/png', 'image/gif'],
        database_uri : "mongodb://localhost:27017/users",  
    }
};  