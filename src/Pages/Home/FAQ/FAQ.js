import React from 'react';

const FAQ = () => {
  return (
    <div>
      <section className= "text-black">
	<div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
		<p className="p-2 text-sm font-medium tracking-wider text-center uppercase">How it works</p>
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">Every User Create Seller Account?</summary>
				<div className="px-4 pb-4">
					<p>Yes.Every User Create Seller Account and Sell her Old Product</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">
          How can Verify Seller Account ?
        </summary>
				<div className="px-4 pb-4">
					<p>Seller Verify depend her product quality and her service.If seller everything is good than admin can verify seller</p>
				</div>
			</details>
			<details>
				<summary className="py-2 outline-none cursor-pointer focus:underline">User how can payment her Product ?</summary>
				<div className="px-4 pb-4 space-y-2">
					<p>User can booking her product and pay this product with card payment.</p>
					<p>Sed consectetur quod tenetur! Voluptatibus culpa incidunt veritatis velit quasi cupiditate unde eaque! Iure, voluptatibus autem eaque unde possimus quae.</p>
				</div>
			</details>
		</div>
	</div>
</section>
    </div>
  );
};

export default FAQ;