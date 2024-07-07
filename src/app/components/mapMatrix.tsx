"use client"

import { createContext } from "react";

export const MapRadarContext = createContext(Array,);
console.log(MapRadarContext);

export default function MapMatrix() {
    ///Game Data Block

    let header = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let radarRow1 = ["A", "", "", "", "", "", "", "", "", "", ""];
    let radarRow2 = ["B", "", "", "", "", "", "", "", "", "", ""];
    let radarRow3 = ["C", "", "", "", "", "", "", "", "", "", ""];
    let radarRow4 = ["D", "", "", "", "", "", "", "", "", "", ""];
    let radarRow5 = ["E", "", "", "", "", "", "", "", "", "", ""];
    let radarRow6 = ["F", "", "", "", "", "", "", "", "", "", ""];
    let radarRow7 = ["G", "", "", "", "", "", "", "", "", "", ""];
    let radarRow8 = ["H", "", "", "", "", "", "", "", "", "", ""];
    let radarRow9 = ["I", "", "", "", "", "", "", "", "", "", ""];
    let radarRow10 = ["J", "", "", "", "", "", "", "", "", "", ""];

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
        <div style={{
            // display: "flex",
            // justifyContent: "center",
            alignItems: "center",
        }}>
            This is the player 1s radar map.
            <div style={{
                display: "flex"
            }}>{header.map((function (data, index) {
                return (
                    <div key={"header-" + index} id={"header-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow1.map((function (data, index) {
                return (
                    <div key={"a-" + index} id={"a-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow2.map((function (data, index) {
                return (
                    <div key={"b-" + index} id={"b-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow3.map((function (data, index) {
                return (
                    <div key={"c-" + index} id={"c-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow4.map((function (data, index) {
                return (
                    <div key={"d-" + index} id={"d-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow5.map((function (data, index) {
                return (
                    <div key={"e-" + index} id={"e-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow6.map((function (data, index) {
                return (
                    <div key={"f-" + index} id={"f-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow7.map((function (data, index) {
                return (
                    <div key={"g-" + index} id={"g-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow8.map((function (data, index) {
                return (
                    <div key={"h-" + index} id={"h-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow9.map((function (data, index) {
                return (
                    <div key={"i-" + index} id={"i-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{radarRow10.map((function (data, index) {
                return (
                    <div key={"j-" + index}  id={"j-" + index} style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

        </div>
    )
}