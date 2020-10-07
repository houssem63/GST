module.exports=(db,type)=>{
    return db.define('societes',{
        ID:{
            type:type.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
       
        Rs:{
            type:type.STRING
        },
        Adresse:{
            type:type.STRING
        },
        Tel:{
            type:type.INTEGER
        },
        Fax:{
            type:type.INTEGER
        },
        Email:{
            type:type.STRING,
            allowNull: false,
            
            
            isEmail: true, 
        },
        Site:{
            type:type.STRING
        },
        Matfiscale :{
            type:type.STRING
        },
        Sigle:{
            type:type.STRING
        },
        MotDePasse:{
            type:type.STRING
        },
        Status:{
            type:type.BOOLEAN
        },
        DateExpiration:{
            type:type.DATE
        },login:{
            type:type.STRING
        }


    })
}