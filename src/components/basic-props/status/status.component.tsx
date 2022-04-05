import { StatusProps } from './status.types';

const Status = ({ status }: StatusProps) => {
  let msg;
  if (status === 'loading') {
    msg = 'Loading ...';
  } else if (status === 'error') {
    msg = 'Error fetching data!';
  } else if (status === 'success') {
    msg = 'Data fetched successfully!';
  }

  return <div>Status - {msg}</div>;
};

export default Status;
