export type UpdateDeskType = { newStatus: boolean, deskId: string }

export const updateDeskById = async ({ newStatus, deskId }: UpdateDeskType) => {
  const response = await fetch(`http://localhost:3000/desks/${deskId}`, {
    method: "PATCH",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({ available: newStatus })
  })
  console.log("in api", response)
  const data = await response.json()
  return data;
}