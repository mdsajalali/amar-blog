const BlogContactForm = () => {
  return (
    <div className="mx-auto w-full max-w-5xl rounded-md ">
      <h1 className="pb-5 text-2xl font-semibold text-white md:pb-10 md:text-[40px]">
        Get in Touch with Us
      </h1>
      <form>
        <div className="-mt-16 mb-4 flex flex-col gap-[10px] md:flex-row md:gap-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded border p-3 text-[12px] text-black outline-none md:text-[14px]"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="mt-1 w-full rounded border p-3 text-[12px] text-black outline-none md:mt-0 md:text-[14px]"
            required
          />
        </div>

        <div className="mb-4 flex flex-col">
          <textarea
            placeholder="Message"
            className="rounded border p-3 text-[12px] text-black outline-none md:text-[14px]"
            required
            rows={4}
          ></textarea>
        </div>
        <button
          type="submit"
          className="hover:bg-primary rounded border bg-white px-16 py-[14px] text-[14px] font-semibold text-black transition-all hover:bg-[#263587] hover:text-white md:px-7 md:text-[18px]"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default BlogContactForm;
