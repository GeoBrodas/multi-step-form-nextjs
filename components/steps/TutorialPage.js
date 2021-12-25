import Wrapper from 'Layouts/Wrapper';
import ReactPlayer from 'react-player';
import BackToHome from '../ui/BackToHome';

function TutorialPage() {
  return (
    <div className="grid md:h-screen place-content-center">
      <div className="mx-auto my-10 w-3/4 flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
        <div className="flex flex-col md:w-1/2 space-y-2">
          <p className="text-3xl font-bold underline decoration-pink-500 gradient-text">
            How to go about?
          </p>
          {/* portion containing description */}
          <div className="">
            <p className="text-lg font-medium">
              incididunt ut labore, lorem ipsum dolor sit amet, consectetur adip
              lorem, sed do eiusmod tempor incididunt ut labore, lorem ipsum
              dolor sit amet, consectetur adip lorem, sed do eiusmod tempor
              incididunt ut labore, lorem ipsum dolor sit amet, consectetur adip
              lorem, sed do eiusmod tempor incididunt ut labore, lorem ipsum
              dolor sit amet, consectetur adip lorem, sed do eiusmod tempor
              incididunt ut labore, lorem ipsum dolor sit amet, consectetur adip
              lorem, sed do eiusmod tempor incididunt ut labore, lorem ipsum
              dolor sit amet, consectetur
            </p>
          </div>
        </div>

        {/* React-player */}
        <div className="sm:w-full md:w-1/2">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=W19fHXDaUw4"
            width="100%"
            height="100%"
          />
        </div>
      </div>

      <BackToHome />
    </div>
  );
}

export default TutorialPage;
