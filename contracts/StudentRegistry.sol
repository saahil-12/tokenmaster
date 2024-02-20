// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    struct Student {
        string name;
        string studentClass;
    }

    mapping(uint256 => Student) public students;

    event StudentAdded(uint256 indexed admissionNumber, string name, string studentClass);

    function addStudentDetails(uint256 admissionNumber, string memory name, string memory studentClass) external {
        students[admissionNumber] = Student(name, studentClass);
        emit StudentAdded(admissionNumber, name, studentClass);
    }

    function getStudentDetails(uint256 admissionNumber) external view returns (string memory name, string memory studentClass) {
        Student memory student = students[admissionNumber];
        return (student.name, student.studentClass);
    }
}
