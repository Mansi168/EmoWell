


// eslint-disable-next-line react/prop-types
const Chip = ({ label }) => <p className='chip' style={{
    fontSize: "0.7rem",
    background: "black",
    color: "#fff",
    padding: "0.3rem 0.5rem",
    borderRadius: "5px",
    width: "fit-content",
    textTransform: "capitalize",
    margin: "0.5rem 1rem 0 1rem",
  }}>{label}</p>;

export default Chip;