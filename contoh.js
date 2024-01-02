/*
function addTwoNumbers(a, b){
    return a * b;
}

console.log(addTwoNumbers(10, 19));

function evenOrOdd(n) {
    if (n % 2 == 0){
        return "Bilangan Genap"
    }
    return "Bilangan Ganjil"
}
console.log(evenOrOdd(10));

// Define an array of names
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];

//acces and manipulatif the array
console.log("List of names : ", names);

//add a new name to the end of array
names.push("Frank")
console.log("After adding 'Frank' : ", names);

//Remove the last name of array
names.pop();
console.log("After removing the last name :", names);

//Acces a specific name by index
const secondName = names[1];
console.log("The Second name in the list is : ", secondName);

//Find the number of names in the array
const numberOfnames = names.length
console.log("Number of Names in the list : ", numberOfnames);

//fungsi membalikkan string
function reverseString(str) {
    // Menggunakan metode split() untuk mengonversi string menjadi array karakter
    var array = str.split("");
    
    // Menggunakan metode reverse() untuk membalikkan urutan elemen dalam array
    var reversedArray = array.reverse();
    
    // Menggunakan metode join() untuk mengonversi array kembali menjadi string
    var reversedString = reversedArray.join("");
    
    // Mengembalikan string yang sudah dibalikkan
    return reversedString;
  }
  
  // Contoh membalikkan string
  var originalString = "Hello, World!";
  var reversedString = reverseString(originalString);
  
  console.log("Original: " + originalString);
  console.log("Reversed: " + reversedString);
  

  //Latihan 1
  function reverseString(inputString) {
    return inputString.split('').reverse().join('');
  }
  
  // Contoh penggunaan
  var originalString = "Hello, World!";
  var reversedString = reverseString(originalString);
  console.log("Original: " + originalString);
  console.log("Reversed: " + reversedString);

  //Latihan 2
  function isPalindrome(str) {
    // Menghapus spasi, tanda baca, dan mengubah huruf menjadi huruf kecil
    var cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
    // Membandingkan string dengan string yang sudah dibalik
    var reversedStr = cleanedStr.split('').reverse().join('');
    
    return cleanedStr === reversedStr;
  }
  
  // Contoh penggunaan
  var palindromeString = "A man, a plan, a canal, Panama!";
  //radar, level, civic, madam, racecar, kayak, rotor, refer, madam, deed
  var isPalindromic = isPalindrome(palindromeString);
  console.log("Is Palindromic: " , isPalindromic);


  //Latihan 3
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Contoh penggunaan
  var n = 10; // Menghasilkan deret Fibonacci ke-10
  var result = fibonacci(n);
  console.log("Fibonacci ke-" + n + ": " + result);
  

  //Latihan 3 Rev
  function generateFibonacci(length) {
    let fibArr = [0,1];
    for (let i = 2; i<length; i++) {
        fibArr.push(fibArr[i-2] + fibArr[i - 1]);
    }
    return fibArr;
  }
  
  console.log(generateFibonacci(10));

// Buat variabel dengan nama `firstName` dan `lastName`.
var firstName, lastName;

// Berikan nilai "John" untuk variabel `firstName` dan "Doe" untuk variabel `lastName`.
firstName = "John";
lastName = "Doe";

// Tampilkan nilai variabel `firstName` dan `lastName` menggunakan `console.log()`.
console.log( firstName + " " + lastName);

// 1. Deklarasikan variabel `age` dan simpan nilai 30 di dalamnya.
var age = 30;

// 2. Periksa tipe data dari variabel `age` menggunakan `typeof` operator.
console.log("Tipe data dari age:", typeof age);

// 3. Deklarasikan variabel `isStudent` dan simpan nilai `true` di dalamnya.
var isStudent = true;

// 4. Periksa tipe data dari variabel `isStudent` menggunakan `typeof` operator.
console.log("Tipe data dari isStudent:", typeof isStudent);

// 1. Buat dua variabel, `num1` dan `num2`, dan simpan nilai 10 dan 20 di dalamnya.
var num1 = 10;
var num2 = 20;

// 2. Hitung hasil penjumlahan `num1` dan `num2` dan tampilkan hasilnya.
var sum = num1 + num2;
console.log("Penjumlahan:", sum);

// 3. Hitung hasil pengurangan `num1` dan `num2` dan tampilkan hasilnya.
var difference = num1 - num2;
console.log("Pengurangan:", difference);

// 4. Hitung hasil perkalian `num1` dan `num2` dan tampilkan hasilnya.
var product = num1 * num2;
console.log("Perkalian:", product);

// 5. Hitung hasil pembagian `num1` dan `num2` dan tampilkan hasilnya.
var quotient = num1 / num2;
console.log("Pembagian:", quotient);

// 1. Buat variabel `age` dan simpan nilai 18 di dalamnya.
var age = 18;

// 2. Gunakan `if` statement untuk memeriksa apakah `age` lebih besar dari atau sama dengan 18.
if (age >= 18) {
  // 3. Jika `age` lebih besar dari atau sama dengan 18, tampilkan pesan "Anda sudah dewasa".
  console.log("Anda sudah dewasa");
} else {
  // 4. Jika tidak, tampilkan pesan "Anda masih belum dewasa".
  console.log("Anda masih belum dewasa");
}

//No 6
{
    //Membuat fungsi greet() yang menerima parameter name dan mengembalikan pesan sapaan:
    function greet(name) {
      return "Hello, " + name + "!";
  }
    // Memanggil fungsi greet() dengan parameter "John" dan menampilkan hasilnya:
    var greetingMessage = greet("John");
    console.log(greetingMessage);
  
    //Membuat fungsi calculateArea() yang menerima parameter width dan height dan mengembalikan luas persegi panjang:
    function calculateArea(width, height) {
    return width * height;
  }
    //Memanggil fungsi calculateArea() dengan parameter 10 dan 5 dan menampilkan hasilnya:
    var area = calculateArea(10, 5);
    console.log("Luas Persegi Panjang:", area);
  }

  // Membuat array fruits yang berisi elemen "apple", "banana", dan "orange":
var fruits = ["apple", "banana", "orange"];
// Mengakses elemen pertama pada array fruits dan menampilkannya:
console.log("Elemen pertama pada array fruits:", fruits[0]);
// Mengubah nilai elemen kedua pada array fruits menjadi "grape":
fruits[1] = "grape";
// Menambahkan elemen "mango" ke akhir array fruits:
fruits.push("mango");
// Menggunakan for loop untuk mencetak semua elemen pada array fruits:
console.log("\nSemua elemen pada array fruits:");
for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
*/

//No 1 
{
    // Buat variabel dengan nama `firstName` dan `lastName`.
    var firstName, lastName;

    // Berikan nilai "John" untuk variabel `firstName` dan "Doe" untuk variabel `lastName`.
    firstName = "John";
    lastName = "Doe";

    // Tampilkan nilai variabel `firstName` dan `lastName` menggunakan `console.log()`.
    console.log( firstName + " " + lastName);
}

//No 2
{
    // Deklarasikan variabel `age` dan simpan nilai 30 di dalamnya.
    var age = 30;

    // Periksa tipe data dari variabel `age` menggunakan `typeof` operator.
    console.log("Tipe data dari age:", typeof age);

    // Deklarasikan variabel `isStudent` dan simpan nilai `true` di dalamnya.
    var isStudent = true;

    // Periksa tipe data dari variabel `isStudent` menggunakan `typeof` operator.
    console.log("Tipe data dari isStudent:", typeof isStudent);
}

//No 3
{
    // Buat dua variabel, `num1` dan `num2`, dan simpan nilai 10 dan 20 di dalamnya.
    var num1 = 10;
    var num2 = 20;

    // Hitung hasil penjumlahan `num1` dan `num2` dan tampilkan hasilnya.
    var sum = num1 + num2;
    console.log("Penjumlahan:", sum);

    // Hitung hasil pengurangan `num1` dan `num2` dan tampilkan hasilnya.
    var difference = num1 - num2;
    console.log("Pengurangan:", difference);

    // Hitung hasil perkalian `num1` dan `num2` dan tampilkan hasilnya.
    var product = num1 * num2;
    console.log("Perkalian:", product);

    // Hitung hasil pembagian `num1` dan `num2` dan tampilkan hasilnya.
    var quotient = num1 / num2;
    console.log("Pembagian:", quotient);
}

//No 4
{
    // Buat variabel `age` dan simpan nilai 18 di dalamnya.
    var age = 18;

    // Gunakan `if` statement untuk memeriksa apakah `age` lebih besar dari atau sama dengan 18.
    if (age >= 18) {
      // Jika `age` lebih besar dari atau sama dengan 18, tampilkan pesan "Anda sudah dewasa".
      console.log("Anda sudah dewasa");
    } else {
      // Jika tidak, tampilkan pesan "Anda masih belum dewasa".
      console.log("Anda masih belum dewasa");
    }
}

//No 5
{
      // Menggunakan for loop untuk mencetak angka dari 1 hingga 10
    console.log("Menggunakan for loop untuk mencetak angka dari 1 hingga 10:");
    for (var i = 1; i <= 10; i++) {
      console.log(i);
    }
      // Menggunakan while loop untuk mencetak angka dari 10 hingga 1
    console.log("\nMenggunakan while loop untuk mencetak angka dari 10 hingga 1:");
    var j = 10;
    while (j >= 1) {
      console.log(j);
      j--;
    }
      // Menggunakan do-while loop untuk mencetak angka dari 1 hingga 10 bahkan jika kondisi loop tidak terpenuhi pada awalnya.
    console.log("\nMenggunakan do-while loop untuk mencetak angka dari 1 hingga 10:");
    var k = 1;
    do {
      console.log(k);
      k++;
    } while (k <= 10);
}

//No 6
{
      //Membuat fungsi greet() yang menerima parameter name dan mengembalikan pesan sapaan:
      function greet(name) {
        return "Hello, " + name + "!";
    }
      // Memanggil fungsi greet() dengan parameter "John" dan menampilkan hasilnya:
      var greetingMessage = greet("John");
      console.log(greetingMessage);

      //Membuat fungsi calculateArea() yang menerima parameter width dan height dan mengembalikan luas persegi panjang:
      function calculateArea(width, height) {
      return width * height;
    }
      //Memanggil fungsi calculateArea() dengan parameter 10 dan 5 dan menampilkan hasilnya:
      var area = calculateArea(10, 5);
      console.log("Luas Persegi Panjang:", area);
}

//No 7
{
    // Membuat array fruits yang berisi elemen "apple", "banana", dan "orange":
    var fruits = ["apple", "banana", "orange"];
    // Mengakses elemen pertama pada array fruits dan menampilkannya:
    console.log("Elemen pertama pada array fruits:", fruits[0]);
    // Mengubah nilai elemen kedua pada array fruits menjadi "grape":
    fruits[1] = "grape";
    // Menambahkan elemen "mango" ke akhir array fruits:
    fruits.push("mango");
    // Menggunakan for loop untuk mencetak semua elemen pada array fruits:
    console.log("\nSemua elemen pada array fruits:");
    for (var i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }
}

//No 8
{
    // Membuat objek person dengan properti name, age, dan occupation:
    var person = {
      name: "John",
      age: 30,
      occupation: "Developer"
    };
    // Mengakses properti name pada objek person dan menampilkannya:
    console.log("Properti name pada objek person:", person.name);
    // Mengubah nilai properti age pada objek person menjadi 35:
    person.age = 35;
    // Menambahkan properti city ke objek person dengan nilai "Jakarta":
    person.city = "Jakarta";
    // Menggunakan for-in loop untuk mencetak semua properti dan nilainya pada objek person:
    console.log("\nProperti dan nilai pada objek person:");
    for (var key in person) {
      console.log(key + ": " + person[key]);
    }
}

//No 9
{
    // Buat kelas `Product` dengan properti `name`, `price`, dan `quantity`.
    class Product {
      // Constructor untuk kelas `Product` yang menerima parameter `name`, `price`, dan `quantity`.
      constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
      }

      // Metode `getName()` pada kelas `Product` yang mengembalikan nilai properti `name`.
      getName() {
        return this.name;
      }

      // Metode `getPrice()` pada kelas `Product` yang mengembalikan nilai properti `price`.
      getPrice() {
        return this.price;
      }

      // Metode `getQuantity()` pada kelas `Product` yang mengembalikan nilai properti `quantity`.
      getQuantity() {
        return this.quantity;
      }

      // Metode `totalPrice()` pada kelas `Product` yang menghitung dan mengembalikan total harga produk (price * quantity).
      totalPrice() {
        return this.price * this.quantity;
      }
    }

    // Contoh
    var product1 = new Product("Car", 850, 2);

    console.log("Product Name:", product1.getName());
    console.log("Product Price:", product1.getPrice());
    console.log("Product Quantity:", product1.getQuantity());
    console.log("Total Price:", product1.totalPrice());
}