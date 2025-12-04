import { useState } from 'react';
import { Menu, X, Github, Mail, Linkedin, Code, Cpu, Server, Terminal, GraduationCap, Briefcase, MapPin, Download } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navigation = [
    { name: 'À propos', href: '#about' },
    { name: 'Compétences', href: '#skills' },
    { name: 'Projets', href: '#projects' },
    { name: 'Parcours', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-secondary text-slate-900 font-sans selection:bg-primary selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-secondary/90 backdrop-blur-sm border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 font-bold text-2xl text-primary tracking-tighter">
              KI<span className="text-slate-900">.dev</span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-700"
                  >
                    {item.name}
                  </a>
                ))}
                <a href="#contact" className="bg-primary text-slate-900 hover:bg-primary/80 px-4 py-2 rounded-md text-sm font-bold transition-colors">
                  Me Contacter
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-primary/20 focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-secondary border-t border-primary/20">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:bg-primary/20 hover:text-primary px-3 py-2 rounded-md text-base font-medium text-slate-700"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-8 lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wide mb-4">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              Disponible : Mars - Sept 2026
            </div>
            <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl lg:text-6xl">
              <span className="block">Bonjour, je suis</span>
              <span className="block text-primary">Kéziah Imer</span>
            </h1>
            <p className="mt-3 text-base text-slate-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Développeur FullStack & Ingénieur IoT.
              Étudiant à Epitech, je conçois des architectures logicielles robustes et des systèmes embarqués innovants. Je recherche un <strong>stage de fin d'études de 6 mois</strong>.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-slate-900 bg-primary hover:bg-primary/80 md:py-4 md:text-lg transition-all shadow-lg shadow-primary/20">
                Me contacter
              </a>
              <a
                href="/cv.pdf"
                download="CV_Keziah_Imer.pdf"
                className="flex items-center justify-center px-8 py-3 border border-primary/50 text-base font-medium rounded-md text-slate-700 hover:bg-primary/20 md:py-4 md:text-lg transition-all"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger CV
              </a>
            </div>
            <div className="mt-8 flex items-center gap-4 text-slate-600 sm:justify-center lg:justify-start">
              <a href="https://github.com/keziahimer" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors"><Github size={24} /></a>
              <a href="mailto:keziah.imer.pro@proton.me" className="hover:text-primary transition-colors"><Mail size={24} /></a>
              {/* Placeholder for LinkedIn if available */}
              <a href="https://www.linkedin.com/in/kéziah-imer-997849240/" className="hover:text-primary transition-colors"><Linkedin size={24} /></a>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-4 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-primary/20 rounded-lg overflow-hidden border border-primary/30 aspect-square flex items-center justify-center">
                <img
                  src="/cv-photo.jpg"
                  alt="Kéziah Imer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">Expertise Technique</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Mes domaines de compétence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <SkillCard
              icon={<Code className="h-8 w-8 text-primary" />}
              title="Frontend"
              skills={['React.js', 'Vue.js', 'HTML/CSS', 'Responsive Design']}
            />
            <SkillCard
              icon={<Server className="h-8 w-8 text-primary" />}
              title="Backend & Data"
              skills={['NodeJS', 'Architecture Logicielle', 'MySQL', 'MongoDB']}
            />
            <SkillCard
              icon={<Cpu className="h-8 w-8 text-primary" />}
              title="IoT & Embarqué"
              skills={['Systèmes Embarqués', 'C/C++', 'Protocoles IoT']}
            />
            <SkillCard
              icon={<Terminal className="h-8 w-8 text-primary" />}
              title="Transverse"
              skills={['Cybersécurité', 'Prompt Engineering', 'Git/GitHub', 'Autonomie']}
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Projets & Réalisations
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-slate-700">
              Une sélection de projets réalisés en entreprise et durant mon cursus.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <ProjectCard
              title="Solution de Gestion Interne"
              company="MCP Diagnostic & Ingénierie"
              description="Conception et développement FullStack d'un outil complet pour automatiser la création de devis et la facturation. Simplification des flux administratifs."
              tags={['FullStack', 'Automation', 'Web App']}
              date="2025 - 2026"
            />
            <ProjectCard
              title="IA & Reformulation (Cordial)"
              company="Synapse Développement"
              description="Intégration de fonctionnalités d'IA générative. Prompt Engineering avancé pour contrôler le ton et la précision des reformulations dans un correcteur orthographique souverain."
              tags={['IA / LLM', 'Prompt Engineering', 'Vue', 'Python', '.NET']}
              date="2024"
            />
            <ProjectCard
              title="ERP Transformation PME"
              company="Strateg.in"
              description="Développement de modules ERP sur mesure et suivi client direct. Participation active à la transformation numérique de plusieurs PME."
              tags={['React', 'NodeJS', 'MongoDB', 'ERP']}
              date="2022"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="py-20 bg-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* Experience */}
            <div>
              <div className="flex items-center mb-8">
                <Briefcase className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Expérience Professionnelle</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-8 space-y-12">
                <TimelineItem
                  date="Sept 2025 - Fév 2026"
                  title="Développeur FullStack"
                  company="MCP Diagnostic & Ingénierie"
                  details="Développement d'une solution interne de gestion de devis/factures."
                />
                <TimelineItem
                  date="Fév 2024 - Mai 2024"
                  title="Développeur FullStack / Prompt Engineer"
                  company="Synapse Développement"
                  details="IA Générative, optimisation de prompts pour LLMs, amélioration du correcteur Cordial."
                />
                <TimelineItem
                  date="Août 2022 - Déc 2022"
                  title="Développeur FullStack / Relation Client"
                  company="Strateg.in"
                  details="Finalisation de solutions ERP (React, Node, Mongo) et présentation clients."
                />
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center mb-8">
                <GraduationCap className="h-6 w-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-slate-900">Formation</h3>
              </div>
              <div className="border-l-2 border-primary/30 pl-8 space-y-12">
                <TimelineItem
                  date="2021 - 2026"
                  title="Programme Grande Ecole"
                  company="EPITECH"
                  details="Expertise en développement logiciel, innovation et informatique. Pédagogie par projet."
                />
                <TimelineItem
                  date="4ème Année"
                  title="Année Internationale"
                  company="Barcelone, Espagne"
                  details="Immersion culturelle et technique à l'étranger."
                />
              </div>

              <div className="mt-12">
                <div className="flex items-center mb-6">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-2xl font-bold text-slate-900">Langues</h3>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <LanguageBadge lang="Français" level="Natif" />
                  <LanguageBadge lang="Anglais" level="B2" />
                  <LanguageBadge lang="Espagnol" level="A2" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <section id="contact" className="bg-secondary border-t border-primary/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Prêt à collaborer ?</h2>
          <p className="text-slate-700 mb-8 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'un stage de fin d'études débutant en Mars 2026.
            N'hésitez pas à me contacter pour discuter de vos projets.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-12">
            <a href="mailto:keziah.imer.pro@proton.me" className="flex items-center text-primary hover:text-primary/80 transition-colors">
              <Mail className="mr-2" /> keziah.imer.pro@proton.me
            </a>
            <span className="hidden md:block text-slate-400">|</span>
            <span className="flex items-center text-slate-700">
              <MapPin className="mr-2 h-5 w-5 text-primary" /> France
            </span>
          </div>

          <p className="text-slate-500 text-sm">
            © 2025 Kéziah Imer. Tous droits réservés.
          </p>
        </div>
      </section>
    </div>
  );
};

const SkillCard = ({ icon, title, skills }) => (
  <div className="bg-secondary rounded-xl p-6 border border-primary/30 hover:border-primary transition-all hover:transform hover:-translate-y-1">
    <div className="bg-primary/20 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="text-slate-700 flex items-center">
          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
          {skill}
        </li>
      ))}
    </ul>
  </div>
);

const ProjectCard = ({ title, company, description, tags, date }) => (
  <div className="bg-secondary rounded-xl overflow-hidden border border-primary/30 flex flex-col hover:shadow-xl hover:shadow-primary/20 transition-all group">
    <div className="p-6 flex-1">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-xs font-bold text-primary uppercase tracking-wide mb-1">{company}</p>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{title}</h3>
        </div>
        <span className="text-xs text-slate-600 bg-primary/20 px-2 py-1 rounded">{date}</span>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed mb-6">
        {description}
      </p>
    </div>
    <div className="px-6 pb-6 pt-0 mt-auto">
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-slate-700 border border-primary/30">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TimelineItem = ({ date, title, company, details }) => (
  <div className="relative pb-2">
    <span className="absolute top-1 -left-[41px] w-5 h-5 rounded-full bg-secondary border-4 border-primary"></span>
    <p className="text-sm text-primary font-semibold mb-1">{date}</p>
    <h4 className="text-lg font-bold text-slate-900">{title}</h4>
    <p className="text-slate-700 font-medium mb-2">{company}</p>
    <p className="text-slate-600 text-sm">{details}</p>
  </div>
);

const LanguageBadge = ({ lang, level }) => (
  <div className="text-center p-3 bg-primary/20 rounded-lg border border-primary/30">
    <div className="font-bold text-slate-900">{lang}</div>
    <div className="text-xs text-primary mt-1">{level}</div>
  </div>
);

export default App;
