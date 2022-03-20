import { CircularProgress } from '@mui/material';

const Spinner = () => {
  return (
    <div className="SpinnerContainer">
      <CircularProgress color="secondary" size={70} />
    </div>
  );
}

export default Spinner;
