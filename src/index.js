import "./styles.css";
import * as utils from "./utils.js";
import * as dataBusiness from "./data-business.js";

dataBusiness.getCharacters().then(data => {
    console.log(data);
    const characters = data.results;
    const nodes = [];

for(let character of characters) {
    const node = utils.createCharacterRow(character);
    node.onclick = () => utils.showCharacter(character);
    nodes.push(node);
    document.getElementById("root").append(node);
}
});

