
function initRuns() {
    var template = $('#exampleDom');
    $('#casesDom').html(template.html());
    $('#improvementsDom').html(template.html());
}

function runCase() {

    var row1 = $('#casesDom tbody tr:nth-child(1)');
    var row2 = $('#casesDom tbody tr:nth-child(2)');

    var row3 = $('#casesDom tbody tr:nth-child(3)');
    var row4 = $('#casesDom tbody tr:nth-child(4)');

    var html1 = row1.html();
    var html2 = row2.html();

    var html3 = row3.html();
    var html4 = row4.html();

    row1.html(html4);
    row4.html(html1);

    row2.html(html3);
    row3.html(html2);
}

function runImprovement() {

    var row1 = $('#improvementsDom tbody tr:nth-child(1)');
    var row2 = $('#improvementsDom tbody tr:nth-child(2)');

    var row3 = $('#improvementsDom tbody tr:nth-child(3)');
    var row4 = $('#improvementsDom tbody tr:nth-child(4)');

    var html1 = row1.html();
    var html2 = row2.html();

    var html3 = row3.html();
    var html4 = row4.html();

    var res = document.createDocumentFragment();
    var line;

    line = document.createElement('tr');
    line.innerHTML = html4;
    res.appendChild(line);

    line = document.createElement('tr');
    line.innerHTML = html3;
    res.appendChild(line);

    line = document.createElement('tr');
    line.innerHTML = html2;
    res.appendChild(line);

    line = document.createElement('tr');
    line.innerHTML = html1;
    res.appendChild(line);


    var staleTableContents = $('#improvementsDom tbody');
    staleTableContents.html('');
    staleTableContents.append(res);
}
