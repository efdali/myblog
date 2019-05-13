const localStrategy=require('passport-local').Strategy;
const passport=require('passport');


passport.use(new localStrategy((username,password,done)=>{

    if(username==='punitive.25' && password==='efdalincesu'){
        return done(null,{username:'Efdal İncesu'},"Giriş Başarılı");
    }else{
        return done(null,false,"Giriş Başarısız");
    }

}));

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });