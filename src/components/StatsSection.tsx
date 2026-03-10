const BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/";

const technologies = [
  // Row 1 — Frontend
  { name: "ANGULAR",      src: `${BASE}angularjs/angularjs-original.svg` },
  { name: "VUE",          src: `${BASE}vuejs/vuejs-original.svg` },
  { name: "REACT",        src: `${BASE}react/react-original.svg` },
  { name: "NODE JS",      src: `${BASE}nodejs/nodejs-plain.svg` },
  { name: "PYTHON",       src: `${BASE}python/python-original.svg` },
  { name: "JAVA",         src: `${BASE}java/java-original.svg` },
  // Row 2 — DevOps & Cloud
  { name: "GIT",          src: `${BASE}git/git-original.svg` },
  { name: "BITBUCKET",    src: `${BASE}bitbucket/bitbucket-original.svg` },
  { name: "AWS",          src: `${BASE}amazonwebservices/amazonwebservices-original-wordmark.svg` },
  { name: "MONGODB",      src: `${BASE}mongodb/mongodb-original.svg` },
  { name: "DOCKER",       src: `${BASE}docker/docker-original.svg` },
  { name: ".NET",         src: `${BASE}dotnetcore/dotnetcore-original.svg` },
  // Row 3 — Mobile & Languages
  { name: "RUBY",         src: `${BASE}ruby/ruby-original.svg` },
  { name: "PERL",         src: `${BASE}perl/perl-original.svg` },
  { name: "ANDROID",      src: `${BASE}android/android-original.svg` },
  { name: "IOS",          src: `${BASE}apple/apple-original.svg` },
  { name: "SWIFT",        src: `${BASE}swift/swift-original.svg` },
  { name: "REACT NATIVE", src: `${BASE}react/react-original.svg` },
  // Row 4 — Data & ML
  { name: "ORACLE",       src: `${BASE}oracle/oracle-original.svg` },
  { name: "APACHE",       src: `${BASE}apache/apache-original.svg` },
  { name: "KAFKA",        src: `${BASE}apachekafka/apachekafka-original-wordmark.svg` },
  { name: "JUPYTER",      src: `${BASE}jupyter/jupyter-original.svg` },
  { name: "TENSORFLOW",   src: `${BASE}tensorflow/tensorflow-original.svg` },
  { name: "D3.JS",        src: `${BASE}d3js/d3js-original.svg` },
  // Row 5 — Databases & Typed JS
  { name: "MYSQL",        src: `${BASE}mysql/mysql-original.svg` },
  { name: "POSTGRESQL",   src: `${BASE}postgresql/postgresql-original.svg` },
  { name: "REDIS",        src: `${BASE}redis/redis-original.svg` },
  { name: "TYPESCRIPT",   src: `${BASE}typescript/typescript-original.svg` },
  { name: "JAVASCRIPT",   src: `${BASE}javascript/javascript-original.svg` },
  { name: "KUBERNETES",   src: `${BASE}kubernetes/kubernetes-plain.svg` },
  // Row 6 — Infrastructure & Web
  { name: "AZURE",        src: `${BASE}microsoftazure/microsoftazure-original.svg` },
  { name: "LINUX",        src: `${BASE}linux/linux-original.svg` },
  { name: "HTML5",        src: `${BASE}html5/html5-original.svg` },
  { name: "CSS3",         src: `${BASE}css3/css3-original.svg` },
  { name: "BOOTSTRAP",    src: `${BASE}bootstrap/bootstrap-original.svg` },
  { name: "TAILWIND CSS", src: `${BASE}tailwindcss/tailwindcss-plain.svg` },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-bold tracking-[0.5em] text-foreground uppercase mb-3">TECHNOLOGIES</p>
          <h2 className="text-3xl md:text-[2.75rem] font-light leading-tight">What We Use</h2>
        </div>

        {/* Bordered grid — border-l + border-t on container, border-r + border-b on each cell */}
        <div className="border-l border-t border-border grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="border-r border-b border-border flex items-center gap-3 px-4 py-4 group hover:bg-blue-50/60 transition-colors cursor-default"
            >
              <img
                src={tech.src}
                alt={tech.name}
                width={36}
                height={36}
                className="h-9 w-9 flex-shrink-0 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.visibility = "hidden";
                }}
              />
              <span className="text-[10px] font-bold tracking-widest text-foreground/60 group-hover:text-foreground transition-colors uppercase leading-tight">
                {tech.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default StatsSection;
