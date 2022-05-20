import { TodoList } from "./todoList";
import { TodoForm } from "../atom/todoForm";
import { useData } from '../hooks/useData'
import { generateId } from "../../libs/generateId";

export const TodoBox = (props) => {
  const [data, {addData, removeData}] = useData(props.getInitialState())

	const handleNodeRemoval = (nodeId) => {
		const _tmpData = data;
		const tmpData = _tmpData.filter(function (el) {
			return el.id !== nodeId;
		});
    removeData(tmpData);
		return;
	}

  const handleSubmit = (task) => {
		const _tmpData = data;
		const id = generateId().toString();
		const complete = 'false';
		tmpData = _tmpData.concat([{id, task, complete}]);
    addData(tmpData);
  }

	const handleToggleComplete = (nodeId) => {
		const _tmpData = data;
		for (var i in _tmpData) {
			if (_tmpData[i].id == nodeId) {
				_tmpData[i].complete = _tmpData[i].complete === 'true' ? 'false' : 'true';
				break;
			}
		}
    addData(_tmpData);
		return;
  }

  return (
    <div className="well">
      <h1 className="vert-offset-top-0">To do:</h1>
      <TodoList data={data} removeNode={handleNodeRemoval} toggleComplete={handleToggleComplete} />
      <TodoForm onTaskSubmit={handleSubmit} />
    </div>
  );
};
