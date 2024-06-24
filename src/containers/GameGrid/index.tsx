"use client"

import Tiles from "@/components/Tiles"
import React, { useState } from "react"

type Props = {}

const GameGrid = (props: Props) => {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [currentPlayer, setCurrentPlayer] = useState("X")

  const handleReset = () => {
    setBoard(Array(9).fill(null))
    setCurrentPlayer("X")
  }
  const checkWinner = () => {
    const winningLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i]
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a]
      }
    }
    if (board.every((square) => square !== null)) {
      return "Tie"
    }
    return null
  }
  const winner = checkWinner()
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-screen">
      <h1 className="font-bold text-yellow">Tic Tac Toe</h1>
      <div className="grid grid-cols-3 gap-4">
        {board.map((item, index) => (
          <Tiles
            item={item}
            index={index}
            key={index}
            board={board}
            setBoard={setBoard}
            currentPlayer={currentPlayer}
            setCurrentPlayer={setCurrentPlayer}
          />
        ))}
      </div>
      {winner && (
        <div className="mt-8 text-2xl font-bold">
          {winner === "Tie" ? "It's a tie!" : `Player ${winner} wins!`}
        </div>
      )}
      <button
        className="bg-grey text-yellow px-4 py-2 rounded-md"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  )
}

export default GameGrid
