module.exports=(db,type)=>{
    return db.define('societes',{
        IDSociete :{
            type:type.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        title:{
            type:type.STRING
        }
    })
}