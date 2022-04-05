type GreetProps = {
  name: string;
  msgcount?: number;
  isLoggedin: boolean;
};

const Greet = ({ name, msgcount, isLoggedin }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedin
          ? `Welcome ${name}. You have ${msgcount} unread messages.`
          : `Greetings Stranger!`}
      </h2>
    </div>
  );
};

export default Greet;
