function Checkbox({
  number,
  paragraph,
  agreement,
  data,
  setData,
  name,
  agreementNumber,
}) {
  return (
    <div className="flex flex-col text-base italic">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          id={`checkbox${number}`}
          name={name}
          value={name}
          className="form-checkbox h-4 w-4"
          checked={agreement}
          onChange={(e) =>
            setData({ ...data, [agreementNumber]: e.target.checked })
          }
        />
        <label className="text-gray-500 text-lg not-italic">{name}</label>
      </div>
      {paragraph}
    </div>
  );
}

export default Checkbox;
