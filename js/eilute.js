function eilute(data, menesiuArray) {

    return `<div class="table-row">
    <div class="cell">${data.month}</div>
    <div class="cell">${menesiuArray}</div>
    <div class="cell">${data.income == undefined ? data.income = 0 : data.income} Eur</div>
    <div class="cell">${data.expense == undefined ? data.expense = 0 : data.expense} Eur</div>
    <div class="cell">${data.income - data.expense} Eur</div>
</div>`;

}

export {eilute};