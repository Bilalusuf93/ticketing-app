import React from "react";
import TicketCard from "./(components)/TicketCard";
import { getTickets } from "@/app/request";

async function Dashboard(props) {
  console.log("props=>", props);
  const { tickets } = await getTickets();
  console.log("data", tickets);

  const uiqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];
  console.log("uiqueCategories", uiqueCategories);

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uiqueCategories.map((uniqueCategory, index) => (
            <>
              <div className="mb-4" key={index}>
                <h2>{uniqueCategory}</h2>
              </div>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  ?.filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard
                      id={_index}
                      key={_index}
                      ticket={filteredTicket}
                    />
                  ))}
              </div>
            </>
          ))}
      </div>
    </div>
  );
}

export default Dashboard;
