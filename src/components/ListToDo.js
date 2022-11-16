import "../styles.css";

function ListToDo(props) {
  const task = [];
  task.push(props.taskInfo);
  return (
    <div>
      <li className="no-bulls"></li>
    </div>
  );
}

export default ListToDo;
