import React from 'react'

export const StatusDisplay = ({ status }) => {

    const getColor = (status) => {
        let color = "bg-slate-400";
        switch (status.toLowerCase()) {
            case "done":
                return "bg-green-400"
            case "started":
                return "bg-yellow-400"
            case "not started":
                return "bg-red-400"

            default:
                return color;
                break;
        }
    }

    return (
        <span className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(status)}`}>
            {status}
        </span>
    )
}
