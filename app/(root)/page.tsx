import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();
  if(session) {
    redirect("/home");
  }
  
  return (
    <>
      <div className="p-3 pt-3 bg-gray-900 border border-primary-100 rounded-lg">
      <section className="pink_container !min-h-[400px] rounded-xl ">
        <h1 className="heading !rounded-xl">
          PITCH YOUR STARTUP, <br /> CONNECT WITH ENTREPRENEURS
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
      </section>
      </div>

      {/* Features Section */}
      <section>
      <div className="section_container">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-black">
            Our Features
          </h2>
          <p className="text-muted-foreground text-lg mx-auto">
            Discover the powerful tools and services designed to elevate
            your experience
          </p>
        </div>

        <div className="card_grid">
          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://startupsmagazine.co.uk/sites/default/files/2022-04/AdobeStock_354437030.jpg"
              alt="Pitch Ideas"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-24-black font-semibold">Pitch Your Ideas</h3>
            <p className="text-center mt-1">
              Share your innovative ideas with the community and gain
              visibility.
            </p>
          </div>
          <div className="startup-card startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://aacu.imgix.net/content/user-photos/Blog/2022/iStock-1281356044.jpg?auto=compress%2Cformat&crop=focalpoint&cs=srgb&fit=crop&fp-x=0.5&fp-y=0.5&h=600&q=80&w=1000"
              alt="Vote and Support"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-24-black font-semibold">Vote and Support</h3>
            <p className="text-center mt-1">
              Vote for your favorite pitches and help them gain traction.
            </p>
          </div>
          <div className="startup-card startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://img.freepik.com/free-vector/people-starting-business-project_23-2148866842.jpg"
              alt="Get Noticed"
              className="w-full h-48 object-cover rounded-lg mb-3"
            />
            <h3 className="text-24-black font-semibold">Get Noticed</h3>
            <p className="text-center mt-1">
              Take part in virtual competitions and get your startup
              noticed by investors.
            </p>
          </div>
        </div>
      </div>
      </section>

      <hr className="size-1 bg-primary w-full max-w-6xl my-2 mx-auto" />

      {/* How It Works Section */}
      <section>
      <div className="section_container">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-black">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how easy it is to pitch, connect, and succeed with our platform.
          </p>
        </div>

        <div className="card_grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://img.freepik.com/free-vector/pitch-meeting-concept-illustration_114360-6300.jpg"
              alt="Step 1"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-24-black font-semibold">Step 1: Pitch</h3>
            <p className="text-center mt-2 mx-5">
              Create a compelling pitch and submit it to the platform.
            </p>
          </div>
          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://static.vecteezy.com/system/resources/previews/007/117/339/non_2x/training-of-office-staff-increase-sales-and-skills-team-thinking-and-brainstorming-analytics-of-company-information-flat-modern-design-illustration-vector.jpg"
              alt="Step 2"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-24-black font-semibold">Step 2: Connect</h3>
            <p className="text-center mt-2 mx-5">
              Interact with innovative entrepreneurs and experienced investors.
            </p>
          </div>
          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://img.freepik.com/free-vector/successful-business-man-holding-trophy_1150-35042.jpg"
              alt="Step 3"
              className="w-full h-56 object-cover rounded-lg mb-4"
            />
            <h3 className="text-24-black font-semibold">Step 3: Succeed</h3>
            <p className="text-center mt-2 mx-5">
              Watch your startup grow with the 
              support of the community.
            </p>
          </div>
        </div>
      </div>
      </section>

      <hr className="border-dotted size-1 bg-primary w-full max-w-6xl mt-10 mb-6 mx-auto" />

      {/* FAQs Section */}
      <section id="faqs" className="section_container">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Got questions? We've got answers to help you navigate the platform.
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="startup-card flex flex-col items-start p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-black mb-4">
              How do I submit a pitch?
            </h3>
            <p className="text-muted-foreground text-base">
              Simply create an account, log in, and click the "Pitch Your Idea"
              button to get started.
            </p>
          </div>

          <div className="startup-card flex flex-col items-start p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-black mb-4">
              Is there a fee for submitting a pitch?
            </h3>
            <p className="text-muted-foreground text-base">
              No, submitting a pitch is completely free of charge.
            </p>
          </div>

          <div className="startup-card flex flex-col items-start p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <h3 className="text-lg font-semibold text-black mb-4">
              How do I get noticed by investors?
            </h3>
            <p className="text-muted-foreground text-base">
              Participate in virtual competitions and gain votes to increase
              your visibility.
            </p>
          </div>
        </div>
      </section>

      <hr className="size-1 bg-primary w-full max-w-6xl mt-10 mb-8 mx-auto" />

      {/* Testimonials Section */}
      <section>
      <div className="section_container">
        <div className="text-center space-y-4 mb-10">
          <h2 className="text-5xl md:text-5xl font-bold text-black">
            Trusted by Innovators
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of entrepreneurs who've found success through <br />{" "}
            our platform
          </p>
        </div>

        <div className="card_grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://avatar.iran.liara.run/public/41"
              alt="John Doe"
              className="rounded-full w-20 h-20 object-cover border-4 border-primary mb-4"
            />
            <div className="text-center">
              <p className="text-lg font-semibold text-black mb-4">
                "This platform helped me connect with the right people and
                showcase my startup to the world. Highly recommend!"
              </p>
              <p className="text-md text-black-300 mt-2 font-medium">
                - John Doe, Founder
              </p>
            </div>
          </div>

          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://avatar.iran.liara.run/public/7"
              alt="Jane Smith"
              className="rounded-full w-20 h-20 object-cover border-4 border-primary mb-4"
            />
            <div className="text-center">
              <p className="text-lg font-semibold text-black mb-4">
                "The idea validation and pitching process was seamless. I got
                great feedback from experienced entrepreneurs."
              </p>
              <p className="text-md text-black-300 mt-2 font-medium">
                - Jane Smith, Co-Founder
              </p>
            </div>
          </div>

          <div className="startup-card flex flex-col items-center p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300">
            <img
              src="https://avatar.iran.liara.run/public/68"
              alt="Alex Lee"
              className="rounded-full w-20 h-20 object-cover border-4 border-primary mb-4"
            />
            <div className="text-center">
              <p className="text-xl font-semibold text-black mb-4">
                "A great platform for <br /> networking and learning. The
                competitions helped our startup gain visibility."
              </p>
              <p className="text-md text-black-300 mt-2 font-medium">
                - Sophia Brown, CEO
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>

      <hr className="size-1 bg-primary w-full max-w-6xl mt-10 mb-20 mx-auto" />

      {/* Contact Section */}
      <section id="contact" className="pb-20 mt-8 text-center px-7">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-black mb-6">
          We'd Love to Hear From You!
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Have questions, feedback, or need support? Our team is here to assist
          you. Get in touch with us anytime!
        </p>
        <a
          href="mailto:varunmaramreddy1@gmail.com?subject=Support Request&body=Please describe your issue or question here."
          className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-black transition-all duration-300 transform hover:scale-110"
        >
          Contact Support
        </a>
      </section>

      {/* Footer Section */}
      <footer className="bg-black text-white py-6 text-center">
        <p>&copy; {new Date().getFullYear()} LaunchPad. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Page;
