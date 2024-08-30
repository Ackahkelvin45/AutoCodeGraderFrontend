import { useEffect, useRef, useState,useCallback } from 'react';
import { Dropzone, FileCard } from '@files-ui/react';
import 'ckeditor5/ckeditor5.css';
import Editor from '@monaco-editor/react';
import { NavandSidebar } from '../../../components/dashboard/lectuerer/navBarAndSideBar';
import { useLocation } from 'react-router-dom';
import { convertText } from '../../../utils/encodingFunctions';
import { getToken } from "../../../utils/localstorage.js"
import { postToBackend } from '../../../utils/backendCalls.js';
import {  token } from '../../../utils/config.js';
import BreadCrumbLecturer from '../../../components/basic/breadCrumbLecturer.jsx';


function AddQuestion() {
    const location = useLocation();
    const compiler = location.state.compiler;
    console.log(compiler)
    const assId = location.state.assignmentId;
    const assName = location.state.assignmentName;
    console.log(location.state)
    const [toggleEditorandFile, setToggleEditorAndFile] = useState(true);
    const [toggleEditorandFile1, setToggleEditorAndFile1] = useState(true);
    const formRef = useRef(null);
    const [success,setSuccess]=useState(false)
    const [loadingTestScript,setLoadingTestScript] = useState(false);
    const apiKey = process.env.OPEN_AI;







    const [formData, setFormData] = useState({
        number: '',
        requirement: '',
        solutionPath: "",
        solutionScript: "",
        examples: ""
    });



    const generateTestScript = async () => {
        if (formData.requirement.length <= 0 && formData.solutionPath.length <= 0)  {
            alert("Add requirements and solution file name  before generating test codes");
        } else {
            setLoadingTestScript(true);
    
            handleEditorChange(" ", 'testCodeContent')
    
            const prompt = `
                I need assistance generating test scripts for coding assignments. The test scripts should use the built-in testing libraries that come with the compilers of the language, so no external frameworks are required. Here’s what I need:


                this are examples of test codes below 
                // JavaScript (Node.js)
const fs = require('fs');
const { largestInteger } = require('./question1'); // Import the function from question1.js

function writeTestResults() {
    const testCases = [
        { firstNumber: 20, lastNumber: 4, expected: 20, testNumber: 1, marks: 5, feedback: "Test case passed for number divisible by 10." },
        { firstNumber: 30, lastNumber: 40, expected: 40, testNumber: 2, marks: 10, feedback: "Test case passed for number divisible by 10." },
        { firstNumber: 80, lastNumber: 9, expected: 80, testNumber: 3, marks: 15, feedback: "Test case passed for number not divisible by 10." },
        { firstNumber: 0, lastNumber: 10, expected: 10, testNumber: 4, marks: 10, feedback: "Test case passed for zero which is divisible by 10." }
    ];

    let totalMarks = 0;
    let output = '';

    testCases.forEach((testCase) => {
        const result = largestInteger(testCase.firstNumber, testCase.lastNumber);
        const status = result === testCase.expected ? 'pass' : 'failed';
        
        if (status === 'pass') {
            totalMarks += testCase.marks;
        }

        output += status=status\\n;
        output += feedback=testCase.feedback\\n;
        output += testNumber=testCase.testNumber\\n;
        output += ';\\n';
    });

    output += marks=totalMarks\\n;

    fs.writeFileSync('result.txt', output);
}

writeTestResults();

// C++
#include <iostream>
#include <fstream>
#include <string>

int largestInteger(int firstNumber, int lastNumber);

void writeTestResults() {
    struct TestCase {
        int firstNumber;
        int lastNumber;
        int expected;
        int testNumber;
        int marks;
        std::string feedback;
    };

    TestCase testCases[] = {
        {20, 4, 20, 1, 5, "Test case passed for number divisible by 10."},
        {30, 40, 40, 2, 10, "Test case passed for number divisible by 10."},
        {80, 9, 80, 3, 15, "Test case passed for number not divisible by 10."},
        {0, 10, 10, 4, 10, "Test case passed for zero which is divisible by 10."}
    };

    int totalMarks = 0;
    std::string output;

    for (const auto& testCase : testCases) {
        int result = largestInteger(testCase.firstNumber, testCase.lastNumber);
        std::string status = (result == testCase.expected) ? "pass" : "failed";
        
        if (status == "pass") {
            totalMarks += testCase.marks;
        }

        output += "status=" + status + "\\n";
        output += "feedback=" + testCase.feedback + "\\n";
        output += "testNumber=" + std::to_string(testCase.testNumber) + "\\n";
        output += ";\\n";
    }

    output += "marks=" + std::to_string(totalMarks) + "\\n";

    std::ofstream file("result.txt");
    if (file.is_open()) {
        file << output;
        file.close();
    } else {
        std::cerr << "Unable to open file for writing.\\n";
    }
}

int main() {
    writeTestResults();
    return 0;
}

// C
#include <stdio.h>

int largestInteger(int firstNumber, int lastNumber);

void writeTestResults() {
    struct TestCase {
        int firstNumber;
        int lastNumber;
        int expected;
        int testNumber;
        int marks;
        const char *feedback;
    };

    struct TestCase testCases[] = {
        {20, 4, 20, 1, 5, "Test case passed for number divisible by 10."},
        {30, 40, 40, 2, 10, "Test case passed for number divisible by 10."},
        {80, 9, 80, 3, 15, "Test case passed for number not divisible by 10."},
        {0, 10, 10, 4, 10, "Test case passed for zero which is divisible by 10."}
    };

    int totalMarks = 0;
    char output[1024] = {0};

    for (int i = 0; i < sizeof(testCases) / sizeof(testCases[0]); i++) {
        struct TestCase testCase = testCases[i];
        int result = largestInteger(testCase.firstNumber, testCase.lastNumber);
        const char *status = (result == testCase.expected) ? "pass" : "failed";

        if (status == "pass") {
            totalMarks += testCase.marks;
        }

        snprintf(output + strlen(output), sizeof(output) - strlen(output), 
                 "status=%s\\nfeedback=%s\\ntestNumber=%d\\n;\\n", 
                 status, testCase.feedback, testCase.testNumber);
    }

    snprintf(output + strlen(output), sizeof(output) - strlen(output), "marks=%d\\n", totalMarks);

    FILE *file = fopen("result.txt", "w");
    if (file) {
        fputs(output, file);
        fclose(file);
    } else {
        fprintf(stderr, "Unable to open file for writing.\\n");
    }
}

int main() {
    writeTestResults();
    return 0;
}

// Java
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Test {
    public static void main(String[] args) {
        writeTestResults();
    }

    private static void writeTestResults() {
        class TestCase {
            int firstNumber;
            int lastNumber;
            int expected;
            int testNumber;
            int marks;
            String feedback;

            TestCase(int firstNumber, int lastNumber, int expected, int testNumber, int marks, String feedback) {
                this.firstNumber = firstNumber;
                this.lastNumber = lastNumber;
                this.expected = expected;
                this.testNumber = testNumber;
                this.marks = marks;
                this.feedback = feedback;
            }
        }

        TestCase[] testCases = {
            new TestCase(20, 4, 20, 1, 5, "Test case passed for number divisible by 10."),
            new TestCase(30, 40, 40, 2, 10, "Test case passed for number divisible by 10."),
            new TestCase(80, 9, 80, 3, 15, "Test case passed for number not divisible by 10."),
            new TestCase(0, 10, 10, 4, 10, "Test case passed for zero which is divisible by 10.")
        };

        int totalMarks = 0;
        StringBuilder output = new StringBuilder();

        for (TestCase testCase : testCases) {
            int result = Question.largestInteger(testCase.firstNumber, testCase.lastNumber);
            String status = (result == testCase.expected) ? "pass" : "failed";
            
            if ("pass".equals(status)) {
                totalMarks += testCase.marks;
            }

            output.append("status=").append(status).append("\\n");
            output.append("feedback=").append(testCase.feedback).append("\\n");
            output.append("testNumber=").append(testCase.testNumber).append("\\n");
            output.append(";\\n");
        }

        output.append("marks=").append(totalMarks).append("\\n");

        try (PrintWriter writer = new PrintWriter(new FileWriter("result.txt"))) {
            writer.print(output.toString());
        } catch (IOException e) {
            System.err.println("Unable to open file for writing.");
        }
    }
}

// Ruby
require_relative 'question'

def write_test_results
  test_cases = [
    { first_number: 20, last_number: 4, expected: 20, test_number: 1, marks: 5, feedback: "Test case passed for number divisible by 10." },
    { first_number: 30, last_number: 40, expected: 40, test_number: 2, marks: 10, feedback: "Test case passed for number divisible by 10." },
    { first_number: 80, last_number: 9, expected: 80, test_number: 3, marks: 15, feedback: "Test case passed for number not divisible by 10." },
    { first_number: 0, last_number: 10, expected: 10, test_number: 4, marks: 10, feedback: "Test case passed for zero which is divisible by 10." }
  ]

  total_marks = 0
  output = ""

  test_cases.each do |test_case|
    result = largest_integer(test_case[:first_number], test_case[:last_number])
    status = result == test_case[:expected] ? "pass" : "failed"
    
    total_marks += test_case[:marks] if status == "pass"

    output += "status=#{status}\\n"
    output += "feedback=#{test_case[:feedback]}\\n"
    output += "testNumber=#{test_case[:test_number]}\\n"
    output += ";\\n"
  end

  output += "marks=#{total_marks}\\n"

  File.write('result.txt', output)
end

write_test_results

// Python
def largest_integer(first_number, last_number):
    # Placeholder function to be tested
    pass

def write_test_results():
    # Test cases with unique marks for each test
    test_cases = [
        {'first_number': 20, 'last_number': 4, 'expected': 20, 'test_number': 1, 'marks': 5, 'feedback': "Test case passed for number divisible by 10."},
        {'first_number': 30, 'last_number': 40, 'expected': 40, 'test_number': 2, 'marks': 10, 'feedback': "Test case passed for number divisible by 10."},
        {'first_number': 80, 'last_number': 9, 'expected': 80, 'test_number': 3, 'marks': 15, 'feedback': "Test case passed for number not divisible by 10."},
        {'first_number': 0, 'last_number': 10, 'expected': 10, 'test_number': 4, 'marks': 10, 'feedback': "Test case passed for zero which is divisible by 10."}
    ]

    total_marks = 0
    output = ""

    for test_case in test_cases:
        result = largest_integer(test_case['first_number'], test_case['last_number'])
        status = 'pass' if result == test_case['expected'] else 'failed'
        
        total_marks += test_case['marks'] if status == 'pass' else 0

        output += f"status={status}\\n"
        output += f"feedback={test_case['feedback']}\\n"
        output += f"testNumber={test_case['test_number']}\\n"
        output += ";\\n"

    output += f"marks={total_marks}\\n"

    with open('result.txt', 'w') as file:
        file.write(output)

write_test_results()




  

          
                **Assignment Requirement:**
                - ${formData.requirement}
                **student submission file name:**
                - ${formData.solutionPath}
                **Programming Language:**
                - ${compiler.name}
          
                **Test Script Requirements:**
                1. Include tests for base cases, typical cases, and edge cases.
                2. Implement partial credit logic: if the function passes some tests but fails others, award marks for the passed tests.
                3. Ensure the script uses the appropriate built-in testing library for the specified language.
                4.Ensure that result.txt file is generated after each instance of the test sript
                5.The filename of the result file should be test.txt
                6.The filename should of type txt
                7.The last two lines of the file should be mark and completion
          
                Please provide a complete test script that satisfies these requirements, including sample test cases and how to run them. Ensure that the test cases cover different scenarios and edge cases.
                note this code should only contain accurate test cases for this requirement
                note that the test scripts should import all the codes and functions needed from the required student submission filename which is  ${formData.solutionPath} and run them against the test cases 
                Note that the output will be placed in an editor so I just want the code and any information you want to provide should be in comments in the code.
            add a title `;
    
            const requestData = {
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: prompt }],
                max_tokens: 500,
                temperature: 0.5,
            };
    
            try {
                // Step 2: Wait for the test code content to clear
                setTimeout(async () => {
                    const response = await fetch('https://api.openai.com/v1/chat/completions', {
                        method: 'POST',
                        headers: {
                            'Authorization': `Bearer ${apiKey}`,
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(requestData),
                    });
    
                    if (!response.ok) {
                        const errorDetails = await response.json();
                        throw new Error(`HTTP error! status: ${response.status}, details: ${JSON.stringify(errorDetails)}`);
                    }
    
                    const data = await response.json();
                    console.log(data.choices[0].message.content);
    
                   
                    handleEditorChange(data.choices[0].message.content, 'testCodeContent')
    
                    setLoadingTestScript(false);
                    setToggleEditorAndFile(false);
                }, 0); // Ensure state update happens before fetching new content
    
            } catch (error) {
                console.error(error);
                setLoadingTestScript(false);
            }
        }
    };
    
      


  
    // State variables for form inputs
 
    // State variables for editor content
    const [editorContent, setEditorContent] = useState({
        examplesContent: '',
        testCodeContent: ''
    });


    const scrollToTop = useCallback(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, []);


 

  
  


    // State variables for file uploads
    const [uploadedExamplesFile, setUploadedExamplesFile] = useState(null);
    const [uploadedSolutionFile, setUploadedSolutionFile] = useState(null);

    const options = {
        selectOnLineNumbers: true,
        automaticLayout: true,
        scrollBeyondLastLine: false,
        colorDecorators: true,
        cursorBlinking: 'blink',
        minimap: {
            enabled: true,
        },
    };

    // Handle change for text inputs and text areas
    const handleChange = (event) => {
        const { name, value, type } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'radio' ? value : value
        }));
    };

    // Handle change for editors
    const handleEditorChange = (value, editorType) => {
        setEditorContent(prevState => ({
            ...prevState,
            [editorType]: value
        }));
    };

    // Handle file drop events
    const handleDropExamples = async (acceptedFiles) => {
        console.log(acceptedFiles[0])
        if (acceptedFiles.length > 0) {
            console.log(acceptedFiles[0])
            let file = await convertText(acceptedFiles[0].file);
            setUploadedExamplesFile(file);
        }
    };

    const handleDropSolution = async (acceptedFiles) => {
        console.log(acceptedFiles[0])
        if (acceptedFiles.length > 0) {
            let file = await convertText(acceptedFiles[0].file);
            setUploadedSolutionFile(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formRef.current.checkValidity();
    
        if (isValid) {
            const updatedFormData = {
                ...formData,
                examples: toggleEditorandFile1 ? uploadedExamplesFile : editorContent.examplesContent,
                solutionScript: toggleEditorandFile ? uploadedSolutionFile : editorContent.testCodeContent,
            };
    
            setFormData(updatedFormData);
    
            // This callback ensures that formData is updated before executing further code
            setTimeout(async() => {
                try {
                    console.log(updatedFormData); 


                    let url = "/coder/lecturer/assignment/task"
                    let assObject = {ext:compiler.extension.replaceAll(".","").split(",")[0] ,...updatedFormData, AssignmentId:assId }
                    console.log(assObject)
                    let dataB = await postToBackend(url, assObject, getToken(token.lecturerTokenKey))
                    console.log(dataB)
                    if(dataB.status !== 201) {
                    console.log(dataB)
                    
                    }
                    else{
                        setSuccess(true)
                        // Reset form inputs after successful submission
                    setFormData({
                        number: '',
                        requirement: '',
                        solutionPath: "",
                        solutionScript: "",
                        examples: ""
                    });
                    setEditorContent({
                        examplesContent: '',
                        testCodeContent: ''
                    });
                    setUploadedExamplesFile(null);
                    setUploadedSolutionFile(null);
                    setToggleEditorAndFile(true);  // Optionally reset the radio button selection
                    setToggleEditorAndFile1(true); // Optionally reset the radio button selection
                    scrollToTop();
    
                    }


                    
                } catch (error) {
                    console.error(error);
                }
            }, 0); // Setting a timeout with 0 delay ensures the code inside it runs after the state update
        } else {
            formRef.current.classList.add("was-validated");
        }
    };
    

    const links=[
        {
          
            
              name: 'assignments',
              href: '/lecturer/view/assignments',
            
        
        },
    
        {
          
            
          name: `${assName}`,
          href: `/lecturer/view/${assId }`,
        
    
    },

    {
          
            
        name: `add question`,
        href: ``,
      
  
  },
      ]
    return (
        <div className="container-fluid px-xl-4 pb-3 pb-lg-4 px-4">
            <section className="offcanvas-enabled-start row full-section" style={{ transition: 'all .6s, transform .6s' }}>
                <div className="col-xl-9">
                    <NavandSidebar />

                    <div className="border-bottom mb-5 pt-5">
                    <BreadCrumbLecturer links={links} />
                        <h2 className="h5 mb-3 ">Add Question to {assName}</h2>
                        <div className="d-flex flex-wrap flex-md-nowrap justify-content-between">
                            <p className="text-muted">
                                Create assignments efficiently, customize your tasks, set deadlines, and provide clear instructions for your students.
                            </p>
                        </div>
                    </div>

                    <section className="pb-5 mb-md-2" id="forms-input-format">
                        <div className="card border-0 shadow-sm p-2">
                            <div className="card-body">
                                <div className="tab-content">
                                    <div>
                                    {
                                        success?
                                        <div className="alert p-3 my-2 alert-success alert-dismissible fade show" role="alert">Task {`${formData.number}`} Added Succesfully 
                      <button className="btn-close" onClick={()=>{setSuccess(false)}} type="button" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>:""
                                    }
                                        <form ref={formRef} onSubmit={handleSubmit} className="needs-validation" noValidate>
                                            <h6>Add question</h6>
                                            <div className="mb-3">
                                                <div className="mb-3">
                                                    <label className="form-label">Question number<span className='text-danger'>*</span></label>
                                                    
                                                    <input
                className="form-control"
                type='number'
                name='number'  
                min={1}
                value={formData.number}
                onChange={handleChange}
                required
            />
                                                </div>

                                                <label className="form-label">General Requirement (Question)<span className='text-danger'>*</span></label>
                                                <textarea
            className="form-control"
            name='requirement'  
            rows={5}
            value={formData.requirement}
            onChange={handleChange}
            required
        ></textarea>
                                            </div>

                                            <label className="form-label">Explanation Examples<span className='text-danger'>*</span></label>
                                            <div className="alert alert-secondary d-flex fs-xs p-2  " role="alert">
                                            <i className="fi-alert-circle lead me-2  mt-4 fs-xs"></i>
                      <div >
                      Provide similar code examples or explanations to help students understand the requirements of the assignment. This helps to clarify the problem statement and makes abstract concepts more tangible for the students. You can either upload a file containing the examples or type them directly into the editor.
                      </div>
                    </div>
                                            <p className="text-muted">
                                               
                                                
                                               
                                            </p>
                                            <div className="mb-3 px-4">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        value="File"
                                                        name="explanationExamplesType"
                                                        id="form-radio-1"
                                                        type="radio"
                                                        checked={toggleEditorandFile1}
                                                        onChange={() => { setToggleEditorAndFile1(true) }}
                                                    />
                                                    <label className="form-check-label">File upload</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        id="form-radio-2"
                                                        value="Type"
                                                        name="explanationExamplesType"
                                                        type="radio"
                                                        checked={!toggleEditorandFile1}
                                                        onChange={() => { setToggleEditorAndFile1(false) }}
                                                    />
                                                    <label className="form-check-label">Type in Editor</label>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label"></label>
                                                {toggleEditorandFile1 ? (
                                                    <Dropzone 
                                                        max={1} 
                                                        label='Upload Examples' 
                                                        onDrop={handleDropExamples}
                                                        onChange={handleDropExamples}

                                                        accept={compiler.extension.includes(",") ? compiler.extension.split(",") : compiler.extension}

                                                    >
                                                        {uploadedExamplesFile && (
                                                            <FileCard file={uploadedExamplesFile} />
                                                        )}
                                                    </Dropzone>
                                                ) : (
                                                    <Editor
                                                        height="60vh"
                                                        defaultLanguage={compiler.name}
                                                        language={compiler.name}
                                                        theme="vs-dark"
                                                        defaultValue={editorContent.examplesContent}
                                                        value={editorContent.examplesContent}

                                                        options={options}
                                                        onChange={(value) => handleEditorChange(value, 'examplesContent')}
                                                    />
                                                )}
                                            </div>

                                            <label className="form-label">Test Code<span className='text-danger'>*</span></label>
                                            <p className="text-muted">
                                            <div className="alert alert-secondary d-flex fs-xs p-2  " role="alert">
                                            <i className="fi-alert-circle lead me-2  mt-4 fs-xs"></i>
                      <div >
                      The test code is used to automatically grade the student's code submission. It should cover various test cases to ensure that the student's solution is correct, efficient, and meets the requirements. You can either upload a file containing the test code or type it directly into the editor.                      </div>
                    </div>
                                                
                                            </p>
                                            <div className='w-full justify-content-end d-flex '>
                                            
                                             <button type='button' onClick={generateTestScript} className='btn btn-sm btn-primary '>
                                             {
                                                loadingTestScript?


                                                <>
                                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span> Generating...
                                                </>
                                
                                                :
                                                <>
                                                <i className='fi fi-slack'></i> Generate test code
                                                </>
                                             }
                                             
                                             </button>
                                             
                                             </div>
                                            <div className="mb-3 px-4">
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        value="File"
                                                        name="testCodeType"
                                                        id="form-radio-1"
                                                        type="radio"
                                                        checked={toggleEditorandFile}
                                                        onChange={() => { setToggleEditorAndFile(true) }}
                                                    />
                                                    <label className="form-check-label">File upload</label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        className="form-check-input"
                                                        id="form-radio-2"
                                                        value="Type"
                                                        name="testCodeType"
                                                        type="radio"
                                                        checked={!toggleEditorandFile}
                                                        onChange={() => { setToggleEditorAndFile(false) }}
                                                    />
                                                    <label className="form-check-label">Type in Editor</label>
                                                </div>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label"></label>
                                                {toggleEditorandFile ? (
                                                    <Dropzone 
                                                        max={1} 
                                                        label='Upload Solution File' 
                                                        onDrop={handleDropSolution}
                                                        onChange={handleDropSolution}
                                                        accept={compiler.extension.includes(",") ? compiler.extension.split(",") : compiler.extension}

                                                                    >
                                                        {uploadedSolutionFile && (
                                                            <FileCard file={uploadedSolutionFile} />
                                                        )}
                                                    </Dropzone>
                                                ) : (
                                                    <Editor
                                                        height="60vh"
                                                        defaultLanguage={compiler.name}
                                                        theme="vs-dark"
                                                        defaultValue={editorContent.testCodeContent}
                                                        value={editorContent.testCodeContent}
                                                        options={options}
                                                        language={compiler.name}
                                                        onChange={(value) => handleEditorChange(value, 'testCodeContent')}
                                                    />
                                                )}
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Solution File Name <span className='text-danger'>*</span></label>
                                                <input
                                                    className="form-control"
                                                    type='text'
                                                    name='solutionPath'  // Changed from 'solutionFilePath' to 'solutionPath'
                                                   
                                                    value={formData.solutionPath}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className='w-full d-flex'>
                                                <button className="btn btn-primary" type="submit">Add Question</button>
                                                
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
}

export default AddQuestion;
