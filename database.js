const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize(
   'exercise',
   'root',
   'root', {
      dialect: 'mysql',
      host: 'localhost'
   }
);

const User = sequelize.define('user',{
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        firstname: DataTypes.STRING,
        lastname: DataTypes.STRING,
},
{
        tableName: "user_tbl"
});

const Workout = sequelize.define("workout", {
    workout_id: {
        primaryKey:true,
        autoIncrement:true
    },
    user_id: {

    }

})

User.sync().then(() => {
    const user = User.findAll({attributes: ["username", "firstname", "lastname"]});
    return user;
}).then((data) => {
    for(const entry of data){
        console.log(entry.username);
    };
})


// Some comment







