// ==================== TIPAGENS ====================

export interface EducationItem {
    id: number
    degree: string
    field: string
    institution: string
    startYear: string
    endYear: string
    status: "Concluído" | "Em andamento"
    highlights: string[]
}

export interface CertificateItem {
    id: number
    title: string
    institution: string
    year: string
    workload?: string
    skills: string[]
}

// ==================== FORMAÇÃO ====================

let educationData: EducationItem[] = [
    {
        id: 1,
        degree: "Bacharelado",
        field: "Ciência da Computação",
        institution: "Universidade Unifavip | Faculdades Integradas Vale do Ipojuca",
        startYear: "2023",
        endYear: "Atual",
        status: "Em andamento",
        highlights: [
            "Lógica de programação e estruturas de dados aplicadas",
            "Programação orientada a objetos com foco em boas práticas",
            "Fundamentos de engenharia de software e arquitetura",
            "Desenvolvimento de aplicações web modernas",
            "Versionamento de código com Git e GitHub",
            "Boas práticas de código, organização e manutenção"
        ]

    }
]

// ==================== CERTIFICADOS ====================

let certificatesData: CertificateItem[] = [
    {
        id: 1,
        title: "Angular: O Guia Definitivo das Principais Funcionalidades",
        institution: "Udemy",
        year: "2024",
        workload: "154h",
        skills: [
            "Angular",
            "TypeScript",
            "Componentização",
            "RxJS",
            "Reactive Forms",
            "Angular Router",
            "Dependency Injection",
            "Boas práticas",
            "Arquitetura Front-end",
            "Angular Material"
        ]
    },
    {
        id: 2,
        title: "Formação Lógica de Programação",
        institution: "DIO",
        year: "2025",
        workload: "41h",
        skills: [
            "Lógica de programação",
            "Algoritmos",
            "Estruturas de dados",
            "Boas práticas"
        ]
    },
    {
        id: 3,
        title: "React Js com TypeScript do zero ao avançado na pratica",
        institution: "Udemy",
        year: "2025",
        workload: "18h",
        skills: [
            "React",
            "TypeScript",
            "Hooks",
            "Context API",
            "Firebase",
            "Componentização",
            "Gerenciamento de estado",
            "Boas práticas",
            "Arquitetura Front-end"
        ]

    },
    {
        id: 4,
        title: "Java COMPLETO Programação Orientada a Objetos + Projetos",
        institution: "Coursera",
        year: "2024",
        workload: "54h",
        skills: [
            "Java",
            "Programação Orientada a Objetos",
            "Spring Boot",
            "JPA / Hibernate",
            "JDBC",
            "SQL",
            "UML",
            "MySQL",
            "MongoDB",
            "Arquitetura Back-end",
            "Boas práticas"
        ]

    }
]

// ==================== GET / SET ====================

export const getEducation = () => educationData
export const setEducation = (data: EducationItem[]) => {
    educationData = data
}

export const getCertificates = () => certificatesData
export const setCertificates = (data: CertificateItem[]) => {
    certificatesData = data
}
