export default async function PlayerMatrix() {
    ///Game Data Block
    let playerMap = {
        '': [" ", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        a: ["A", "", "B", "B", "B", "B", "", "", "", "", ""],
        b: ["B", "", "", "", "", "", "", "", "A", "", ""],
        c: ["C", "", "", "", "", "", "", "", "A", "", ""],
        d: ["D", "", "D", "D", "D", "", "", "", "A", "", ""],
        e: ["E", "", "", "", "", "", "", "", "A", "", ""],
        f: ["F", "", "", "S", "S", "S", "", "", "A", "", ""],
        g: ["G", "", "", "", "", "", "", "", "", "", ""],
        h: ["H", "", "", "", "", "", "T", "", "", "", ""],
        i: ["I", "", "", "", "", "", "T", "", "", "", ""],
        j: ["J", "", "", "", "", "", "", "", "", "", ""],
    };

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