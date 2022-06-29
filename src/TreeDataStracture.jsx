class Node {
    // interacts with pure data
    constructor(parent, path, children) {
      this.parent = null;
      this.child = children;
      this.sourceVideo = path;
      this.placeholder = null;
      this.index = null;
      generateIndex();
    }

    addChild(NewNode) {
      Node.children.push(NewNode);
      NewNode.parent = Node;
    }
    removeChild(index) {
      Node.children.splice(index, 1);
    }

    //Generate index array on node creation
    generateIndex() {
      let index = [];
      let indexFrom = this.parent;
      let newIndexFrom = indexFrom.parent;

      for (; ;) //till reach root node
      {
        newIndexFrom = indexFrom.parent;
        if (indexFrom == null) {
          break;
        }
        index.unshift(indexFrom.child.length + 1);
        indexFrom = newIndexFrom;
      }
    }
  }

  class DataBaseTree {
    // interacts with Nodes only  

    constructor(root) {
      this.root = null;
      this.nodeNum = 0;
      this.indexMap = new Map();
    }

    // why head not root?
    insertAtHead(NewNode) {
      if (NewNode.parent == null) {
        NewNode.addChild(this.head);
        this.head = NewNode;
        this.nodeNum++;
      }
    }

    getById(id) {
      if (id == null) {
        return this.head;
      }
      if (isArray(id) == true) {                              // id = [0, 1, 1, 2, ...] 
        let currNode = this.head.child[id[0]];
        nextNode = currNode.child[id[1]];
        for (let index = 1; index < id.length; index++) {
          if (this.head.children.length < id) { return null; } // error id exceeds 
          currNode = nextNode;
          nextNode = currNode.child[id[index]];
        }

      }
      if (isArray(id) == false) {
        if (this.head.children.length < id) { return null; } // error id exceeds 
      }

    }

    addNode(targetNode, NewNode) {
      targetNode.children.push(NewNode);
    }
  };
