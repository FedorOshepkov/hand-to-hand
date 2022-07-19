class Node {
  // interacts with pure data
  constructor(name) {
    this.nodeName = name;
    this.children = [];
    //this.parent = parent;
    //this.placeholder = null;
    this.route = [0];
    this.id = 0;
    // if (parent != null) {
    //   parent.addChild(this);
    //   this.generateRoute();
    // }

    //parent.addChild(this);
    //this.route = generateRoute();
  }

  addChild(NewNode) {                 //delete
    this.children.push(NewNode);
    NewNode.parent = this;
  }
  setId(id) {
    this.id = id;
  }

  removeChild(index) {                //delete 
    Node.children.splice(index, 1);
  }

  //Generate route array on node creation
  generateRoute() {
    this.route = [];
    let routeFrom = this.parent;
    let newRouteFrom = null;

    while (routeFrom != null) //till reach root node
    {
      this.route.unshift(routeFrom.children.length - 1);
      newRouteFrom = routeFrom.parent;
      routeFrom = newRouteFrom;
    }
  }
}

class DataBaseTree {
  // interacts with Nodes only  
  constructor() {
    this.root = null;
    this.idMap = new Map();
    this.nodeNum = 0;
    this.idNum = 0;
  }

  addNode(childNode, parentNode = null) {
    if (this.getIdByNode(childNode) != null) { return; }
    if (this.root == null) {
      this.root = childNode;
    }

    if (parentNode != null) {
      parentNode.children.push(childNode);
    }
    childNode.parent = parentNode;
    childNode.setId(this.idNum);
    this.idMap.set(childNode.id, childNode);

    this.nodeNum++;
    this.idNum++;
  }

  deleteNode(node) {
    if (node === null) { return null; }
    let indexOfNode = node.parent.children.indexOf(node);
    node.parent.children.splice(indexOfNode, 1);
    let keyOfNode = this.getIdByNode(node);
    this.idMap.delete(keyOfNode);
    this.nodeNum--;
    //this.idMap.delete(node.id); equal option
  }

  getIdByNode(node) {
    for (let [key, value] of this.idMap.entries()) {
      if (value === node)
        return key;
    }
  }
  getById(id) {
    if (this.idMap == null) { return null; }
    return this.idMap.get(id);
  }
  deleteById(id) {
    let node = this.getById(id);
    this.idMap.delete(id);
    this.deleteNode(node);
  }
  getByRoute(route) {
    if (route == null) {
      return this.root;
    }
    if (Array.isArray(route) === true) {                              // route / id = [0, 1, 1, 2, ...] 
      let currNode = this.root;
      let nextNode = null;
      if (currNode == null) { return null; }
      if (currNode.children == null) { return null; }

      for (let i = 0; i < route.length; i++) {
        if (currNode.children.length < route[i]) { return null; } // error id exceeds         
        nextNode = currNode.children[route[i]];
        currNode = nextNode;
      }
      return currNode;
    }
    if (Array.isArray(route) === false) {
      if (this.head.children.length < route) { return null; } // error id exceeds 
    }

  }
};

