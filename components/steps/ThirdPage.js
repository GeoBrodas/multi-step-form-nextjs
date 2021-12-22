import { Fade } from 'react-reveal';

function ThirdPage({ data, setData }) {
  return (
    <Fade>
      {/* Input fields for name, address, zipcode, city */}
      <div className="flex py-4 w-72 flex-col space-y-4">
        <input
          className="input-style-base"
          placeholder="Name"
          type="text"
          value={data.name}
          onChange={(event) => setData({ ...data, name: event.target.value })}
        />
        <input
          className="input-style-base"
          placeholder="Address"
          type="text"
          value={data.address}
          onChange={(event) =>
            setData({ ...data, address: event.target.value })
          }
        />
        <div className="flex space-x-4 items-center">
          <input
            className="input-style-base"
            placeholder="Zipcode"
            type="text"
            value={data.zipcode}
            onChange={(event) =>
              setData({ ...data, zipcode: event.target.value })
            }
          />
          <input
            className="input-style-base"
            placeholder="City"
            type="text"
            value={data.city}
            onChange={(event) => setData({ ...data, city: event.target.value })}
          />
        </div>
      </div>
    </Fade>
  );
}

export default ThirdPage;
