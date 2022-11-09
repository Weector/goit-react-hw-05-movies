import { RotatingLines } from 'react-loader-spinner';

export const Spinner = () => {
  return (
    <RotatingLines
      strokeColor="grey"
      strokeWidth="3"
      animationDuration="0.75"
      width="150"
      visible={true}
    />
  );
};
