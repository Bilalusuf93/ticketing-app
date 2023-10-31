"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

const TicketForm = ({ data }) => {
    const { ticket } = data;
    const EDITMODE = ticket?._id ? true : false
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (EDITMODE) {
            try {
                const res = await fetch(`/api/tickets/${ticket?._id}`, {
                    method: "PUT",
                    body: JSON.stringify({ formData }),
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                if (!res.ok) {
                    throw new Error("Failed to create a ticket");
                }
                router.refresh();
                router.push('/');
            } catch (error) {
                console.error(error)
            }
        } else {
            try {
                const res = await fetch('/api/tickets', {
                    method: "POST",
                    body: JSON.stringify({ formData }),
                    headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                    },
                })
                if (!res.ok) {
                    throw new Error("Failed to create a ticket");
                }
                router.refresh();
                router.push('/');
            } catch (error) {
                console.error(error)
            }
        }


    };
    const handleChange = (e) => {
        console.log(e)
        const value = e.target.value;
        const name = e.target.name;

        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const startingTicketData = {
        title: ticket?.title ?? "",
        description: ticket?.description ?? "",
        priority: ticket?.priority ?? 1,
        progress: ticket?.progress ?? 0,
        status: ticket?.status ?? "not started",
        category: ticket?.category ?? "Software problem",
    };
    const [formData, setFormData] = useState(startingTicketData);
    return (
        <div className="flex justify-center">
            <form
                className="flex flex-col gap-3 w-1/2"
                method="post"
                onSubmit={handleSubmit}
            >
                <h3>{EDITMODE ? "Update your ticket" : "Create your ticket"} </h3>
                <label>Title</label>
                <input
                    id="title"
                    name="title"
                    type="text"
                    onChange={handleChange}
                    required
                    value={formData.title}
                />
                <label>Description</label>
                <textarea
                    id="description"
                    name="description"
                    onChange={handleChange}
                    required
                    value={formData.description}
                    rows={5}
                />
                <label>Category</label>
                <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                >
                    <option value={"hardware problem"}>Hardware Problem</option>
                    <option value={"software problem"}>Software Problem</option>
                    <option value={"technical problem"}>Technical Problem</option>
                </select>

                <label>Priority</label>
                <div>
                    <input
                        type="radio"
                        id="priority-1"
                        name="priority"
                        onChange={handleChange}
                        value={1}
                        checked={formData.priority == 1}
                    />
                    <label>1</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="priority-2"
                        name="priority"
                        onChange={handleChange}
                        value={2}
                        checked={formData.priority == 2}
                    />
                    <label>2</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="priority-3"
                        name="priority"
                        onChange={handleChange}
                        value={3}
                        checked={formData.priority == 3}
                    />
                    <label>3</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="priority-3"
                        name="priority"
                        onChange={handleChange}
                        value={4}
                        checked={formData.priority == 4}
                    />
                    <label>4</label>
                </div>
                <div>
                    <input
                        type="radio"
                        id="priority-3"
                        name="priority"
                        onChange={handleChange}
                        value={5}
                        checked={formData.priority == 5}
                    />
                    <label>5</label>
                </div>

                <label>Progress</label>
                <input type="range" id="progress" name="progress" value={formData.progress} min={25} max={100} onChange={handleChange} />
                <label>Status</label>
                <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value={"not started"}>Not Started</option>
                    <option value={"Started"}>Started</option>
                    <option value={"Done"}>Done</option>
                </select>

                <input type="submit" className="btn" value={`${EDITMODE ? "Update ticket" : "Create ticket"}`} />
            </form>
        </div>
    );
};

export default TicketForm;
