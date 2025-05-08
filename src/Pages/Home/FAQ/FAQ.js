 
import FAQItem from './FAQItem';
function FAQ() {
  const faqs = [
    {
      question: "How do I create a seller account?",
      answer: "Creating a seller account is easy! Simply click on the 'Become a Seller' button on our homepage, fill out the required information, and submit your application. Our team will review it and get back to you within 24 hours."
    },
    {
      question: "How can I verify my seller account?",
      answer: "To verify your seller account, log in to your dashboard and navigate to the verification section. Upload the required documents (ID proof, address proof, and bank details) and wait for our team to approve them."
    },
    {
      question: "How can I list my products for sale?",
      answer: "After your seller account is verified, you can list your products by going to your seller dashboard and clicking on 'Add New Product'. Fill in the product details, upload high-quality images, set your price, and publish!"
    },
    {
      question: "What are the fees for selling on Recycle Cloth?",
      answer: "We charge a minimal 5% commission on each successful sale. There are no listing fees or monthly subscription charges, making it easy and affordable to sell your recycled clothing with us."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-emerald-50 to-teal-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-emerald-800 relative">
          <span className="relative inline-block pb-4">
            Frequently Asked Questions
            <span className="absolute bottom-0 left-0 w-full h-1 bg-emerald-400 transform -translate-y-2"></span>
          </span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default FAQ;