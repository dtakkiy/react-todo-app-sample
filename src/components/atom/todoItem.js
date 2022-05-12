export const TodoItem = (props) => {
	const removeNode = (e)  => {
		e.preventDefault();
		props.removeNode(props.nodeId);
		return;
  }

	const toggleComplete = (e) => {
		e.preventDefault();
		props.toggleComplete(props.nodeId);
		return;
	}

  const updateClass = () => {

  }

  const classes = 'list-group-item clearfix';
  if (props.complete === 'true') {
    classes = classes + ' list-group-item-success';
  }

  return (
    <li className={classes}>
      {props.task}
      <div className="pull-right" role="group">
        <button type="button" className="btn btn-xs btn-success img-circle" onClick={toggleComplete}>&#x2713;</button>
        <button type="button" className="btn btn-xs btn-danger img-circle" onClick={removeNode}>&#xff38;</button>
      </div>
    </li>
  );

};
