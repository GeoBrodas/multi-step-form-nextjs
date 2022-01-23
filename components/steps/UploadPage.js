import AWS from 'aws-sdk';
import { useMemo, useState } from 'react';
import { useDropzone } from 'react-dropzone';

// styles for drop-zone
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'gray',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out',
};

const focusedStyle = {
  borderColor: '#2196f3',
};

const acceptStyle = {
  borderColor: '#00e676',
};

const rejectStyle = {
  borderColor: '#ff1744',
};

const S3_BUCKET = process.env.NEXT_PUBLIC_BUCKET_NAME;
const REGION = process.env.NEXT_PUBLIC_BUCKET_REGION;

AWS.config.update({
  accessKeyId: process.env.NEXT_PUBLIC_BUCKET_ACCESS_KEY,
  secretAccessKey: process.env.NEXT_PUBLIC_BUCKET_SECRET_KEY,
});

const myBucket = new AWS.S3({
  params: {
    Bucket: S3_BUCKET,
  },
  region: REGION,
  signatureVersion: 'v4',
});

function UploadPage({ data, setData }) {
  const [progress, setProgress] = useState(0);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    acceptedFiles,
  } = useDropzone({ onDrop: (acceptedFiles) => uploadHandler(acceptedFiles) });

  const style = useMemo(
    () => ({
      ...baseStyle,
      ...(isFocused ? focusedStyle : {}),
      ...(isDragAccept ? acceptStyle : {}),
      ...(isDragReject ? rejectStyle : {}),
    }),
    [isFocused, isDragAccept, isDragReject]
  );

  function uploadHandler(file) {
    const fileData = file[0];
    console.log(fileData);

    const params = {
      ACL: 'public-read',
      Body: fileData,
      Bucket: S3_BUCKET,
      Key: fileData.name,
    };

    myBucket
      .putObject(params)
      .on('httpUploadProgress', (evt) => {
        setProgress(Math.round((evt.loaded / evt.total) * 100));
      })
      .on('success', () => {
        setData({
          ...data,
          s3imageUrl: `https://${S3_BUCKET}.s3.${REGION}.amazonaws.com/${fileData.name}`,
        });
      })
      .send((err) => {
        if (err) console.log(err);
      });
  }

  return (
    <div className="p-4 flex flex-col space-y-4">
      <p className="font-bold text-xl">Upload Required documents</p>

      <section className="cursor-pointer">
        <div {...getRootProps({ style })}>
          <input {...getInputProps()} />
          <p>Drag and drop some files here, or click to select files</p>
        </div>
      </section>

      {progress > 0 && <p className="text-center">{progress}%</p>}
      {acceptedFiles.map((file) => (
        <p className="text-center" key={file.path}>
          Selected File - {file.name}
        </p>
      ))}
    </div>
  );
}

export default UploadPage;
