import ProjectItem from "./ProjectItem";
const Projects = () => {
  return (
    <div id="Projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001]">PROJECTS</h1>
      <p className="text-center py-8">
        In the dynamic landscape of technology, my commitment to excellence in
        backend development is unwavering. As a seasoned professional, I
        understand the imperative of staying at the forefront of industry
        advancements. My backend projects serve as a testament to this
        dedication, embodying a synthesis of cutting-edge solutions and
        time-tested principles.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img="/codenet.PNG" title="codenet BE" />
        <ProjectItem img="/gameHub.PNG" title="GameHub FE&BE" />
      </div>
    </div>
  );
};

export default Projects;
