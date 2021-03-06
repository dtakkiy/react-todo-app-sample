import { useRef } from 'react'

export const TodoForm = (props) => {
  const inputTask = useRef(null);

	const doSubmit = (e) => {
		e.preventDefault();
    const task = inputTask.current.trim();
		if (!task) {
			return;
		}
		props.onTaskSubmit(task);
    inputTask.current = "";
		return;
	}

	return (
			<div className="commentForm vert-offset-top-2">
				<hr />
				<div className="clearfix">
					<form className="todoForm form-horizontal" onSubmit={() => doSubmit()}>
						<div className="form-group">
							<label htmlFor="task" className="col-md-2 control-label">Task</label>
							<div className="col-md-10">
								<input type="text" id="task" ref={inputTask} className="form-control" placeholder="What do you need to do?" />
							</div>
						</div>
						<div className="row">
							<div className="col-md-10 col-md-offset-2 text-right">
								<input type="submit" value="Save Item" className="btn btn-primary" />
							</div>
						</div>
					</form>
				</div>
			</div>
		);
};
