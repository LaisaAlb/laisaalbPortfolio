import {
  Baby,
  Car,
  Brain,
  CreditCard,
  Wrench,
  FileText,
} from "lucide-react"

import Apae from "../assets/images/projects/apae.png"
import Veiculos from "../assets/images/projects/veiculos.png"
import UserPlatform from "../assets/images/projects/userPlatform.png"
import Chamados from "../assets/images/projects/chamados.png"
import ReactiveForms from "../assets/images/projects/reactiveForms.png"
import AgendaAI from "../assets/images/projects/agendaAI.png"

export const projects = [
  {
    id: 1,
    title: "APAE - LTD - UNIFAVIP",
    emoji: Baby,
    image: Apae,
    description:
      "Projeto acadêmico desenvolvido para auxiliar crianças com deficiência intelectual e múltipla a desenvolver habilidades cognitivas e motoras.",
    techs: ["HTML", "CSS", "JavaScript", "Trabalho em Equipe", "Acessibilidade", "GIT | GitHub"],
    github: "https://github.com/KelvinGuimaraes/APAE--V3",
  },
  {
    id: 2,
    title: "AUTODRIVE",
    emoji: Car,
    image: Veiculos,
    description:
      "Aplicação Full Stack para gerenciamento de veículos. Foi um desafio técnico para aprender e praticar minhas habilidades em desenvolvimento web full stack.",
    techs: ["React", "CSS","TypeScript", "Node.js", "Prisma", "GIT | GitHub"],
    github: "https://github.com/LaisaAlb/GerenciamentoDeVeiculosFront",
  },
  {
    id: 3,
    title: "AGENDA AI",
    emoji: Brain,
    image: AgendaAI,
    video: "https://github.com/ErnandyLucena/devmobile",
    description:
      "Projeto mobile que utiliza inteligência artificial para ajudar os médicos sócios a organizar agendamentos, consultas e pacientes de forma eficiente. Este projeto foi desenvolvido em equipe e eu fiquei responsável pelo desenvolvimento da interface e mobile utilizando React Native e a integração com o firebase.",
    techs: ["React Native", "TypeScript", "Firebase", "Inteligência Artificial", "UX/UI", "GIT | GitHub"],
    github: "https://github.com/seu-repo/agenda-ai",
  },
  {
    id: 4,
    title: "USER PLATFORM",
    emoji: CreditCard,
    image: UserPlatform,
    description:
      "Projeto desenvolvido com o objetivo de práticar e desenvolver minhas habilidades em Angular, TypeScript e SCSS, criando uma plataforma de usuários com conceitos de componentiação e estilização.",
    techs: ["Angular v17", "TypeScript", "SCSS", "GIT | GitHub"],
    github: "https://github.com/LaisaAlb/userPlataform",
  },
  {
    id: 5,
    title: "CHAMADOS",
    emoji: Wrench,
    image: Chamados,
    description:
      "Projeto Full Stack desenvolvido para gerenciar chamados técnicos em uma empresa de TI. O sistema permite o cadastro, acompanhamento e resolução de chamados, facilitando a comunicação entre clientes e equipe técnica. Esse projeto foi uma oportunidade para aplicar meus conhecimentos em React no front-end e Firebase como API.",
    techs: ["React", "Auth", "Firebase", "TypeScript", "CSS", "GIT | GitHub"],
    github: "https://github.com/LaisaAlb/Chamados",
  },
  {
    id: 6,
    title: "REACTIVE FORMS",
    emoji: FileText,
    image: ReactiveForms,
    description:
      "Projeto desenvolvido em Angular para aprender o uso de Reactive Forms na prática e seus diferentes níveis de complexidades.",
    techs: ["Angular v17", "TypeScript", "Reactive Forms"],
    github: "https://github.com/LaisaAlb/project-reactive-form",
  },
]
