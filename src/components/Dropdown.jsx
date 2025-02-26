import React from "react";

const Dropdown = ({ device, setDevice }) => {
    return (
        <div className="my-4">
            <label htmlFor="device" className="mr-2 font-medium">Select Device Type:</label>
            <select
                id="device"
                value={device}
                onChange={(e) => setDevice(e.target.value)}
                className="p-2 border rounded"
            >
                <option value="mobile">Mobile</option>
                <option value="desktop">Desktop</option>
            </select>
        </div>
    );
};

export default Dropdown;
