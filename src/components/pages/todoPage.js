import { TodoTemplate } from "../templates/todoTemplate"


export const TodoPage = () => {

	const getInitialState = () =>  {
		return {
			data: [
				{"id":"00001","task":"Wake up","complete":"false"},
				{"id":"00002","task":"Eat breakfast","complete":"false"},
        {"id":"00003","task":"Go to work","complete":"false"}
			]
		};
  }

  return (
    <><TodoTemplate getInitialState={getInitialState} /></>
  )
}
