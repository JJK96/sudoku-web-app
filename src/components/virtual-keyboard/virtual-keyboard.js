import React from 'react';

import "./virtual-keyboard.css";

const landscapePlayBaseButton = {
    width: 200,
    height: 200,
    textX: 100,
    textY: 160,
    fontSize: 170,
};

const landscapePlayButtonDefs = [
    {
        value: "1",
        left: 40,
        top: 250,
    },
    {
        value: "2",
        left: 280,
        top: 250,
    },
    {
        value: "3",
        left: 520,
        top: 250,
    },
    {
        value: "4",
        left: 40,
        top: 490,
    },
    {
        value: "5",
        left: 280,
        top: 490,
    },
    {
        value: "6",
        left: 520,
        top: 490,
    },
    {
        value: "7",
        left: 40,
        top: 730,
    },
    {
        value: "8",
        left: 280,
        top: 730,
    },
    {
        value: "9",
        left: 520,
        top: 730,
    },
    {
        value: "delete",
        text: "Delete",
        left: 40,
        top: 970,
        width: 440,
        textX: 222,
        textY: 130,
        fontSize: 90,
    },
    {
        value: "check",
        text: "Check",
        left: 520,
        top: 970,
        width: 440,
        textX: 222,
        textY: 130,
        fontSize: 90,
    },
    {
        value: "undo",
        icon: "undo",
        left: 760,
        top: 250,
    },
    {
        value: "redo",
        icon: "redo",
        left: 760,
        top: 490,
    },
    {
        value: "restart",
        icon: "restart",
        left: 760,
        top: 730,
    },
];

const portraitPlayBaseButton = {
    width: 200,
    height: 200,
    textX: 100,
    textY: 160,
    fontSize: 170,
};

const portraitPlayButtonDefs = [
    {
        value: "1",
        left: 40,
        top: 250,
    },
    {
        value: "2",
        left: 280,
        top: 250,
    },
    {
        value: "3",
        left: 520,
        top: 250,
    },
    {
        value: "4",
        left: 40,
        top: 490,
    },
    {
        value: "5",
        left: 280,
        top: 490,
    },
    {
        value: "6",
        left: 520,
        top: 490,
    },
    {
        value: "7",
        left: 40,
        top: 730,
    },
    {
        value: "8",
        left: 280,
        top: 730,
    },
    {
        value: "9",
        left: 520,
        top: 730,
    },
    {
        value: "delete",
        text: "Delete",
        left: 760,
        top: 730,
        width: 440,
        textX: 222,
        textY: 130,
        fontSize: 90,
    },
    {
        value: "check",
        icon: "check",
        left: 760,
        top: 250,
        width: 200,
        textX: 222,
        textY: 130,
        fontSize: 90,
    },
    {
        value: "undo",
        icon: "undo",
        left: 760,
        top: 490,
    },
    {
        value: "redo",
        icon: "redo",
        left: 1000,
        top: 490,
    },
    {
        value: "restart",
        icon: "restart",
        left: 1000,
        top: 250,
    },
];

const buttonIcons = {

    undo: (x, y) => {
        return (
            <path
                className="button-icon"
                d="M 92.072266 51.09375 L 34.271484 82.269531 L 92.072266 113.43164 L 92.072266 90.392578 L 128.40625 90.392578 C 140.28604 90.392578 149.61133 99.718076 149.61133 111.59766 C 149.61133 123.47746 140.28604 132.80469 128.40625 132.80469 L 117.13477 132.80469 L 117.13477 148.14062 L 128.40625 148.14062 C 148.51546 148.14062 164.94531 131.70924 164.94531 111.59766 C 164.94531 91.486336 148.51546 75.056641 128.40625 75.056641 L 92.072266 75.056641 L 92.072266 51.09375 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    redo: (x, y) => {
        return (
            <path
                className="button-icon"
                d="M 107.14453 51.09375 L 107.14453 75.056641 L 70.810547 75.056641 C 50.701337 75.056641 34.271484 91.486326 34.271484 111.59766 C 34.271484 131.70924 50.701337 148.14062 70.810547 148.14062 L 82.082031 148.14062 L 82.082031 132.80469 L 70.810547 132.80469 C 58.930757 132.80469 49.605469 123.47746 49.605469 111.59766 C 49.605469 99.718066 58.930757 90.392578 70.810547 90.392578 L 107.14453 90.392578 L 107.14453 113.43164 L 164.94531 82.269531 L 107.14453 51.09375 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    restart: (x, y) => {
        return (
            <path
                className="button-icon"
                d="M 123.93359 56.078125 L 82.111328 78.632812 L 123.93359 101.17578 L 123.93359 86.580078 L 124.28711 86.580078 C 135.98148 86.580078 145.15625 95.744233 145.15625 107.43945 C 145.15625 119.13482 135.98148 128.3125 124.28711 128.3125 L 70.972656 128.3125 C 59.279526 128.3125 50.103516 119.13482 50.103516 107.43945 C 50.103516 95.744233 59.279526 86.580078 70.972656 86.580078 L 77.535156 86.580078 L 77.535156 71.189453 L 70.972656 71.189453 C 51.019946 71.189453 34.716797 87.484653 34.716797 107.43945 C 34.716797 127.39448 51.019946 143.70117 70.972656 143.70117 L 124.28711 143.70117 C 144.23982 143.70117 160.54492 127.39448 160.54492 107.43945 C 160.54492 87.484653 144.23982 71.189453 124.28711 71.189453 L 123.93359 71.189453 L 123.93359 56.078125 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    check: (x, y) => {
        return (
            <path
                className="button-icon"
                d="M 154.05078 32.033203 C 123.95363 64.333876 93.067993 97.848824 78.751953 142.30859 C 68.515493 127.96659 54.917813 117.76272 39.257812 111.2168 L 32.894531 126.44141 C 51.504861 134.22057 65.364457 146.55496 73.992188 167.51562 L 89.728516 165.89844 C 99.059096 116.26031 131.63183 80.299653 166.12305 43.283203 L 154.05078 32.033203 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    'mode-digit': (x, y, activeClass) => {
        return (
            <path
                className={`mode-button-icon ${activeClass}`}
                d="M 56.064453 21.371094 L 51.082031 46.0625 L 33.728516 46.0625 L 33.728516 54.638672 L 49.365234 54.638672 L 45.126953 75.533203 L 33.728516 75.533203 L 33.728516 84.109375 L 43.408203 84.109375 L 38.425781 108.62891 L 47.015625 108.62891 L 51.998047 84.109375 L 69.982422 84.109375 L 65.056641 108.62891 L 73.648438 108.62891 L 78.630859 84.109375 L 96.271484 84.109375 L 96.271484 75.533203 L 80.349609 75.533203 L 84.644531 54.638672 L 96.271484 54.638672 L 96.271484 46.0625 L 86.363281 46.0625 L 91.345703 21.371094 L 82.697266 21.371094 L 77.714844 46.0625 L 59.673828 46.0625 L 64.65625 21.371094 L 56.064453 21.371094 z M 57.955078 54.638672 L 75.996094 54.638672 L 71.701172 75.533203 L 53.716797 75.533203 L 57.955078 54.638672 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    'mode-outer': (x, y, activeClass) => {
        return (
            <path
                className={`mode-button-icon ${activeClass}`}
                d="M 34.207031 18.191406 C 33.597205 19.42986 32.559917 20.706771 31.09375 22.023438 C 29.627577 23.340104 27.914291 24.461139 25.955078 25.386719 L 25.955078 28.789062 C 27.044971 28.384936 28.270439 27.778956 29.632812 26.970703 C 31.008153 26.16245 32.117564 25.355122 32.960938 24.546875 L 32.960938 46.974609 L 36.464844 46.974609 L 36.464844 18.191406 L 34.207031 18.191406 z M 92.226562 18.191406 C 89.514803 18.191406 87.354987 18.901312 85.746094 20.322266 C 84.137194 21.730192 83.209411 23.783902 82.962891 26.482422 L 86.5625 26.853516 C 86.575473 25.054502 87.087563 23.64574 88.099609 22.628906 C 89.111656 21.612073 90.461697 21.105469 92.148438 21.105469 C 93.744356 21.105469 95.035384 21.586095 96.021484 22.550781 C 97.020551 23.502435 97.519531 24.677386 97.519531 26.072266 C 97.519531 27.401972 96.974659 28.815273 95.884766 30.314453 C 94.794872 31.800593 92.700623 33.821833 89.599609 36.376953 C 87.601469 38.019533 86.069806 39.46531 85.005859 40.716797 C 83.954886 41.968277 83.189058 43.24065 82.708984 44.53125 C 82.410578 45.31343 82.274848 46.127249 82.300781 46.974609 L 101.16016 46.974609 L 101.16016 43.591797 L 87.166016 43.591797 C 87.555269 42.953024 88.047685 42.32106 88.644531 41.695312 C 89.241378 41.056534 90.591419 39.851065 92.693359 38.078125 C 95.210499 35.940165 97.007064 34.258616 98.083984 33.033203 C 99.173884 31.80779 99.952831 30.64129 100.41992 29.533203 C 100.88702 28.425116 101.12109 27.297584 101.12109 26.150391 C 101.12109 23.895097 100.32248 22.003762 98.726562 20.478516 C 97.130642 18.953269 94.964276 18.191406 92.226562 18.191406 z M 32.222656 79.568359 C 29.965016 79.568359 28.07666 80.219803 26.558594 81.523438 C 25.04052 82.814031 24.066839 84.638474 23.638672 86.998047 L 27.142578 87.625 C 27.402078 85.904207 27.986291 84.612346 28.894531 83.751953 C 29.802778 82.891553 30.936455 82.460937 32.298828 82.460938 C 33.674168 82.460938 34.796689 82.885062 35.666016 83.732422 C 36.535336 84.579782 36.970703 85.64886 36.970703 86.939453 C 36.970703 88.568993 36.373381 89.774454 35.179688 90.556641 C 33.985988 91.338814 32.644457 91.730469 31.152344 91.730469 C 31.009624 91.730469 30.821451 91.717473 30.587891 91.691406 L 30.197266 94.78125 C 31.183359 94.520523 32.008202 94.390625 32.669922 94.390625 C 34.291795 94.390625 35.626768 94.918663 36.677734 95.974609 C 37.728708 97.017516 38.255859 98.346391 38.255859 99.962891 C 38.255859 101.65762 37.684769 103.07937 36.542969 104.22656 C 35.414149 105.37376 34.024766 105.94727 32.376953 105.94727 C 30.988633 105.94727 29.809057 105.51015 28.835938 104.63672 C 27.875791 103.75024 27.193236 102.30901 26.791016 100.31445 L 23.289062 100.78516 C 23.522623 103.1708 24.463515 105.11215 26.111328 106.61133 C 27.772121 108.11051 29.853255 108.85938 32.357422 108.85938 C 35.134062 108.85936 37.43156 107.9936 39.248047 106.25977 C 41.064547 104.51291 41.972656 102.38775 41.972656 99.884766 C 41.972656 98.033612 41.504512 96.494951 40.570312 95.269531 C 39.636119 94.031085 38.327372 93.217265 36.640625 92.826172 C 37.938125 92.226505 38.916412 91.417224 39.578125 90.400391 C 40.239852 89.383557 40.570312 88.256025 40.570312 87.017578 C 40.570312 85.713945 40.220178 84.482499 39.519531 83.322266 C 38.831858 82.162026 37.833903 81.248831 36.523438 80.583984 C 35.212964 79.906098 33.77965 79.568359 32.222656 79.568359 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    'mode-inner': (x, y, activeClass) => {
        return (
            <path
                className={`mode-button-icon ${activeClass}`}
                d="M 85.541016 45.716797 C 83.283376 45.716797 81.395023 46.368245 79.876953 47.671875 C 78.358883 48.962475 77.385201 50.786914 76.957031 53.146484 L 80.460938 53.773438 C 80.720438 52.052638 81.304651 50.760781 82.212891 49.900391 C 83.121141 49.039991 84.254808 48.609375 85.617188 48.609375 C 86.992527 48.609375 88.115045 49.033499 88.984375 49.880859 C 89.853695 50.728219 90.289062 51.797301 90.289062 53.087891 C 90.289062 54.717431 89.691737 55.922888 88.498047 56.705078 C 87.304347 57.487248 85.962823 57.878906 84.470703 57.878906 C 84.327983 57.878906 84.13981 57.865944 83.90625 57.839844 L 83.515625 60.929688 C 84.501715 60.668958 85.326561 60.539062 85.988281 60.539062 C 87.610161 60.539062 88.945134 61.067097 89.996094 62.123047 C 91.047074 63.165947 91.574219 64.494828 91.574219 66.111328 C 91.574219 67.806058 91.003128 69.22781 89.861328 70.375 C 88.732508 71.5222 87.343133 72.095703 85.695312 72.095703 C 84.306992 72.095703 83.127417 71.658586 82.154297 70.785156 C 81.194147 69.898676 80.511595 68.457451 80.109375 66.462891 L 76.607422 66.933594 C 76.840982 69.319234 77.781878 71.260586 79.429688 72.759766 C 81.090478 74.258946 83.171611 75.007812 85.675781 75.007812 C 88.452421 75.007792 90.749916 74.142033 92.566406 72.408203 C 94.382906 70.661343 95.291016 68.536193 95.291016 66.033203 C 95.291016 64.182053 94.822872 62.643389 93.888672 61.417969 C 92.954482 60.179519 91.645724 59.365699 89.958984 58.974609 C 91.256484 58.374939 92.234764 57.565658 92.896484 56.548828 C 93.558204 55.531998 93.888672 54.404456 93.888672 53.166016 C 93.888672 51.862376 93.538541 50.630943 92.837891 49.470703 C 92.150221 48.310463 91.132766 47.387547 89.722656 46.623047 C 88.492746 46.046317 88.083276 45.715807 85.541016 45.716797 z M 42.960938 45.861328 C 42.351108 47.099788 41.313826 48.376699 39.847656 49.693359 C 38.381486 51.010029 36.668194 52.131061 34.708984 53.056641 L 34.708984 56.458984 C 35.798874 56.054854 37.024349 55.448875 38.386719 54.640625 C 39.762059 53.832375 40.871464 53.025047 41.714844 52.216797 L 41.714844 74.644531 L 45.21875 74.644531 L 45.21875 45.861328 L 42.960938 45.861328 z M 62.023438 45.861328 C 59.311677 45.861328 57.151869 46.571237 55.542969 47.992188 C 53.934069 49.400117 53.006286 51.453824 52.759766 54.152344 L 56.359375 54.523438 C 56.372375 52.724427 56.884434 51.315668 57.896484 50.298828 C 58.908524 49.281998 60.258573 48.775391 61.945312 48.775391 C 63.541223 48.775391 64.832259 49.256013 65.818359 50.220703 C 66.817429 51.172353 67.316406 52.347307 67.316406 53.742188 C 67.316406 55.071898 66.771541 56.485195 65.681641 57.984375 C 64.591751 59.470515 62.497494 61.491755 59.396484 64.046875 C 57.398344 65.689455 55.866674 67.135239 54.802734 68.386719 C 53.751754 69.638199 52.985939 70.910572 52.505859 72.201172 C 52.207459 72.983352 52.071726 73.797171 52.097656 74.644531 L 70.957031 74.644531 L 70.957031 71.261719 L 56.962891 71.261719 C 57.352151 70.622949 57.844556 69.990984 58.441406 69.365234 C 59.038256 68.726454 60.388294 67.520987 62.490234 65.748047 C 65.007374 63.610087 66.803939 61.928535 67.880859 60.703125 C 68.970759 59.477715 69.749707 58.311215 70.216797 57.203125 C 70.683897 56.095035 70.917969 54.967502 70.917969 53.820312 C 70.917969 51.565012 70.119357 49.673687 68.523438 48.148438 C 66.927518 46.623188 64.761147 45.861328 62.023438 45.861328 z "
                transform={`translate(${x},${y})`}
            />
        );
    },

    'mode-color': (x, y, activeClass) => {
        return (
            <g
                className={`mode-button-icon input-mode-color ${activeClass}`}
                transform={`translate(${x},${y})`}
            >
                <rect x="20" y="20" width="45" height="45" fill="#ff8080" />
                <rect x="65" y="20" width="45" height="45" fill="#80b3ff" />
                <rect x="20" y="65" width="45" height="45" fill="#ffe680" />
                <rect x="65" y="65" width="45" height="45" fill="#5fd38d" />
            </g>
        );
    },

};

const stopPropagation = (e) => e.stopPropagation();

function VkbdButtonIcon({btn}) {
    const name = btn.icon;
    return (name && buttonIcons[name])
        ? buttonIcons[name](btn.left, btn.top, btn.activeClass)
        : null;
}

function VkbdButton({btn, inputMode, completed, clickHandler}) {
    let content;
    if (btn.icon) {
        content = <VkbdButtonIcon btn={btn} />;
    }
    else if (inputMode === 'color' && btn.value.match(/^[1-9]$/)) {
        content = (
            <rect
                className={`vkbd-button-swatch color-code-${btn.value}`}
                x={btn.left + 30}
                y={btn.top + 30}
                width={btn.width - 60}
                height={btn.height - 60}
                rx="5"
            />
        );
    }
    else {
        content = (
            <text
                x={btn.left + btn.textX}
                y={btn.top + btn.textY}
                fontSize={btn.fontSize}
                textAnchor="middle"
            >
            {btn.text}
            </text>
        );
    }
    return (
        <g className={`vkbd-button ${completed ? 'completed' : ''}`}>
            <rect
                className="vkbd-button-bg"
                x={btn.left}
                y={btn.top}
                width={btn.width}
                height={btn.height}
                rx="20"
            />
            {content}
            <rect
                x={btn.left}
                y={btn.top}
                width={btn.width}
                height={btn.height}
                fill="transparent"
                data-key-value={btn.value}
                onMouseDown={stopPropagation}
                onClick={clickHandler}
            />
        </g>
    );
}

function VkbdButtonSet({buttonDefs, inputMode, completedDigits, clickHandler}) {
    const buttons = buttonDefs.map(btn => {
        const completed = completedDigits[btn.value];
        return (
            <VkbdButton
                key={btn.value}
                btn={btn}
                inputMode={inputMode}
                completed={completed}
                clickHandler={clickHandler}
            />
        );
    });
    return buttons;
}

function VkbdModePanel({inputMode, clickHandler}) {
    const digitClass = inputMode === 'digit' ? 'active' : '';
    const outerClass = inputMode === 'outer' ? 'active' : '';
    const innerClass = inputMode === 'inner' ? 'active' : '';
    const colorClass = inputMode === 'color' ? 'active' : '';
    return (
        <g className={`vkbd-mode-panel input-mode-${inputMode}`}>
            <rect className="background" x="40" y="40" width="920" height="180" rx="20" />
            <text
                className="mode-label"
                x="175"
                y="160"
                fontSize="68"
                textAnchor="middle"
            >
                Mode:
            </text>
            <rect className="button-bg" x="320" y="65" width="130" height="130" rx="15" />
            <rect className="button-bg" x="480" y="65" width="130" height="130" rx="15" />
            <rect className="button-bg" x="640" y="65" width="130" height="130" rx="15" />
            <rect className="button-bg" x="800" y="65" width="130" height="130" rx="15" />
            <rect className="active-mode-bg" width="150" height="150" rx="15" />
            <VkbdButtonIcon btn={{icon: 'mode-digit', left: 320, top: 65, activeClass: digitClass}} />
            <VkbdButtonIcon btn={{icon: 'mode-outer', left: 480, top: 65, activeClass: outerClass}} />
            <VkbdButtonIcon btn={{icon: 'mode-inner', left: 640, top: 65, activeClass: innerClass}} />
            <VkbdButtonIcon btn={{icon: 'mode-color', left: 800, top: 65, activeClass: colorClass}} />
            <rect x="320" y="65" width="130" height="130" fill="transparent"
                data-key-value="input-mode-digit" onClick={clickHandler} onMouseDown={stopPropagation} />
            <rect x="480" y="65" width="130" height="130" fill="transparent"
                data-key-value="input-mode-outer" onClick={clickHandler} onMouseDown={stopPropagation} />
            <rect x="640" y="65" width="130" height="130" fill="transparent"
                data-key-value="input-mode-inner" onClick={clickHandler} onMouseDown={stopPropagation} />
            <rect x="800" y="65" width="130" height="130" fill="transparent"
                data-key-value="input-mode-color" onClick={clickHandler} onMouseDown={stopPropagation} />
        </g>
    );
}

function keyboardLayout(dimensions) {
    const layout = {};

    if (dimensions.orientation === 'portrait') {
        layout.width = 1240;
        layout.height = 970;

        layout.buttonDefs = portraitPlayButtonDefs.map(def => {
            const btn = { ...portraitPlayBaseButton, ...def };
            btn.text = btn.text || btn.value;
            return btn;
        });
    }
    else {
        layout.width = 1000;
        layout.height = 1210;

        layout.buttonDefs = landscapePlayButtonDefs.map(def => {
            const btn = { ...landscapePlayBaseButton, ...def };
            btn.text = btn.text || btn.value;
            return btn;
        });
    }

    return layout;
}

export default function VirtualKeyboard({dimensions, inputMode, completedDigits, clickHandler}) {
    const layout = keyboardLayout(dimensions);
    return (
        <div className="vkbd">
            <svg version="1.1"
                style={{width: dimensions.vkbdWidth}}
                baseProfile="full"
                viewBox={`0 0 ${layout.width} ${layout.height}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect className="vkbd-background" width="100%" height="100%" rx="40" />
                <VkbdModePanel inputMode={inputMode} clickHandler={clickHandler} />
                <VkbdButtonSet
                    buttonDefs={layout.buttonDefs}
                    inputMode={inputMode}
                    completedDigits={completedDigits}
                    clickHandler={clickHandler}
                />
            </svg>
        </div>
    )
}
