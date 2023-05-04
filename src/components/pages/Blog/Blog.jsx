import React from 'react';
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blog = () => {
    return (
       <>
       <Pdf targetRef={ref}  filename="Blog.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
         <div className="container mx-auto" ref={ref}>
            
            <div>
            <h2 className="text-3xl my-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400">Tell us the differences between uncontrolled and controlled components.</h2>
            <div>
                <p>In the context of software development, the terms "uncontrolled components" and "controlled components" refer to different approaches for managing user input and state in user interfaces. Here are the main differences between the two:</p>
                <ul>
                    <li>State management: In uncontrolled components, the component's state is managed internally by the browser or the component itself.</li>
                    <li>Data flow: Uncontrolled components rely on the unidirectional data flow, where the data is passed from the DOM to the component. When the user interacts with an uncontrolled component, the component reads the data from the DOM to access the current value. In controlled components, the data flow is bidirectional. </li>
                    <li>
                        Validation and error handling: With uncontrolled components, validation and error handling are typically performed manually. You need to write custom logic to validate the input and handle any errors that may occur. 
                    </li>
                    <li>
                        Flexibility vs. control: Uncontrolled components provide more flexibility, as they allow the browser to handle the state and events internally. They are often used in simple forms or when you don't need granular control over the user input. Controlled components offer more control over the user interface and enable you to enforce specific behaviors and validations. 
                    </li>
                    <li>
                        Testing: Testing uncontrolled components can be more challenging because their state is managed internally by the browser or the component itself. 
                    </li>
                </ul>
                </div>
        </div>
        <div>

        </div>
             <h2 className="text-3xl my-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400">How to validate React props using PropTypes?</h2>
             <div>
                <p>To validate React props using PropTypes: <br />

                    Install the prop-types package from npm. <br />
                    Import PropTypes in your component file. <br />
                    Define the propTypes object below your component declaration, specifying the expected types for each prop. <br />
                    React will automatically validate props when the component is rendered, displaying warnings in the console if the props don't match the specified types. <br />
                    PropTypes provides validators like string, number, bool, array, object, and more. You can also use validators like isRequired for required props or validators that define specific shapes or values. Check the PropTypes documentation for more details.</p>
                
                </div>

                <div>
                     <h2 className="text-3xl my-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400">How to validate React props using PropTypes?</h2>
                     <div>
                        <h4>Node.js and Express.js are both popular frameworks used in the development of web applications, but they serve different purposes:</h4>
                        <p>Node.js is a runtime environment that allows you to execute JavaScript code on the server-side. It uses Google's V8 JavaScript engine to run JavaScript outside the browser. Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient for building scalable network applications. Node.js can be used to create various types of applications, not just web applications, including command-line tools, APIs, real-time applications, and more.

                        </p>
                        <p>Express.js is a web application framework built on top of Node.js. It simplifies the process of building web applications by providing a set of features and utilities. Express.js is minimalistic and unopinionated, allowing developers to have more flexibility and control over their application's structure and design choices. It provides a routing system, middleware support, and an easy way to handle HTTP requests and responses. Express.js can be extended using various middleware modules for additional functionalities like authentication, session management, and database integration.

                        </p>
                     </div>
                </div>
                <div>
                    <h2 className="text-3xl my-3 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-gray-400">What is a custom hook, and why will you create a custom hook?</h2>
                    <div>
                        <p>custom hooks in React provide a powerful mechanism for code reuse, composability, and abstraction of stateful logic. They contribute to cleaner, more modular code and simplify testing efforts. Custom hooks can enhance the developer experience by reducing duplication and promoting best practices in React application development.</p>
                    </div>
                </div>
        </div>
       </>
    );
};

export default Blog;