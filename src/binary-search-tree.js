const { NotImplementedError } = require("../extensions/index.js");
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let currentNode = this.rootNode;

    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      } else {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return false;
  }

  find(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return currentNode;
      } else {
        if (data < currentNode.data) {
          currentNode = currentNode.left;
        } else {
          currentNode = currentNode.right;
        }
      }
    }

    return null;
  }

  remove(data) {
    let currentNode = this.rootNode;

    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        // Node with no children
        if (node.left === null && node.right === null) {
          return null;
        }

        if (node.left === null) {
          return node.right;
        } else if (node.right === null) {
          return node.left;
        }

        let successor = node.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        node.data = successor.data;
        node.right = removeNode(node.right, successor.data);
        return node;
      }
    };

    this.rootNode = removeNode(currentNode, data);
  }

  min() {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (!currentNode.left) {
        return currentNode.data;
      } else {
        currentNode = currentNode.left;
      }
    }
  }

  max() {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (!currentNode.right) {
        return currentNode.data;
      } else {
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = {
  BinarySearchTree,
};
