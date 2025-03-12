import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await prisma.userInfo.create({
        data: {
            name: "Guilherme",
            age: 33,
            bio: `O Guilherme é um desenvolvedor PHP Full Stack com mais de 5 anos de experiência na criação e manutenção de aplicações web escaláveis 
            e de alta performance. Sua jornada profissional é marcada pela combinação de conhecimento técnico aprofundado e uma forte capacidade de 
            adaptação a novas tecnologias, sempre com foco em oferecer soluções eficientes e de qualidade. Atualmente, trabalha com PHP (Laravel), Node.js, 
            JavaScript, Vue.js e React.js, sendo capaz de lidar com todos os aspectos do desenvolvimento de sistemas, desde a arquitetura até a implementação 
            de interfaces de usuário responsivas e interativas. Tem experiência no desenvolvimento de APIs REST e integração de sistemas complexos, 
            trabalhando com bancos de dados relacionais e NoSQL, como MySQL, SQL Server, MongoDB e Redis. Ao longo de sua carreira, participou de projetos 
            significativos em empresas como UnioIT e Sercon, onde foi responsável pelo auxílio na criação de sistemas robustos que atendem às necessidades de negócios 
            e usuários, sempre priorizando a escalabilidade e a segurança. Tem noção de Docker para containerização de aplicações, Nginx para otimização 
            de servidores, e AWS para gerenciamento de infraestruturas na nuvem. Sua formação acadêmica em Análise e Desenvolvimento de Sistemas pela 
            UMC - Universidade de Mogi das Cruzes proporcionou-lhe uma base sólida em engenharia de software, enquanto cursos e certificações adicionais, como 
            Full Stack PHP Developer e Desenvolvimento Web Avançado com Laravel, Vue.js e React.js, o permitiram aprimorar suas habilidades em tecnologias 
            modernas. É um profissional que busca sempre a otimização de processos, o aprimoramento contínuo das minhas habilidades técnicas e, acima de tudo, 
            a entrega de resultados excepcionais para seus clientes e para as equipes com as quais colabora. Além disso, ele tem uma paixão por tecnologia e 
            ficção científica, o que me mantém sempre motivado a explorar novas soluções inovadoras para os desafios que surgem no mundo do desenvolvimento de 
            software. Se você procura um desenvolvedor com uma mentalidade analítica, foco em resultados e que seja capaz de transformar ideias em código, o Guilherme 
            está pronto para agregar valor ao seu time e contribuir para o sucesso de seu projeto.`,
            skills: "PHP (Laravel), Node.js, JavaScript, Vue.js, React.js, Docker, API Rest, Nginx, MongoDB, MySQL, SQL Server, AWS (EC2, S3, Lambda), Git, Linux",
            github: "https://github.com/GuilhermeHMG",
            address: "Rua Kasumo Sumizono, 716 casa 2 - Jd. Santa Teresa - Mogi das Cruzes / SP",
            year_of_birth: "10/08/1991",
            personal: `O Guilherme é uma pessoa muito divertida e feliz, adora cantar e tocar violão. Seu maior prazer é estar perto de pessoas que são importantes
            para ele, principalmente de sua família. É casado com sua esposa maravilhosa chamada Silvane, que é uma parceira para todos os momentos. Gosta de filmes 
            de ficção científica e gosta de uma boa leitura, desde livros de auto-ajuda até técnicos. Ele é ambicioso, tem planos para ser um grande lider de sucesso 
            na sua área, e para isso é focado nos objetivos. Gosta de organização e de cumprir com os prazos e combinados. Ele é gentil e um ótimo ouvinte! Está 
            sempre procurando soluções ao invés de reclamar das coisas e sua grande paixão é conhecimento! Gosta muito de aprender e poder replicar o que sabe para 
            as pessoas.`,
            professional: `Experiência Profissional
            UnioIT – 10/2023 até o momento
            Desenvolvedor PHP Full Stack

            Atua no desenvolvimento e manutenção de aplicações web complexas utilizando Laravel (PHP) e bancos de dados MS-SQL Server e MongoDB. Possui experiência com Git para versionamento de código e colaboração em equipe.

            Também implementa interfaces interativas e responsivas com React.js e Vue.js, garantindo uma experiência de usuário eficiente. Além disso, é responsável pela configuração e gerenciamento de ambientes Linux e Windows, utiliza Redis para otimização de cache e configura o NGINX como servidor web, assegurando alta performance e escalabilidade. Para facilitar a implantação e portabilidade das aplicações, utiliza Docker para a criação de containers.

            Sercon – 02/2021 a 10/2023
            Desenvolvedor PHP Full Stack

            Foi responsável pela manutenção e implementação de melhorias no sistema automotivo da empresa. Atuou na correção de bugs, levantamento de requisitos e otimização de processos para garantir que o software atendesse às necessidades dos usuários.

            Além disso, desenvolveu novas funcionalidades e realizou integrações com APIs REST, incluindo Mercado Livre, Mercado Pago, Aleph CRM e Digital Appointment Center da Honda Brasil.

            JSL S.A. – 08/2018 a 02/2021 (2 anos e 6 meses)
            Analista de Field Service Sr

            Prestou suporte técnico presencial e remoto (nível I e II) para colaboradores e diretoria, utilizando ferramentas como TeamViewer e System Center. Foi responsável pela montagem, configuração e instalação de computadores e notebooks, além da administração do Active Directory.

            Atuou na resolução de incidentes seguindo a metodologia ITIL, no suporte a usuários de Windows e MacOS e na configuração de salas de videoconferência com Zoom, Teams, Cisco Webex e Polycom.`,
            justification: `Quero trabalhar na Embracon porque vejo na empresa uma oportunidade de crescimento profissional e de impacto real no dia a dia das pessoas. A cultura da Embracon, que valoriza inovação, colaboração e compromisso com o cliente, está totalmente alinhada com o que busco em uma empresa.

            Com minha experiência em desenvolvimento Full Stack PHP, já trabalhei em projetos complexos, lidando com Laravel, React, Vue, bancos de dados como SQL Server e MongoDB, além de integrações com APIs e otimizações de performance. Acredito que essas habilidades podem contribuir para o desenvolvimento de soluções eficientes e escaláveis dentro da empresa.

            Além disso, a solidez e reputação da Embracon no mercado chamam minha atenção. Trabalhar em um ambiente inovador e com desafios constantes, onde posso aplicar meu conhecimento e aprender cada vez mais, é algo que me motiva. Quero fazer parte de uma equipe que valoriza a tecnologia como diferencial estratégico e que impacta diretamente a vida de milhares de clientes.`,
            questions: `"Quem é o Guilherme?", "Quantos anos o Guilherme tem?", "Quais são as skills do Guilherme?", "Qual é o github do Guilherme?", "Onde ele mora?", "Conte-me sobre a vida profissional do Guilherme", "Conta-me sobre a vida pessoal do Guilherme", "Por que querer trabalhar na Embracon?"`,
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
