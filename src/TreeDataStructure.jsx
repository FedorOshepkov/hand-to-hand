class Node {
  // interacts with pure data
  constructor(parent = null, path) {
    this.parent = parent;
    this.children = [];
    this.sourceVideo = path;
    this.placeholder = null;
    this.index = [0];
    if (parent != null) {
      parent.addChild(this);
      this.generateIndex();
    }

    //parent.addChild(this);
    //this.index = generateIndex();
    console.log(this);
  }

  addChild(NewNode) {
    this.children.push(NewNode);
    NewNode.parent = this;
  }
  removeChild(index) {
    Node.children.splice(index, 1);
  }

  //Generate index array on node creation
  generateIndex() {
    this.index = [];
    let indexFrom = this.parent;
    let newIndexFrom = null;

    while (indexFrom != null) //till reach root node
    {
      this.index.unshift(indexFrom.children.length - 1);
      newIndexFrom = indexFrom.parent;
      indexFrom = newIndexFrom;
    }
  }
}

class DataBaseTree {
  // interacts with Nodes only  

  constructor(root = null) {
    this.root = root;

    if (root == null) { this.nodeNum = 0; }
    else { this.nodeNum = 1; }

    //this.indexMap = new Map(); //add custom method

    console.log(this);
  }

  // why head not root?
  insertAtRoot(NewNode) {
    if (NewNode.parent == null) {
      NewNode.addChild(this.head);
      this.root = NewNode;
      this.nodeNum++;
    }
  }

  getByIndex(index) {
    if (index == null) {
      return this.root;
    }
    if (Array.isArray(index) == true) {                              // index / id = [0, 1, 1, 2, ...] 
      let currNode = this.root;
      let nextNode = null;
      for (let i = 0; i < index.length; i++) {
        if (currNode.children.length < index[i]) { return null; } // error id exceeds         
        nextNode = currNode.children[index[i]];
        currNode = nextNode;
      }
      return currNode;
    }
    if (Array.isArray(index) == false) {
      if (this.head.children.length < index) { return null; } // error id exceeds 
    }

  }

  addNode(targetNode, NewNode) {
    targetNode.children.push(NewNode);
  }
};

let testRoot = new Node(null, "test path 1");
let testTree = new DataBaseTree(testRoot);
let testNode1 = new Node(testRoot, "test path 2");
let testNode20 = new Node(testNode1, "test path 3");
let testNode21 = new Node(testNode1, "test path 4");
let testNode3 = new Node(testNode21, "test path 5");

console.log(testTree.getByIndex([0,1,0]));
//console.log(testRoot);
//console.log(testTree);
//console.log(testNode1);
