import React, { useState } from 'react';
import {
  Code2,
  FileCode,
  Palette,
  Layout,
  Layers,
  Bell,
  GitBranch,
  GithubIcon,
  StepBackIcon,
} from 'lucide-react';

const levelConfig = {
  basico: { label: 'Básico', percentage: 40 },
  medio: { label: 'Médio', percentage: 70 },
  avancado: { label: 'Avançado', percentage: 95 },
};

const SkillsComponent = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedIndices, setSelectedIndices] = useState([]);

  const toggleSelected = (index) => {
    setSelectedIndices((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index],
    );
  };

  const skillGroups = [
    {
      title: 'Front-End',
      description: 'Tecnologias utilizadas no desenvolvimento de interfaces web.',
      skills: [
        {
          name: 'HTML5',
          icon: <FileCode className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-orange-500',
        },
        {
          name: 'CSS3',
          icon: <Palette className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-blue-500',
        },
        {
          name: 'JavaScript',
          icon: <FileCode className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-yellow-500',
        },
        {
          name: 'TypeScript',
          icon: <Code2 className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-blue-600',
        },
        {
          name: 'React',
          icon: <Layers className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-cyan-500',
        },
        {
          name: 'Next.js',
          icon: <Layout className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-black',
        },
        {
          name: 'Tailwind CSS',
          icon: <Palette className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-teal-500',
        },
        {
          name: 'Redux',
          icon: <StepBackIcon className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-indigo-500',
        },
      ],
    },

    {
      title: 'Back-End',
      description: 'Tecnologias utilizadas para APIs, servidores e banco de dados.',
      skills: [
        {
          name: 'Node.js',
          icon: <Code2 className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-green-600',
        },
        {
          name: 'Express',
          icon: <Code2 className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-gray-600',
        },
        {
          name: 'APIs REST',
          icon: <GitBranch className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-purple-500',
        },
        {
          name: 'MySQL',
          icon: <Layers className="w-6 h-6" />,
          level: 'medio',
          percentage: levelConfig.medio.percentage,
          color: 'bg-blue-500',
        },
      ],
    },

    {
      title: 'Ferramentas',
      description: 'Ferramentas utilizadas no desenvolvimento, versionamento e deploy.',
      skills: [
        {
          name: 'Git',
          icon: <GitBranch className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-orange-600',
        },
        {
          name: 'GitHub',
          icon: <GithubIcon className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-gray-500',
        },
        // {
        //   name: 'Docker',
        //   icon: <Code2 className="w-6 h-6" />,
        //   level: 'medio',
        //   percentage: levelConfig.medio.percentage,
        //   color: 'bg-blue-500',
        // },
        {
          name: 'Vercel',
          icon: <Code2 className="w-6 h-6" />,
          level: 'avancado',
          percentage: levelConfig.avancado.percentage,
          color: 'bg-black',
        },
      ],
    },
  ];

  // Cria um índice único para cada skill.
  // Isso mantém o funcionamento do hover/click mesmo com os grupos.
  let skillIndex = 0;

  return (
    <div className="bg-background p-8">
      <div className="mx-auto">
        {/* INSTRUÇÃO */}
        <div className="text-center mb-12">
          <p className="text-muted-foreground flex items-center justify-center gap-2 text-2xl">
            <Bell className="w-5 h-5 text-accent" />

            <span className="hidden sm:inline">
              Passe o mouse sobre cada tecnologia para ver o progresso
            </span>

            <span className="inline sm:hidden">
              Clique em cada tecnologia para ver o progresso
            </span>
          </p>
        </div>

        {/* GRUPOS DE TECNOLOGIAS */}
        <div className="space-y-16">
          {skillGroups.map((group) => (
            <section key={group.title}>
              {/* TÍTULO DA CATEGORIA */}
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground">
                  {group.title}
                </h2>

                <p className="mt-2 text-muted-foreground">
                  {group.description}
                </p>
              </div>

              {/* SKILLS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {group.skills.map((skill) => {
                  const currentIndex = skillIndex++;

                  const isActive =
                    hoveredIndex === currentIndex ||
                    selectedIndices.includes(currentIndex);

                  return (
                    <button
                      key={skill.name}
                      type="button"
                      className="bg-card/80 backdrop-blur-sm rounded-lg p-6 border border-border hover:border-primary transition-all duration-300 hover:shadow-xl text-left"
                      onMouseEnter={() =>
                        setHoveredIndex(currentIndex)
                      }
                      onMouseLeave={() => setHoveredIndex(null)}
                      onFocus={() => setHoveredIndex(currentIndex)}
                      onBlur={() => setHoveredIndex(null)}
                      onClick={() => {
                        if (
                          typeof window !== 'undefined' &&
                          window.matchMedia('(max-width: 639px)').matches
                        ) {
                          toggleSelected(currentIndex);
                        }
                      }}
                    >
                      {/* NOME + PORCENTAGEM */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`${skill.color} p-2 rounded-lg text-primary-foreground`}
                          >
                            {skill.icon}
                          </div>

                          <div>
                            <h3 className="text-xl font-semibold text-foreground">
                              {skill.name}
                            </h3>
                          </div>
                        </div>

                        <div className="text-2xl font-bold text-foreground">
                          {isActive
                            ? `${skill.percentage}%`
                            : '—'}
                        </div>
                      </div>

                      {/* BARRA DE PROGRESSO */}
                      <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden">
                        <div
                          className={`absolute top-0 left-0 h-full ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{
                            width: isActive
                              ? `${skill.percentage}%`
                              : '0%',
                          }}
                        >
                          <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary-foreground/20 to-transparent animate-pulse" />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;