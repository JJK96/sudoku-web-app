export default function SudokuCellBackground({cell, dim, cellSize, matchDigit, showPencilmarks, simplePencilMarking}) {
    const bgColorCode = cell.get('colorCode');
    const bgClasses = [ 'cell-bg' ];
    if (cell.get('isGiven')) {
        bgClasses.push('given');
    }
    if (cell.get('isSelected')) {
        bgClasses.push('selected');
    }
    if (cell.get('errorMessage') !== undefined) {
        bgClasses.push('error');
    }
    const digit = cell.get('digit')
    if (matchDigit !== '0') {
        if (digit === matchDigit) {
            bgClasses.push('matched');
        }
    }
    return (
        <g className={bgClasses.join(' ')}
            data-cell-index={dim.index}
            data-row={dim.row}
            data-col={dim.col}
            data-box={dim.box}
            data-ring={dim.ring}
        >
            <rect
                className={`color-code-${bgColorCode}`}
                x={dim.x}
                y={dim.y}
                width={cellSize}
                height={cellSize}
            />
            <rect
                className="cell-select-match-overlay"
                x={dim.x}
                y={dim.y}
                width={cellSize}
                height={cellSize}
            />
        </g>
    );
}
