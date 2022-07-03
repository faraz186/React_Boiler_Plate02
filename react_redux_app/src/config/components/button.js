import Button from "@mui/material/Button";

import CircularProgress from "@mui/material/CircularProgress";

function SMButton(props) {
  const { loading, label, disabled, onClick } = props;
  return (
    <Button
      disabled={loading || disabled}
      onClick={onClick}
      variant="outlined"
    >
      {loading ? <CircularProgress /> : label}
    </Button>
  );
}
export default SMButton;
