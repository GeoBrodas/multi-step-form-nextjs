import Image from 'next/image';
import { Fragment } from 'react';

function ImagesSelectPage({ data, setData }) {
  return (
    <Fragment>
      <p className="pt-2 text-lg font-medium">
        Select one or more images from the following-
      </p>
      <div className="grid grid-cols-2 gap-4 py-4">
        <div className="flex">
          <input
            className="mr-2"
            type="checkbox"
            id="img1"
            name="image1"
            value=""
            checked={data.image1}
            onChange={(e) => setData({ ...data, image1: e.target.checked })}
          />
          <Image
            alt="image1"
            src="https://images.unsplash.com/photo-1642364706722-2ad555e54cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="190"
            height="110"
          />
        </div>
        <div className="flex">
          <input
            className="mr-2"
            type="checkbox"
            id="img2"
            name="image2"
            value=""
            checked={data.image2}
            onChange={(e) => setData({ ...data, image2: e.target.checked })}
          />
          <Image
            alt="image2"
            src="https://images.unsplash.com/photo-1642364706722-2ad555e54cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="190"
            height="110"
          />
        </div>
        <div className="flex">
          <input
            className="mr-2"
            type="checkbox"
            id="img3"
            name="image3"
            value=""
            checked={data.image3}
            onChange={(e) => setData({ ...data, image3: e.target.checked })}
          />
          <Image
            alt="image3"
            src="https://images.unsplash.com/photo-1642364706722-2ad555e54cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="190"
            height="110"
          />
        </div>
        <div className="flex">
          <input
            className="mr-2"
            type="checkbox"
            id="img4"
            name="image4"
            value=""
            checked={data.image4}
            onChange={(e) => setData({ ...data, image4: e.target.checked })}
          />
          <Image
            alt="image4"
            src="https://images.unsplash.com/photo-1642364706722-2ad555e54cd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViM3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
            width="190"
            height="110"
          />
        </div>
      </div>
    </Fragment>
  );
}

export default ImagesSelectPage;
