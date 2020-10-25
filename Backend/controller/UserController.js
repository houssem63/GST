const { User ,HistoriqueEmbauches ,Role ,User_Role} =require('../models/relations')
const nodemailer = require("nodemailer");
const request = require('request');

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
module.exports={
    ajouter:async(req,res)=>{
      try {
        global.personnelimage;
        global.copierpermis;
          console.log(req.body)
          const url = req.protocol + "://" + req.get("host");
          if(!req.files['Image']){
                
               this.personnelimage="https://secure.gravatar.com/avatar/03723a218a9152e9bad38a84058e21d7?s=192&d=mm&r=g%202x"
               
           }else{
            
                this.personnelimage=url + "/images/" + req.files['Image'][0].filename;
                
           }
           if(!req.files['CopierPermis']){
               
               this.copierpermis=null
               
           }else{
            
                this.copierpermis=url + "/images/" + req.files['CopierPermis'][0].filename
                
           }
          const user =req.body
          const { count } = await User.findAndCountAll();
          if(!count) {
            user.Status = true;
            user.Function='Admin'
            const hash=await bcrypt.hash(req.body.MotDePasse, 10)
                    if(hash){
                        this.user = {
                         
                           Adresse:req.body.Adresse,
                           Tel:req.body.Tel,
                           
                           Email:req.body.Email,
                         
                           Image:this.personnelimage,
                           MotDePasse:hash,
                           Status:req.body.Status,
                         
                           Login:req.body.Login,
                        
                        Function:req.body.Function,
                      
                        }
                     await User.create(this.user)
                } 
            await Role.bulkCreate([
              { Libelle: 'Administrateur' },
              { Libelle: 'societe' },
              { Libelle: 'personnel' },
              { Libelle: 'client' }
  
              ]);
            await User_Role.bulkCreate([
                { userID: 1, roleID: 1 },
                
            ]);
            return {
              ok:true,msg:'inscriptionavec succes'
                };
          }
  
  
    
  //console.log(req.files['Image'][0])
  //console.log(req.files['CopierPermis'][0])
  
  
  
         global.user ;
          const finduser = await User.findAll({where:{Login:req.body.Login}})
          
          if(finduser[0]){
            return  res.json({msg:'login deja utilise',ok:false})
          }
          const findEmail = await User.findAll({where:{Email:req.body.Email}})
          
          if(findEmail[0]){
            return  res.json({msg:'Email deja utilise',ok:false})
          }
      const hash=await bcrypt.hash(req.body.MotDePasse, 10)
      console.log(hash)
              if(hash){
                  this.user = {
                      Rs:req.body.Rs,
                     Adresse:req.body.Adresse,
                     Tel:req.body.Tel,
                     Fax:req.body.Fax,
                     Email:req.body.Email,
                     Site:req.body.Site,
                     Matfiscale:req.body.Matfiscale,
                     Image:this.personnelimage,
                     MotDePasse:hash,
                     Status:req.body.Status,
                     DateExpiration:req.body.DateExpiration,
                     Login:req.body.Login,
                     Cin:req.body.Cin,
                     Nom:req.body.Nom,
                  Prenom:req.body.Prenom,
                  DateDeNaissance:req.body.DateDeNaissance,  
                  NumCNSS:req.body.NumCNSS,
                  SituationFamilialle:req.body.SituationFamilialle,
                  
                  CopierPermis:this.copierpermis, 
                  Rs:req.body.Rs,
                   NomPC:req.body.NomPC,
                  PrenomPC:req.body.PrenomPC,
                  TelPersonnelContact:req.body.TelPersonnelContact,
                  FaxPersonnelContact:req.body.FaxPersonnelContact,
                  AdresseEmailPersonnel:req.body.AdresseEmailPersonnel,
                  MatFiscal:req.body.MatFiscal,
                  Regfiscale:req.body.Regfiscale,
                  Function:req.body.Function,
                  SocieteID:req.body.SocieteID,
             
               
          } 
              }
          
          User.create(this.user).then((resq)=>{
              res.status(200).json({ok:true,msg:'inscriptionavec succes'})
          }).catch((err)=>{
              console.log(err)
              res.status(500).json({err:'error server' + err})
          })
      
                const output = `
                <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
   <head> 
    <meta charset="UTF-8"> 
    <meta content="width=device-width, initial-scale=1" name="viewport"> 
    <meta name="x-apple-disable-message-reformatting"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta content="telephone=no" name="format-detection"> 
    <title>Nouveau modèle de courrier électronique 2020-10-23</title> 
    <!--[if (mso 16)]>
      <style type="text/css">
      a {text-decoration: none;}
      </style>
      <![endif]--> 
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
    <!--[if gte mso 9]>
  <xml>
      <o:OfficeDocumentSettings>
      <o:AllowPNG></o:AllowPNG>
      <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
  </xml>
  <![endif]--> 
    <!--[if !mso]><!-- --> 
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"> 
    <!--<![endif]--> 
    <style type="text/css">
  #outlook a {
    padding:0;
  }
  .ExternalClass {
    width:100%;
  }
  .ExternalClass,
  .ExternalClass p,
  .ExternalClass span,
  .ExternalClass font,
  .ExternalClass td,
  .ExternalClass div {
    line-height:100%;
  }
  .es-button {
    mso-style-priority:100!important;
    text-decoration:none!important;
  }
  a[x-apple-data-detectors] {
    color:inherit!important;
    text-decoration:none!important;
    font-size:inherit!important;
    font-family:inherit!important;
    font-weight:inherit!important;
    line-height:inherit!important;
  }
  .es-desk-hidden {
    display:none;
    float:left;
    overflow:hidden;
    width:0;
    max-height:0;
    line-height:0;
    mso-hide:all;
  }
  @media only screen and (max-width:600px) {p, ul li, ol li, a { font-size:16px!important; line-height:150%!important } h1 { font-size:30px!important; text-align:center; line-height:120%!important } h2 { font-size:26px!important; text-align:center; line-height:120%!important } h3 { font-size:20px!important; text-align:center; line-height:120%!important } h1 a { font-size:30px!important } h2 a { font-size:26px!important } h3 a { font-size:20px!important } .es-menu td a { font-size:16px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:16px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button { font-size:20px!important; display:block!important; border-width:15px 25px 15px 25px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
  </style> 
   </head> 
   <body style="width:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
    <div class="es-wrapper-color" style="background-color:#F4F4F4"> 
     <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#f4f4f4"></v:fill>
        </v:background>
      <![endif]--> 
     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top"> 
       <tr class="gmail-fix" height="0" style="border-collapse:collapse"> 
        <td style="padding:0;Margin:0"> 
         <table cellspacing="0" cellpadding="0" border="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:600px"> 
           <tr style="border-collapse:collapse"> 
            <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img src="https://esputnik.com/repository/applications/images/blank.gif" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px" alt width="600" height="1"></td> 
           </tr> 
         </table></td> 
       </tr> 
       <tr style="border-collapse:collapse"> 
        <td valign="top" style="padding:0;Margin:0"> 
         <table cellpadding="0" cellspacing="0" class="es-content" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:15px;padding-bottom:15px"> 
                 <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:282px" valign="top"><![endif]--> 
                 <table class="es-left" cellspacing="0" cellpadding="0" align="left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left"> 
                   <tr style="border-collapse:collapse"> 
                    <td align="left" style="padding:0;Margin:0;width:282px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-infoblock es-m-txt-c" align="left" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:arial, 'helvetica neue', helvetica, sans-serif;line-height:14px;color:#CCCCCC">Put your preheader text here<br></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table> 
                 <!--[if mso]></td><td style="width:20px"></td><td style="width:278px" valign="top"><![endif]--> 
                 <table class="es-right" cellspacing="0" cellpadding="0" align="right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right"> 
                   <tr style="border-collapse:collapse"> 
                    <td align="left" style="padding:0;Margin:0;width:278px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="right" class="es-infoblock es-m-txt-c" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:14px;color:#CCCCCC"><a href="https://viewstripo.email" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:12px;text-decoration:underline;color:#CCCCCC">View in browser</a></p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table> 
                 <!--[if mso]></td></tr></table><![endif]--></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-header" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" bgcolor="#407dfe" style="padding:0;Margin:0;background-color:#407DFE"> 
             <table class="es-header-body" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:580px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="Margin:0;padding-left:10px;padding-right:10px;padding-top:25px;padding-bottom:25px;font-size:0"><img src="https://ocqheq.stripocdn.email/content/guids/CABINET_3df254a10a99df5e44cb27b842c2c69e/images/7331519201751184.png" alt style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="40"></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td style="padding:0;Margin:0;background-color:#407DFE" bgcolor="#407dfe" align="center"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;background-color:#FFFFFF;border-radius:4px" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px"><h1 style="Margin:0;line-height:58px;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">Bienvenu! ${req.body.Rs}</h1></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td bgcolor="#ffffff" align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"> 
                         <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td style="padding:0;Margin:0;border-bottom:1px solid #FFFFFF;background:#FFFFFFnone repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#FFFFFF" width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation"> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" bgcolor="#ffffff" align="left" style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">We're excited to have you get started. First, you need to confirm your account. Just press the button below.</p></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If that doesn't work, copy and paste the following link in your browser:</p></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><a target="_blank" href="https://viewstripo.email/" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;font-size:18px;text-decoration:underline;color:#FFA73B">XXX.XXXXXXX.XXX / XXXXXXXXXXXXX</a></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" align="left" style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">If you have any questions, just reply to this email—we're always happy to help out.</p></td> 
                       </tr> 
                       <tr style="border-collapse:collapse"> 
                        <td class="es-m-txt-l" align="left" style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">Cheers,</p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:18px;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666">The Ceej Team</p></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="padding:0;Margin:0"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:600px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"> 
                         <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                           <tr style="border-collapse:collapse"> 
                            <td style="padding:0;Margin:0;border-bottom:1px solid #F4F4F4;background:#FFFFFFnone repeat scroll 0% 0%;height:1px;width:100%;margin:0px"></td> 
                           </tr> 
                         </table></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table> 
         <table class="es-content" cellspacing="0" cellpadding="0" align="center" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%"> 
           <tr style="border-collapse:collapse"> 
            <td align="center" style="padding:0;Margin:0"> 
             <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" align="center"> 
               <tr style="border-collapse:collapse"> 
                <td align="left" style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px"> 
                 <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                   <tr style="border-collapse:collapse"> 
                    <td valign="top" align="center" style="padding:0;Margin:0;width:560px"> 
                     <table width="100%" cellspacing="0" cellpadding="0" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px"> 
                       <tr style="border-collapse:collapse"> 
                        <td align="center" style="padding:0;Margin:0;display:none"></td> 
                       </tr> 
                     </table></td> 
                   </tr> 
                 </table></td> 
               </tr> 
             </table></td> 
           </tr> 
         </table></td> 
       </tr> 
     </table> 
    </div>  
   </body>
  </html>
          `;
          
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
          name :process.env.NAME,
          user: process.env.EMAIL, // generated ethereal user
          pass: process.env.PASSWORD // generated ethereal password
      }, tls: {
          rejectUnauthorized: false
      },
  
  });
  
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"autoecole030@gmail.com', // sender address
      to: req.body.Email, // list of receivers
      subject: 'Bienvenu sur notre plateforme', // Subject line
      text: 'Hello world?', // plain text body
      html: output // html body
  };
  
  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log('err message' +error.message);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  })
    
        
      
  
          
      } catch (error) {
        console.log(error)
        res.status(500).json({error})
      }
     
    },
    Delete:async(req,res)=>{
    
 try{
 const responce=    await   User.destroy({
            where: {
              ID: req.params.id
            }
          })
         
             await HistoriqueEmbauches.destroy({where:{
                PersonnelID :req.params.id
             }}) 
          
             
 }    catch(e){
res.status(500).json({err:e}) }
            
         
    },
    Update:(req,res)=>{
        const body =req.body
        console.log(body)
        console.log(req.body)
  
       User.update(body, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                res.status(200).json({msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    Getallsociete:(req,res)=>{
        User.findAll({
            where:{
                function:'Societe'
            }
        }).then((responce)=>{
            res.status(200).json({societe :responce})
        }).catch((err)=>{
            res.status(500).json({err:'error server' + err})
        })
    },
    Getbyid:(req,res)=>{
        console.log(req.params.id)
        User.findAll({
            where :{
                ID:req.params.id
            }
        }).then((responce)=>{
            console.log(responce[0].roles)
            res.status(200).json({user :responce[0].dataValues})
        }).catch((err)=>{
          console.log(err)
            res.status(500).json({err:'error server' + err})
        })
    },
 
    auth: async (req, res, next) => {
        try {
           
             global.fetchuser;
            const user = await  User.findAll({
                where :{
                    Login:req.body.Login
                },raw: true,
                nest: true})
                

            if (!user[0] ) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false});
            }
            this.fetchuser = user;
            
            const pass = await bcrypt.compare(req.body.MotDePasse, user[0].MotDePasse)

            if (!pass) {
                return res.json({ msg: "login ou mot de passe incorrect" , ok : false })
            }
           global.status;
      
   if(this.fetchuser[0].Function ==='Societe'){
                this.status = await User.findAll({ where :{
                ID: Number(this.fetchuser[0].ID    ) 
                }})
               
           

            }else if(this.fetchuser[0].Function ==='Admin'){
                this.status = await User.findAll({ where :{
                    ID: Number(this.fetchuser[0].ID    ) 
                    }})
            }
            else{
                this.status = await User.findAll({  where :{
                    ID :this.fetchuser[0].SocieteID
                }})
              
            }
            
            console.log(this.status)
            if (this.status[0].Status===false){
                return res.json({msg:"votre compte n'est pas activer",ok :false})
            }else{
                const token = jwt.sign({ email: this.fetchuser[0].Email }, process.env.SECRET,
                    { expiresIn: "5h" }
                );
                let userId;
                userId = { id: this.fetchuser[0].ID }
    let userData=this.fetchuser[0]
                res.status(200).json({ token: token, userId:userId,userFunction:userData.Function ,expiresIn: "14400",ok:true,msg:'connecter avce succes' })
            }
        
        }
        catch (err) {
            res.json({ err: "mot de passe ou email incorrect" +err , ok : false})
        };

    },
    updateimage :(req,res)=>{
        console.log(req.files['Image'])
        const url = req.protocol + "://" + req.get("host");
        const image =url + "/images/" + req.files['Image'][0].filename;
        const bady ={Image :image}
        User.update(bady, {
            where: {
              ID: req.params.id
            }}).then((responce)=>{
                console.log(responce)
                res.status(200).json({imagepath :image, msg:'Societe edit avec succes'})
            }).catch((err)=>{
                res.status(500).json({err:'error server' + err})
            })
    },
    changemotdpasse:async (req,res)=>{
        console.log(req.body)
    const user= await   User.findAll({where :{
            ID :req.params.id
        }})
console.log(user[0])
      const test=await  bcrypt.compare(req.body.actuelMotDePasse, user[0].MotDePasse)
      console.log(test)
      if(!test){
          return res.json({msg:'mot de passe actual incorrect',ok:false})
      }
    const hach =await  bcrypt.hash(req.body.nouvelleMotDePasse, 10)

    User.update({MotDePasse:hach}, {
        where: {
          ID: req.params.id
        }}).then((responce)=>{
            res.json({msg:'mot de passe changer',ok :true})
        })
    },
    validateCaptcha: (req, res) => {
      const token = req.body.recaptcha;
      console.log(token)
      // const secretkey = process.env.RECAPTCHA_SECRET_KEY; //the secret key from your google admin console;
      
      //token validation url is URL: https://www.google.com/recaptcha/api/siteverify 
      // METHOD used is: POST
      
      const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}&remoteip=${req.connection.remoteAddress}`
      // const url =  `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`;
      
      //note that remoteip is the users ip address and it is optional
      // in node req.connection.remoteAddress gives the users ip address
      if(token === null || token === undefined){
        res.status(201).send({success: false, message: "Token is empty or invalid"})
        return console.log("token empty");
      }
      
      request(url, function(err, response, body){
        //the body is the data that contains success message
        body = JSON.parse(body);
        
        //check if the validation failed
        if (body.success !== undefined && !body.success) {
          res.status(200).json({
              success: false,
              message: "échec de recaptcha."
          });
      }

      //if passed response success message to client
      res.status(200).json({
          success: true,
          message: "recaptcha passé."
      });
        
      })
    
  },
  getallusers :async (req,res)=>{
    try {
     const users= await User.findAll()
     console.log(users)
     if(users){
       res.status(200).json({users})
     }
    } catch (error) {
      res.status(500).json({err:'error server' + error})

    }
  }
}