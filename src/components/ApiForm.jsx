import Request from "./ApiRequest";
import "./ApiForm.css"

function ApiForm() {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Positive</th>
          <th>Negative</th>
          <th>Death</th>
          <th>Total</th>
        </tr>
      </thead>
      <Request />
    </table>
  );
}


export default ApiForm