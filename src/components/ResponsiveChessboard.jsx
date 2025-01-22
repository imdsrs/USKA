import React from "react";

const Chessboard = () => {
	const boardSize = 8; // 8x8 chessboard

	// Generate an array to represent the board squares
	const boardSquares = Array.from(
		{ length: boardSize * boardSize },
		(_, index) => {
			const row = Math.floor(index / boardSize);
			const col = index % boardSize;
			const isDark = (row + col) % 2 === 1;
			return (
				<div
					key={index}
					className={`w-full h-full ${
						isDark ? "bg-gray-700" : "bg-gray-200"
					}`}
				/>
			);
		}
	);

	return (
		<div className="flex justify-center items-center py-8">
			<div className="grid grid-cols-8 gap-0 aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
				{boardSquares}
			</div>
		</div>
	);
};

export default Chessboard;
