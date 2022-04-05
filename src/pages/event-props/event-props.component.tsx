import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';

const EventProps = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log('button clicked', event, id);
  };

  return (
    <>
      <Button handleClick={handleClick} />
      <Input value="" handleChange={(event) => console.log(event)} />
    </>
  );
};

export default EventProps;
