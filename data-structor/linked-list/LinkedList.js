// 链表
import LinkedListNode from './LinkedListNode';
// 形成链表? 结点链起来?
// 数据集合从开始到结束显示出来 
// [] next
// head
//     next
//     .....
// tail 尾


export default class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null;
    }
    toArray () { //形象地把一个数据结构变成一个数组
        const nodes = []; //
        let currentNode = this.head; 
        while (currentNode) { //当这个结点存在的时候
            nodes.push(currentNode);
            currentNode = currentNode.next;
        }
        return nodes;
    }
    append (value) {
        const newNode = new LinkedListNode(value);
        // {value, next}
        if (!this.head) {  //如果这是一个空的表
            this.head = newNode;
            this.tail = newNode;
            return this; //支持链式调用
        }
        this.tail.next = newNode; //在尾部插入一个结点
        this.tail = newNode; //尾部结点
        return this; //支持链式调用

        // 1. 空的 head为null 
        // 2. 非空 tail.next null
    }
    prepend(value) { //把结点放在最前面
        const newNode = new LinkedListNode(value, this.head); //实例化一个结点->head结点
        this.head = newNode;
 
        if(!this.tail) { //空的链表
            this.tail = newNode; 
        }
        return this;
    }
    delete(value) {
        if (!this.head) { //空链表
            return null;
        }

        let deleteNode = null;
        //判断头结点是不是要删除的
        while(this.head && this.head.value === value) {
            deleteNode = this.head;
            this.head = this.head.next;
        }
        let currentNode = this.head;
        if (currentNode !== null) {
            while(currentNode.next) {
                if (currentNode.next.value === value) {
                    deleteNode = currentNode.next;
                    currentNode.next = currentNode.next.next;

                } else {
                    currentNode = currentNode.next;
                }
            }
        }
        //如果要删除的结点是尾结点
        if (this.tail.value === value) {
            this.tail = currentNode;
        }
        return deleteNode;
    }
    //   value默认值undefined
    find({value = undefined, callback = undefined} ) {
        if (!this.head) {
            return null;
        }
        
        let currentNode = this.head;

        while (currentNode) {
            if (callback && callback(currentNode.value)) {
                return currentNode;
            }
            if (value !== undefined && currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next; 
        }
            return null;
        
    }
    toString(callback) { //返回链表上每个结点的value                将数组变成字符串
        return this.toArray().map(node => node.toString(callback)).toString() //toArray():将链表变成一个数组或者一个集合, map(): 将一个链表结点数组变成值的数组
    } 
}