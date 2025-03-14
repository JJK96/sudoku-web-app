import { useState, useMemo } from 'react';

import './sudoku-grid.css';

import { SETTINGS } from '../../lib/sudoku-model.js';

import calculateGridDimensions from './grid-dimensions';

import SudokuCellPaused from './sudoku-cell-paused';
import SudokuCellBackground from './sudoku-cell-background';
import SudokuCellRegionOutline from './sudoku-cell-region-outline'
import SudokuCellPencilMarks from './sudoku-cell-pencil-marks';
import SudokuCellDigit from './sudoku-cell-digit';
import SudokuCellCover from './sudoku-cell-cover';

import GridLines from './grid-lines.js';


function layerCellBackgrounds ({cells, cellSize, dim, matchDigit, showPencilmarks, simplePencilMarking}) {
    return cells.map((cell, i) => {
        const cellDim = dim.cell[i];
        return (
            <SudokuCellBackground key={`bg${i}`}
                cell={cell}
                dim={cellDim}
                cellSize={cellSize}
                matchDigit={matchDigit}
                showPencilmarks={showPencilmarks}
                simplePencilMarking={simplePencilMarking}
            />
        );
    });
}

function layerSelectionOutline({cells, dim}) {
    const selectedIndexes = cells.filter(c => c.get('isSelected')).map(c => c.get('index'));
    return (
        <SudokuCellRegionOutline
            className="selection-outline"
            cellSet={selectedIndexes}
            dim={dim}
        />
    );
}

function layerCellPencilMarks ({simplePencilMarking, cells, cellSize, dim, matchDigit}) {
    const pencilOffsets = simplePencilMarking ? dim.simplePencilOffsets : dim.outerPencilOffsets;
    return cells.map((cell, i) => {
        const cellDim = dim.cell[i];
        return <SudokuCellPencilMarks key={`pm${i}`}
            simplePencilMarking={simplePencilMarking}
            cell={cell}
            dim={cellDim}
            cellSize={cellSize}
            pencilOffsets={pencilOffsets}
            matchDigit={matchDigit}
        />;
    });
}

function layerCellDigits ({cells, dim, matchDigit}) {
    return cells.map((cell, i) => {
        const cellDim = dim.cell[i];
        return <SudokuCellDigit key={`dig${i}`} cell={cell} dim={cellDim} fontSize={dim.fontSize} matchDigit={matchDigit}/>;
    });
}

function layerCellCovers ({cells, cellSize, dim, mouseDownHandler, mouseOverHandler}) {
    return cells.map((cell, i) => {
        const cellDim = dim.cell[i];
        return <SudokuCellCover key={`cov${i}`}
            cell={cell}
            dim={cellDim}
            cellSize={cellSize}
            mouseDownHandler={mouseDownHandler}
            mouseOverHandler={mouseOverHandler}
        />;
    });
}

function layerCellPaused ({cells, cellSize, dim}) {
    return cells.map((cell, i) => {
        const cellDim = dim.cell[i];
        return <SudokuCellPaused key={`pau${i}`} cell={cell} dim={cellDim} />;
    });
}

function cellContentLayers({cells, cellSize, dim, matchDigit, showPencilmarks, simplePencilMarking, outlineSelection}) {
    const backgrounds = layerCellBackgrounds({cells, cellSize, dim, matchDigit, showPencilmarks, simplePencilMarking});
    const selectionOutline = outlineSelection
        ? layerSelectionOutline({cells, dim})
        : null;
    const pencilMarks = showPencilmarks ? layerCellPencilMarks({simplePencilMarking, cells, cellSize, dim, matchDigit}) : [];
    const digits      = layerCellDigits({cells, cellSize, dim, matchDigit});
    return <>
        {backgrounds}
        {selectionOutline}
        {pencilMarks}
        {digits}
    </>;
}

function indexFromTouchEvent (e) {
    const t = (e.touches || {})[0];
    if (t) {
        let index = t.target.dataset.cellIndex;
        if (t.pageX) {
            const el = document.elementFromPoint(t.pageX, t.pageY);
            if (el && el !== t.target && el.classList.contains("cell-drag-cover")) {
                index = el.dataset.cellIndex;
            }
        }
        if (index !== undefined) {
            return parseInt(index, 10);
        }
    }
    return;
}

function useCellTouch (inputHandler) {
    const [lastCellTouched, setLastCellTouched] = useState(false);
    return (e) => {
        e.preventDefault();
        e.stopPropagation();
        const eventType = e.type;
        if (eventType === 'touchend') {
            setLastCellTouched(undefined);
            return
        }
        const cellIndex = indexFromTouchEvent(e);
        if (cellIndex !== undefined && cellIndex !== lastCellTouched) {
            if (eventType === 'touchstart') {
                inputHandler({type: 'cellTouched', cellIndex, value: cellIndex, source: 'touch'});
            }
            else if (eventType === 'touchmove') {
                inputHandler({type: 'cellSwipedTo', cellIndex, value: cellIndex, source: 'touch'});
            }
            setLastCellTouched(cellIndex);
            // console.log(`${eventType} event on cell #${cellIndex}`);
        }
    };
}


function SudokuGrid({grid, gridId, dimensions, isPaused, mouseDownHandler, mouseOverHandler, inputHandler}) {
    const cellSize = 100;
    const marginSize = 50;
    const fontSize = 72;
    const dim = useMemo(() => calculateGridDimensions(cellSize, marginSize, fontSize), [cellSize, marginSize, fontSize]);
    const settings = grid.get('settings');
    const simplePencilMarking = settings[SETTINGS.simplePencilMarking];
    const highlightMatches = settings[SETTINGS.highlightMatches];
    const outlineSelection = settings[SETTINGS.outlineSelection];
    const showPencilmarks = grid.get('showPencilmarks');
    const matchDigit = highlightMatches ? grid.get('matchDigit') : undefined;
    const cells = grid.get('cells').toArray();
    const cellContents = isPaused
        ? layerCellPaused({cells, cellSize, dim})
        : cellContentLayers({cells, cellSize, dim, matchDigit, showPencilmarks, simplePencilMarking, outlineSelection});
    const cellCovers = layerCellCovers({cells, cellSize, dim, mouseDownHandler, mouseOverHandler});
    const rawTouchHandler = useCellTouch(inputHandler);
    const selectionClass = outlineSelection ? 'selection-style-outline' : 'selection-style-solid';
    return (
        <div className={`sudoku-grid ${selectionClass}`}
            id={gridId || null}
            onTouchStart={rawTouchHandler}
            onTouchEnd={rawTouchHandler}
            onTouchMove={rawTouchHandler}
        >
            <svg version="1.1"
                style={{width: dimensions.gridLength}}
                viewBox={`0 0 ${dim.width} ${dim.height}`}
            >
                <rect className="grid-bg" width="100%" height="100%" />
                {cellContents}
                <GridLines cellSize={dim.cellSize} marginSize={dim.marginSize} />
                {cellCovers}
            </svg>
        </div>
    );
}

export default SudokuGrid;
