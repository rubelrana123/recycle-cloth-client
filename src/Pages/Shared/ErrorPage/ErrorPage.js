import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
  return (
    <div>
      <section className="flex items-center h-screen p-16  dark:text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<img src="https://cloud.mongodb.com/static/images/sadface.gif" className='h-36' alt="" />

		</div>
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
				<span className="sr-only">Error</span>{error?.status}
			</h2>
			<p className="text-2xl font-semibold text-black md:text-3xl">{error?.message}</p>
			<p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link rel="noopener noreferrer" to = "/" className="px-8 py-3 font-semibold rounded bg-primary dark:text-gray-900">Back to homepage</Link>
		</div>
	</div>
</section>
    </div>
  );
};

export default ErrorPage;