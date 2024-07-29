'use client';

import { useState } from 'react';

export default function LanguageSelector({ language, setLanguage }) {
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'english', name: 'English' },
    { code: 'yoruba', name: 'Yorùbá' }
  ];

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-selector">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="language-selector-button"
      >
        {languages.find(lang => lang.code === language)?.name || 'Select Language'}
      </button>
      {isOpen && (
        <ul className="language-list">
          {languages.map((lang) => (
            <li key={lang.code}>
              <button 
                onClick={() => handleLanguageChange(lang.code)}
                className={`language-option ${lang.code === language ? 'active' : ''}`}
              >
                {lang.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}