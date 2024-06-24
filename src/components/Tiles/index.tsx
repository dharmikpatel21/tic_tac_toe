"use client"
import React, { useState } from "react"

type Props = {
  item: string
  index: number
  board: any
  setBoard: any
  currentPlayer: any
  setCurrentPlayer: any
}

const Tiles = ({
  item,
  index,
  board,
  setBoard,
  currentPlayer,
  setCurrentPlayer,
}: Props) => {
  const handleClick = (index: number) => {
    if (board[index] === null) {
      const newBoard = [...board]
      newBoard[index] = currentPlayer
      setBoard(newBoard)
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X")
    }
  }
  return (
    <button
      className="w-16 h-16 bg-backgroundLight border border-yellow rounded-md text-3xl font-bold"
      onClick={() => handleClick(index)}
    >
      {item}
    </button>
  )
}

export default Tiles
