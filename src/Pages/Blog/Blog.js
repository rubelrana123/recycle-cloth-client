import React from 'react';
import BlogQuestion from './BlogQuestion';

const Blog = () => {
  const data = [
		{
			id: 1,
			question: 'What is purpose of react router ?',
			answer: `React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
    Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.`,
		},
		{
			id: 2,
			question: 'What does Work context Api ?',
			answer: `React Context provides a way to pass data through the component tree without having to pass props down manually at every level. In some sense, it simulates “Global” data in React component Tree.`,
		},
		{
			id: 3,
			question: 'Explain What is Useref in react',
			answer: `The useRef Hook allows you to persist values between renders The useRef hook simply returns an object with a ".current" property which will be the DOM element or value that you plan to use at some point or another within your component. useRef will not cause any re-renders, it is simply an object that holds the DOM or value you've assigned to it.useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.`,
		},
	];
  return (
    <div className='w-[90%] mt-5 h-[68vh] mx-auto'>

      {
        data.map( (info) => <BlogQuestion key={info.id} info = {info}></BlogQuestion> )
      }
      
    </div>
  );
};

export default Blog;