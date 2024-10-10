import React, { useState } from "react";

function TicTacToe() {
  const[board, setBoard] = useState(Array(9).fill(null))
  const[isXTurn, setXTurn] = useState(true);
  const[winner,setWinner] = useState(null)

  const renderSquare = (index) => {
    return <button className=" text-3xl  rounded-sm  w-[80px] h-[80px] bg-gray-300 border-[2px]  border-gray-900" onClick={()=>handleClick(index)}>{board[index]}</button>;
  };
  const handleClick = (index)=>{
    if(board[index] != null){
      return;
    }
    console.log(index,"click")
    const newBoard = [...board];
    newBoard[index] = isXTurn?'X' :"O";
    setBoard(newBoard)
    setXTurn(!isXTurn);
    const winnerCombination = checkWinner(newBoard);
    if(winnerCombination){
      setWinner(newBoard[winnerCombination[0]])
    }
  }
  const checkWinner = (newBoard)=>{
    const combination = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    for(let i = 0; i<combination.length; i++){
      const [a,b,c] = combination[i];
      if(board[a] == board[b] && board[b] == board[c]){
        return combination[i];
      }
    }
    return null;
  }
  return (
    <div className="  bg-slate-100 h-screen">
      <div className="">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}  
      </div>
      <div>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      {winner && <h1 className="text-5xl mt-10">
        Winner is: 
       { winner } </h1>}
      
    </div>
  );
}

export default TicTacToe;
