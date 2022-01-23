import Image from 'next/image';

function ScatteredImagesPage() {
  return (
    <div className="w-12/12 my-10">
      <p className="my-4 font-medium text-lg text-center">
        This is how our product looks like
      </p>
      <div className="flex w-full space-x-4 justify-center">
        <div>
          <Image
            alt="images"
            layout="fixed"
            width="300"
            height="160"
            src="https://images.unsplash.com/photo-1639322537333-c7f3894fe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYjN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <Image
            alt="images"
            layout="fixed"
            width="300"
            height="160"
            src="https://images.unsplash.com/photo-1639322537333-c7f3894fe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYjN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
        <div>
          <Image
            alt="images"
            layout="fixed"
            width="300"
            height="160"
            src="https://images.unsplash.com/photo-1639322537333-c7f3894fe45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHdlYjN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
          />
        </div>
      </div>
    </div>
  );
}

export default ScatteredImagesPage;
