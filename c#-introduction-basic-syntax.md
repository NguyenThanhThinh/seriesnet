## C# Introduction

- C# is modern, flexible, general-purposeprogramming language

- Object-oriented by nature, statically-typed, compiled

- Runs  on **NET Framework / .NET Core**


## Reading from the Console

- We can **read/write** to the console, using the Console **class**

``` 
using System;
```
- Reading input from the console using **Console.ReadLine()**

```
string name = Console.ReadLine(); // return string

```

## Converting Input from the Console

- **Console.ReadLine()** returns a string 

- Convert the string to number by parsing:

```
string name = Console.ReadLine();

int age = int.Parse(Console.ReadLine());
double salary = double.Parse(Console.ReadLine());

```

## Printing to the console

 - We can print to the console, using the Console class
- Use the System namespace to access System.Console class
> Writing output to the console:
Console.Write()
Console.WriteLine()

```
Console.Write("Hi, ");
Console.WriteLine("Hong An!");

```

## Using Placeholders

- Using placeholders to print on the console

```
string name = "Hong An";
int age = 40;
Console.WriteLine("Name: {0}, Age: {1}", name, age);

```

## Formatting Numbers in Placeholders

- D – format number to certain digits with leading zeros
- F – format floating point number with certain digits after the decimal point

```
Console.WriteLine("{0:F2}", grade);      // 5.53
Console.WriteLine("{0:D3}", percentage); // 055

```

## Using String Interpolation C# 6.0

- Using string interpolation to print on the console

```
string name = "Messi";
int age = 45;

Console.WriteLine($"Name: {name}, Age: {age}");
//Name: Messi, Age 45

```

## Problem: Student Information
- You will be given 3 input lines:
> Student Name, Age and Average Grade
- Print the input in the following format:
 > "Name: {name}, Age: {age}, Grade: {grade}"
Format the grade to 2 decimal places

```
 string name = console.Readline();

 int age = int.Parse(console.Readline());

 double grade = double.Parse(Console.ReadLine());

Console.WriteLine($"Name: {name}, Age: {age}, Grade: {grade:f2}");


```

## Comparison Operators
| Operator  |   Are      
|--------|:----------
| Equals |  == 
| Not Equals|  !=
| Greater Than | >
| Less Than | <
| Greater Than or Equals | >=
| Less Than or Equals | <=

## Comparing Numbers

- Values can be compared:

```
int a = 5;
int b = 10;
Console.WriteLine(a < b); //true
Console.WriteLine(a > 0); // true
Console.WriteLine(a > 100); // false
Console.WriteLine(a < a);  //false
Console.WriteLine(a <= 5); // true
Console.WriteLine(b == 2 * a); // true
```

## if-else Statement

- The most simple conditional statement
> Example: Take as an input a grade and check if the student has passed the exam (grade >= 3.00)

```
double grade = double.Parse(Console.ReadLine());
if (grade >= 3.00)
{
  Console.WriteLine("Passed!");
}

```

## The if-else Statement

- Executes one branch if the condition is true and another, if it is false 
> Example: Upgrade the last example, so it prints "Failed!", if the mark is lower than 3.00:

```
if (grade >= 3.00)
{
  Console.WriteLine("Passed!");
}
else 
{
  // TODO: Print the message //
}

```

