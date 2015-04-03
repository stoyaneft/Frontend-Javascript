function Paragraph(text) {

    this.getText = function(){
        return text;
    }
};

Paragraph.prototype.render = function(){
    return '<p>' + this.getText() + '</p>';
};

var Div = function(){
    var childs = [];

    return {
        render: function(){
            var result = '\n<div>';
            childs.forEach(function(child){
                result += '\n  ';
                result += child.render();
            });
            if (childs.length > 0){
                result += '\n';
            }
            result += '</div\n';
            return result;
        },

        addChild: function(child){
            childs.push(child);
        }
    };
};

function zip(arrays) {
    return arrays[0].map(function(_,i){
        return arrays.map(function(array){return array[i]})
    });
}

var Table = function(tableData){
    var head = [];
    var body = [];

    if (tableData instanceof(Array)){
        head = tableData[0];
        body = tableData.slice(1);
    } else {
        head = tableData.keys();
        for (var key in head){
            body.push(head[key]);
        }
        body = zip(body);
    }

    var result = "";
    return {
        render: function(){
            result += '\n<table>\n  <thead>\n    <tr>\n';
            head.forEach(function(column){
                result += '       <th>' + column + '</th>\n';
            });
            result += '    </tr>\n  </thead>\n  <tbody>\n';
            body.forEach(function(row){
                result += '    <tr>\n';
                row.forEach(function(element){
                    result += '      <td>' + element + '</td>\n'
                });
                result += '    </tr>\n';
            });
            result += '  </tbody>\n</table>\n';
            return result;
        }
    };
};
