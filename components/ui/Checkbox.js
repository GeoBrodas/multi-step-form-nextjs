function Checkbox({ number, agreement, data, setData, name, agreementNumber }) {
  return (
    <div className="flex items-center space-x-4">
      <input
        type="checkbox"
        id={`checkbox${number}`}
        name={name}
        value={name}
        checked={agreement}
        onChange={(e) =>
          setData({ ...data, [agreementNumber]: e.target.checked })
        }
      />
      <label>{name}</label>
    </div>
  );
}

export default Checkbox;
