const add = (a: number, b: number) => {
    alert(`${a} + ${b} = ${a + b}`); {/* function expects a and b */}
  };
  export default function PassingDataOnEvent() {
    return (
      <div id="wd-passing-data-on-event">
        <h4>Passing Data on Event</h4>
        <button onClick={() => add(2, 3)}
                // onClick={add(2, 3)}
                className="btn btn-primary"
                id="wd-pass-data-click">
          Pass 2 and 3 to add()
        </button>
        <hr/>
      </div>
  );}
  