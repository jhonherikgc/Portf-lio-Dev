import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from "@mui/icons-material/GitHub";
// Dados dos seus projetos
interface Project {
  id: number;
  image: string;
  text: string;
  githubLink: string;
  liveLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    image: 'caminho-para-imagem-1.png',
    text: 'Este é o texto explicativo do Projeto 1. Focado em UX/UI e desenvolvimento front-end com React.',
    githubLink: 'https://github.com/seu-usuario/projeto-1',
    liveLink: 'https://seusite.com/projeto-1'
  },
  {
    id: 2,
    image: 'caminho-para-imagem-2.png',
    text: 'Este é o texto explicativo do Projeto 2. Um projeto de e-commerce construído com TypeScript e Node.js.',
    githubLink: 'https://github.com/seu-usuario/projeto-2',
    liveLink: 'https://seusite.com/projeto-2'
  },
  // Adicione mais projetos aqui
  {
    id: 3,
    image: 'caminho-para-imagem-3.png',
    text: 'Este é o texto explicativo do Projeto 3. Um aplicativo móvel desenvolvido com React Native.',
    githubLink: 'https://github.com/seu-usuario/projeto-3',
    liveLink: 'https://seusite.com/projeto-3'
  },
  {
    id: 4,
    image: 'caminho-para-imagem-4.png',
    text: 'Este é o texto explicativo do Projeto 4. Uma plataforma de blog com integração de CMS.',
    githubLink: 'https://github.com/seu-usuario/projeto-4',
    liveLink: 'https://seusite.com/projeto-4'
  }
];

const ProjectsSection = () => {
  // Exemplo de uso de hook para responsividade (se você tiver)
  // const isMobile = useMediaQuery('(max-width: 768px)');
  
  return (
    <div style={{
      backgroundColor: '#2e2e2e',
      padding: '40px',
      borderRadius: '10px',
      margin: '20px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    }}>
      <h2 style={{
        color: 'white',
        textAlign: 'center' as 'center',
        fontSize: '2.5rem',
        marginBottom: '40px',
      }}>
        Projetos
      </h2>
      <div style={{
        display: 'grid',
        gap: '30px',
        // Estilo responsivo (comentado)
        // gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
        gridTemplateColumns: 'repeat(2, 1fr)', // Padrão para desktop
      }}>
        {projectsData.map(project => (
          <div
            key={project.id}
            style={{
              display: 'flex',
              flexDirection: project.id % 2 !== 0 ? 'row' : 'row-reverse',
              alignItems: 'center',
              backgroundColor: '#3f3f3f',
              borderRadius: '10px',
              padding: '20px',
              gap: '20px',
              // Estilo responsivo (comentado)
              // flexDirection: isMobile ? 'column' : (project.id % 2 !== 0 ? 'row' : 'row-reverse')
            }}
          >
            <div style={{
              backgroundColor: '#555',
              width: '50%',
              height: '200px',
              display: 'flex',
              justifyContent: 'center' as 'center',
              alignItems: 'center' as 'center',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1.2rem',
              // Estilo responsivo (comentado)
              // width: isMobile ? '100%' : '50%'
            }}>
              {/* Você pode renderizar a imagem aqui, ou usar um placeholder */}
              {project.image ? (
                <img src={project.image} alt={`Foto do ${project.text.substring(0, 15)}...`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
              ) : (
                'FOTO PROJETO'
              )}
            </div>
            <div style={{
              backgroundColor: '#555',
              width: '50%',
              height: '200px',
              display: 'flex',
              flexDirection: 'column' as 'column',
              justifyContent: 'center' as 'center',
              alignItems: 'center' as 'center',
              borderRadius: '8px',
              color: 'white',
              padding: '15px',
              fontSize: '1rem',
              textAlign: 'center' as 'center',
              // Estilo responsivo (comentado)
              // width: isMobile ? '100%' : '50%'
            }}>
              <p style={{ margin: 0 }}>{project.text}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end' as 'flex-end',
                marginTop: '10px',
                gap: '10px',
                width: '100%',
              }}>
                <a 
                  href={project.githubLink} 
                  style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {<GitHubIcon/>}
                </a>
                <a 
                  href={project.liveLink} 
                  style={{ color: 'white', fontSize: '1.5rem', cursor: 'pointer' }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {<LinkIcon/>}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;