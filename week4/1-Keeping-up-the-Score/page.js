function text(content) {
    return document.createTextNode(content);
}

function hasKey(dict, key) {
    return typeof dict[key] !== "undefined";
}

Element.createElement = function(tagName, content, attributes) {
    attributes = attributes || {};

    var obj = document.createElement(tagName);
    obj.appendChild(text(content));

    if(hasKey(attributes, "id")) {
        obj.id = attributes["id"];
    }

    if(hasKey(attributes, "float")){
        obj.style.float = attributes["float"];
    }

    return new Element(obj);
};

function Element(domElement) {
    this.domElement = domElement;
}

Element.prototype.appendChild = function(child) {
    if(child instanceof Element) {
        child = child.domElement;
    }

    this.domElement.appendChild(child);
};

Element.prototype.on = function(type, callback) {
    this.domElement.addEventListener(type, callback);
};

Element.prototype.attr = function(attributeName, attributeValue) {
    var aliases = {
        "class": "className"
    };

    if(hasKey(aliases, attributeName)) {
        attributeName = aliases[attributeName];
    }

    if(hasKey(this.domElement, attributeName)) {
        if (typeof attributeValue === "undefined") {
            return this.domElement[attributeName];
        } else {
            this.domElement[attributeName] = attributeValue;
            return attributeValue;
        }
    }
};


function print(obj) {
    console.log(obj);
}

document.addEventListener("DOMContentLoaded", function(event) {

    function buttonClickHandler(event) {
        var id = event.target.id;
        scores[id] += 1;
        document.getElementById(id + "Score").firstChild.data = scores[id];
    }

    function renderTeam(teamName, position){
        var teamDiv = Element.createElement("div", "", {
            float: position
        });
        teamDiv.domE

        var teamButton = Element.createElement("button", teamName, {
            id: teamName
        });

        var teamScoreText =  teamName + " Score: ";
        var teamHeading = Element.createElement("h1", teamScoreText);

        var teamSpan = Element.createElement("span", "0", {
            id: teamName + "Score"
        });

        teamHeading.appendChild(teamSpan);

        teamButton.on("click", buttonClickHandler);

        teamDiv.appendChild(teamHeading.domElement);
        teamDiv.appendChild(teamButton.domElement);

        container.appendChild(teamDiv.domElement);
    }

    var scores = {
            "Team A": 0,
            "Team B": 0
          };
    container = document.getElementById("container");
    renderTeam('Team A', 'left');
    renderTeam('Team B', 'right');

});
