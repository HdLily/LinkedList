class TreeNode {
    constructor(value) { //结点有他自身的值
        this.value = value;
        this.descendents = []; //子节点

    }
}


//五个子节点
const abe = new TreeNode('abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');

abe.descendents.push(homer);
homer.descendents(bart, lisa, ,maggie);