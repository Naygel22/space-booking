import { Desk } from "../components/SpaceViewer/SpaceViewer.types";

export type UpdateDeskType = { newStatus: boolean, desk: Desk }

export const updateDeskById = async ({ newStatus, desk }: UpdateDeskType) => {
  const response = await fetch(`http://localhost:3000/desks/${desk.id}`, {
    method: "PUT",
    headers: { "Content-type": "application/json;charset=UTF-8" },
    body: JSON.stringify({
      ...desk,
      available: newStatus
    })
  });
  console.log("in api", response);
  console.log("deskid:", desk.id);
  if (!response.ok) {
    throw new Error('Failed to update desk');
  }
  const data = await response.json();
  console.log("data", data);
  return data;
};
