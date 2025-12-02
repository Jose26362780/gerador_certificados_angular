
# 🎓 Gerador de Certificados | Aplicação Angular  

Aplicação web para criação, listagem, visualização e download de certificados personalizados. Focada em simplicidade, persistência local e experiência do usuário. Usa componentes standalone do Angular e captura visual com html2canvas para exportar certificados como imagem.

Durante o desenvolvimento, foco em:
- Arquitetura moderna Angular (Standalone + `@if` / `@for` syntax).
- Persistência simples via `localStorage` (sem backend).
- Separação clara entre páginas, componentes e serviços.
- Design adaptável e tipografia personalizada (Google Fonts).
- Geração de imagem do certificado (download rápido).

![preview](.github/cover.png)



## 🚀 Tecnologias Utilizadas
 
Este projeto utiliza tecnologias simples e performáticas do ecossistema web:

![Angular](https://img.shields.io/badge/Angular-DB0535?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![LocalStorage](https://img.shields.io/badge/LocalStorage-333333?style=for-the-badge&logo=googlechrome&logoColor=white)
![html2canvas](https://img.shields.io/badge/html2canvas-0A0A0A?style=for-the-badge&logo=javascript&logoColor=white)

---


## 📂 Estrutura do Projeto

```bash
.
├── src/
│  ├── app/
│  │  ├── app.component.*            # Componente raiz
│  │  ├── app.routes.ts              # Definição das rotas
│  │  ├── _services/
│  │  │  └── certificado.service.ts  # Lógica e persistência de certificados
│  │  ├── _components/
│  │  │  ├── navbar/
│  │  │  ├── primary-button/
│  │  │  ├── secondary-button/
│  │  │  ├── item-certificado/
│  │  │  └── base-ui/
│  │  ├── pages/
│  │  │  ├── certificados/           # Lista de certificados
│  │  │  ├── certificado-form/       # Formulário de criação
│  │  │  └── certificado/            # Visualização + download
│  ├── assets/
│  │  └── certificate/               # Imagens (fundo, ribbon, assinatura)
│  ├── styles.css                    # Estilos globais
├── [angular.json](http://_vscodecontentref_/0)
├── [package.json](http://_vscodecontentref_/1)
└── [README.md](http://_vscodecontentref_/2)

```


## 🧩 Fluxo Básico

1. Usuário acessa /.
2. Se não há certificados: interface mostra card vazio com CTA para gerar.
3. Em /certificados/novo, preenche dados e confirma.
4. Certificado é salvo no localStorage via serviço.
5. Listagem mostra itens; clique redireciona para /certificados/:id.
6. Página de certificado aplica imagens + fontes e permite download.

## 🧩 Funcionalidades

## 🛠️ Como Rodar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. Clonar o repositório

```bash
git clone <https://github.com/Jose26362780/gerador_certificados_angular>
cd gerador_certificados_angular
npm install
npm start
# Acessar: http://localhost:4200

```


## 🔗 Deploy 

![github](https://img.shields.io/badge/github-000000?style=for-the-badge&logo=github&logoColor=white)
![netlify](https://img.shields.io/badge/netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)


## 💻 Sobre mim 😄
 Entusiasta da programação e Engenheiro de Software com foco em desenvolvimento full stack. Dedicado a criar experiências digitais inovadoras que impactam o mundo através da tecnologia.

## 🔗 Contato 

[![linkedin](https://img.shields.io/badge/Linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jose-martinez-352032222/)
[![gmail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](https://mailto:juniorjose1925@gmail.com)
[![portfolio](https://img.shields.io/badge/Jose.Dev-0A0A03?style=for-the-badge&logo=react&logoColor=)](https://my-portfolio-jose-martinez.netlify.app/)








