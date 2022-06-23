import React from "react"
import { useState } from "react"

const Board = () => {

    const tileSymbols = {
        1: "",
        2: "",
        3: "",
        4: "",
        5: "",
        6: "",
        7: "",
        8: "",
        9: "",

    }
    const [gameSymbols, setGameSymbols] = useState(tileSymbols)
    const [playerTurn, setPlayerTurn] = useState("x")


    const handleOnClick = (boxId) => {
        setGameSymbols((prev) => {
            const newObject = { ...prev }
            newObject[`${boxId}`] = playerTurn
            return newObject
        })
        if (playerTurn === "x") {
            setPlayerTurn("O");
        } else {
            setPlayerTurn("x");
        }

    }

    return (
        <div className="board">
            <div className="gameboard" onClick={() => handleOnClick(1)}>{gameSymbols[1]}</div>
            <div className="gameboard" onClick={() => handleOnClick(2)}>{gameSymbols[2]}</div>
            <div className="gameboard" onClick={() => handleOnClick(3)}>{gameSymbols[3]}</div>
            <div className="gameboard"></div>
            <div className="gameboard"></div>
            <div className="gameboard"></div>
            <div className="gameboard"></div>
            <div className="gameboard"></div>
            <div className="gameboard"></div>
        </div>
    )
}
export default Board