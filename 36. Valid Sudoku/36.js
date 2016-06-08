// 36. Valid Sudoku
// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.

// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    var sub  = [];	
    var sub2  = [];	
    var l  = [];
    var m  = [];
    var r  = [];
    for(var i = 0 ; i < 9 ; i ++){
       for(var j = 0 ; j < 9 ; j++){
       	if(board[i][j] >9 || board[i][j] < 1){
       	      return false;
       	}
    	if(sub.indexOf(board[i][j]) > -1 && board[i][j] != '.'){
                   return false;
    	}
    	sub.push(board[i][j]);
    	if(sub2.indexOf(board[j][i]) > -1 && board[j][i] != '.'){
    	      return false;	
    	}
    	sub2.push(board[j][i]);

    	if(l.indexOf(board[i][j]) > -1&& j < 3 && board[i][j] != '.'){
    	      return false;	
    	}else if(j < 3){
    	      l.push(board[i][j]);	 
    	}
    	if(m.indexOf(board[i][j]) > -1 && j <6 && j > 2&& board[i][j] != '.'){
    	      return false;	
    	}else if(j <6 && j > 2){
    	      m.push(board[i][j]);
    	}
    	if(r.indexOf(board[i][j]) > -1 && j > 5 && board[i][j] != '.'){
    	      return false;	
    	}else if(j > 5){
    	      r.push(board[i][j]);
    	}
       }
       sub = [];
       sub2 = []; 
       if(i == 2 || i == 5){
       	l  = [];
    	m  = [];
    	r  = [];
       }
    }
    return true;
};
