export const About = ({ a }) => {
  return (
    <div ref={a} className="w-screen  bg-gray-100 py-24 px-20 max-[768px]:px-0">
      <div className="flex flex-col gap-y-12 md:px-8">
        <div className="flex justify-center ">
          <div className="bg-gray-200 rounded-xl w-32 justify-center flex">
            About me
          </div>
        </div>
        <div className="flex max-[1024px]:flex-col max-[1024px]:gap-y-6 ">
          <div className="lg:w-1/2 px-8 ">
            <img className="rounded" src="/Ghost.jpeg"  />
          </div>
          <div className="lg:w-1/2 px-8">
            <div className="text-3xl font-bold mb-6">
              Curious about me? Here you have it:
            </div>
            <div className="flex flex-col gap-y-4 text-gray-600 leading-6 ">
              <div>
                I'm a passionate, self-proclaimed designer who specializes in
                full stack development (React.js & Node.js). I am very
                enthusiastic about bringing the technical and visual aspects of
                digital products to life. User experience, pixel perfect design,
                and writing clear, readable, highly performant code matters to
                me.
              </div>
              <div>
                I began my journey as a web developer in 2015, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                Now, in my early thirties, 7 years after starting my web
                development journey, I'm building cutting-edge web applications
                using modern technologies such as Next.js, TypeScript, Nestjs,
                Tailwindcss, Supabase and much more.
              </div>
              <div>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </div>
              <div>
                When I'm not in full-on developer mode, you can find me hovering
                around on twitter or on indie hacker, witnessing the journey of
                early startups or enjoying some free time. You can follow me on
                Twitter where I share tech-related bites and build in public, or
                you can follow me on GitHub.
              </div>
              <div>Finally, some quick bits about me.</div>
              <div className="flex gap-14">
                <div>
                  <div className="w-{287px}">
                    &#x2022; B.E. in Computer Engineering
                  </div>
                  <div className="w-{287px}">&#x2022; Full time freelancer</div>
                </div>
                <div>
                  <div className="w-{287px}">&#x2022; Avid learner</div>
                  <div className="w-{287px}">
                    &#x2022; Aspiring indie hacker
                  </div>
                </div>
              </div>
              <div>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
