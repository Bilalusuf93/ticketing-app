export const getTickets = async () => {
  try {
    const response = await fetch(`http://localhost:3000/api/tickets`, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log("failed to get tickets", error);
  }
};
export const getTicketById = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });
    return response.json();
  } catch (error) {
    console.log("failed to get tickets", error);
  }
};
