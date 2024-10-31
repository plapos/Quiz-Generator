const quiz = [
    {
        q:"How do you write an if statement?",
        options: ["if ()","als ()", "else ()", "else if ()"],
        answer: 0,
        //img: "img/square.png",
        topic: "programming"
    },
    {
        q:"Which of these is an assignment operator?",
        options: ["=","==", "+", "/"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Which for loop is correct?",
        options: ["for (1; x < 5; i--)","for(x; 5; ++1)", "for(int i = 0; i < 5; i++)", "for(int i = 0, i < 5, i++)"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"Which while loop is correct?",
        options: ["while (true) { }","while true { }", "continue (true) { }", "while (1)"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Which one will return an value?",
        options: ["give 1;","rerun 2;", "*a = 1;", "return 1;"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"How do you invoke a function?",
        options: ["function { };","function[x];", "function();", "(function);"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"What will be the result? int a[2] = { 1, 5 }; int *p; p = a; p++;",
        options: ["*p = 1","p = 1", "*p = 5", "p = 5"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"What is a correct array?",
        options: ["int a() = { 1, 2 };","int a{} = [ 1, 2 ];", "int a = ( 1, 2 );", "int a[2] = { 1, 2 };"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Which type is incorrect?",
        options: ["int","double", "float", "array"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Which one is a function prototype?",
        options: ["void function ();","function ();", "void function [];", "() function { };"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Which function is correct?",
        options: ["void function () { }","function [] { }", "function ( { } )", "void function [ ] ( )"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Which of these is NOT an arithmetic operator?",
        options: ["+","+=", "/", ">="],
        answer: 3,
        topic:"programming",
    },
    {
        q:"What is a named storage location that stores a value that can change known as?",
        options: ["Constant","Variable", "Casting", "Input"],
        answer: 1,
        topic:"programming",
    },
    {
        q:"What is a named storage location that stores a value that cannot change known as?",
        options: ["Constant","Variable", "Print", "Input"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Data inside quotation marks is defined as which data type?",
        options: ["String","Integer", "Float", "Boolean"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"Which data type represents a whole number?",
        options: ["Float","Boolean", "String", "Integer"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Which technique is used to convert what data type to another?",
        options: ["Convert","Transform", "Change", "Casting"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Which of these is NOT a programming construct?",
        options: ["Sequence","Selection", "Iteration", "Subroutine"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Which procedure is used to represent two outcomes in a selection statement?",
        options: ["IF-IF","IF-ELIF", "IF-ELSE", "IF * 2"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"IF temperature > 40 is an example of what?",
        options: ["Loop","Condition", "Outcome", "All of the above"],
        answer: 1,
        topic:"programming",
    },
    {
        q:"The following figure is an example of simple flow chart. Flow chart is used in _____________ phase.",
        options: ["Analysis","Design", "Coding", "Testing"],
        answer: 1,
        img: "img/flowchart.png",
        topic: "programming"
    },
    {
        q:"Which of these is an example of an IDE?",
        options: ["Eclipse","Twilight", "Moon", "Saturn"],
        answer: 0,
        topic:"programming",
    },
    {
        q:"What does IDE stand for?",
        options: ["Integrated Debugging Equipment","Integrated Debugging Environment", "Integrated Development Equipment", "Integrated Development Environment"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"Process of finding and fixing errors in the syntax so the computer program will run properly",
        options: ["Bugs","Sequence", "Debugging", "Command"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"What is Decomposition?",
        options: ["Breaking the problem down to look for specific patterns","Solving the problem by placing the algorithm into a single flowchart", "Breaking the task down into smaller, more manageable tasks", "Identifying where the algorithm needs to be repeated so that it save you time when writing it"],
        answer: 2,
        topic:"programming",
    },
    {
        q:"The spelling and grammar of a programming language is",
        options: ["diction","syntax", "vocabulary", "semantics"],
        answer: 1,
        topic:"programming",
    },
    {
        q:"What is the following code doing: TotalMarks = 8",
        options: ["Declaring a variable","Assigning a value to a variable", "Performing a calculation", "Finding the running total"],
        answer: 1,
        topic:"programming",
    },
    {
        q:"Which statement is true about Java?",
        options: ["Java is a sequence-depended programming language","Java is a code dependent programming language", "Java is a platform-dependent programming language", "Java is a platform-independent programming language"],
        answer: 3,
        topic:"programming",
    },
    {
        q:"If Jenny is 13, which message will be printed?",
        options: ["Message 1","Message 2", "Message 3", "Message 4"],
        answer: 0,
        img: "img/message.png",
        topic:"programming",
    },
    {
        q:"What is the main purpose of a programming language?",
        options: ["To create graphical designs","To communicate instructions to a computer", "To write fictional stories", "To manage databases"],
        answer: 1,
        topic:"programming",
    },
    {
        q:"Which of the following best describes an algorithm?",
        options: ["A collection of data in a structured format","A sequence of instructions to solve a problem", "A specific programming language", "A visual design of the code"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"What is the purpose of a loop in programming?",
        options: ["To store information","To repeat a set of instructions multiple times", "To terminate a program", "To analyze data"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"Which language is primarily used for web development?",
        options: ["Python","JavaScript", "HTML", "XML"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"What is debugging in programming?",
        options: ["Writing new code","Translating code into binary", "Fixing errors in the code", "Testing the program's speed"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"What is the main difference between a stack and a queue?",
        options: ["A stack uses FIFO (First In, First Out), and a queue uses LIFO (Last In, First Out)","A stack uses LIFO (Last In, First Out), and a queue uses FIFO (First In, First Out)", "Both use FIFO but differ in access speed", "Both use LIFO but have different insertion methods"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"Which of the following correctly describes the concept of recursion?",
        options: ["A function calling itself directly or indirectly","A function that runs without a stop condition", "A loop that iterates a set number of times", "A way to pass data between functions"],
        answer: 0,
        topic:"programming",
    },

    {
        q:"What does Big O notation primarily measure in algorithms?",
        options: ["The speed of a program at runtime","The number of lines in an algorithm", "The efficiency of an algorithm based on time and space complexity", "The power consumption of an algorithm"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"In object-oriented programming, what is polymorphism?",
        options: ["A feature that allows a single function to change its behavior based on input types","A process of converting objects to other classes", "A way to prevent inheritance between classes", "A technique to ensure data encapsulation"],
        answer: 0,
        topic:"programming",
    },

    {
        q:"Which of these sorting algorithms has the best average-case time complexity?",
        options: ["Bubble Sort","Insertion Sort", "Merge Sort", "Selection Sort"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"What is the purpose of a constructor in a class?",
        options: ["To create an instance method in the class","To define the blueprint of a class", "To initialize an object's properties upon creation", "To make a class static"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"Which of the following is true about a linked list?",
        options: ["It stores elements in contiguous memory locations","It allows constant-time access to elements at any index", "Each element points to the next element in the sequence", "It is immutable by nature"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"What is a lambda function in programming languages like Python?",
        options: ["A function with no parameters","A function with a fixed number of arguments", "An anonymous function defined with a single expression", "A built-in function for mathematical operations"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"Which of these SQL commands is used to remove records from a table without removing the table structure?",
        options: ["DROP","DELETE", "TRUNCATE", "ALTER"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"In terms of threading, what is a deadlock?",
        options: ["When multiple threads execute simultaneously","When one thread waits for resources from another thread indefinitely", "When a thread releases its lock too early", "When all threads execute in a linear sequence without branching"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"What happens when a programmer dies?",
        options: ["They get buried in a stack","They enter a recursive loop of life", "They achieve 'return 0'", "They get moved to the trash"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"Why do Java developers wear glasses?",
        options: ["Because they can't C#","To read the Javadocs better", "To prevent null pointer exceptions in their vision", "So they can ‘see' their methods clearly"],
        answer: 0,
        topic:"programming",
    },

    {
        q:"What's a programmer's favorite kind of music?",
        options: ["Loop-pop","Synthwave", "Algo-rhythm & Blues", "Byte-beats"],
        answer: 2,
        topic:"programming",
    },

    {
        q:"What's a programmer's least favorite song?",
        options: ["Endless Loop", "99 Bugs in the Code", "Syntax Error Blues", "The Stack Trace Symphony"],
        answer: 1,
        topic:"programming",
    },

    {
        q:"Why don't programmers like nature?",
        options: ["No built-in documentation", "No undo button", "There are too many bugs", "The trees have too many branches"],
        answer: 2,
        topic:"programming",
    },
]
