export default async function PlayerMatrix() {
        ///Game Data Block
        let header = ["", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let player1Row1 = ["A", "", "B", "B", "B", "B", "", "", "", "", ""];
        let player1Row2 = ["B", "", "", "", "", "", "", "", "A", "", ""];
        let player1Row3 = ["C", "", "", "", "", "", "", "", "A", "", ""];
        let player1Row4 = ["D", "", "D", "D", "D", "", "", "", "A", "", ""];
        let player1Row5 = ["E", "", "", "", "", "", "", "", "A", "", ""];
        let player1Row6 = ["F", "", "", "S", "S", "S", "", "", "A", "", ""];
        let player1Row7 = ["G", "", "", "", "", "", "", "", "", "", ""];
        let player1Row8 = ["H", "", "", "", "", "T", "", "", "", "", ""];
        let player1Row9 = ["I", "", "", "", "", "T", "", "", "", "", ""];
        let player1Row10 = ["J", "", "", "", "", "", "", "", "", "", ""];
    
        //styling
        let player1Box = {
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
                This is player 1s map.
                <div style={{
                    display: "flex"
                }}>{header.map((function (data, index) {
                    return (
                        <div key={"header-" + index} id={"header-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row1.map((function (data, index) {
                    return (
                        <div key={"a-" + index} id={"a-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row2.map((function (data, index) {
                    return (
                        <div key={"b-" + index} id={"b-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row3.map((function (data, index) {
                    return (
                        <div key={"c-" + index} id={"c-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row4.map((function (data, index) {
                    return (
                        <div key={"d-" + index} id={"d-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row5.map((function (data, index) {
                    return (
                        <div key={"e-" + index} id={"e-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row6.map((function (data, index) {
                    return (
                        <div key={"f-" + index} id={"f-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row7.map((function (data, index) {
                    return (
                        <div key={"g-" + index} id={"g-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row8.map((function (data, index) {
                    return (
                        <div key={"h-" + index} id={"h-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row9.map((function (data, index) {
                    return (
                        <div key={"i-" + index} id={"i-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
                <div style={{
                    display: "flex"
                }}>{player1Row10.map((function (data, index) {
                    return (
                        <div key={"j-" + index}  id={"j-" + index} style={player1Box
                        }>{data}</div>
                    )
                }
                ))}</div>
    
            </div>
        )
}