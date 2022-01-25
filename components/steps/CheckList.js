import { ImLocation } from 'react-icons/im';
import ListItem from '../ui/ListItem';

function CheckList({ data }) {
  return (
    <div className="my-6 w-96">
      <h3 className="text-xl md:text-3xl my-4 underline decoration-orange-400 font-medium">
        Confirm your order!
      </h3>
      <ol className="list-decimal my-4">
        <div className="flex italic justify-between md:text-lg font-light">
          <a>Item</a>
          <a>Quantity</a>
        </div>

        <li>
          <ListItem title="Introduction to Web3" quantity="1" />
        </li>
        <li>
          <ListItem title="Handset for recording" quantity="1" />
        </li>
        <li>
          <ListItem title="Sticker Pack" quantity="2" />
        </li>
      </ol>

      <hr className="my-2" />

      <div className="bg-blue-50 p-4 rounded-md">
        <p className="font-medium flex items-center text-lg">
          Delivery Location <ImLocation className="mr-8" />
        </p>

        <p className="text-lg">To, {data.name}</p>
        <p>{data.address}</p>
        <p>
          {data.city} - {data.zipcode}
        </p>
        <p>{data.phone}</p>
        <p>{data.email}</p>
      </div>
    </div>
  );
}

export default CheckList;
