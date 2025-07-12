import React from 'react'
import { marked } from 'marked';

const generateNewsletterHTML = (markdown, title, writtenBy, template) => {
  if (template === 'fotosoc') {

    const styledContent = `
    <div class="user-content" style="color: #000000; text-align: center;">
      ${marked.parse(markdown || '')}
    </div>
  `;

    return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${title}</title>
      <style>
        .user-content img {
          height: 350px;
          border-radius: 8px;
          display: block;
          margin: 16px auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
      </style>
    </head>
    <body style="margin:0;padding:0;background-color:#1e40af;font-family:Arial,sans-serif;color:white;">
      <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to right, #1e3a8a, #2563eb);">
        <tr>
          <td align="center" style="padding: 16px;">
            
            <!-- Header Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; padding: 32px 16px 16px 16px; margin-bottom: 24px;">
              <tr>
                <td align="center" style="padding-bottom: 16px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="margin: auto;">
                    <tr>
                      <td align="center" style="padding-right: 16px;">
                        <img src="https://i.imgur.com/2hiweJS.png" alt="DCU Fotosoc Logo"
                          style="width: 128px; height: 128px; display: block;">
                      </td>
                      <td align="center">
                        <h2 style="font-size: 48px; font-weight: bold; color: #000000; margin: 0;">DCU Fotosoc</h2>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td align="center">
                  <i style="font-size: 24px; color: #000000;">${title}</i>
                </td>
              </tr>
            </table>

            <!-- Weekly Recap Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; padding: 8px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  ${styledContent}
                </td>
              </tr>
            </table>

            <!-- Author Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0" style="background-color: white; border-radius: 8px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  <p style="font-size: 16px; color: #000000; margin:4px;">
                    <b>${writtenBy}</b>
                  </p> 
                </td>
              </tr>
            </table>

            <!-- Socials Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="background-color: white; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 8px; text-align: center;">
                  <h3
                    style="font-size: 18px; font-weight: bold; color: #1e40af; margin: 0 0 16px;">Check
                    Out Our Socials!</h3>
                  <table cellpadding="0" cellspacing="0" border="0"
                    style="margin: auto;">
                    <tr>
                      <td style="padding: 8px;">
                        <a href="https://chat.whatsapp.com/KcWm0mU78nyHKMibl3Vlko"
                          target="_blank" style="text-decoration: none;">
                          <img src="https://i.imgur.com/zzymrYn.png" alt="WhatsApp"
                            style="height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://www.tiktok.com/@dcufotosoc"
                          target="_blank" style="text-decoration: none;">
                          <img src="https://i.imgur.com/D5mnYPb.png" alt="TikTok"
                            style="height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://instagram.com/dcufotosoc" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/w7DUF2P.png" alt="Instagram"
                            style="height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="mailto:committee@dcufotosoc.ie" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/ssNBtrm.png" alt="Email"
                            style="height: 48px;">
                        </a>
                      </td>
                      <td style="padding: 8px;">
                        <a href="https://dcufotosoc.ie" target="_blank"
                          style="text-decoration: none;">
                          <img src="https://i.imgur.com/XCberko.png" alt="Website"
                            style="height: 48px;">
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>

            <!-- Footer Section -->
            <table width="600" cellpadding="0" cellspacing="0" border="0"
              style="background-color: white; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
              <tr>
                <td style="padding: 16px; text-align: center;">
                  <p style="font-size: 16px; color: #000000; margin: 0 0 24px;">
                    DCU Fotosoc © 2003 - 2025. Newsletter Generator by
                    <a href="https://www.jakefarrell.ie/" target="_blank"
                      style="color: #1e40af; text-decoration: none;">Jake
                      Farrell</a>
                  </p>
                  <i style="color: #000000;">If you would like to stop receiving
                    these emails, please contact
                    <a href="mailto:secretary@dcufotosoc.ie"
                      style="color: #1e40af; text-decoration: none;">secretary@dcufotosoc.ie</a>
                    to unsubscribe.
                  </i>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
  }
  
  if (template === 'mps') {

    const styledContent = `
    <div class="user-content" style="padding: 18px;color: #FFFFFF;font-family: Helvetica;font-size: 14px;font-style: normal;font-weight: bold;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
      ${marked.parse(markdown || '')}
    </div>
  `;

    return `

      <!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
        <!-- NAME: ANNOUNCE -->
        <!--[if gte mso 15]>
        <xml>
            <o:OfficeDocumentSettings>
            <o:AllowPNG/>
            <o:PixelsPerInch>96</o:PixelsPerInch>
            </o:OfficeDocumentSettings>
        </xml>
        <![endif]-->
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width  initial-scale=1">
        <title>${title}</title>

    <style type="text/css">
    .user-content img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 16px auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
    p{
      margin:10px 0;
      padding:0;
    }
    table{
      border-collapse:collapse;
    }
    h1 h2 h3 h4 h5 h6{
      display:block;
      margin:0;
      padding:0;
    }
    img a img{
      border:0;
      height:auto;
      outline:none;
      text-decoration:none;
    }
    body #bodyTable #bodyCell{
      height:100%;
      margin:0;
      padding:0;
      width:100%;
    }
    .mcnPreviewText{
      display:none !important;
    }
    #outlook a{
      padding:0;
    }
    img{
      -ms-interpolation-mode:bicubic;
    }
    table{
      mso-table-lspace:0pt;
      mso-table-rspace:0pt;
    }
    .ReadMsgBody{
      width:100%;
    }
    .ExternalClass{
      width:100%;
    }
    p a li td blockquote{
      mso-line-height-rule:exactly;
    }
    a[href^=tel] a[href^=sms]{
      color:inherit;
      cursor:default;
      text-decoration:none;
    }
    p a li td body table blockquote{
      -ms-text-size-adjust:100%;
      -webkit-text-size-adjust:100%;
    }
    .ExternalClass .ExternalClass p .ExternalClass td .ExternalClass div .ExternalClass span .ExternalClass font{
      line-height:100%;
    }
    a[x-apple-data-detectors]{
      color:inherit !important;
      text-decoration:none !important;
      font-size:inherit !important;
      font-family:inherit !important;
      font-weight:inherit !important;
      line-height:inherit !important;
    }
    table[align=left]{
      float:left;
    }
    table[align=right]{
      float:right;
    }
    .templateContainer{
      max-width:600px !important;
    }
    a.mcnButton{
      display:block;
    }
    .mcnImage .mcnRetinaImage{
      vertical-align:bottom;
    }
    .mcnTextContent{
      word-break:break-word;
    }
    .mcnTextContent img{
      height:auto !important;
    }
    .mcnDividerBlock{
      table-layout:fixed !important;
    }
    h1{
      color:#f0471c;
      font-family:Helvetica;
      font-size:40px;
      font-style:normal;
      font-weight:bold;
      line-height:100%;
      letter-spacing:normal;
      text-align:center;
    }
    h2{
      color:#222222;
      font-family:Helvetica;
      font-size:34px;
      font-style:normal;
      font-weight:bold;
      line-height:150%;
      letter-spacing:normal;
      text-align:left;
    }
    h3{
      color:#444444;
      font-family:Helvetica;
      font-size:22px;
      font-style:normal;
      font-weight:bold;
      line-height:150%;
      letter-spacing:normal;
      text-align:left;
    }
    h4{
      color:#949494;
      font-family:Georgia;
      font-size:20px;
      font-style:italic;
      font-weight:normal;
      line-height:125%;
      letter-spacing:normal;
      text-align:center;
    }
    #templateHeader{
      background-color:#49408d;
      background-image:none;
      background-repeat:no-repeat;
      background-position:50% 50%;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:0px;
      padding-bottom:0px;
    }
    .headerContainer{
      background-color:transparent;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:0px;
      padding-bottom:0px;
    }
    .headerContainer .mcnTextContent .headerContainer .mcnTextContent p{
      color:#757575;
      font-family:Helvetica;
      font-size:16px;
      line-height:150%;
      text-align:left;
    }
    .headerContainer .mcnTextContent a .headerContainer .mcnTextContent p a{
      color:#000000;
      font-weight:normal;
      text-decoration:underline;
    }
    #templateBody{
      background-color:#49408d;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:10px none #89d085;
      border-bottom:0;
      padding-top:0px;
      padding-bottom:0px;
    }
    .bodyContainer{
      background-color:transparent;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:0px;
      padding-bottom:0px;
    }
    .bodyContainer .mcnTextContent .bodyContainer .mcnTextContent p{
      color:#fcf2f2;
      font-family:Helvetica;
      font-size:16px;
      line-height:150%;
      text-align:center;
    }
    .bodyContainer .mcnTextContent a .bodyContainer .mcnTextContent p a{
      color:#ffffff;
      font-weight:normal;
      text-decoration:underline;
    }
    #templateFooter{
      background-color:#49408d;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:45px;
      padding-bottom:63px;
    }
    .footerContainer{
      background-color:transparent;
      background-image:none;
      background-repeat:no-repeat;
      background-position:center;
      background-size:cover;
      border-top:0;
      border-bottom:0;
      padding-top:0;
      padding-bottom:0;
    }
    .footerContainer .mcnTextContent .footerContainer .mcnTextContent p{
      color:#e0629a;
      font-family:Helvetica;
      font-size:15px;
      line-height:150%;
      text-align:center;
    }
    .footerContainer .mcnTextContent a .footerContainer .mcnTextContent p a{
      color:#FFFFFF;
      font-weight:normal;
      text-decoration:underline;
    }
  @media only screen and (min-width:768px){
    .templateContainer{
      width:600px !important;
    }

}  @media only screen and (max-width: 480px){
    body table td p a li blockquote{
      -webkit-text-size-adjust:none !important;
    }

}  @media only screen and (max-width: 480px){
    body{
      width:100% !important;
      min-width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnRetinaImage{
      max-width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImage{
      width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnCartContainer .mcnCaptionTopContent .mcnRecContentContainer .mcnCaptionBottomContent .mcnTextContentContainer .mcnBoxedTextContentContainer .mcnImageGroupContentContainer .mcnCaptionLeftTextContentContainer .mcnCaptionRightTextContentContainer .mcnCaptionLeftImageContentContainer .mcnCaptionRightImageContentContainer .mcnImageCardLeftTextContentContainer .mcnImageCardRightTextContentContainer .mcnImageCardLeftImageContentContainer .mcnImageCardRightImageContentContainer{
      max-width:100% !important;
      width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer{
      min-width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageGroupContent{
      padding:9px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnCaptionLeftContentOuter .mcnTextContent .mcnCaptionRightContentOuter .mcnTextContent{
      padding-top:9px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageCardTopImageContent .mcnCaptionBottomContent:last-child .mcnCaptionBottomImageContent .mcnCaptionBlockInner .mcnCaptionTopContent:last-child .mcnTextContent{
      padding-top:18px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageCardBottomImageContent{
      padding-bottom:9px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageGroupBlockInner{
      padding-top:0 !important;
      padding-bottom:0 !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageGroupBlockOuter{
      padding-top:9px !important;
      padding-bottom:9px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnTextContent .mcnBoxedTextContentColumn{
      padding-right:18px !important;
      padding-left:18px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnImageCardLeftImageContent .mcnImageCardRightImageContent{
      padding-right:18px !important;
      padding-bottom:0 !important;
      padding-left:18px !important;
    }

}  @media only screen and (max-width: 480px){
    .mcpreview-image-uploader{
      display:none !important;
      width:100% !important;
    }

}  @media only screen and (max-width: 480px){
    h1{
      font-size:30px !important;
      line-height:125% !important;
    }

}  @media only screen and (max-width: 480px){
    h2{
      font-size:26px !important;
      line-height:125% !important;
    }

}  @media only screen and (max-width: 480px){
    h3{
      font-size:20px !important;
      line-height:150% !important;
    }

}  @media only screen and (max-width: 480px){
    h4{
      font-size:18px !important;
      line-height:150% !important;
    }

}  @media only screen and (max-width: 480px){
    .mcnBoxedTextContentContainer .mcnTextContent .mcnBoxedTextContentContainer .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }

}  @media only screen and (max-width: 480px){
    .headerContainer .mcnTextContent .headerContainer .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }

}  @media only screen and (max-width: 480px){
    .bodyContainer .mcnTextContent .bodyContainer .mcnTextContent p{
      font-size:16px !important;
      line-height:150% !important;
    }

}  @media only screen and (max-width: 480px){
    .footerContainer .mcnTextContent .footerContainer .mcnTextContent p{
      font-size:14px !important;
      line-height:150% !important;
    }

}</style></head>
    <body style="height: 100%;margin: 0;padding: 0;width: 100%;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
        <!--
-->
        <center>
            <table align="center" border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="bodyTable" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
                <tr>
                    <td align="center" valign="top" id="bodyCell" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;height: 100%;margin: 0;padding: 0;width: 100%;">
                        <!-- BEGIN TEMPLATE // -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <tr>
                                <td align="center" valign="top" id="templateHeader" data-template-container="" style="background:#49408d none no-repeat 50% 50%/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #49408d;background-image: none;background-repeat: no-repeat;background-position: 50% 50%;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;">
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                                        <tr>
                                            <td valign="top" class="headerContainer" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnImageBlockOuter">
            <tr>
                <td valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnImageBlockInner">
                    <table align="left" width="100%" border="0" cellpadding="0" cellspacing="0" class="mcnImageContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">
                        <tbody><tr>
                            <td class="mcnImageContent" valign="top" style="padding-right: 9px;padding-left: 9px;padding-top: 0;padding-bottom: 0;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">


                                        <img align="center" alt="" src="https://mcusercontent.com/a6300fadb6d053a90ae600e49/images/74b4d2c7-4ad7-82f8-8f41-b279d552422a.png" width="564" style="max-width: 1500px;padding-bottom: 0;display: inline !important;vertical-align: bottom;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;" class="mcnImage">


                            </td>
                        </tr>
                    </tbody></table>
                </td>
            </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateBody" data-template-container="" style="background:#49408d none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #49408d;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 10px none #89d085;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;">
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                                        <tr>
                                            <td valign="top" class="bodyContainer" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0px;padding-bottom: 0px;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnBoxedTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <!--[if gte mso 9]>
  <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%">
  <![endif]-->
  <tbody class="mcnBoxedTextBlockOuter">
        <tr>
            <td valign="top" class="mcnBoxedTextBlockInner" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

        <!--[if gte mso 9]>
        <td align="center" valign="top" ">
        <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;" class="mcnBoxedTextContentContainer">
                    <tbody><tr>

                        <td style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

                            <table border="0" cellspacing="0" class="mcnTextContentContainer" width="100%" style="min-width: 100% !important;border: 6px solid #F7B4F1;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody><tr>
                                    <td valign="top" class="mcnTextContent" style="padding: 18px;color: #FFFFFF;font-family: Helvetica;font-size: 14px;font-style: normal;font-weight: bold;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                                        ${title}
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
        <!--[if gte mso 9]>
        </td>
        <![endif]-->

        <!--[if gte mso 9]>
                </tr>
                </table>
        <![endif]-->
            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnImageCardBlock" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnImageCardBlockOuter">
        <tr>
            <td class="mcnImageCardBlockInner" valign="top" style="padding-top: 9px;padding-right: 18px;padding-bottom: 9px;padding-left: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

<table align="right" border="0" cellpadding="0" cellspacing="0" class="mcnImageCardBottomContent" width="100%" style="border: 6px solid #F7B4F1;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: right;">
    <tbody><tr>
        <td class="mcnImageCardBottomImageContent" align="left" valign="top" style="padding-top: 0px;padding-right: 0px;padding-bottom: 0;padding-left: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">



            <img alt="" src="https://mcusercontent.com/a6300fadb6d053a90ae600e49/images/8d4bd131-a7d3-d418-91f2-8870248968fc.png" width="552" style="max-width: 1500px;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;vertical-align: bottom;" class="mcnImage">


        </td>
    </tr>
    <tr>
        <td class="mcnTextContent" valign="top" style="padding: 9px 18px;color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;" width="546">
            <p dir="ltr" style="color: #F2F2F2;font-family: Helvetica;font-size: 14px;font-weight: normal;text-align: center;margin: 10px 0;padding: 0;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;line-height: 150%;">
            
            ${styledContent}
        </td>
    </tr>
</tbody></table>




            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnBoxedTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <!--[if gte mso 9]>
  <table align="center" border="0" cellspacing="0" cellpadding="0" width="100%">
  <![endif]-->
  <tbody class="mcnBoxedTextBlockOuter">
        <tr>
            <td valign="top" class="mcnBoxedTextBlockInner" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

        <!--[if gte mso 9]>
        <td align="center" valign="top" ">
        <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;" class="mcnBoxedTextContentContainer">
                    <tbody><tr>

                        <td style="padding-top: 9px;padding-left: 18px;padding-bottom: 9px;padding-right: 18px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">

                            <table border="0" cellspacing="0" class="mcnTextContentContainer" width="100%" style="min-width: 100% !important;border: 6px solid #F7B4F1;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                <tbody><tr>
                                    <td valign="top" class="mcnTextContent" style="padding: 18px;color: #FFFFFF;font-family: Helvetica;font-size: 14px;font-style: normal;font-weight: bold;text-align: center;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;line-height: 150%;">
                                        ${writtenBy}
                                    </td>
                                </tr>
                            </tbody></table>
                        </td>
                    </tr>
                </tbody></table>
        <!--[if gte mso 9]>
        </td>
        <![endif]-->

        <!--[if gte mso 9]>
                </tr>
                </table>
        <![endif]-->
            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                            <tr>
                                <td align="center" valign="top" id="templateFooter" data-template-container="" style="background:#49408d none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: #49408d;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 45px;padding-bottom: 63px;">
                                    <!--[if (gte mso 9)|(IE)]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0" width="600" style="width:600px;">
                                    <tr>
                                    <td align="center" valign="top" width="600" style="width:600px;">
                                    <![endif]-->
                                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" class="templateContainer" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;max-width: 600px !important;">
                                        <tr>
                                            <td valign="top" class="footerContainer" style="background:transparent none no-repeat center/cover;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;background-color: transparent;background-image: none;background-repeat: no-repeat;background-position: center;background-size: cover;border-top: 0;border-bottom: 0;padding-top: 0;padding-bottom: 0;"><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnFollowBlockOuter">
        <tr>
            <td align="center" valign="top" style="padding: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowBlockInner">
                <table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnFollowContentContainer" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody><tr>
        <td align="center" style="padding-left: 9px;padding-right: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="min-width: 100%;border: 1px;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;" class="mcnFollowContent">
                <tbody><tr>
                    <td align="center" valign="top" style="padding-top: 9px;padding-right: 9px;padding-left: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                        <table align="center" border="0" cellpadding="0" cellspacing="0" style="border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                            <tbody><tr>
                                <td align="center" valign="top" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                    <!--[if mso]>
                                    <table align="center" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                    <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=37af30a655&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-facebook-96.png" alt="https://www.facebook.com/dcumps" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=1122b49184&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-twitter-96.png" alt="https://twitter.com/dcumps?lang=en" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=a42e72611b&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-instagram-96.png" alt="https://www.instagram.com/dcumps/?hl=en" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=1e475729f0&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-link-96.png" alt="https://dcumps.ie" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 10px;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=818d7f96f3&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-youtube-96.png" alt="https://www.youtube.com/user/dcumps" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                        <!--[if mso]>
                                        <td align="center" valign="top">
                                        <![endif]-->

                                            <table align="left" border="0" cellpadding="0" cellspacing="0" class="mcnFollowStacked" style="display: inline;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;">

                                                <tbody><tr>
                                                    <td align="center" valign="top" class="mcnFollowIconContent" style="padding-right: 0;padding-bottom: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                                                        <a href="https://dcumps.us2.list-manage.com/track/click?u=a6300fadb6d053a90ae600e49&id=af3fe95a5c&e=5669f48b" target="_blank" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;"><img src="https://cdn-images.mailchimp.com/icons/social-block-v2/outline-color-link-96.png" alt="https://www.tiktok.com/@dcumps" class="mcnFollowBlockIcon" width="48" style="width: 48px;max-width: 48px;display: block;border: 0;height: auto;outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;"></a>
                                                    </td>
                                                </tr>


                                            </tbody></table>


                                        <!--[if mso]>
                                        </td>
                                        <![endif]-->

                                    <!--[if mso]>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                        </tbody></table>
                    </td>
                </tr>
            </tbody></table>
        </td>
    </tr>
</tbody></table>

            </td>
        </tr>
    </tbody>
</table><table border="0" cellpadding="0" cellspacing="0" width="100%" class="mcnTextBlock" style="min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
    <tbody class="mcnTextBlockOuter">
        <tr>
            <td valign="top" class="mcnTextBlockInner" style="padding-top: 9px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;">
                <!--[if mso]>
        <table align="left" border="0" cellspacing="0" cellpadding="0" width="100%" style="width:100%;">
        <tr>
        <![endif]-->
      
        <!--[if mso]>
        <td valign="top" width="600" style="width:600px;">
        <![endif]-->
                <table align="left" border="0" cellpadding="0" cellspacing="0" style="max-width: 100%;min-width: 100%;border-collapse: collapse;mso-table-lspace: 0pt;mso-table-rspace: 0pt;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;float: left;" width="100%" class="mcnTextContentContainer">
                    <tbody><tr>

                        <td valign="top" class="mcnTextContent" style="padding: 0px 18px 9px;color: #FFFFFF;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;word-break: break-word;font-family: Helvetica;font-size: 15px;line-height: 150%;text-align: center;">

                            <span style="color:#FFFFFF"><em>Copyright © *|2025|* *|DCUMPS|*  All rights reserved.</em><br>
<br>
Want to change how you receive these emails?<br>
You can </span><a href="https://dcumps.us2.list-manage.com/unsubscribe?u=a6300fadb6d053a90ae600e49&id=d79a4aa32e&t=b&e=5669f48b&c=b15773cc2e" style="mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%;color: #FFFFFF;font-weight: normal;text-decoration: underline;"><span style="color:#FFFFFF">unsubscribe from this list</span></a><span style="color:#FFFFFF">.</span><br>
&nbsp;
<br>
This email was sent to <a href="mailto:jake.farrell88@mail.dcu.ie">jake.farrell88@mail.dcu.ie</a>
                        </td>
                    </tr>
                </tbody></table>
        <!--[if mso]>
        </td>
        <![endif]-->

        <!--[if mso]>
        </tr>
        </table>
        <![endif]-->
            </td>
        </tr>
    </tbody>
</table></td>
                                        </tr>
                                    </table>
                                    <!--[if (gte mso 9)|(IE)]>
                                    </td>
                                    </tr>
                                    </table>
                                    <![endif]-->
                                </td>
                            </tr>
                        </table>
                        <!-- // END TEMPLATE -->
                    </td>
                </tr>
            </table>
        </center>
</body>
</html>
    `;
  }

  if (template === 'redbrick') {
    const styledContent = `
    <div class="user-content">
      ${marked.parse(markdown || '')}
    </div>
  `;

    return `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<title></title>
	<!--[if !mso]> -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<!--<![endif]-->
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<style type="text/css">
          .user-content img {
          width: 300px;
          height: 300px;
          object-fit: cover;
          border-radius: 8px;
          display: block;
          margin: 16px auto;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }
		#outlook a { padding: 0; }  .ReadMsgBody { width: 100%; }  .ExternalClass { width: 100%; }  .ExternalClass * { line-height:100%; }  body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }  table, td { border-collapse:collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }  img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }  p { display: block; margin: 13px 0; }
	</style>
	<!--[if !mso]><!-->
	<style type="text/css">
		@media only screen and (max-width:480px) {    @-ms-viewport { width:320px; }    @viewport { width:320px; }  }
	</style>
	<!--<![endif]-->
	<!--[if mso]><xml>  <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>  </o:OfficeDocumentSettings></xml><![endif]-->
	<!--[if lte mso 11]><style type="text/css">  .outlook-group-fix {    width:100% !important;  }</style><![endif]-->
	<!--[if !mso]><!-->
	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,500,700" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700" rel="stylesheet" type="text/css">
	<style type="text/css">
		@import url(https://fonts.googleapis.com/css?family=Lato:300,400,500,700);  @import url(https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700);
	</style>
	<!--<![endif]-->
	<style type="text/css">
		@media only screen and (min-width:480px) {    .mj-column-per-100 { width:100%!important; }.mj-column-per-50 { width:50%!important; }.mj-column-per-40 { width:40%!important; }.mj-column-per-60 { width:60%!important; }  }
	</style>
</head>

<body style="background: #313131;">
	<div class="mj-container" style="background-color:#313131;">
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#FFFFFF;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#FFFFFF;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center">
												<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
													<tbody>
														<tr>
															<td style="width:234px;"><img alt="" title="" height="auto" src="https://i.imgur.com/PocWROc.png" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;"
																	width="234"></td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:15px 0px 15px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="center">
												<div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:center;">
<h1 style="font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 32px; color: #FFFFFF; line-height: 100%;">${title}</h1>
												</div>
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;">
							<!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]-->
							<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left">
												<div style="cursor:auto;color:#E6E6E6;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:12px;line-height:1.5;text-align:left;">
<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">

${styledContent}

</span></p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left">
												<div style="cursor:auto;color:#C3C3C3;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;">
<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;"></span></p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
  		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:15px 0px 15px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="center">
												<div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:center;">
													<h1 style="font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 32px; color: #FFFFFF; line-height: 100%;">Upcoming Events</h1>
												</div>
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->

<!-- 
////////////////////////
      EVENTS START
////////////////////////
 -->
    <!-- Event 1 -->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<!-- Event -->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]-->
		

								<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding: 20px;" align="left"> <div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:left;"> <h3 style="font-family: Lato, 'Tahoma', sans-serif; font-size: 20px; color: #FFFFFF; line-height: 100%;">
									Event 1 Title</h3><p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">Event 1 Description</span></p> </div> </td> </tr> <tr> <td style="word-wrap:break-word;font-size:0px;padding:0px 19px 0px 20px;" align="left"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="left" border="0"> <tbody> <tr> <td style="border:none;border-radius:none;color:#FFFFFF;cursor:auto;padding:10px 30px;" align="center" valign="middle" bgcolor="#A60C04"><a href='https://dcuclubsandsocs.ie/society/redbrick' style="text-decoration: none; background: #A60C04; color: #FFFFFF; font-family: Lato, Tahoma, sans-serif; font-size: 15px; font-weight: normal; line-height: 120%; text-transform: none; margin: 0px;" target="_blank">View Event</a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--> <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding:20px 20px 0px 11px;" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"> <tbody> <tr> <td style="width:269px;"><img alt="" title="" height="auto" src="https://i.imgur.com/66xGCcg.gif" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;"width="269"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
									


						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!-- Event -->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]-->
		

								<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding: 20px;" align="left"> <div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:left;"> <h3 style="font-family: Lato, 'Tahoma', sans-serif; font-size: 20px; color: #FFFFFF; line-height: 100%;">
									Event 2 Title</h3><p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">Event 2 Description</span></p> </div> </td> </tr> <tr> <td style="word-wrap:break-word;font-size:0px;padding:0px 19px 0px 20px;" align="left"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="left" border="0"> <tbody> <tr> <td style="border:none;border-radius:none;color:#FFFFFF;cursor:auto;padding:10px 30px;" align="center" valign="middle" bgcolor="#A60C04"><a href='https://dcuclubsandsocs.ie/society/redbrick' style="text-decoration: none; background: #A60C04; color: #FFFFFF; font-family: Lato, Tahoma, sans-serif; font-size: 15px; font-weight: normal; line-height: 120%; text-transform: none; margin: 0px;" target="_blank">View Event</a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--> <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding:20px 20px 0px 11px;" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"> <tbody> <tr> <td style="width:269px;"><img alt="" title="" height="auto" src="https://i.imgur.com/66xGCcg.gif" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;"width="269"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
									


						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!-- Event -->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]-->
		

								<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding: 20px;" align="left"> <div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:left;"> <h3 style="font-family: Lato, 'Tahoma', sans-serif; font-size: 20px; color: #FFFFFF; line-height: 100%;">
									Event 3 Title</h3><p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">Event 3 Description</span></p> </div> </td> </tr> <tr> <td style="word-wrap:break-word;font-size:0px;padding:0px 19px 0px 20px;" align="left"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="left" border="0"> <tbody> <tr> <td style="border:none;border-radius:none;color:#FFFFFF;cursor:auto;padding:10px 30px;" align="center" valign="middle" bgcolor="#A60C04"><a href='https://dcuclubsandsocs.ie/society/redbrick' style="text-decoration: none; background: #A60C04; color: #FFFFFF; font-family: Lato, Tahoma, sans-serif; font-size: 15px; font-weight: normal; line-height: 120%; text-transform: none; margin: 0px;" target="_blank">View Event</a></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div><!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]--> <div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;"> <table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0"> <tbody> <tr> <td style="word-wrap:break-word;font-size:0px;padding:20px 20px 0px 11px;" align="center"> <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0"> <tbody> <tr> <td style="width:269px;"><img alt="" title="" height="auto" src="https://i.imgur.com/66xGCcg.gif" style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;"width="269"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div> <!--[if mso | IE]>      </td></tr></table>      <![endif]-->
									


						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		

<!-- 
////////////////////////
      EVENTS END
////////////////////////
 -->



		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:15px 0px 15px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="center">
												<div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:center;">
													<h1 style="font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 32px; color: #FFFFFF; line-height: 100%;">Hackerclub</h1>
												</div>
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:10px;padding-bottom:10px;padding-right:10px;padding-left:10px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #E9E9E9; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #E9E9E9;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:9px 0px 9px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:240px;">      <![endif]-->
							<div class="mj-column-per-40 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="center">
												<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;border-spacing:0px;" align="center" border="0">
													<tbody>
														<tr>
<td style="width:200px;"><img alt="Hackerclub" title="" height="auto" src='https://i.imgur.com/66xGCcg.gif' style="border:none;border-radius:0px;display:block;font-size:13px;outline:none;text-decoration:none;width:100%;height:auto;margin:40px 0;" width="200"></td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td><td style="vertical-align:top;width:360px;">      <![endif]-->
							<div class="mj-column-per-60 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:15px 15px 15px 15px;" align="left">
												<div style="cursor:auto;color:#C3C3C3;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:left;">
<h3 style="font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 20px; color: #FFFFFF; line-height: 100%;">Hackerclub Title</h3>
<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">Hackerclub Description</span></p>
												</div>
											</td>
										</tr>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 15px 0px 15px;" align="left">
												<table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:separate;" align="left" border="0">
													<tbody>
														<tr>
<td style="border:none;border-radius:none;color:#FFFFFF;cursor:auto;padding:10px 30px;" align="center" valign="middle" bgcolor="#A60C04"><a href='' style="text-decoration: none; background: #A60C04; color: #FFFFFF; font-family: Lato, Tahoma, sans-serif; font-size: 15px; font-weight: normal; line-height: 120%; text-transform: none; margin: 0px;" target="_blank">View Event</a></td>
														</tr>
													</tbody>
												</table>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>     
		<table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:10px;padding-right:22px;padding-left:25px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #ACACAC; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:300px;">      <![endif]-->
							<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 0px 0px 0px;" align="center">
												<div style="cursor:auto;color:#FFFFFF;font-family:Ubuntu, Helvetica, Arial, sans-serif;font-size:11px;line-height:1.5;text-align:center;">
<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;"><span style="font-size:14px;">${writtenBy}</span></p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td><td style="vertical-align:top;width:300px;">      <![endif]-->
							<div class="mj-column-per-50 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:12px 12px 12px 12px;" align="center">
												<div>
												<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="undefined"><tr><td>      <![endif]-->
													<table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
														<tbody>
															<tr>
																<td style="padding:4px;vertical-align:middle;">
																	<table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0">
																		<tbody>
																			<tr>
																				<td style="vertical-align:middle;width:35px;height:35px;"><a href="https://discord.redbrick.dcu.ie/" style="color: #FF2B2B;"><img alt="discord" height="35" src="https://i.imgur.com/BzmUEzi.png" style="display:block;border-radius:3px;" width="35"></a></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
															  <td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://discord.redbrick.dcu.ie/" style="text-decoration: none; text-align: left; display: block; color: #333333; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; border-radius: 3px;"></a></td>
														  </tr>
														</tbody>
													</table>
													<!--[if mso | IE]>      </td><td>      <![endif]-->
													<table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
														<tbody>
															<tr>
																<td style="padding:4px;vertical-align:middle;">
																	<table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0">
																		<tbody>
																			<tr>
																				<td style="vertical-align:middle;width:35px;height:35px;"><a href="https://facebook.redbrick.dcu.ie/" style="color: #FF2B2B;"><img alt="facebook" height="35" src="https://i.imgur.com/jtm5DxG.png" style="display:block;border-radius:3px;" width="35"></a></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://facebook.redbrick.dcu.ie/" style="text-decoration: none; text-align: left; display: block; color: #333333; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; border-radius: 3px;"></a></td>
															</tr>
														</tbody>
													</table>
													<!--[if mso | IE]>      </td><td>      <![endif]-->
													<table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
														<tbody>
															<tr>
																<td style="padding:4px;vertical-align:middle;">
																	<table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0">
																		<tbody>
																			<tr>
																				<td style="vertical-align:middle;width:35px;height:35px;"><a href="https://twitter.redbrick.dcu.ie/" style="color: #FF2B2B;"><img alt="twitter" height="35" src="https://i.imgur.com/RsGULUW.png" style="display:block;border-radius:3px;" width="35"></a></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://twitter.redbrick.dcu.ie/" style="text-decoration: none; text-align: left; display: block; color: #333333; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; border-radius: 3px;"></a></td>
															</tr>
														</tbody>
													</table>
													<!--[if mso | IE]>      </td><td>      <![endif]-->
													<table role="presentation" cellpadding="0" cellspacing="0" style="float:none;display:inline-table;" align="center" border="0">
														<tbody>
															<tr>
																<td style="padding:4px;vertical-align:middle;">
																	<table role="presentation" cellpadding="0" cellspacing="0" style="background:none;border-radius:3px;width:35px;" border="0">
																		<tbody>
																			<tr>
																				<td style="vertical-align:middle;width:35px;height:35px;"><a href="https://instagram.redbrick.dcu.ie/" style="color: #FF2B2B;"><img alt="instagram" height="35" src="https://i.imgur.com/W2XXwsr.png" style="display:block;border-radius:3px;" width="35"></a></td>
																			</tr>
																		</tbody>
																	</table>
																</td>
																<td style="padding:4px 4px 4px 0;vertical-align:middle;"><a href="https://instagram.redbrick.dcu.ie/" style="text-decoration: none; text-align: left; display: block; color: #333333; font-family: Ubuntu, Helvetica, Arial, sans-serif; font-size: 13px; line-height: 22px; border-radius: 3px;"></a></td>
															</tr>
														</tbody>
													</table>
													<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:0px 0px 0px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:10px 25px;padding-top:20px;padding-bottom:20px;padding-right:22px;padding-left:22px;">
												<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 1px; margin: 0px auto; border-top: 1px solid #ACACAC; width: 100%;"></p>
												<!--[if mso | IE]><table role="presentation" align="center" border="0" cellpadding="0" cellspacing="0" style="font-size:1px;margin:0px auto;border-top:1px solid #ACACAC;width:100%;" width="600"><tr><td style="height:0;line-height:0;"> </td></tr></table><![endif]-->
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
		<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" align="center" style="width:600px;">        <tr>          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">      <![endif]-->
		<div style="margin:0px auto;max-width:600px;background:#0F0F0F;">
			<table role="presentation" cellpadding="0" cellspacing="0" style="font-size:0px;width:100%;background:#0F0F0F;" align="center" border="0">
				<tbody>
					<tr>
						<td style="text-align:center;vertical-align:top;direction:ltr;font-size:0px;padding:10px 0px 10px 0px;">
							<!--[if mso | IE]>      <table role="presentation" border="0" cellpadding="0" cellspacing="0">        <tr>          <td style="vertical-align:top;width:600px;">      <![endif]-->
							<div class="mj-column-per-100 outlook-group-fix" style="vertical-align:top;display:inline-block;direction:ltr;font-size:13px;text-align:left;width:100%;">
								<table role="presentation" cellpadding="0" cellspacing="0" style="vertical-align:top;" width="100%" border="0">
									<tbody>
										<tr>
											<td style="word-wrap:break-word;font-size:0px;padding:0px 20px 0px 20px;" align="left">
												<div style="cursor:auto;color:#C3C3C3;font-family:Lato, Tahoma, sans-serif;font-size:12px;line-height:22px;text-align:left;">
													<p style="color: #C3C3C3; font-family: Lato, &apos;Tahoma&apos;, sans-serif; font-size: 12px;">The announce-redbrick list is used to inform Redbrick users of important system/society events. If you have any questions, please email&#xA0;<a href="/cdn-cgi/l/email-protection#fe9d919393978a8a9b9bbe8c9b9a9c8c979d95d09a9d8bd0979b" target="_blank" style="color: #FF2B2B;"><span class="__cf_email__" data-cfemail="c0a3afadada9b4b4a5a580b2a5a4a2b2a9a3abeea4a3b5eea9a5">[email&#160;protected]</span></a><br>To unsubscribe, please contact&#xA0;<a href="/cdn-cgi/l/email-protection#9bfafff6f2f5e8dbe9fefff9e9f2f8f0b5fff8eeb5f2fe" target="_blank" style="color: #FF2B2B;"><span class="__cf_email__" data-cfemail="7d1c191014130e3d0f18191f0f141e1653191e08531418">[email&#160;protected]</span></a>&#xA0;with
														your Redbrick username.&#xA0;</p>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<!--[if mso | IE]>      </td></tr></table>      <![endif]-->
	</div>
<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script><script defer src="https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015" integrity="sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==" data-cf-beacon='{"rayId":"93719c94c9222199","version":"2025.4.0-1-g37f21b1","r":1,"token":"75aaa95936f14fd198e85b2121259184","serverTiming":{"name":{"cfExtPri":true,"cfL4":true,"cfSpeedBrain":true,"cfCacheStatus":true}}}' crossorigin="anonymous"></script>
</body>

</html>
`


  }
};

export default generateNewsletterHTML;