function SMInput(props) 
{
  const { label, type, value, onChange } = props;
  return (
    <input
      style={{ padding: "10px" }}
      placeholder={label}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
}

export default SMInput