import Inspiration from "@assets/svg/ideas_inspiration.svg";

export default function MoveUsBanner() {
  return (
    <div className="w-full bg-slate-900">
      <div className="flex flex-wrap items-center justify-between w-10/12 mx-auto">
        <div className="w-full md:w-1/2 relative">
          <div className="inline-flex items-center gap-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
            <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent text-sm">
              Did you know?
            </span>
          </div>
          <h2 className="pb-4 text-4xl font-black text-white/80">
            Your ideas move us
          </h2>
          <p className="text-sm max-w-lg">
            We are passionate about turning your ideas into reality. Our team
            thrives on creativity and is dedicated to crafting innovative
            solutions that elevate you. Together, we can transform your vision
            into success.
          </p>
          <div className="flex justify-start gap-2 mt-8">
            <div className="rounded-md shadow">
              <a
                href="/signup"
                className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-800 hover:bg-sky-900"
              >
                Sign Up!
              </a>
            </div>
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="flex items-center justify-center px-5 py-3 border border-slate-100 text-base font-medium rounded-md text-white bg-transparent hover:bg-slate-100 hover:text-slate-950"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 relative hidden md:block">
          <div className="flex flex-wrap justify-center">
            <div className="w-2/3">
              <img
                src={Inspiration}
                alt="office"
                className="h-[400px] rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
