var puzzleList = [
    {
        name: 'Clouds',
        rules: 'Fill the board with clouds. '
                + 'Clouds must be rectangular (or square) and at least 2 cells in height and width. '
                + 'Clouds cannot be adjacent to one another, even diagonally. '
                + 'The numbers along the right and bottom of the board indicate the number of filled cells in that row or column.',
        colorRegions: false,
        oneToBoardSize: false,
        cellTypes: {
            cloud: ['empty', 'dot', 'filled']
        },
        puzzles: [
            [
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 0, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 3, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 3, region: 0}
                ],
                [
                    {type: 'number', fixed: true, clue: true, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 3, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 3, region: 0},
                    {type: 'number', fixed: true, clue: true, value: '', region: 0}
                ]
            ],
            [
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 0, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 4, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 6, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 4, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 3, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 7, region: 0}
                ],
                [
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'cloud', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 4, region: 0}
                ],
                [
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 4, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 6, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 6, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 0, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 2, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 5, region: 0},
                    {type: 'number', fixed: true, clue: true, value: 5, region: 0},
                    {type: 'number', fixed: true, clue: true, value: '', region: 0}
                ]
            ]
        ],
        check: function(puzzle) {
            var colCounts = [];
            var rowCounts = [];
            for (var x = 0; x < puzzle.length - 1; x++) {
                colCounts.push(0);
                rowCounts.push(0);
            }
            for (var x = 0; x < puzzle.length - 1; x++) {
                for (var y = 0; y < puzzle[x].length - 1; y++) {
                    if (puzzle[x][y].value == 2) {
                        colCounts[y]++;
                        rowCounts[x]++;
                    }
                }
            }
            correct = true;
            for (var x = 0; x < puzzle.length - 1; x++) {
                if (colCounts[x] != puzzle[puzzle.length - 1][x].value || rowCounts[x] != puzzle[x][puzzle.length - 1].value) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                for (var x = 0; x < puzzle.length - 1; x++) {
                    for (var y = 0; y < puzzle[x].length - 1; y++) {
                        if (puzzle[x][y].value == 2) {
                            if ((x == 0 || puzzle[x-1][y].value != 2) && (x == puzzle.length - 2 || puzzle[x+1][y].value != 2)) {
                                correct = false;
                                break;
                            }
                            if ((y == 0 || puzzle[x][y-1].value != 2) && (y == puzzle[x].length - 2 || puzzle[x][y+1].value != 2)) {
                                correct = false;
                                break;
                            }
                        }
                    }
                    if (!correct) {
                        break;
                    }
                }
                for (var x = 0; x < puzzle.length - 1; x++) {
                    for (var y = 0; y < puzzle[x].length - 1; y++) {
                        if (puzzle[x][y].value == 2) {
                            if (x > 0 && y > 0 && puzzle[x-1][y].value == 2 && puzzle[x][y-1].value == 2 && puzzle[x-1][y-1].value != 2) {
                                correct = false;
                                break;
                            }
                            if (x > 0 && y < puzzle[x].length - 2 && puzzle[x-1][y].value == 2 && puzzle[x][y+1].value == 2 && puzzle[x-1][y+1].value != 2) {
                                correct = false;
                                break;
                            }
                            if (x < puzzle.length - 2 && y < puzzle[x].length - 2 && puzzle[x+1][y].value == 2 && puzzle[x][y+1].value == 2 && puzzle[x+1][y+1].value != 2) {
                                correct = false;
                                break;
                            }
                            if (x < puzzle.length - 2 && y > 0 && puzzle[x+1][y].value == 2 && puzzle[x][y-1].value == 2 && puzzle[x+1][y-1].value != 2) {
                                correct = false;
                                break;
                            }
                            if (x > 0 && y > 0 && puzzle[x-1][y].value != 2 && puzzle[x][y-1].value != 2 && puzzle[x-1][y-1].value == 2) {
                                correct = false;
                                break;
                            }
                            if (x > 0 && y < puzzle[x].length - 2 && puzzle[x-1][y].value != 2 && puzzle[x][y+1].value != 2 && puzzle[x-1][y+1].value == 2) {
                                correct = false;
                                break;
                            }
                            if (x < puzzle.length - 2 && y < puzzle[x].length - 2 && puzzle[x+1][y].value != 2 && puzzle[x][y+1].value != 2 && puzzle[x+1][y+1].value == 2) {
                                correct = false;
                                break;
                            }
                            if (x < puzzle.length - 2 && y > 0 && puzzle[x+1][y].value != 2 && puzzle[x][y-1].value != 2 && puzzle[x+1][y-1].value == 2) {
                                correct = false;
                                break;
                            }
                        }
                    }
                }
            }
            return correct;
        },
        solve: function(puzzle) {
            return puzzle;
        }
    },
    {
        name: 'Parks',
        rules: 'Place exactly 1 tree in each column, row, and colored region. Trees cannot be adjacent to one another, even diagonally.',
        colorRegions: true,
        oneToBoardSize: false,
        cellTypes: {
            park: ['empty', 'dot', 'tree']
        },
        puzzles: [
            [
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5}
                ]
            ],
            [
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 1},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 4}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 5},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 2},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 3},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 11},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 11},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 6}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 11},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 7},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10}
                ],
                [
                    {type: 'park', fixed: false, clue: false, value: 0, region: 9},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 11},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 12},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 12},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 12},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 8},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10},
                    {type: 'park', fixed: false, clue: false, value: 0, region: 10}
                ]
            ]
        ],
        check: function(puzzle) {
            var rowCounts = [];
            var colCounts = [];
            var regionCounts = [];
            for (var x = 0; x < puzzle.length; x++) {
                rowCounts.push(0);
                colCounts.push(0);
                regionCounts.push(0);
            }
            for (var x = 0; x < puzzle.length; x++) {
                for (var y = 0; y < puzzle[x].length; y++) {
                    if (puzzle[x][y].value == 2) {
                        rowCounts[x]++;
                        colCounts[y]++;
                        regionCounts[puzzle[x][y].region - 1]++;
                    }
                }
            }
            var correct = true;
            for (var x = 0; x < puzzle.length; x++) {
                if (rowCounts[x] != 1 || colCounts[x] != 1 || regionCounts[x] != 1) {
                    correct = false;
                    break;
                }
            }
            if (correct) {
                for (var x = 0; x < puzzle.length; x++) {
                    for (var y = 0; y < puzzle[x].length; y++) {
                        if (puzzle[x][y].value == 2) {
                            if (x > 0) {
                                if (puzzle[x-1][y].value == 2) {
                                    correct = false;
                                    break;
                                }
                                if (y > 0) {
                                    if (puzzle[x-1][y-1].value == 2) {
                                        correct = false;
                                        break;
                                    }
                                }
                                if (y < puzzle[x].length - 1) {
                                    if (puzzle[x-1][y+1].value == 2) {
                                        correct = false;
                                        break;
                                    }
                                }
                            }
                            if (y > 0) {
                                if (puzzle[x][y-1].value == 2) {
                                    correct = false;
                                    break;
                                }
                                if (x < puzzle.length - 1) {
                                    if (puzzle[x+1][y-1].value == 2) {
                                        correct = false;
                                        break;
                                    }
                                }
                            }
                            if (x < puzzle.length - 1) {
                                if (puzzle[x+1][y].value == 2) {
                                    correct = false;
                                    break;
                                }
                                if (y < puzzle[x].length - 1) {
                                    if (puzzle[x+1][y+1].value == 2) {
                                        correct = false;
                                        break;
                                    }
                                }
                            }
                            if (y < puzzle[x].length - 1) {
                                if (puzzle[x][y+1].value == 2) {
                                    correct = false;
                                    break;
                                }
                            }
                        }
                    }
                    if (!correct) {
                        break;
                    }
                }
            }
            return correct;
        },
        solve: function(puzzle) {
            var treeCount = 0;
            var movesThisLoop = 1;
            var regions = [];
            for (var x = 0; x < puzzle.length; x++) {
                regions.push([ [],[],[] ]);//empty, dot, tree
            }
            function addDot(row, col) {
                var region = puzzle[row][col].region-1;
                var value = puzzle[row][col].value;
                for (var x = 0; x < regions[region][value].length; x++) {
                    if (regions[region][value][x].row == row
                            && regions[region][value][x].col == col) {
                        regions[region][1].push(regions[region][value][x]);
                        regions[region][value].splice(x, 1);
                        puzzle[row][col].value = 1;
                        break;
                    }
                }
            }
            function applyDots(treeRow, treeCol) {
                if (treeRow > 0 && puzzle[treeRow-1][treeCol].value != 1) {
                    addDot(treeRow-1, treeCol);
                }
                if (treeRow > 0 && treeCol < puzzle.length - 1 && puzzle[treeRow-1][treeCol+1].value != 1) {
                    addDot(treeRow-1, treeCol+1);
                }
                if (treeCol < puzzle.length - 1 && puzzle[treeRow][treeCol+1].value != 1) {
                    addDot(treeRow, treeCol+1);
                }
                if (treeRow < puzzle.length - 1 && treeCol < puzzle.length - 1 && puzzle[treeRow+1][treeCol+1].value != 1) {
                    addDot(treeRow+1, treeCol+1);
                }
                if (treeRow < puzzle.length - 1 && puzzle[treeRow+1][treeCol].value != 1) {
                    addDot(treeRow+1, treeCol);
                }
                if (treeRow < puzzle.length - 1 && treeCol > 0 && puzzle[treeRow+1][treeCol-1].value != 1) {
                    addDot(treeRow+1, treeCol-1);
                }
                if (treeCol > 0 && puzzle[treeRow][treeCol-1].value != 1) {
                    addDot(treeRow, treeCol-1);
                }
                if (treeRow > 0 && treeCol > 0 && puzzle[treeRow-1][treeCol-1].value != 1) {
                    addDot(treeRow-1, treeCol-1);
                }
                for (var x = 0; x < puzzle.length; x++) {
                    if (x != treeCol && puzzle[treeRow][x].value != 1) {
                        addDot(treeRow, x);
                    }
                    if (x != treeRow && puzzle[x][treeCol].value != 1) {
                        addDot(x, treeCol);
                    }
                }
                var region = puzzle[treeRow][treeCol].region - 1;
                for (var x = regions[region][0].length - 1; x >= 0; x--) {
                    puzzle[regions[region][0][x].row][regions[region][0][x].col].value = 1;
                    movesThisLoop++;
                    regions[region][1].push(regions[region][0].pop());
                }
            }
            function updateRegion(region, row, col, oldValue, newValue) {
                for (var x = 0; x < regions[region-1][oldValue].length; x++) {
                    if (regions[region-1][oldValue][x].row == row && regions[region-1][oldValue][x].col == col) {
                        regions[region-1][newValue].push(regions[region-1][oldValue][x]);
                        regions[region-1][oldValue].splice(x, 1);
                        break;
                    }
                }
            }
            //create regions array
            for (var x = 0; x < puzzle.length; x++) {
                for (var y = 0; y < puzzle[x].length; y++) {
                    regions[puzzle[x][y].region - 1][puzzle[x][y].value].push({row: x, col: y});
                }
            }
            //repeat solve logic until all trees are placed
            while (treeCount < puzzle.length && movesThisLoop > 0) {
                movesThisLoop = 0;
                //loop through regions
                //console.log('test1', regions);
                for (var x = 0; x < regions.length; x++) {
                    //console.log('test2', x, 'tree count', regions[x][2].length);
                    if (regions[x][2].length == 0) /* one free cell in region */ {
                        if (regions[x][0].length == 1) {
                            //place tree and dots
                            //console.log('test3');
                            regions[x][2].push(regions[x][0].pop());
                            puzzle[regions[x][2][0].row][regions[x][2][0].col].value = 2;
                            treeCount++;
                            movesThisLoop++;
                            applyDots(regions[x][2][0].row, regions[x][2][0].col);
                        } else {
                            //check if all free cells are in one row or column
                            //console.log('test4');
                            //console.log(regions[x]);
                            var sameRow = true;
                            var sameCol = true;
                            var row = regions[x][0][0].row;
                            var col = regions[x][0][0].col;
                            //console.log('test5');
                            for (var y = 1; y < regions[x][0].length; y++) {
                                if (regions[x][0][y].row != row) {
                                    sameRow = false;
                                }
                                if (regions[x][0][y].col != col) {
                                    sameCol = false;
                                }
                            }
                            //console.log('test6');
                            if (sameRow) {
                                //place dots
                                for (var y = 0; y < puzzle.length; y++) {
                                    if (puzzle[row][y].region != x + 1 && puzzle[row][y].value != 1) {
                                        addDot(row, y);
                                    }
                                }
                            } else if (sameCol) {
                                //place dots
                                for (var y = 0; y < puzzle.length; y++) {
                                    if (puzzle[y][col].region != x + 1 && puzzle[y][col].value != 1) {
                                        addDot(y, col);
                                    }
                                }
                            }
                            //console.log('test7');
                        }
                    }
                }
                //loop through regions again
                for (var x = 0; x < regions.length; x++) {
                    var seenByRegion = []; //array of cells adjacent to, in the same row as, or in the same column as every free cell in the region
                    //loop through cells in region
                    for (var y = 0; y < regions[x][0].length; y++) {
                        //create an array of all cells adjacent to the cell or in the same row or column
                        var seenByCell = [];
                        var seenTemp = [];
                        var seenCellTemp = [];
                        var row = regions[x][0][y].row;
                        var col = regions[x][0][y].col;
                        if (row > 0
                            && puzzle[row-1][col].value == 0
                            && x != puzzle[row-1][col].region - 1) {
                                seenByCell.push({row: row-1, col: col});
                            }
                        if (row > 0
                            && col < puzzle.length - 1
                            && puzzle[row-1][col+1].value == 0
                            && x != puzzle[row-1][col+1].region - 1) {
                                seenByCell.push({row: row-1, col: col+1});
                            }
                            if (col < puzzle.length - 1
                            && puzzle[row][col+1].value == 0
                            && x != puzzle[row][col+1].region - 1) {
                                seenByCell.push({row: row, col: col+1});
                        }
                        if (row < puzzle.length - 1
                            && col < puzzle.length - 1
                            && puzzle[row+1][col+1].value == 0
                            && x != puzzle[row+1][col+1].region - 1) {
                                seenByCell.push({row: row+1, col: col+1});
                            }
                            if (row < puzzle.length - 1
                                && puzzle[row+1][col].value == 0
                                && x != puzzle[row+1][col].region - 1) {
                                    seenByCell.push({row: row+1, col: col});
                                }
                        if (row < puzzle.length - 1
                            && col > 0
                            && puzzle[row+1][col-1].value == 0
                            && x != puzzle[row+1][col-1].region - 1) {
                                seenByCell.push({row: row+1, col: col-1});
                            }
                            if (col > 0
                                && puzzle[row][col-1].value == 0
                                && x != puzzle[row][col-1].region - 1) {
                            seenByCell.push({row: row, col: col-1});
                        }
                        if (row > 0
                            && col > 0
                            && puzzle[row-1][col-1].value == 0
                            && x != puzzle[row-1][col-1].region - 1) {
                                seenByCell.push({row: row-1, col: col-1});
                        }
                        for (var z = 0; z < puzzle.length; z++) {
                            if (x != puzzle[row][z].region - 1 && puzzle[row][z].value == 0) {
                                seenByCell.push({row: row, col: z});
                            }
                            if (x != puzzle[z][col].region - 1 && puzzle[z][col].value == 0) {
                                seenByCell.push({row: z, col: col});
                            }
                        }
                        //sort array
                        seenByCell = seenByCell.sort((function(a, b) {
                            if (a.row < b.row) {
                                return -1;
                            } else if (a.row == b.row && a.col < b.col) {
                                return -1;
                            } else if (a.row == b.row && a.col == b.col) {
                                return 0;
                            } else {
                                return 1;
                            }
                        }));
                        //remove duplicate values
                        seenCellTemp.push(seenByCell[0]);
                        for (var z = 1; z < seenByCell.length; z++) {
                            if (seenByCell[z].row != seenCellTemp[seenCellTemp.length - 1].row
                                || seenByCell[z].col != seenCellTemp[seenCellTemp.length - 1].col) {
                                    seenCellTemp.push(seenByCell[z]);
                                }
                            }
                            seenByCell = seenCellTemp;
                            if (y == 0) /* on first loop, seenByRegion = seenByCell */ {
                                seenByRegion = seenByCell;
                            } else {
                                //on subsequent loops, remove items that aren't also found in seenByCell
                                for (var z = 0; z < seenByRegion.length; z++) {
                                    var foundInBoth = false;
                                    for (var w = 0; w < seenByCell.length; w++) {
                                        if (seenByCell[w].row == seenByRegion[z].row && seenByCell[w].col == seenByRegion[z].col) {
                                            foundInBoth = true;
                                            break;
                                        }
                                    }
                                if (foundInBoth) {
                                    seenTemp.push(seenByRegion[z]);
                                }
                            }
                            seenByRegion = seenTemp;
                        }
                    }
                    //place dots
                    for (var y = 0; y < seenByRegion.length; y++) {
                        addDot(seenByRegion[y].row, seenByRegion[y].col);
                    }
                }
                //loop through columns and rows
                for (var x = 0; x < puzzle.length; x++) {
                    var region = 0;
                    var hasTree = false;
                    var sameRegion = true;
                    var emptyCells = [];
                    //loop through columns
                    for (var y = 0; y < puzzle.length; y++) {
                        //skip everything if there's already a tree
                        if (puzzle[x][y].value == 2) {
                            hasTree = true;
                            break;
                        } else if (puzzle[x][y].value == 0) {
                            //record empty cell
                            emptyCells.push(y);
                            //check if all empty cells are still in the same region
                            if (region == 0) {
                                region = puzzle[x][y].region;
                            } else if (region != puzzle[x][y].region) {
                                sameRegion = false;
                            }
                        }
                    }
                    if (!hasTree) {
                        if (emptyCells.length == 1) {
                            //if column has 1 free cell, place tree and dots
                            updateRegion(region, x, emptyCells[0], 0, 2);
                            puzzle[x][emptyCells[0]].value = 2;
                            treeCount++;
                            movesThisLoop++;
                            applyDots(x, emptyCells[0]);
                        } else if (sameRegion) {
                            //if column's free cells are in one region, place dots
                            for (var y = 0; y < puzzle.length; y++) {
                                if (puzzle[x][y].value == 0 && puzzle[x][y].region != region) {
                                    addDot(x, y);
                                }
                            }
                        }
                    }
                    region = 0;
                    hasTree = false;
                    sameRegion = true;
                    emptyCells = [];
                    //loop through rows
                    for (var y = 0; y < puzzle.length; y++) {
                        //skip everything if there's already a tree
                        if (puzzle[y][x].value == 2) {
                            hasTree = true;
                            break;
                        } else if (puzzle[y][x].value == 0) {
                            //record empty cell
                            emptyCells.push(y);
                            //check if all empty cells are still in the same region
                            if (region == 0) {
                                region = puzzle[y][x].region;
                            } else if (region != puzzle[y][x].region) {
                                sameRegion = false;
                            }
                        }
                    }
                    if (!hasTree) {
                        if (emptyCells.length == 1) {
                            //if row has 1 free cell, place tree and dots
                            updateRegion(region, emptyCells[0], x, 0, 2);
                            puzzle[emptyCells[0]][x].value = 2;
                            treeCount++;
                            movesThisLoop++;
                            applyDots(emptyCells[0], x);
                        } else if (sameRegion) {
                            //if column's free cells are in one region, place dots
                            for (var y = 0; y < puzzle.length; y++) {
                                if (puzzle[y][x].value == 0 && puzzle[y][x].region != region) {
                                    addDot(y, x);
                                }
                            }
                        }
                    }
                }
                
                var currentIndexes = [0];
                while (currentIndexes.length < puzzle.length - 1) {
                    currentIndexes.push(0);
                    for (var x = 0; x < currentIndexes.length; x++) {
                        currentIndexes[x] = x;
                    }
                    var keepLooping = true;
                    while (keepLooping) {
                        function increase(index) {
                            if (index < 0) {
                                keepLooping = false;
                            } else if (keepLooping) {
                                if (currentIndexes[index] < puzzle.length - (currentIndexes.length - index)) {
                                    currentIndexes[index]++;
                                } else {
                                    currentIndexes[index] = increase(index - 1) + 1;
                                }
                                return currentIndexes[index];
                            }
                            return 0;
                        }
                        var rowHasTree = false;
                        var regionsInRows = [];
                        var colHasTree = false;
                        var regionsInCols = [];
                        for (var x = 0; x < currentIndexes.length; x++) {
                            for (var y = 0; y < puzzle.length; y++) {
                                if (!rowHasTree) {
                                    if (puzzle[currentIndexes[x]][y].value == 2) {
                                        rowHasTree = true;
                                    } else if (puzzle[currentIndexes[x]][y].value == 0 && !regionsInRows.includes(puzzle[currentIndexes[x]][y].region)) {
                                        regionsInRows.push(puzzle[currentIndexes[x]][y].region);
                                    }
                                }
                                if (!colHasTree) {
                                    if (puzzle[y][currentIndexes[x]].value == 2) {
                                        colHasTree = true;
                                    } else if (puzzle[y][currentIndexes[x]].value == 0 && !regionsInCols.includes(puzzle[y][currentIndexes[x]].region)) {
                                        regionsInCols.push(puzzle[y][currentIndexes[x]].region);
                                    }
                                }
                            }
                        }
                        if (regionsInRows.length == currentIndexes.length) {
                            for (var x = 0; x < regionsInRows.length; x++) {
                                var regionCopy = regions[regionsInRows[x] - 1][0];
                                for (var y = 0; y < regionCopy.length; y++) {
                                    if (!currentIndexes.includes(regionCopy[y].row)) {
                                        addDot(regionCopy[y].row, regionCopy[y].col);
                                    }
                                }
                            }
                        }
                        if (regionsInCols.length == currentIndexes.length) {
                            for (var x = 0; x < regionsInCols.length; x++) {
                                var regionCopy = regions[regionsInCols[x] - 1][0];
                                for (var y = 0; y < regionCopy.length; y++) {
                                    if (!currentIndexes.includes(regionCopy[y].col)) {
                                        addDot(regionCopy[y].row, regionCopy[y].col);
                                    }
                                }
                            }
                        }
                        increase(currentIndexes.length - 1);
                    }
                }
            }
            return puzzle;
        }
    },
    {
        name: 'Planets',
        rules: 'Place one star and one nebula in each column and row. '
                + 'Stars emit light in horizontal and vertical lines, '
                + 'lighting the near side of any planets in the same row or column '
                + 'in the path of the star that is unobstructed by a nebula or another planet.',
        colorRegions: false,
        oneToBoardSize: false,
        cellTypes: {
            planet: [
                'planet-dark', //0
                'planet-left', //1
                'planet-right', //2
                'planet-top', //3
                'planet-bottom', //4
                'planet-top-left', //5
                'planet-top-right', //6
                'planet-bottom-right', //7
                'planet-bottom-left' //8
            ],
            galaxy: ['empty', 'dot', 'star', 'nebula']
        },
        puzzles: [
            [
                [
                    {type: 'planet', fixed: true, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 2, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0}
                ],
                [
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0}
                ],
                [
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 8, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 4, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 3, region: 0}
                ],
                [
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 5, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0}
                ],
                [
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 3, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 8, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0}
                ],
                [
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'planet', fixed: true, clue: false, value: 6, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0},
                    {type: 'galaxy', fixed: false, clue: false, value: 0, region: 0}
                ]
            ]
        ],
        check: function() {
            return false;
        },
        solve: function(puzzle) {
            return puzzle;
        }
    },
    {
        name: 'Sudoku',
        rules: 'Fill the board so that each row, column, and 3x3 region contains the numbers 1 to 9.',
        colorRegions: false,
        oneToBoardSize: true,
        cellTypes: {},
        puzzles: [
            [
                [
                    {type: 'number', fixed: true, clue: false, value: 5, region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: true, clue: false, value: 9, region: 2},
                    {type: 'number', fixed: true, clue: false, value: 1, region: 2},
                    {type: 'number', fixed: true, clue: false, value: 3, region: 2},
                    {type: 'number', fixed: true, clue: false, value: 7, region: 3},
                    {type: 'number', fixed: true, clue: false, value: 2, region: 3},
                    {type: 'number', fixed: false, clue: false, value: '', region: 3}
                ],
                [
                    {type: 'number', fixed: true, clue: false, value: 3, region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 2},
                    {type: 'number', fixed: true, clue: false, value: 8, region: 2},
                    {type: 'number', fixed: false, clue: false, value: '', region: 2},
                    {type: 'number', fixed: true, clue: false, value: 5, region: 3},
                    {type: 'number', fixed: false, clue: false, value: '', region: 3},
                    {type: 'number', fixed: true, clue: false, value: 9, region: 3}
                ],
                [
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: true, clue: false, value: 9, region: 1},
                    {type: 'number', fixed: false, clue: false, value: '', region: 1},
                    {type: 'number', fixed: true, clue: false, value: 2, region: 2},
                    {type: 'number', fixed: true, clue: false, value: 5, region: 2},
                    {type: 'number', fixed: false, clue: false, value: '', region: 2},
                    {type: 'number', fixed: false, clue: false, value: '', region: 3},
                    {type: 'number', fixed: true, clue: false, value: 8, region: 3},
                    {type: 'number', fixed: false, clue: false, value: '', region: 3}
                ],
                [
                    {type: 'number', fixed: true, clue: false, value: 6, region: 4},
                    {type: 'number', fixed: true, clue: false, value: 8, region: 4},
                    {type: 'number', fixed: false, clue: false, value: '', region: 4},
                    {type: 'number', fixed: true, clue: false, value: 4, region: 5},
                    {type: 'number', fixed: true, clue: false, value: 7, region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: true, clue: false, value: 2, region: 6},
                    {type: 'number', fixed: true, clue: false, value: 3, region: 6},
                    {type: 'number', fixed: false, clue: false, value: '', region: 6}
                ],
                [
                    {type: 'number', fixed: false, clue: false, value: '', region: 4},
                    {type: 'number', fixed: false, clue: false, value: '', region: 4},
                    {type: 'number', fixed: true, clue: false, value: 9, region: 4},
                    {type: 'number', fixed: true, clue: false, value: 5, region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: true, clue: false, value: 4, region: 6},
                    {type: 'number', fixed: true, clue: false, value: 6, region: 6},
                    {type: 'number', fixed: false, clue: false, value: '', region: 6}
                ],
                [
                    {type: 'number', fixed: true, clue: false, value: 7, region: 4},
                    {type: 'number', fixed: false, clue: false, value: '', region: 4},
                    {type: 'number', fixed: true, clue: false, value: 4, region: 4},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 5},
                    {type: 'number', fixed: false, clue: false, value: '', region: 6},
                    {type: 'number', fixed: false, clue: false, value: '', region: 6},
                    {type: 'number', fixed: true, clue: false, value: 5, region: 6}
                ],
                [
                    {type: 'number', fixed: false, clue: false, value: '', region: 7},
                    {type: 'number', fixed: true, clue: false, value: 2, region: 7},
                    {type: 'number', fixed: false, clue: false, value: '', region: 7},
                    {type: 'number', fixed: false, clue: false, value: '', region: 8},
                    {type: 'number', fixed: false, clue: false, value: '', region: 8},
                    {type: 'number', fixed: false, clue: false, value: '', region: 8},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9}
                ],
                [
                    {type: 'number', fixed: true, clue: false, value: 4, region: 7},
                    {type: 'number', fixed: false, clue: false, value: '', region: 7},
                    {type: 'number', fixed: false, clue: false, value: '', region: 7},
                    {type: 'number', fixed: true, clue: false, value: 8, region: 8},
                    {type: 'number', fixed: true, clue: false, value: 9, region: 8},
                    {type: 'number', fixed: true, clue: false, value: 1, region: 8},
                    {type: 'number', fixed: true, clue: false, value: 6, region: 9},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9}
                ],
                [
                    {type: 'number', fixed: true, clue: false, value: 8, region: 7},
                    {type: 'number', fixed: true, clue: false, value: 5, region: 7},
                    {type: 'number', fixed: false, clue: false, value: '', region: 7},
                    {type: 'number', fixed: true, clue: false, value: 7, region: 8},
                    {type: 'number', fixed: true, clue: false, value: 2, region: 8},
                    {type: 'number', fixed: false, clue: false, value: '', region: 8},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9},
                    {type: 'number', fixed: false, clue: false, value: '', region: 9},
                    {type: 'number', fixed: true, clue: false, value: 3, region: 9}
                ]
            ]
        ],
        check: function(puzzle) {
            var colCounts = [];
            var rowCounts = [];
            var regionCounts = [];
            for (var x = 0; x < puzzle.length; x++) {
                colCounts.push([]);
                rowCounts.push([]);
                regionCounts.push([]);
                for (var y = 0; y < puzzle[x].length; y++) {
                    colCounts[x].push(0);
                    rowCounts[x].push(0);
                    regionCounts[x].push(0);
                }
            }
            for (var x = 0; x < puzzle.length; x++) {
                for (var y = 0; y < puzzle[x].length; y++) {
                    colCounts[y][puzzle[x][y].value - 1]++;
                    rowCounts[x][puzzle[x][y].value - 1]++;
                    regionCounts[puzzle[x][y].region - 1][puzzle[x][y].value - 1]++;
                }
            }
            var correct = true;
            for (var x = 0; x < puzzle.length; x++) {
                for (var y = 0; y < puzzle[x].length; y++) {
                    if (colCounts[x][y] != 1 || rowCounts[x][y] != 1 || regionCounts[x][y] != 1) {
                        correct = false;
                        break;
                    }
                }
                if (!correct) {
                    break;
                }
            }
            return correct;
        },
        solve: function(puzzle) {
            return puzzle;
        }
    }
];

var puzzleType;
var puzzle;
var cellSize;
var selectedCell = [0, 0];
var solved = false;
var timerSeconds = 0;

function drawPuzzleTypeSelection() {
    var content = '';
    for (var x = 0; x < puzzleList.length; x++) {
        content += `<button onclick="setPuzzleType(${x})">${puzzleList[x].name}</button>`;
    }
    document.getElementById('puzzle-selection').innerHTML = content;
}

function setPuzzleType(index) {
    puzzleType = puzzleList[index];
    drawPuzzleSelection();
}

function drawPuzzleSelection() {
    var content = `<p>${puzzleType.rules}</p>`;
    for (var x = 0; x < puzzleType.puzzles.length; x++) {
        content += `<button onclick="setPuzzle(${x})">${puzzleType.puzzles[x].length} x ${puzzleType.puzzles[x][0].length}</button>`;
    }
    document.getElementById('puzzle-selection').innerHTML = content;
}

function setPuzzle(index) {
    puzzle = puzzleType.puzzles[index];
    cellSize = 800/puzzle.length;
    drawGame();
    drawPuzzle();
    gameTimer();
}

function drawGame() {
    content = '<table id="puzzle"></table>'
            + '<div id="game-status">'
                + '<button id="check-puzzle" onclick="checkPuzzle()">Check</button>'
                + '<span id="status"></span>'
                + '<span id="timer"></span>';
            + '</div>';
    document.getElementById('container').innerHTML = content;
}

function drawPuzzle() {
    var content = '';
    for (var x = 0; x < puzzle.length; x++) {
        content += '<tr>';
        for (var y = 0; y < puzzle[x].length; y++) {
            var tag = puzzle[x][y].clue ? 'th' : 'td';
            var type = puzzle[x][y].type;
            var value = puzzle[x][y].value;
            var classes = type;
            var text = '';
            var action = '';
            var border = '';

            if (!puzzle[x][y].clue && puzzle[x][y].fixed) {
                classes += ' fixed';
            }

            if (puzzleType.colorRegions) {
                classes += ' ' + 'region' + puzzle[x][y].region
            } else if (puzzle[x][y].region > 0) {
                if (x > 0 && puzzle[x][y].region != puzzle[x-1][y].region) {
                    border += 'border-top-width: 4px;';
                }
                if (x < puzzle.length - 1 && puzzle[x][y].region != puzzle[x+1][y].region) {
                    border += 'border-bottom-width: 4px;';
                }
                if (y > 0 && puzzle[x][y].region != puzzle[x][y-1].region) {
                    border += 'border-left-width: 4px;';
                }
                if (y < puzzle[x].length - 1 && puzzle[x][y].region != puzzle[x][y+1].region) {
                    border += 'border-right-width: 4px;';
                }
            }

            if (type == 'number') {
                text = value;
                if (!puzzle[x][y].clue && !solved) {
                    action = 'onclick="select(this)"';
                }
                if (selectedCell[0] == x && selectedCell[1] == y && !solved && !puzzle[x][y].clue) {
                    classes += ' ' + 'selected';
                }
            } else {
                classes += ' ' + puzzleType.cellTypes[type][value];
                
                if (!puzzle[x][y].fixed && !solved) {
                    action = 'onclick="toggle(this)"';
                }
            }
            content += `<${tag} class="${classes}" style="width: ${cellSize}px; height: ${cellSize}px; ${border}" ${action} id="${x}-${y}">${text}</${tag}>`;
        }
        content += '</tr>';
        document.getElementById('puzzle').innerHTML = content;
    }
}
function toggle(cell) {
    var row = cell.id.match(/^\d+/);
    var column = cell.id.match(/\d+$/);
    puzzle[row][column].value /*reassign value*/ =
    (puzzle[row][column].value /*current value*/
    + 1 /*plus 1*/)
    % puzzleType.cellTypes[puzzle[row][column].type].length /*mod the number of options for the cell type*/;
    drawPuzzle();
}
function select(cell) {
    selectedCell = [parseInt(cell.id.match(/^\d+/)), parseInt(cell.id.match(/\d+$/))];
    drawPuzzle();
}
function moveSelection(direction) {
    if (!Number.isInteger(selectedCell[0]) || !Number.isInteger(selectedCell[1])) {
        return;
    } else if (direction == 'Left' && selectedCell[1] == 0) {
        return;
    } else if (direction == 'Up' && selectedCell[0] == 0) {
        return;
    } else if (direction == 'Right' && selectedCell[1] == puzzle[selectedCell[0]].length - 1) {
        return;
    } else if (direction == 'Down' && selectedCell[0] == puzzle.length - 1) {
        return;
    } else if (direction == 'Left') {
        selectedCell[1]--;
    } else if (direction == 'Up') {
        selectedCell[0]--;
    } else if (direction == 'Right') {
        selectedCell[1]++;
    } else if (direction == 'Down') {
        selectedCell[0]++;
    }
    drawPuzzle();
}
function enterNumber(number) {
    if (!Number.isInteger(selectedCell[0]) || !Number.isInteger(selectedCell[1])) {
        return;
    } else if (puzzleType.oneToBoardSize && number != '' && (number == 0 || number > puzzle.length)) {
        return;
    } else if (!puzzle[selectedCell[0]][selectedCell[1]].fixed && puzzle[selectedCell[0]][selectedCell[1]].type == 'number') {
        puzzle[selectedCell[0]][selectedCell[1]].value = number;
        drawPuzzle();
    }
}

function checkPuzzle() {
    solved = puzzleType.check(puzzle);
    if (solved) {
        document.getElementById('status').innerHTML = 'SOLVED';
        document.getElementById('game-status').classList.add('solved');
        document.getElementById('check-puzzle').disabled = true;
        drawPuzzle();
    } else {
        document.getElementById('status').innerHTML = 'INCORRECT';
        document.getElementById('game-status').classList.add('incorrect');
        setTimeout(clearIncorrect, 800);
    }
}

function clearIncorrect() {
    document.getElementById('status').innerHTML = '';
    document.getElementById('game-status').classList.remove('incorrect');
}

function gameTimer() {
    if (!solved) {
        var min = Math.floor(timerSeconds / 60);
        var sec = timerSeconds - min*60;
        document.getElementById('timer').innerHTML = min + ':' + String(sec).padStart(2, '0');
        timerSeconds++;
        setTimeout(gameTimer, 1000);
    }
}

function testSolve() {
    puzzle = puzzleType.solve(puzzle);
    drawPuzzle();
}

drawPuzzleTypeSelection();


document.onkeydown = function(e) {
    if (!solved) {
        if (e.code.match(/Digit\d/)) {
            enterNumber(e.code.substring(5));
        } else if (e.code.match(/Numpad\d/)) {
            enterNumber(e.code.substring(6));
        } else if (e.code.match(/Arrow(Up)|(Down)|(Left)|(Right)/)) {
            moveSelection(e.code.substring(5));
        } else if (e.code == 'Backspace' || e.code == 'Delete') {
            enterNumber('');
        }
    }
}