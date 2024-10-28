const BlogContactForm = () => {
  return (
    <div className="rounded-md p-5 mx-auto  max-w-5xl  w-full ">
      <h1 className="text-2xl text-white md:text-[40px] font-semibold md:pb-10 pb-5">
        Get in Touch with Us
      </h1>
      <form>
        <div className="flex flex-col -mt-16 md:flex-row gap-[10px] md:gap-4 mb-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded p-3 w-full  outline-none text-[12px] md:text-[14px] text-black"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded p-3 w-full  outline-none text-[12px] mt-1 md:mt-0 md:text-[14px] text-black"
            required
          />
        </div>

        <div className="flex flex-col mb-4">
          <textarea
            placeholder="Message"
            className="border rounded p-3  outline-none text-[12px] md:text-[14px] text-black"
            required
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-white hover:bg-[#263587] hover:text-white  rounded border text-black transition-all hover:bg-primary py-[14px] px-16 md:px-7   text-[14px] md:text-[18px] font-semibold "
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default BlogContactForm;
