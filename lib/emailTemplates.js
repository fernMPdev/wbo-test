export const htmlEmail = ({ name, surnames, email, phone, message, github, linkedin }) => `
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Nuevo mensaje - Whitebox Office</title>
</head>
<body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f3f3f3;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#f3f3f3">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="margin:20px 0;">
          <!-- HEADER -->
          <tr>
            <td align="center" style="padding:25px;">
              <!-- Aquí va tu SVG -->
              <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                   x="0px" y="0px" viewBox="0 0 231.9 137.3" style="max-width:250px; width:100%; height:auto;">
                <style type="text/css">
                  .st0{fill:#EEE648;}
                  .st1{fill:#000;}
                  .st2{fill-rule:evenodd;clip-rule:evenodd;fill:#000;}
                </style>
                <!-- ... todo el contenido de tu SVG ... -->
              </svg>
            </td>
          </tr>
          <!-- CONTENT -->
          <tr>
            <td style="padding:25px; color:#555555;">
              <p>Has recibido un nuevo mensaje a través del formulario de contacto:</p>
              <table width="100%" cellpadding="5" cellspacing="0" border="0">
                <tr>
                  <td style="font-weight:bold; width:150px;">Nombre:</td>
                  <td>${name}</td>
                </tr>
                ${
                  surnames
                    ? `<tr>
                         <td style="font-weight:bold;">Apellidos:</td>
                         <td>${surnames}</td>
                       </tr>`
                    : ''
                }
                <tr>
                  <td style="font-weight:bold;">Email:</td>
                  <td>${email}</td>
                </tr>
                <tr>
                  <td style="font-weight:bold;">Teléfono:</td>
                  <td>${phone}</td>
                </tr>
                ${
                  github
                    ? `<tr>
                         <td style="font-weight:bold;">GitHub:</td>
                         <td><a href="${github}" target="_blank">${github}</a></td>
                       </tr>`
                    : ''
                }
                ${
                  linkedin
                    ? `<tr>
                         <td style="font-weight:bold;">LinkedIn:</td>
                         <td><a href="${linkedin}" target="_blank">${linkedin}</a></td>
                       </tr>`
                    : ''
                }
                <tr>
                  <td style="font-weight:bold;">Mensaje:</td>
                  <td>${message}</td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- FOOTER -->
          <tr>
            <td align="center" style="padding:20px; font-size:12px; color:#777777; border-top:1px solid #d9dfe3;">
              © 2025 Whitebox Office. Todos los derechos reservados.
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
