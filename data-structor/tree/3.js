
// 首先创建一个类来表示二叉查找树，它的内部应该有一个Node类，用来创建节点
function BinarySearchTree () {
    var Node = function (key) {
        this.key = key;
        this.left = left;
        this.right = right;
    }
}

// 向树中插入一个键
// 向树中插入一个新的键，首页应该创建一个用来表示新节点的Node类实例，
// 因此需要new一下Node类并传入需要插入的key值，
// 它会自动初始化为左右节点为null的一个新节点
// 然后，需要做一些判断，先判断树是否为空，若为空，
// 新插入的节点就作为根节点，如不为空，调用一个辅助方法insertNode()方法，
// 将根节点和新节点传入

this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) {
        root = newNode;
    } else {
        insertNode(root, newNode)
    }
}

