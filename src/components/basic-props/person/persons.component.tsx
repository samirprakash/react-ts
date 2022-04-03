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
          <h5 key={name.first}>
            {name.first} {name.last}
          </h5>
        );
      })}
    </div>
  );
};

export default Persons;
