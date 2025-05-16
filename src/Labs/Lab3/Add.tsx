/* Add function passes in numbers a and b*/
export default function Add({ a, b }: { a: number; b: number }) {
  return (
    <div id="wd-add">
      <h4>Add</h4>a = {a}b = {b} <br />a + b = {a + b} <hr />
    </div>
  );
}
