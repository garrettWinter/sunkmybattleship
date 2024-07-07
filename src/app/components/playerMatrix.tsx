"use client"

import { useContext } from 'react';
import { Player1MapContext } from '../contexts/gameContext';

export default async function PlayerMatrix() {
    ///Game Data Block

const playerMap = useContext(Player1MapContext)

    //styling
    let player1Box = {
        padding: "5px 5px",
        border: "solid black 2px",
        width: "30px",
        display: "flex",
        justifyContent: "center",
    }
    return (
        <div>
            <div style={{ textAlign: "center" }}>This is the Players Map</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
                {Object.values(playerMap).map((function (rowData, rowIndex) {
                    return (
                        <div
                            key={rowIndex}
                            style={{ display: "flex" }}>
                            {rowData.map((function (cellData, cellIndex) {
                                return (
                                    <div
                                        key={`${rowIndex}-${cellIndex}`}
                                        id={`${rowIndex}-${cellIndex}`}
                                        style={player1Box}>
                                        {cellData}
                                    </div>
                                )
                            }
                            ))}
                        </div>
                    )
                }))}
            </div>
        </div>
    )
}