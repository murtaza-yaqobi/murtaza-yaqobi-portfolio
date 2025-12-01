export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 bg-gray-100 text-center md:text-left px-6 sm:px-10 lg:px-20 pt-[110px] pb-10"
    >
      <div>
        <h2 className="text-3xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className=" moto">Murtaza</span>
        </h2>
        <p className="text-xl md:text-2xl mb-6">
          Front-End Developer & Designer
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white md:px-3 p-2 md:py-3 py-2 rounded-[2px] font-medium md:text-lg text-sm hover:bg-blue-700 transition-all"
        >
          View My Work
        </a>
      </div>
      <div className="contianer-1 z-10 group">
        <img
          className="rounded-full z-20 w-[300px] md:w-[450px] group-hover:scale-[102%] duration-500 transition-all"
          src="./Image/me1.jpg"
          alt="Murtaza Yaqobi"
        />
      </div>
    </section>
  );
}
