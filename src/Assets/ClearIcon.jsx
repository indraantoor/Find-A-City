const IconStyle = {
  fontSize: "24px",
  padding: "4px",
  cursor: "pointer",
  color: "#030301",
};

const ClearIcon = ({ onClick }) => {
  return <i style={IconStyle} className="bi bi-x-circle" onClick={onClick} />;
};

export default ClearIcon;
