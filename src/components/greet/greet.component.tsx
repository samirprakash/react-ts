type GreetProps = {
  name: string;
  msgcount?: number;
  isLoggedin: boolean;
};

const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedin
          ? `Welcome ${props.name}. You have ${props.msgcount} unread messages.`
          : `Greetings Stranger!`}
      </h2>
    </div>
  );
};

export default Greet;
