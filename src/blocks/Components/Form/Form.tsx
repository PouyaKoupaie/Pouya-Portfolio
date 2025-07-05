const SpaceForm = () => {
  return (
    <div className="md:w-full max-w-md w-3/4 m-auto">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white glow">
          Contact the Galaxy
        </h2>
        <p className="text-sm text-gray-400">
          Send your message into the cosmos
        </p>
      </div>

      <form className="space-y-4 text-white flex flex-col items-center" action="pouya.koupaie2003@gmail.com" method="post" encType="text/plain">
        <div className='w-full'>
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Astronaut X"
          />
        </div>

        <div className='w-full'>
          <label htmlFor="email" className="block text-sm font-medium">
            Galactic Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="astro@example.com"
          />
        </div>

        <div className='w-full'>
          <label htmlFor="message" className="block text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Launch sequence initiated..."
          />
        </div>

        <button className="btn-85 relative inline-block text-white px-8 py-3 rounded-lg  z-0 w-full ">
          send message
        </button>
      </form>
    </div>
  );
};

export default SpaceForm;
