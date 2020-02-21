const users = [];

exports.getUserName=(req,res,next)=>{
    //res.sendFile(path.join(rootDir,'views','username.html'));
    res.render('username',{
         title:'Add User'
    });
}

exports.postUserName=(req,res,next)=>{
    //console.log(req.body);
    //res.sendFile(path.join(rootDir,'views','users.html'));

    users.push({ name: req.body.username }); 
    res.redirect('/');
}

exports.username=(req,res,next)=>{
    //res.sendFile(path.join(rootDir ,'views', 'users.html'))

    //const users=usernameRoutes.users;

    res.render('users',{
        title:'Users',
        users:users,
        hasUsers:users.length > 0
    });
}