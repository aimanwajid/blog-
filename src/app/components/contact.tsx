const FeedbackForm = () => (
	<section id="contact" className="py-16 bg-white">
	  <h3 className="text-4xl font-bold text-center mb-10 text-black-800">
		Give Us Your Feedback
	  </h3>
	  <div className="container mx-auto max-w-md">
		<form className="bg-gray-900 shadow-lg rounded-lg p-6">
		  <input
			type="text"
			placeholder="Your Name"
			className="w-full p-3 mb-4 border border-gray-300 rounded text-gray-800 focus:ring focus:ring-gray-200"
		  />
		  <input
			type="email"
			placeholder="Your Email"
			className="w-full p-3 mb-4 border border-gray-300 rounded text-gray-800 focus:ring focus:ring-gray-200"
		  />
		  <textarea
			placeholder="Your Feedback / Message"
			className="w-full p-3 mb-4 border border-gray-300 rounded h-32 text-gray-800 focus:ring focus:ring-gray-200"
		  ></textarea>
		  <button
			className="w-full bg-blue-600 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded transition-colors duration-300"
		  >
			Submit Feedback
		  </button>
		</form>
	  </div>
	</section>
  );
  
  export default FeedbackForm;
  