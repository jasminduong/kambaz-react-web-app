export default function PassingFunctions({
  theFunction,
}: {
  theFunction: () => void;
}) {
  {
    /* function passed in as a parameter */
  }
  return (
    <div>
      <h4>Passing Functions</h4>
      {/* invoking function with no arguments */}
      <button onClick={theFunction} className="btn btn-primary">
        Invoke the Function
      </button>
      <hr />
    </div>
  );
}
