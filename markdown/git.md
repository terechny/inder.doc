
# Git Basics

##### 🌐 Git. Что это

Git — это распределенная система контроля версий. 
Она позволяет разработчикам отслеживать историю изменений в коде, 
возвращаться к старым версиям файлов, а также безопасно объединять код, 
написанный разными людьми одновременно.

Слово распределенная означает, 
что каждый разработчик копирует всю историю проекта целиком на свой компьютер, 
а не работает с одним центральным сервером. 
Если сервер сломается, проект можно полностью восстановить с любого локального компьютера.

##### 🚀 Основные команды

Базовый набор команд для создания проекта и просмотра его текущего состояния:

- `git init` — создает новый пустой Git-репозиторий в текущей папке. В ней появляется скрытая папка `.git`, где хранится вся история.
- `git clone` [url] — копирует существующий удаленный проект (например, с GitHub или GitLab) на ваш компьютер вместе со всей историей изменений.
- `git status` — показывает текущее состояние рабочего каталога. Вы увидите, какие файлы были изменены, какие добавлены, а какие еще не отслеживаются `Git`.
- `git log` — выводит список всех сделанных коммитов (сохранений) в текущей ветке с именами авторов, датами и описанием изменений.

- `clone` — скачать репозиторий
- `pull` — получить изменения
- `add` — добавить в staging
- `commit` — сохранить изменения
- `push` — отправить на сервер

##### 🔄 Работа с изменениями

Процесс сохранения изменений в Git состоит из двух этапов (индексация и фиксация) и работы с ветками:

* `git add [файл]` — добавляет измененный файл в индекс (Staging Area). 
        Это подготовка файла к сохранению. 
        Команда `git add .` добавляет сразу все измененные файлы в текущей папке.

* `git commit -m "Сообщение"` — делает снимок (слепок) подготовленных изменений и сохраняет его в историю. 
        Каждый коммит должен иметь понятное описание того, что было сделано.

* `git branch [имя_ветки]` — создает новую ветку для разработки изолированной фичи, 
        чтобы не испортить рабочий код в главной ветке.

* `git checkout [имя_ветки]` (или современная `git switch [имя_ветки]`) — переключает вас на другую ветку.

* `git merge [имя_ветки]` — сливает изменения из указанной ветки в ту ветку, в которой вы сейчас находитесь.

```bash
# Что изменилось (unstaged)
git diff

# Что в staging
git diff --staged

# История коммитов
git log
git log --oneline
git log --graph --oneline --all

# Изменения в конкретном файле
git log -p src/Controller.php
```

```bash
# Отменить изменения в файле (до add)
git checkout -- src/Controller.php
git restore src/Controller.php

# Убрать из staging (после add, до commit)
git reset HEAD src/Controller.php
git restore --staged src/Controller.php

# Отменить последний commit (оставить изменения)
git reset --soft HEAD~1

# Отменить последний commit (удалить изменения)
git reset --hard HEAD~1

# Отменить commit и создать новый
git revert abc123
```

##### 📄 Работа с файлами

Команды для управления файлами, отката изменений и исправления ошибок:

* `git rm [файл]` — удаляет файл из рабочей папки и сразу добавляет это удаление в индекс для следующего коммита.
* `git restore [файл]` — отменяет незакоммиченные изменения в файле, возвращая его к состоянию на момент последнего коммита.
* `git reset [хеш_коммита]` — откатывает репозиторий к указанному коммиту в истории. 
    По умолчанию изменения из стертых коммитов остаются в файлах, но исключаются из истории.
* `git revert [хеш_коммита]` — создает новый коммит, который делает действия, противоположные указанному старому коммиту. 
    Это безопасный способ отмены изменений в общем проекте.
* `git diff` — показывает построчную разницу между текущим кодом на диске и файлами, сохраненными в индексе или последнем коммите.

```bash
# Переименовать файл
git mv old.php new.php

# Удалить файл
git rm file.php

# Удалить из Git, но оставить локально
git rm --cached file.php

# Игнорировать файлы (.gitignore)
echo ".env" >> .gitignore
echo "vendor/" >> .gitignore
git add .gitignore

```

##### ☁️ Работа с remotes (удаленными репозиториями)

Команды для синхронизации вашего локального кода с удаленными серверами (GitHub, GitLab, Bitbucket):

- `git remote add` [имя] [url] — связывает ваш локальный репозиторий с удаленным сервером. Обычно имя первого сервера называют origin.
- `git remote -v` — показывает список всех подключенных удаленных репозиториев и их адреса.
- `git push` [имя_сервера] [имя_ветки] — отправляет ваши локальные коммиты на удаленный сервер (например, git push origin main).
- `git fetch` [имя_сервера] — скачивает все новые изменения с сервера, но не объединяет их с вашим локальным кодом (безопасная проверка обновлений).
- `git pull` [имя_сервера] [имя_ветки] — скачивает изменения с сервера и сразу автоматически вливает (merge) их в вашу текущую локальную ветку.


```bash
# Посмотреть remotes
git remote -v

# Добавить remote
git remote add origin https://github.com/user/repo.git

# Изменить URL
git remote set-url origin https://github.com/user/new-repo.git

# Удалить remote
git remote remove origin

# Получить информацию о remote
git remote show origin

```

```bash
# Push в ветку
git push origin main

# Push всех веток
git push --all

# Push с тегами
git push --tags

# Force push (осторожно!)
git push --force origin main

# Pull с rebase
git pull --rebase origin main

```

##### Branching и Merge Strategies

- Branching — создание изоляированных веток для разработки функций без влияния на main.

- Merge strategies: Fast-forward (прямая линия), Three-way merge (merge commit), Squash (сжатие коммитов).

- Naming: `feature/`, `bugfix/`, `hotfix/`, `release/` для разных типов веток.

- Что это: Branching — создание отдельных веток для разработки функций. Merge strategies — способы объединения веток.

* Типы merge:

- `Fast-forward` (простое слияние)
- `Three-way merge` (слияние с commit)
- `Squash merge` (сжатие коммитов)

##### Работа с ветками

* Создание и переключение:

```bash
# Создать ветку
git branch feature/new-api

# Переключиться на ветку
git checkout feature/new-api

# Создать и переключиться одной командой
git checkout -b feature/new-api

# Посмотреть все ветки
git branch -a

# Удалить ветку (локально)
git branch -d feature/new-api

# Удалить ветку (force)
git branch -D feature/new-api

# Удалить ветку на сервере
git push origin --delete feature/new-api
```

* Переименование ветки:

```bash
# Переименовать текущую ветку
git branch -m new-name

# Переименовать другую ветку
git branch -m old-name new-name

```

## Merge Strategies

- Fast-forward (по умолчанию):

```bash
# main: A---B
# feature:     C---D

git checkout main
git merge feature/new-api

# Результат: A---B---C---D (прямая линия)
```

* Three-way merge:

```bash
# main: A---B---E
# feature:     C---D

git checkout main
git merge feature/new-api

# Результат:
# A---B---E---M
#      \     /
#       C---D
# M = merge commit
```

* Squash merge (сжатие):

```bash
# main: A---B
# feature:     C---D---E

git checkout main
git merge --squash feature/new-api
git commit -m "Add new API (squashed)"

# Результат: A---B---F
# F содержит все изменения из C, D, E
```

No fast-forward:

```bash
# Всегда создавать merge commit
git merge --no-ff feature/new-api

# Полезно для истории: видно где началась и закончилась ветка
```

##### Naming Conventions

* Префиксы для веток:

```bash
# Новая функция
feature/user-authentication
feature/payment-integration

# Исправление бага
bugfix/login-error
fix/memory-leak

# Hotfix (срочное исправление в production)
hotfix/security-patch
hotfix/critical-bug

# Релиз
release/v1.2.0
release/2024-01-15

# Эксперимент
experiment/new-architecture
spike/performance-test

# Рефакторинг
refactor/database-queries

```

## Rebase vs Merge

- `Merge` — объединяет ветки, создавая merge commit. Сохраняет историю.

- `Rebase` — переносит коммиты на новую базу. Линейная история.

Правило: НИКОГДА не `rebase public` ветки (main, develop). Только для личных веток.

Merge: Объединяет ветки, создавая merge commit. Сохраняет всю историю.

- `Rebase`: Переносит коммиты на новую базу. Переписывает историю для линейности.

Как работает

Merge:

```bash
# До merge:
# main:    A---B---C
# feature:      \---D---E

git checkout main
git merge feature

# После merge:
# main:    A---B---C-------M
#               \         /
#                \---D---E
# M = merge commit

```

Rebase:

```bash
# До rebase:
# main:    A---B---C
# feature:      \---D---E

git checkout feature
git rebase main

# После rebase:
# main:    A---B---C
# feature:            \---D'---E'
# D', E' — новые коммиты (перебазированные)

# Затем merge будет fast-forward:
git checkout main
git merge feature

# Результат:
# main:    A---B---C---D'---E' (прямая линия)
```

##### Merge

Плюсы:

- Сохраняет полную историю
- Безопасно (не переписывает коммиты)
- Показывает когда были слияния

Минусы:

- Много merge commits (грязная история)
- Сложный граф

Использование:

```bash
# Обычный merge
git checkout main
git merge feature

# Merge без fast-forward (всегда создавать merge commit)
git merge --no-ff feature

# Squash merge (все коммиты в один)
git merge --squash feature
git commit -m "Add feature X"
```

##### Rebase

Плюсы:

- Линейная история (чистая)
- Легко читать `git log`
- Нет лишних `merge commits`

Минусы:

- Переписывает историю (опасно для shared веток)
- Может потерять контекст

Использование:

```bash
# Rebase на main
git checkout feature
git rebase main

# Interactive rebase (редактировать коммиты)
git rebase -i HEAD~3

# Continue после исправления конфликтов
git add .
git rebase --continue

# Отменить rebase
git rebase --abort

# Force push (нужен после rebase)
git push --force-with-lease origin feature

```

##### Interactive Rebase

```bash

git rebase -i HEAD~3

# Откроется редактор:
pick abc123 Add login
pick def456 Fix typo
pick ghi789 Update tests

# Команды:
# pick   — оставить как есть
# reword — изменить commit message
# edit   — изменить commit
# squash — объединить с предыдущим
# fixup  — squash без сохранения message
# drop   — удалить commit

# Пример: squash 3 коммита в один
pick abc123 Add login
squash def456 Fix typo
squash ghi789 Update tests

# Сохранить и выйти
# Откроется редактор для нового commit message

```

##### Когда использовать

Merge для:

- Public/shared ветки (`main`, `develop`)
- Сохранение полной истории
- Feature ветки в команде

Rebase для:

- Личные ветки (до push)
- Чистка истории перед PR
- Обновление feature ветки из main

Правило золотое: ❌ НИКОГДА не делай rebase public веток (main, develop) ✅ Rebase только для своих локальных веток

##### Force push

После rebase нужен force push:

```bash
# ❌ Опасно (может перезаписать чужие изменения)
git push --force origin feature

# ✅ Безопаснее (не перезапишет если кто-то уже push-нул)
git push --force-with-lease origin feature

# --force-with-lease проверяет что remote ветка не изменилась
```

##  Git Flow

`Git Flow` — branching model для управления релизами в больших проектах.

`Workflow: feature → develop → release → main. Hotfix → main + develop`.

Основные ветки:

- `main` (production)
- `develop` (разработка)
- `feature/*` (новые функции)
- `release/*` (подготовка релиза)
- `hotfix/*` (срочные исправления)

Структура веток

Постоянные ветки:

```
main     — production код, только стабильные релизы
develop  — интеграция новых функций, следующий релиз
```

Временные ветки:

```
feature/*  — новые функции (от develop)
release/*  — подготовка релиза (от develop)
hotfix/*   — срочные исправления (от main)

```

Схема:

```
main:     v1.0 --------- v1.1 ----------- v1.2
            \            /  \            /
develop:     \--A--B--C----D--E--F--G--H---
                  \     /      \    /
feature/x:         F1--F2        F3-F4

```

Workflow:

- Feature → develop (новые функции)
- Release → main + develop (релиз)
- Hotfix → main + develop (срочное исправление)
- Теги для версий (v1.2.0)

Альтернативы:

- `GitHub Flow` — проще, одна main ветка, PR для features
- `Trunk-Based` — короткие ветки, feature flags
- Выбор зависит от процесса релизов

Когда использовать:

- Запланированные релизы (не continuous deployment)
- Большая команда (нужна структура)
- Несколько версий в production

## Разрешение конфликтов

Конфликт — когда Git не может автоматически объединить изменения из разных веток.

Формат: `<<<HEAD (твой код), === (разделитель), >>>branch`  (их код).

Разрешение: Открыть файл, удалить маркеры, оставить нужный код, `git add`, `git commit`.

Что это: Конфликт — когда Git не может автоматически объединить изменения в одном файле из разных веток.

Когда возникает:

- Merge веток с изменениями в одних строках
- Rebase с конфликтующими коммитами
- Cherry-pick коммита с конфликтами
- Pull с удалёнными изменениями


Структурированный ответ:

Что это:

Конфликт возникает когда Git не может автоматически объединить изменения
Обе ветки изменили одни и те же строки по-разному
Требует ручного разрешения

Формат конфликта:

`<<<<<<< HEAD` — начало твоих изменений
`=======` — разделитель
`>>>>>>> branch` — конец изменений из другой ветки

Разрешение:

- Открыть файл в редакторе
- Удалить маркеры конфликта
- Оставить нужный код (или объединить оба варианта)
- `git add` <файл>
- `git commit` (при merge) или `git rebase` `--continue` (при `rebase`)

Отмена:

При merge: git merge --abort
При rebase: git rebase --abort
Инструменты:

VS Code с визуальными кнопками
PhpStorm с 3-панельным view
git mergetool с vimdiff/p4merge
Типы конфликтов:

Content — изменён контент
Delete-modify — удаление vs изменение
Rename — переименование
Предотвращение:

Частые pull из main
Маленькие PR (1-2 дня)
Коммуникация в команде
Rebase для feature веток

