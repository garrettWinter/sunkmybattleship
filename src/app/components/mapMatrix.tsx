export default async function MapMatrix() {
    ///Game Data Block
    let header = ["","1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let row1 = ["A","E", "H", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row2 = ["B","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row3 = ["C","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row4 = ["D","E", "E", "E", "M", "E", "E", "E", "E", "E", "E"];
    let row5 = ["E","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row6 = ["F","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row7 = ["G","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row8 = ["H","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row9 = ["I","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];
    let row10 = ["J","E", "E", "E", "E", "E", "E", "E", "E", "E", "E"];

    //styling
    let radarBox = {
        padding: "5px 5px",
        border: "solid black 2px",
        width: "30px",
        // textAlign: "center",
    }

    return (
        <div>
            This is the map matrix.
            <div style={{
                display: "flex"
            }}>{header.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row1.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row2.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row3.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row4.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row5.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row6.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row7.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row8.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row9.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

            <div style={{
                display: "flex"
            }}>{row10.map((function (data) {
                return (
                    <div style={radarBox
                    }>{data}</div>
                )
            }
            ))}</div>

        </div>
    )
}