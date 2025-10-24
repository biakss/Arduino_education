<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg" alt="Arduino Logo" width="120"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/GitHub%20Pages-online-success?style=flat-square&logo=github" />
  <img src="https://img.shields.io/badge/HTML-optimized-orange?style=flat-square&logo=html5" />
  <img src="https://img.shields.io/badge/GitHub%20Desktop-used-blueviolet?style=flat-square&logo=github" />
</p>

<h1 align="center">Arduino Education — Пособие по GitHub и HTML</h1>

<p align="center">
  Локальный образовательный проект, объединяющий <b>Arduino-уроки</b>, <b>GitHub Pages</b> и <b>HTML-практику</b>.  
  Основан на принципах открытого кода и аккуратной организации структуры.
</p>

---

## 🧭 Оглавление
- [1. Что внутри проекта](#1-что-внутри-проекта)
- [2. GitHub — практические приёмы](#2-github--практические-приёмы)
- [3. HTML — улучшения и навигация](#3-html--улучшения-и-навигация)
- [4. GitHub Desktop — мини-гайд](#4-github-desktop--мини-гайд)
- [5. Лицензия (MIT)](#5-лицензия-mit)
- [6. Вклад и благодарности](#6-вклад-и-благодарности)
- [7. Контакты](#7-контакты)
- [8. Подпись](#8-подпись)

---

## 1. Что внутри проекта

Проект содержит:
- коллекцию локальных уроков **Arduino Education**,  
- публикацию через **GitHub Pages**,  
- примеры **HTML-структурирования**,  
- пояснения по **GitHub Desktop** и **Git CLI**.  

Файлы размещены в директории `docs/`, что позволяет публиковать сайт напрямую без отдельной ветки.

```text
docs/
├── index.html
├── assets/
│   ├── css/main.css
│   └── js/main.js
└── content/
    ├── lesson_01.html
    ├── lesson_02.html
    └── ...
```

---

## 2. GitHub — практические приёмы

| Задача | Команда / Действие | Описание |
|--------|--------------------|-----------|
| Клонировать | `git clone https://github.com/biakss/Arduino_education.git` | Создаёт локальную копию |
| Проверить состояние | `git status` | Показывает изменённые файлы |
| Добавить файлы | `git add .` | Подготавливает изменения |
| Коммит | `git commit -m "Описание"` | Фиксирует изменения |
| Отправить | `git push` | Загружает на GitHub |
| Получить | `git pull` | Синхронизирует репозиторий |
| Скачать ZIP | *(через интерфейс GitHub)* | Альтернатива без Git |

💡 Все шаги можно выполнить одной кнопкой в **GitHub Desktop**.

---

## 3. HTML — улучшения и навигация

Основной упор сделан на **чистую структуру и лёгкий поиск**:

- упрощённые списки без лишних отступов;  
- автообновление CSS при изменениях;  
- фильтрация уроков через JavaScript;  
- аккуратная атрибуция источников.  

В подвале сайта указано происхождение материалов:

```html
<div class="wrap small" style="color:#666;">
  Материалы собраны с открытого источника 
  <a href="https://lesson.iarduino.ru/" target="_blank">lesson.iarduino.ru</a>
  и предназначены для личного обучения и офлайн-доступа.
</div>
```

---

## 4. GitHub Desktop — мини-гайд

1. **Открыть** репозиторий в GitHub Desktop.  
2. **Изменить** нужный файл (например, `index.html`).  
3. Проверить вкладку **Changes**.  
4. Написать комментарий → **Commit to main**.  
5. Нажать **Push origin** — сайт обновится.  

> Для получения обновлений с другого ПК — **Fetch origin** → **Pull**.

---

## 5. Лицензия (MIT)

Проект распространяется под лицензией **MIT**:

```
Разрешено использовать, копировать, изменять и распространять 
данный материал в любых целях при сохранении упоминания авторов.
```

Полный текст см. в файле [`LICENSE`](LICENSE).

---

## 6. Вклад и благодарности

💡 Проект открыт для предложений и доработок.  
Если хочешь улучшить структуру, перевести или добавить уроки —  
создай **Pull Request** или открой **Issue**.

Благодарности всем участникам сообщества Arduino, GitHub и OpenAI  
за идеи, вдохновение и поддержку.

---

## 7. Контакты

📧 **biakss@gmail.com**  
🌐 [biakss.github.io/Arduino_education](https://biakss.github.io/Arduino_education)  

---

## 8. Подпись

✍️ **Jevgenijs Ricko** и **ChatGPT (OpenAI)**  
© 2025 — Совместная работа по развитию открытых образовательных материалов
