import PhoneInput from 'react-phone-number-input';
import { Fade } from 'react-reveal';

function SecondPage({ data, setData }) {
  return (
    <Fade>
      <div className="flex py-4 w-72 flex-col space-y-4">
        <input
          className="input-style-base"
          placeholder="Email"
          type="email"
          value={data.email}
          onInvalid={(e) => e.target.setCustomValidity('Invalid email')}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          onChange={(event) => setData({ ...data, email: event.target.value })}
        />
        <div className="flex items-center">
          <form>
            <PhoneInput
              className="flex"
              placeholder="Enter phone number"
              value={data.phone}
              onChange={(value) => setData({ ...data, phone: value })}
            />
          </form>
        </div>
      </div>
    </Fade>
  );
}

export default SecondPage;
