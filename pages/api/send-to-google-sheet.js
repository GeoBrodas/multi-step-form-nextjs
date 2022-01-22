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
      image1,
      image2,
      image3,
      image4,
      isPaid,
      s3imageUrl,
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

    // check if email is already available
    //   get all rows from sheet
    const getRowData = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Sheet1!A2:K',
    });

    const rowData = getRowData.data.values;

    //   check if email is already available
    const emailExists = rowData?.some((row) => row[2] === email);

    //   if email is already available, return with error response
    if (emailExists) {
      return res.status(400).json({
        message:
          'Email already exists, your submission will be considered invalid',
      });
    }

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
            isPaid,
            s3imageUrl,
            image1,
            image2,
            image3,
            image4,
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
