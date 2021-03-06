import Greet from '../../components/basic-props/greet/greet.component';
import Heading from '../../components/basic-props/heading/heading.component';
import Oscar from '../../components/basic-props/oscar/oscar.component';
import Person from '../../components/basic-props/person/person.component';
import Persons from '../../components/basic-props/person/persons.component';
import Status from '../../components/basic-props/status/status.component';

const personName = {
  first: 'Bruce',
  last: 'Wayne',
};

const names = [
  {
    first: 'Bruce',
    last: 'Wayne',
  },
  {
    first: 'Peter',
    last: 'Parker',
  },
  {
    first: 'Clark',
    last: 'Kent',
  },
];

const BasicProps = () => {
  return (
    <>
      <Greet name="Samir" msgcount={20} isLoggedin={true} />
      <hr />
      <Person name={personName} />
      <hr />
      <Persons names={names} />
      <hr />
      <Status status="success" />
      <hr />
      <Heading>Placeholder Txt</Heading>
      <hr />
      <Oscar>
        <Heading>Oscar goes to Leonardo Di Caprio</Heading>
      </Oscar>
      <hr />
    </>
  );
};

export default BasicProps;
