type PersonsProps = {
  names: {
    first: string;
    last: string;
  }[];
};

const Persons = (props: PersonsProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h5>
            {name.first} {name.last}
          </h5>
        );
      })}
    </div>
  );
};

export default Persons;
