import { TodoItem } from "../atom/todoItem";

export const TodoList = (props) => {
	const removeNode = (nodeId) => {
		props.removeNode(nodeId);
		return;
  }

  const	toggleComplete = (nodeId) => {
		props.toggleComplete(nodeId);
		return;
  }

  var listNodes = props.data.map(function (listItem) {
    return (
      <TodoItem key={listItem.id} nodeId={listItem.id} task={listItem.task} complete={listItem.complete} removeNode={removeNode} toggleComplete={toggleComplete} />
    );
  });

  return (
    <ul className="list-group">
      {listNodes}
    </ul>
  );

};
