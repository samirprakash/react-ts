type StatusProps = {
  status: 'loading' | 'error' | 'success';
};

const Status = (props: StatusProps) => {
  let msg;
  if (props.status === 'loading') {
    msg = 'Loading ...';
  } else if (props.status === 'error') {
    msg = 'Error fetching data!';
  } else if (props.status === 'success') {
    msg = 'Data fetched successfully!';
  }

  return <div>Status - {msg}</div>;
};

export default Status;
