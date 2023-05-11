// This will be a table component, child of Presidents, parent to PresidentRow
import PresidentRow from "./PresidentRow"

export default function PresidentTable(props) {
  return (
    <>
        <h2>Hello from the President Table</h2>
        <PresidentRow />
    </>

  )
}
