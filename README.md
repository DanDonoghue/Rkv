# Rkv
Relational Key-Value JSON Builder

This project allows many-to-many relational data to be encoded in JSON. It does this by moving the hierarchical portion of JSON into a property on each value, replacing the one-to-many relationships already in JSON.
The code also introduces a property for storing the identifiers for multiple parents on children elements, allowing for many-to-many datasets.

## Example output

```
Rkv {
  "a": {
    "_parent": [],
    "_child": ["c"]
    // I'm a parent
  },
  "b": {
    "_parent": [],
    "_child": ["c","d"]
    // I'm also a parent, but I have two children. One of my own, and one shared with "a".
  },
  "c": {
    "_parent": ["a","b"],
    "_child": []
    // I'm a child with two parents
  },
  "d": {
    "_parent": ["b"],
    "_child": []
    // I'm a child with only one parent
  }
}
```
