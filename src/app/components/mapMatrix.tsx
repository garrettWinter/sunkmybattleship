"use client"

import { useContext } from 'react';
import { Player1RadarContext } from '../contexts/gameContext';

export default function MapMatrix() {
    ///Game Data Block
    const radarMap = useContext(Player1RadarContext);
    let backup = {
        '': [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        a: ["A", "", "", "", "", "", "", "", "", "", ""],
        b: ["B", "", "", "", "", "", "", "", "", "", ""],
        c: ["C", "", "", "", "", "", "", "", "", "", ""],
        d: ["D", "", "", "", "", "", "", "", "", "", ""],
        e: ["E", "", "", "", "", "", "", "", "", "", ""],
        f: ["F", "", "", "", "", "", "", "", "", "", ""],
        g: ["G", "", "", "", "", "", "", "", "", "", ""],
        h: ["H", "", "", "", "", "", "", "", "", "", ""],
        i: ["I", "", "", "", "", "", "", "", "", "", ""],
        j: ["J", "", "", "", "", "", "", "", "", "", ""],
    };

    //styling
    let radarBox = {
        padding: "5px 5px",
        border: "solid black 2px",
        width: "30px",
        // textAlign: "center",
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            {Object.values(radarMap).map((function (rowData, rowIndex) {
                return (
                    <div
                        key={rowIndex}
                        style={{ display: "flex" }}>
                        {rowData.map((function (cellData, cellIndex) {
                            return (
                                <div
                                    key={`${rowIndex}-${cellIndex}`}
                                    id={`${rowIndex}-${cellIndex}`}
                                    style={radarBox}>
                                    {cellData}
                                </div>
                            )
                        }
                        ))}
                    </div>
                )
            }))}
        </div>
    )
}