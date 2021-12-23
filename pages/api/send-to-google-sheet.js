import { google } from 'googleapis';

async function handler(req, res) {
  if (req.method === 'POST') {
    // extract request body from request
    const {
      name,
      address,
      zipcode,
      city,
      email,
      phone,
      message,
      agreement1,
      agreement2,
      agreement3,
      agreement4,
    } = req.body;

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
      range: 'Sheet1!A2:K',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            name,
            address,
            email,
            zipcode,
            city,
            phone,
            message,
            agreement1,
            agreement2,
            agreement3,
            agreement4,
          ],
        ],
      },
    });

    return res.status(201).json({
      data: response.data,
    });
  }
}

export default handler;
