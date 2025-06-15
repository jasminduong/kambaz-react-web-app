export default function Destructing() {
  const person = { name: "John", age: 25 };
  const { name, age } = person;
  // const name = person.name
  // const age = person.age
  const numbers = ["one", "two", "three"];
  const [first, second, third] = numbers;
  // const first = numbers[0]
  // const second = numbers[1]
  // const third = numbers[2]
  return (
    <div id="wd-destructing">
      <h4>Destructing</h4>
      <h5>Object Destructing</h5>
      const &#123; name, age &#125; = &#123; name: "John", age: 25 &#125;
      <br />
      name = {name}
      <br />
      age = {age}
      <br /> <br />
      <h5>Array Destructing</h5>
      const [first, second, third] = ["one","two","three"]
      <br />
      first = {first}
      <br />
      second = {second}
      <br />
      third = {third}
      <hr />
    </div>
  );
}
