import { useForm, ValidationError } from "@formspree/react";
import type { RefObject } from "react";
import { toast } from "sonner";

const SpaceForm = ({formRef }:{formRef: RefObject<HTMLDivElement | null>}) => {
  const [state, handleSubmit] = useForm("xyzjqgaw");
  if (state.succeeded) {
    toast.success("Thanks for sending Email ❤️‍🔥💖");
  } else if (state.errors) {
    toast.error("Something went wrong 😥");
  }
  return (
    <div className="md:w-full max-w-md w-3/4 m-auto" ref={formRef}>
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white glow">
          Contact the Galaxy
        </h2>
        <p className="text-sm text-gray-400">Send your email into the cosmos</p>
      </div>
      <form
        className="space-y-4 text-white flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="email" className="block text-sm font-medium">
            Galactic Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="astro@example.com"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="w-full">
          <label htmlFor="message" className="block text-sm font-medium">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full mt-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Launch sequence initiated..."
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button
          type="submit"
          disabled={state.submitting}
          className="btn-85 relative inline-block text-white px-8 py-3 rounded-lg  z-0 w-full "
        >
          {state.submitting ? "Sending ..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default SpaceForm;
