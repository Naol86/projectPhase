export async function fetchTasks() {
  const response = await fetch('http://127.0.0.1:8080/tasks');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}
