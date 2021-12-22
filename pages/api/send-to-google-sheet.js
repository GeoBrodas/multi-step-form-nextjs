import { google } from 'googleapis';

async function handler(req, res) {
  // extract request body from request
  const body = req.body;
  console.log(body);

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

  const response = await sheets.spreadsheets.values.append({
    spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
    range: 'Sheet1!A4:C',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [
        ['01/01/2020', 'Bob Smith', '$100'],
        ['02/02/2020', 'Jane Doe', '$200'],
      ],
    },
  });

  return res.status(201).json({
    data: response.data,
  });
}

export default handler;
