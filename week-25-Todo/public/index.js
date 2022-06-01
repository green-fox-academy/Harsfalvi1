async function getTodos(completed) {
  try {
    let response;
    if (completed) {
      response = await fetch("/api/todos");
    }
    response = await fetch(`/api/todos?completed=${completed}`);
    console.log(response);
    if (response.ok) {
      const data = await response.json();
      return data.todos;
    } else {
      console.error(response.statusText);
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}
