Question 1
Given two strings s and t, determine whether some anagram of t is a substring of s. For example: if s = "udacity" and t = "ad", then the function returns True. Your function definition should look like: question1(s, t) and return a boolean True or False.

Answer 1:

def question1(s, t):
    """
    This function determine whether some anagram of a string is a subtring.

    Input:
        s: the main strings
        t: the anagram

    Result:
        Boolean: True if t is a substring of s. False otherwise
    """
    return t in s

Efficiency: speed and memory space = O(1)


Question 2
Given a string a, find the longest palindromic substring contained in a. Your function definition should look like question2(a), and return a string.

Answer 2:

def question2(a):
    palindromes = []
    for i in range(len(a)):
        for j in range(0, i):
            palindrome = a.lower()[j:i + 1]
            if palindrome == palindrome[::-1]:
                palindromes.append(palindrome)
    if not panlindromes:
        print 'No palindrome found in {}'.format(a)
    else:
        return max(palindromes, key=len)

Efficiency: speed O(n^2) and space O(1)

Question 3
Given an undirected graph G, find the minimum spanning tree within G. A minimum spanning tree connects all vertices in a graph with the smallest possible total weight of edges. Your function should take in and return an adjacency list structured like this:

{'A': [('B', 2)],
 'B': [('A', 2), ('C', 5)],
 'C': [('B', 5)]}
Vertices are represented as unique strings. The function definition should be question3(G)

# I using Tree based disjoint set union() and find()
# Union() = O(1), while find() = 0(n) where n is the depth

parent = {}
ranking = {}

def mySets(vertice):
    parent[vertice] = vertice
    ranking[vertice] = 0

def find(vertice): # NOTE: find the set of the n, the vertices
    if parent[vertice] == vertice:
        return parent[vertice]
    else:
        parent[vertice] = find(parent[vertice])

def union(vertice0, vertice1): # NOTE: Does union of two sets
    root0 = find(vertice0)
    root1 = find(vertice1)

    # NOTE: place lower ranked tree under a higher ranked Tree
    if ranking[root0] < ranking[root1]:
        parent[root0] = root1
    elif ranking[root0] > ranking[root1]:
        parent[root1] = root0
    else:
        parent[root0] = root1
        ranking[root1] += 1







Question 4nnoFind the least common ancestor between two nodes on a binary search tree. The least common ancestor is the farthest node from the root that is an ancestor of both nodes. For example, the root is a common ancestor of all nodes on the tree, but if both nodes are descendents of the root's left child, then that left child might be the lowest common ancestor. You can assume that both nodes are in the tree, and the tree itself adheres to all BST properties. The function definition should look like question4(T, r, n1, n2), where T is the tree represented as a matrix, where the index of the list is equal to the integer stored in that node and a 1 represents a child node, r is a non-negative integer representing the root, and n1 and n2 are non-negative integers representing the two nodes in no particular order. For example, one test case might be

question4([[0, 1, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [0, 0, 0, 0, 0],
           [1, 0, 0, 0, 1],
           [0, 0, 0, 0, 0]],
          3,
          1,
          4)
and the answer would be 3.


def question4(T, r, n1, n2):
    relation = findRelationship(T)
    ziprelation = findRelationship(zip(*T))
    if n1 and n2 in relation:
        return max(set(ziprelation), key=ziprelation.count)
    else:
        print 'Node {} and Node {} do not have common ancestor'.format(n1, n2)

def findRelationship(ls):
    relationshipList = []
    for rows in ls:
        for i, j in enumerate(rows):
            if j == 1:
                relationshipList.append(i)
    return relationshipList




Question 5
Find the element in a singly linked list that's m elements from the end. For example, if a linked list has 5 elements, the 3rd element from the end is the 3rd element. The function definition should look like question5(ll, m), where ll is the first node of a linked list and m is the "mth number from the end". You should copy/paste the Node class below to use as a representation of a node in the linked list. Return the value of the node at that position.

class Node(object):
  def __init__(self, data):
    self.data = data
    self.next = None

class linkedList(object):
    """docstring for linkedList."""
    def __init__(self, head=None):
        self.head = head

    def append(self, new_node):
        current = self.head
        if self.head:
            while current.next:
                current = current.next
            current.next =  new_node
        else:
            current = new_node


def question5(ll, m):
    try:

        if (ll and m == None or m == 0):
            return "Either the first node or the mth number is not given"

        head_position = ll
        mth_position = ll
        if True:
            for index in range(0, m):
                head_position = head_position.next
            while head_position != None:
                head_position = head_position.next
                mth_position = mth_position.next
            return mth_position.data

    except:
        return "error in executing function"

Node1 = Node(340)
Node2 = Node(900)
Node3 = Node(870)
Node5 = Node(609)
Node6 = Node(870)
Node7 = Node(912)
Node8 = Node(614)

myLinked = linkedList(Node1)
myLinked.append(Node8)
myLinked.append(Node7)
myLinked.append(Node5)
myLinked.append(Node3)
myLinked.append(Node2)
myLinked.append(Node6)


print question5(Node1, 4)
print question5(Node1, 5)
print question5(Node1, 2)
print question5(Node1, 1)
