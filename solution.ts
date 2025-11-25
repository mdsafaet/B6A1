function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  }
  if (typeof value === "number") {
    return value * 10;
  }
  if (typeof value === "boolean") {
    return !value;
  }
}




function getLength(value: string | any[]): number {
  
  if (typeof value === "string") {
   
    return value.length;
  }

  if (Array.isArray(value)) {
   
    return value.length;
  }


}



class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails()  {
       console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

const person1 = new Person("Alice", 30);
person1.getDetails();
const person2 = new Person("Bob", 25);
person2.getDetails();



function filterByRating(
  items: { title: string; rating: number }[]
): { title: string; rating: number }[] {

  return items.filter(item => item.rating >= 4);

}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];



function filterActiveUsers(
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] {
  
return users.filter(user => user.isActive);

}
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book): void {
 
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available:${book.isAvailable ? "Yes" : "No"}`
  );
}

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: false,
};

printBookDetails(myBook);




function getUniqueValues(
    arr1: (number | string)[],
    arr2: (number | string)[]
): (number | string)[] {

    const result: (number | string)[] = [];

    
    function exists(value: number | string, array: (number | string)[]): boolean {
        for (let i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return true;
            }
        }
        return false;
    }

    
    for (let i = 0; i < arr1.length; i++) {
        if (!exists(arr1[i], result)) {
            result[result.length] = arr1[i];
        }
    }

  
    for (let i = 0; i < arr2.length; i++) {
        if (!exists(arr2[i], result)) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}



const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

type Products = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Products[]): number => {
  return products.reduce((acc, product) => {
    const base = product.price * product.quantity;
    const discount = product.discount ?? 0;
    const final = base - (base * discount) / 100;
    return acc + final;
  }, 0);
};

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

