# Mocks
In this project, we using Node from scratch without any framework! The main idea is test using only node features to see the power of NodeJS and that a little look at what is mocks and how to use it.

## What is mocks?
Mocks are used mainly for unit tests. Basically, we create objects/data for specific tests, then avoid replicating the code. For example, if we have a process that has three steps, we can create a mocked data for each process, so we don't need to wait for the first step to test the second one, because we already have the mocked data for it.

## Our code example
Then, we create a File class that has functions to get a CSV file by path and parse it to JSON. We add a validation that follows these rules:
- Should have the following header: id, name, profession, and age
- Should not be an empty file
- Should not have more than 5 files counting with the header

All the functionalities were tested in the `index.test.js` file. It has all the logic tested and we used the **mocks** inside the `/mocks` folders to create specific scenarios for each test.