import './App.css';

const portfolioItems = [
  {
    id: 1,
    title: "Ежедневник с ИИ",
    description: "Адаптивный лендинг с двумя темами использующий ИИ",
    stack: "React, CSS Modules, DeepseekApi, vite....",
    demoLink: "https://legendary-heliotrope-c5f2f4.netlify.app",
    codeLink: "https://github.com/vanaver/Task-diary",
    note: "*Для работы api требуется VPN"
  },
  {
    id: 2,
    title: "Удобный переводчик",
    description: "Платформа для личного изучения языков",
    stack: "React, TypeScript, CSS Modules и тд",
    demoLink: "https://translateteach.netlify.app",
    codeLink: "https://github.com/vanaver/Translate-Teach",
    note: "*Для работы api требуется VPN"
  },
  {
    id: 3,
    title: "Music App",
    description: "Можно отсюда добавлять и искать треки для Клиента Spotify",
    stack: "React, TypeScript, Spotify API и остальное",
    demoLink: "https://musicappbe.netlify.app",
    codeLink: "https://github.com/vanaver/musicapp",
    note: "*Требуется аккаунт Spotify и VPN"
  }
];

function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="nav">
          <button onClick={() => scrollToSection('home')}>Главная</button>
          <button onClick={() => scrollToSection('skills')}>Навыки</button>
          <button onClick={() => scrollToSection('portfolio')}>Портфолио</button>
          <button onClick={() => scrollToSection('experience')}>Опыт</button>
          <button onClick={() => scrollToSection('contacts')}>Контакты</button>
        </nav>
      </header>

      <main>
        <section id="home" className="section hero">
          <h1>Васильев Иван</h1>
          <h2>Frontend разработчик</h2>
          <p>Создаю современные и эффективные веб-интерфейсы. Внимателен к деталям кода и достижению поставленных целей.
             Обладаю большим пластом знаний, который начинается с нуля, а не с популярных фреймворков. Ценю как можно более раннее обнаружение ошибок в коде,
             чтобы это не выливалось в проблемы позже, а также четкую краткую НО насыщенную на важные вещи речь касаемо задач как от себя так и от команды. При работе в команде стараюсь писать код как можно более понятно для чужих глаз. Можно писать мне сразу в тг</p>
          <div className="buttons">
            <button onClick={() => scrollToSection('contacts')} className="btn btn-primary">
              Связаться
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="btn btn-secondary">
              Мои работы
            </button>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Навыки</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Languages</h3>
              <div className="skills-list">TypeScript, JavaScript</div>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <div className="skills-list">React, NextJs, React Native, React Router</div>
            </div>
            <div className="skill-category">
              <h3>Bundlers</h3>
              <div className="skills-list">Vite, Webpack</div>
            </div>
            <div className="skill-category">
              <h3>Styling</h3>
              <div className="skills-list">CSS Modules, CSS3, Semantic HTML</div>
            </div>
            <div className="skill-category">
              <h3>Tools</h3>
              <div className="skills-list">Git, Redux, Zustand, Axios</div>
            </div>
          </div>
        </section>

        <section id="portfolio" className="section">
          <h2>Портфолио</h2>
          <div className="portfolio-grid">
            {portfolioItems.map(item => (
              <div key={item.id} className="portfolio-card">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p><strong>Стек:</strong> {item.stack}</p>
                <div className="portfolio-links">
                  <a href={item.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Демо
                  </a>
                  <a href={item.codeLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                    Код
                  </a>
                </div>
                {item.note && <p className="note">{item.note}</p>}
              </div>
            ))}
          </div>
        </section>
<section id="experience" className="section">
  <h2>Опыт работы</h2>
  <div className="experience-item">
    <h3>Frontend разработчик</h3>
    <p><strong>Компания "Purrweb"</strong> | декабрь 2023 - июль 2025</p>
    <ul>
      <li>Разработка и поддержка клиентской части SPA на React и TypeScript</li>
      <li>Интеграция с чат-API для реализации мессенджера в реальном времени</li>
      <li>Разработка кастомных хуков для работы с API</li>
      <li>Реализация пагинации и бесконечной прокрутки для больших наборов данных</li>
      <li>Адаптивная верстка сложных интерфейсов с grid и flexbox</li>
      <li>Реализация анимаций и переходов на CSS</li>
      <li>Разработка темной и светлой темы оформления</li>
      <li>Создание переиспользуемых стилевых компонентов</li>
      <li>Взаимодействие с дизайнерами по уточнению макетов</li>
    </ul>
    <h4>Какие проблемы бизнеса я решил:</h4>
    <p>1. Реализовал lazy loading для тяжелых компонентов и изображений,
       что сократило время начальной загрузки приложения на 40%. 
       Настроил мемоизацию вычислений через useMemo и useCallback, устранив лишние ререндеры сложных элементов интерфейса.</p>
       <p>2. Создал библиотеку переиспользуемых компонентов (кнопки, модалки, селекты) с TypeScript и CSS Modules. Унификация компонентов ускорила разработку
         новых страниц на 30% и обеспечила единообразие интерфейса.</p>
      <p>3. Перевел legacy-код на современный стек: заменил jQuery-компоненты на React-решения, внедрил CSS Grid/Flexbox для сложных адаптивных layouts. 
        Это улучшило производительность на мобильных устройствах на 25%.</p>
  </div>
</section>

        <section id="contacts" className="section">
          <h2>Контакты</h2>
          <div className="contacts-content">
            <p>Свяжитесь со мной для обсуждения вашего проекта</p>
            <div className="contact-links">
              <a href="https://github.com/vanaver" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              <a href="https://spb.hh.ru/resume/91ba3b58ff0f4c153c0039ed1f546d31744741" id='hhru' target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="HeadHunter">
                hh.ru
              </a>

              <a href="https://t.me/shiro2156" target="_blank" rel="noopener noreferrer" className="btn-icon" aria-label="Telegram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.14.141-.259.259-.374.261l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.136-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;