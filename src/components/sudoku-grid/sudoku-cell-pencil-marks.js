const allDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function SudokuCellOuterPencilMarks({cell, dim, cellSize, offsets, matchDigit}) {
    const pm = cell.get('outerPencils');
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    let i = 0;
    const marks = allDigits
        .filter(d => pm.has(d))
        .map((d) => {
            const bgClasses = ['pencil-mark-bg']
            const bgColorCode = pm.get(d).get("color")
            if (matchDigit !== '0') {
                if (d === matchDigit) {
                    bgClasses.push('matched')
                }
            }
            const offset = offsets[i++];
            return (
                <g className={bgClasses.join(' ')} 
                   key={d}
                >
                    <rect
                        className={`color-code-${bgColorCode}`}
                        x={dim.x + offset.x - fontSize/2}
                        y={dim.y + offset.y - fontSize}
                        width={fontSize}
                        height={fontSize}
                    />
                    <rect
                        className="pencil-mark-select-match-overlay"
                        x={dim.x + offset.x - fontSize/2}
                        y={dim.y + offset.y - fontSize}
                        width={fontSize}
                        height={fontSize}
                    />
                    <text
                        key={offset.key}
                        x={dim.x + offset.x}
                        y={dim.y + offset.y}
                        fontSize={fontSize}
                        textAnchor="middle"
                    >
                        {d}
                    </text>
                </g>
            );
        });
    return <g className="outer-pencil">{marks}</g>;
}

function SudokuCellInnerPencilMarks({cell, dim, cellSize, matchDigit}) {
    const pm = cell.get('innerPencils');
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    const digitWidth = 0.56 * fontSize
    const digits = allDigits.filter(d => pm.has(d))
    const width = digits.length * digitWidth
    let x_offset = (49 * cellSize / 100) - width/2
    let y_offset = (61 * cellSize / 100)
    const marks = digits
        .map((d) => {
            const bgClasses = ['pencil-mark-bg']
            const bgColorCode = pm.get(d).get("color")
            if (matchDigit !== '0') {
                if (d === matchDigit) {
                    bgClasses.push('matched')
                }
            }
            const ret = (
                <g className={bgClasses.join(' ')} 
                   key={d}
                >
                    <rect
                        className={`color-code-${bgColorCode}`}
                        x={dim.x + x_offset}
                        y={dim.y + y_offset - fontSize}
                        width={digitWidth}
                        height={fontSize}
                    />
                    <rect
                        className="pencil-mark-select-match-overlay"
                        x={dim.x + x_offset}
                        y={dim.y + y_offset - fontSize}
                        width={digitWidth}
                        height={fontSize}
                    />
                    <text className="inner-pencil"
                        x={dim.x + x_offset}
                        y={dim.y + y_offset}
                        fontSize={fontSize}
                    >
                        {d}
                    </text>
                </g>
            );
            x_offset += digitWidth
            return ret;
        });
    return <g className="inner-pencil">{marks}</g>;
}

function SudokuCellSimplePencilMarks({cell, dim, cellSize, offsets, matchDigit}) {
    const pm = cell.get('innerPencils');
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    const marks = allDigits
        .filter(d => pm.has(d))
        .map((d) => {
            const bgClasses = ['pencil-mark-bg']
            const bgColorCode = pm.get(d).get("color")
            if (matchDigit !== '0') {
                if (d === matchDigit) {
                    bgClasses.push('matched')
                }
            }
            const offset = offsets[d];
            return (
                <g className={bgClasses.join(' ')} 
                   key={d}
                >
                    <rect
                        className={`color-code-${bgColorCode}`}
                        x={dim.x + offset.x - fontSize/2}
                        y={dim.y + offset.y - fontSize}
                        width={fontSize}
                        height={fontSize}
                    />
                    <rect
                        className="pencil-mark-select-match-overlay"
                        x={dim.x + offset.x - fontSize/2}
                        y={dim.y + offset.y - fontSize}
                        width={fontSize}
                        height={fontSize}
                    />
                    <text
                        x={dim.x + offset.x}
                        y={dim.y + offset.y}
                        fontSize={fontSize}
                        textAnchor="middle"
                    >
                        {d}
                    </text>
                </g>
            );
        });
    return <g className="outer-pencil">{marks}</g>;
}

export default function SudokuCellPencilMarks({simplePencilMarking, cell, dim, cellSize, pencilOffsets, matchDigit}) {
    if (simplePencilMarking) {
        return <SudokuCellSimplePencilMarks cell={cell} dim={dim} cellSize={cellSize} offsets={pencilOffsets} matchDigit={matchDigit}/>
    }
    else {
        return <>
            <SudokuCellOuterPencilMarks cell={cell} dim={dim} cellSize={cellSize} offsets={pencilOffsets} matchDigit={matchDigit}/>
            <SudokuCellInnerPencilMarks cell={cell} dim={dim} cellSize={cellSize} matchDigit={matchDigit}/>
        </>;
    }
}
