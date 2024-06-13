export const getAllDesks = async () => {
  const response = await fetch('http://localhost:3000/desks')
  if (!response.ok) {
    return
  }
  const data = await response.json()
  return data;
}
