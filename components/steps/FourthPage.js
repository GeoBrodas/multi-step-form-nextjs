import { Fade } from 'react-reveal';
import Checkbox from '../ui/Checkbox';

function FourthPage({ data, setData }) {
  return (
    <Fade>
      {/* Input select fields for a legal checklist */}
      <div className="flex py-4 w-72 flex-col space-y-4">
        <Checkbox
          paragraph="I have read and agree to the terms and conditions."
          data={data}
          number="1"
          name="Privacy Policy"
          agreement={data.agreement1}
          agreementNumber="agreement1"
          setData={setData}
        />
        <Checkbox
          paragraph="I have read and agree to the terms and conditions."
          data={data}
          number="2"
          name="Terms of Service"
          agreement={data.agreement2}
          agreementNumber="agreement2"
          setData={setData}
        />
        <Checkbox
          paragraph="I have read and agree to the terms and conditions."
          data={data}
          number="3"
          name="Terms of Use"
          agreement={data.agreement3}
          agreementNumber="agreement3"
          setData={setData}
        />
        <Checkbox
          paragraph="I have read and agree to the terms and conditions."
          data={data}
          number="4"
          name="Miscellaneous"
          agreement={data.agreement4}
          agreementNumber="agreement4"
          setData={setData}
        />
      </div>
    </Fade>
  );
}

export default FourthPage;
