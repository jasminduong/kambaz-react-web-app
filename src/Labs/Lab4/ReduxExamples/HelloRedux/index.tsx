import { useSelector } from "react-redux";

// Components within the body of the Provider can then select the state data they want using the useSelector hook as shown below
export default function HelloRedux() {
  {
    /* selects the data in the helloReducter */
  }
  const { message } = useSelector((state: any) => state.helloReducer);

  return (
    <div id="wd-hello-redux">
      <h4>Hello Redux</h4>
      <h5>{message}</h5> <hr />
    </div>
  );
}
