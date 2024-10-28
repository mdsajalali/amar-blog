import Container from "../shared/Container";

const Contact = () => {
  return (
    <section className="bg-[url(/images/blog-cover.jpg)] bg-cover bg-center bg-no-repeat">
      <div className="w-full bg-black/65 py-16 md:py-20 lg:py-28">
        <Container>
          <h1 className="text-center text-5xl font-semibold text-white md:text-6xl">
            Contact Us
          </h1>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
