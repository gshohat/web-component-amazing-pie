import {template} from './template';

export class AmazingPie extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

        this._pieElement = this._shadowRoot.querySelector('#pie');
    }

    set options(value) {
        createPie(value, this._pieElement);
    }
}

function createPie(options, _pieElement) {
    let totalValue = createLegend(_pieElement, options.data);
    let offset = 0;
    const pieChartElement = _pieElement.querySelector('.pieID.pie');
    for (let [index, item] of options.data.entries()) {
        const size = sliceSize(item.value, totalValue);
        iterateSlices(size, pieChartElement, offset, index, 0, item.color, _pieElement);
        offset += size;
    }
}

function createLegend(_pieElement, data) {
    let listTotal = 0;
    for (let item of data) {
        let legendElement = document.createElement('li');
        legendElement.style.borderColor = item.color;
        let legendDescriptionElement = document.createElement('em');
        legendDescriptionElement.innerText = item.description;

        let legendValueElement = document.createElement('span');
        legendValueElement.innerText = item.value;

        legendElement.appendChild(legendDescriptionElement);
        legendElement.appendChild(legendValueElement);

        const pieLegendElement = _pieElement.querySelector('.pieID.legend');
        pieLegendElement.appendChild(legendElement);

        listTotal += item.value;
    }
    return listTotal;
}

function sliceSize(value, totalValue) {
    return (value / totalValue) * 360;
}

function iterateSlices(sliceSize, pieElement, offset, currentSliceIndex, sliceCount, color, _pieElement) {
    const sliceID = `${currentSliceIndex}-${sliceCount}`;
    const maxSize = 179;
    if (sliceSize <= maxSize) {
        addSlice(sliceSize, pieElement, offset, sliceID, color, _pieElement);
    } else {
        addSlice(maxSize, pieElement, offset - 1, sliceID, color, _pieElement);
        iterateSlices(sliceSize-maxSize, pieElement, offset + maxSize, currentSliceIndex, sliceCount + 1, color);
    }
}

function addSlice(sliceSize, pieElement, offset, sliceId, color, _pieElement) {
    const sliceElement = document.createElement('div');
    sliceElement.classList.add(`slice`, sliceId);
    sliceElement.style.transform = `rotate(${offset}deg) translate3d(0,0,0)`;

    const sliceSpanElement = document.createElement('span');
    let sizeRotation = -179 + sliceSize;
    sliceSpanElement.style.transform = `rotate(${sizeRotation}deg) translate3d(0,0,0)`;
    sliceSpanElement.style.backgroundColor = color;

    sliceElement.append(sliceSpanElement);
    pieElement.append(sliceElement);
}
