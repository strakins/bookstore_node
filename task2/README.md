# Book Store

### Creating Constructor, iterator....
## Dependencies

 - Node

## Getting Started

 - Clone the [Repo Here](https://github.com/strakins/strakins_node)

 - Navigate to the root directory  


    ```bash
      cd task2

      node index.js
    ```

- First, run the development server:

## Questions Solved 

``` Build a library catalog that let you add and retrieve books using different methods given the 
    following steps: 

    1. create a `Book` constructor function with properties `title`, `author`, and `genre` 

 

    2. create a `LibraryCatalog` constructor function with properties `books` initialized to an empty array. 

 

    3. add the following methods to the LibraryCatalog prototype using any method of your choice and implement their functionalities 

    - `addBook`: add a book to the catalog 

    - `bookIterator`: a generator function that iterate over the books in the catalog c. `Symbol.iterator`: returns the same generator function that allow using the same iteration protocol to iterate over the books. 

    - `getBooksByAuthor`: return books given an author name as an argument

