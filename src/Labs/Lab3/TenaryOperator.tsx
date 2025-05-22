export default function TenaryOperator() {
  let loggedIn = true;
  return (
    <div id="wd-ternary-operator">
      <h4>Tenary Conditional Operator</h4>
      <h5>Logged In</h5>
      {loggedIn ? <p>Welcome</p> : <p>Please login</p>} <hr />
    </div>
  );
}
