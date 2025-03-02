const allDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function SudokuCellOuterPencilMarks({cell, dim, cellSize, offsets}) {
    const pm = cell.get('outerPencils');
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    let i = 0;
    const marks = allDigits
        .filter(d => pm.includes(d))
        .map((d) => {
            const offset = offsets[i++];
            return (
                <text
                    key={offset.key}
                    x={dim.x + offset.x}
                    y={dim.y + offset.y}
                    fontSize={fontSize}
                    textAnchor="middle"
                >
                    {d}
                </text>
            );
        });
    return <g className="outer-pencil">{marks}</g>;
}

function SudokuCellInnerPencilMarks({cell, dim, cellSize}) {
    const pm = cell.get('innerPencils');
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    const digits = allDigits.filter(d => pm.includes(d)).join('');
    return (
        <text
            className="inner-pencil"
            x={dim.x + 49 * cellSize / 100}
            y={dim.y + 61 * cellSize / 100}
            fontSize={fontSize}
            textAnchor="middle"
        >
            {digits}
        </text>
    );
}

function SudokuCellSimplePencilMarks({cell, dim, cellSize, offsets, matchDigit}) {
    const pm = cell.get('innerPencils');
    const bgsize = 30
    if (cell.get('digit') !== '0' || pm.size === 0) {
        return null;
    }
    const fontSize = 26 * cellSize / 100;
    const marks = allDigits
        .filter(d => pm.includes(d))
        .map((d) => {
            const bgClasses = []
            if (matchDigit !== '0') {
                console.log("m", matchDigit, typeof(matchDigit))
                console.log("d", d, typeof(d))
                if (d === matchDigit) {
                    console.log(d, matchDigit)
                    bgClasses.push('matched')
                }
            }
            const offset = offsets[d];
            return (
                <g className={bgClasses.join(' ')} >
                    <rect
                        className="pencil-mark-select-match-overlay"
                        x={dim.x + offset.x - bgsize/2}
                        y={dim.y + offset.y - bgsize}
                        width={bgsize}
                        height={bgsize}
                    />
                    <text
                        key={d}
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
