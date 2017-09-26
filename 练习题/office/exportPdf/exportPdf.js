/**
 * Created by TEST on 2016/11/18.
 */
/**
 * Created by TEST on 2016/11/18.
 */
/**
 * Created by TEST on 2016/11/18.
 */
function generateArray(table) {
    var out = [];
    var rows = table.querySelectorAll('tr');
    var ranges = [];
    for (var R = 0; R < rows.length; ++R) {
        var outRow = [];
        var row = rows[R];
        //var columnsTh = row.querySelectorAll('th');
        var columns = row.querySelectorAll('th,td');
        //console.log('columns:',columns);
        for (var C = 0; C < columns.length; ++C) {
            var cell = columns[C];
            var colspan = cell.getAttribute('colspan');
            var rowspan = cell.getAttribute('rowspan');
            var cellValue = cell.innerText;
            if(cellValue !== "" && cellValue == +cellValue) cellValue = +cellValue;

            //Skip ranges
            ranges.forEach(function(range) {
                if(R >= range.s.r && R <= range.e.r && outRow.length >= range.s.c && outRow.length <= range.e.c) {
                    for(var i = 0; i <= range.e.c - range.s.c; ++i) outRow.push(null);
                }
            });

            //Handle Row Span
            if (rowspan || colspan) {
                rowspan = rowspan || 1;
                colspan = colspan || 1;
                ranges.push({s:{r:R, c:outRow.length},e:{r:R+rowspan-1, c:outRow.length+colspan-1}});
            };

            //Handle Value
            outRow.push(cellValue !== "" ? cellValue : null);

            //Handle Colspan
            if (colspan) for (var k = 0; k < colspan - 1; ++k) outRow.push(null);
        }
        out.push(outRow);
    }
    return [out, ranges];
};

function exportPdf(id){
    var theTable = document.getElementById(id);
    var oo = generateArray(theTable);
    //console.log(oo);
    var data = oo[0];

    var dataStringArr = [];
    for(var i=0;i<data.length;i++){
        for(var j=0;j<data[i].length;j++){
            data[i][j]= data[i][j].toString().replace(/,/g,"&&&");
            console.log(data[i][j]);
        }
        dataStringArr[i]=data[i].toString().replace(/,/g," ").replace(/&&&/g,",");
    }

    function down() {
        pdfMake.fonts = {
            Roboto: {
                normal: 'Roboto-Regular.ttf',
                bold: 'Roboto-Medium.ttf',
                italics: 'Roboto-Italic.ttf',
                bolditalics: 'Roboto-Italic.ttf'
            },
            微软雅黑: {
                normal: '微软雅黑.ttf',
                bold: '微软雅黑.ttf',
                italics: '微软雅黑.ttf',
                bolditalics: '微软雅黑.ttf'
            }
        };

        var dd = {
            content:dataStringArr,
            defaultStyle: {
                font: '微软雅黑'
            }
        };

        pdfMake.createPdf(dd).download();
    }
    down();

}