import Button from '../../components/event-props/button/button.component';
import Input from '../../components/event-props/input/input.component';

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
