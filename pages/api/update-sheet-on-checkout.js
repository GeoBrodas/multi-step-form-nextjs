import { google } from 'googleapis';

async function handler(req, res) {
  // extract email from req.body
  const { data } = req.body;

  //   returns 500 if no email found
  const { email } = data.object.customer_details;

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      client_id: process.env.CLIENT_ID,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    },
    scopes: [
      'https://www.googleapis.com/auth/drive',
      'https://www.googleapis.com/auth/drive.file',
      'https://www.googleapis.com/auth/spreadsheets',
    ],
  });

  const sheets = google.sheets({
    auth,
    version: 'v4',
  });

  //   get all rows from sheet
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Sheet1!A2:K',
  });

  const rowData = response.data.values;

  // return the index of the row that matches the email address
  const index = rowData.findIndex(
    (row) => row[2] === data.object.customer_details.email
  );

  console.log(index);

  // //   if no index found , return with error response
  // if (index < 0 || !index) {
  //   return res.status(400).send('No such email found');
  // }

  //   console.log(index + 2);
  const actualIndex = index + 2;

  //   make a update request to update the row with the index
  const updatedResponse = await sheets.spreadsheets.values.update(
    {
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: `Sheet1!L${actualIndex}`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [['true']],
      },
    },
    (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send({ message: 'OK', index, response });
        console.log(response);
      }
    }
  );

  res.status(200).send({ message: 'OK', index, updatedResponse });
}

export default handler;
