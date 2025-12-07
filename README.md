# 🏥 MediCare Management System

<div align="center">

![.NET](https://img.shields.io/badge/.NET-9.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Entity Framework](https://img.shields.io/badge/EF%20Core-9.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white)

**Современная система управления медицинскими записями с архитектурой Clean Architecture и DDD подходами**

[Особенности](#-особенности) • [Технологии](#-технологии) • [Архитектура](#-архитектура) • [Установка](#-установка) • [Скриншоты](#-скриншоты)

</div>

---

## 📋 Описание

MediCare Management System — это полнофункциональное веб-приложение для управления медицинскими записями, разработанное как тестовое задание. Система демонстрирует современные подходы к разработке enterprise-приложений с использованием Clean Architecture, Domain-Driven Design (DDD) и разделением на слои.

### Основной функционал:
- ✅ Управление пациентами (просмотр, редактирование)
- ✅ Поиск докторов по специальности
- ✅ Управление базой болезней
- ✅ RESTful API с документацией Swagger
- ✅ Современный React UI с TypeScript

---

## ✨ Особенности

### 🏗️ Архитектура
- **Clean Architecture** — четкое разделение на слои (Domain, Application, Infrastructure, API)
- **Domain-Driven Design (DDD)** — использование Value Objects, Entities, Repository Pattern
- **Dependency Injection** — полная поддержка DI через встроенный контейнер .NET
- **Separation of Concerns** — каждый слой отвечает за свою область ответственности

### 🔧 Backend
- **ASP.NET Core 9.0** — современный фреймворк для создания API
- **Entity Framework Core** — ORM для работы с базой данных
- **SQLite** — легковесная база данных для разработки
- **Swagger/OpenAPI** — автоматическая документация API
- **CORS** — настроенная политика для работы с фронтендом

### 🎨 Frontend
- **React 19** — последняя версия React с улучшенной производительностью
- **TypeScript** — типобезопасность на всех уровнях
- **Vite** — быстрая сборка и hot module replacement
- **Modern CSS** — чистый и современный дизайн

### 📦 Паттерны проектирования
- **Repository Pattern** — абстракция доступа к данным
- **Service Layer** — бизнес-логика в отдельном слое
- **Value Objects** — инкапсуляция бизнес-правил (FullName)
- **Factory Pattern** — создание доменных объектов

---

## 🛠️ Технологии

### Backend Stack
```
📦 TestTask_API          - ASP.NET Core 9.0 Web API
📦 TestTask_Application  - Бизнес-логика и сервисы
📦 TestTask_Domain      - Доменные модели и интерфейсы
📦 TestTask_Infrastructure - Реализация репозиториев и EF Core
📦 TestTask_ServiceDefaults - Общие настройки сервисов
```

**Основные пакеты:**
- `Microsoft.AspNetCore.OpenApi` (9.0.11)
- `Microsoft.EntityFrameworkCore` (9.0.11)
- `Microsoft.EntityFrameworkCore.Sqlite` (9.0.11)
- `Swashbuckle.AspNetCore` (9.0.6)

### Frontend Stack
```
📦 React 19.2.0         - UI библиотека
📦 TypeScript 5.9       - Типизированный JavaScript
📦 Vite 7.2.4           - Сборщик и dev-сервер
```

---

## 🏛️ Архитектура

```
┌─────────────────────────────────────────────────────────┐
│                    TestTask_Client                      │
│              (React + TypeScript + Vite)                 │
└────────────────────┬────────────────────────────────────┘
                     │ HTTP/REST
┌────────────────────▼────────────────────────────────────┐
│                    TestTask_API                         │
│           (ASP.NET Core 9.0 Controllers)                │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              TestTask_Application                       │
│              (Services, Business Logic)                  │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                  TestTask_Domain                        │
│        (Entities, Value Objects, Interfaces)            │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│              TestTask_Infrastructure                    │
│    (Repositories, DbContext, Data Access)               │
└────────────────────┬────────────────────────────────────┘
                     │
┌────────────────────▼────────────────────────────────────┐
│                    SQLite Database                      │
└─────────────────────────────────────────────────────────┘
```

### Слои приложения:

1. **Domain Layer** (`TestTask_Domain`)
   - Доменные сущности: `Patient`, `Doctor`, `Disease`
   - Value Objects: `FullName`
   - Интерфейсы репозиториев: `IPatientRepository`, `IDoctorRepository`, `IDieseasRepository`

2. **Application Layer** (`TestTask_Application`)
   - Сервисы: `PatientService`, `DoctorService`, `DiseaseService`
   - Бизнес-логика и оркестрация

3. **Infrastructure Layer** (`TestTask_Infrastructure`)
   - Реализация репозиториев
   - `ApplicationDbContext` с настройками EF Core
   - Миграции базы данных

4. **API Layer** (`TestTask_API`)
   - REST API контроллеры
   - Настройка Swagger, CORS
   - Dependency Injection

5. **Client Layer** (`TestTask_Client`)
   - React компоненты
   - API клиент
   - TypeScript типы

---

## 🚀 Установка

### Требования
- [.NET 9.0 SDK](https://dotnet.microsoft.com/download/dotnet/9.0)
- [Node.js](https://nodejs.org/) (версия 18+)
- [npm](https://www.npmjs.com/) или [yarn](https://yarnpkg.com/)

### Вариант 1: Запуск через Aspire (рекомендуется)

1. **Клонируйте репозиторий**
```bash
git clone https://github.com/D4cLoves/TestTask.git
cd TestTask
```

2. **Запустите Aspire AppHost (запустит API и Frontend)**
```bash
cd TestTask_AppHost
dotnet restore
dotnet run
```

> **⚠️ Важно:** Убедитесь, что npm установлен и доступен в PATH. Если фронтенд не запускается, запустите его вручную:
> ```bash
> cd TestTask_Client
> npm install
> npm run dev
> ```

После запуска:
- Откроется **Aspire Dashboard** с информацией о всех сервисах
- API будет доступен автоматически через Aspire
- Frontend будет доступен автоматически по адресу `http://localhost:5173`
- База данных автоматически заполнится тестовыми данными при первом запуске

> **📝 Примечание:** При первом запуске база данных автоматически заполнится тестовыми данными:
> - 8 докторов разных специальностей
> - 12 пациентов
> - 8 различных болезней

### Вариант 2: Запуск вручную

Если хотите использовать Aspire Dashboard для мониторинга:

```bash
cd TestTask_AppHost
dotnet restore
dotnet run
```

> **⚠️ Примечание:** Если Aspire не запускается из-за проблем с DCP (Distributed Compute Platform), используйте Вариант 1 (ручной запуск).

---

## 📸 Скриншоты

> **💡 Инструкция по созданию скриншотов:**
> 
> После запуска проекта база данных автоматически заполнится тестовыми данными (8 докторов, 12 пациентов, 8 болезней).
> 
> **Что нужно заскринить:**
> 
> 1. **Интерфейс приложения:**
>    - Главная страница с вкладкой "Пациенты" (показывает список из 12 пациентов)
>    - Вкладка "Доктора" с поиском (например, поиск по "Терапевт" покажет 3 докторов)
>    - Вкладка "Болезни" (список всех болезней)
>    - Процесс редактирования имени пациента (нажмите "Редактировать" на любом пациенте)
> 
> 2. **Swagger UI:**
>    - Откройте `https://localhost:5119/swagger` и сделайте скриншот документации API
>    - Покажите один из endpoints в действии (например, GET /api/patients)
> 
> 3. **Код (для демонстрации качества):**
>    - Откройте файлы из списка ниже в вашем редакторе (VS Code/Rider) и сделайте скриншоты
>    - Используйте темную тему редактора для лучшего вида
>    - Убедитесь, что код хорошо виден и читаем

### 📸 Рекомендуемые файлы для скриншотов кода:

#### Domain Layer (Демонстрация DDD подходов):
- `TestTask_Domain/ValueObject/FullName.cs` - Value Object с валидацией
- `TestTask_Domain/Entites/Patient.cs` - Доменная сущность с инкапсуляцией
- `TestTask_Domain/Entites/Doctor.cs` - Доменная сущность
- `TestTask_Domain/Interfaces/IPatientRepository.cs` - Интерфейс репозитория

#### Application Layer (Бизнес-логика):
- `TestTask_Application/Services/PatientService.cs` - Сервис с бизнес-логикой
- `TestTask_Application/Services/DoctorService.cs` - Сервис поиска

#### Infrastructure Layer (Доступ к данным):
- `TestTask_Infrastructure/Repositories/PatientRepository.cs` - Реализация репозитория
- `TestTask_Infrastructure/Data/ApplicationDbContext.cs` - Конфигурация EF Core с Value Objects
- `TestTask_Infrastructure/Data/DbSeeder.cs` - Заполнение БД тестовыми данными

#### API Layer (REST API):
- `TestTask_API/Controllers/PatientController.cs` - REST контроллер
- `TestTask_API/Program.cs` - Конфигурация приложения и DI

#### Frontend (React + TypeScript):
- `TestTask_Client/src/components/PatientList/PatientList.tsx` - React компонент
- `TestTask_Client/src/services/api.ts` - API клиент
- `TestTask_Client/src/types/index.ts` - TypeScript типы

### 🖥️ Интерфейс приложения

#### Patient Registry
![Patient Registry](screenshots/screenshot-patients.png)

The Patient Registry tab displays a comprehensive list of all patients in the system. Users can view patient information including full name and date of birth. The interface supports inline editing of patient names directly from the table.

#### Doctor Directory
![Doctor Directory](screenshots/screenshot-doctors.png)

The Doctor Directory provides a search functionality to find doctors by specialty. Users can enter a specialty (e.g., "Therapist", "Cardiologist") and view matching results with detailed information about each doctor.

#### Disease Registry
![Disease Registry](screenshots/screenshot-diseases.png)

The Disease Registry contains a complete catalog of medical conditions with their descriptions. This reference database helps medical staff quickly access information about various diseases and their characteristics.

### 💻 Примеры кода

> **📸 Для демонстрации качества кода сделайте скриншоты следующих файлов:**
> 
> Эти примеры показывают чистоту, практичность и точность реализации архитектурных паттернов.

#### Domain Layer - Value Object (FullName)
```csharp
namespace TestTask_Domain.ValueObject;

public class FullName
{
    public string Value { get; }

    public FullName(string value)
    {
        Value = value;
    }

    public static FullName Create(string value)
    {
        if (string.IsNullOrWhiteSpace(value))
            throw new ArgumentException("ФИО не может быть пустым");

        var trimmed = value.Trim();
        
        if (trimmed.Length < 2)
            throw new ArgumentException("Слишком короткое имя");

        return new FullName(trimmed);
    }
    
    public override string ToString() => Value;
}
```

#### Domain Layer - Entity (Patient)
```csharp
namespace TestTask_Domain.Entites;

public class Patient 
{
    public Guid Id { get; private set; }
    public FullName Name { get; private set; }
    public DateTime BirthDate { get; private set; }
    public Guid DoctorId { get; private set; }

    private Patient(){}
    
    public Patient(FullName name, DateTime birthDate, Guid doctorId)
    {
        Id = Guid.NewGuid();
        Name = name;
        BirthDate = birthDate;
        DoctorId = doctorId;
    }
    
    public void UpdateName(FullName NewName) => Name = NewName;
    public void UpdateBirthDate(DateTime NewBirthDate) => BirthDate = NewBirthDate;
}
```

#### Application Layer - Service
```csharp
namespace TestTask_Application.Services;

public class PatientService 
{
    private readonly PatientRepository _patientRepository;
    
    public PatientService(PatientRepository patientRepository)
    {
        _patientRepository = patientRepository;
    }

    public async Task<List<Patient>> GetPatients()
    {
        return await _patientRepository.GetPatients();
    }
    
    public async Task UpdatePatientNameAsync(Guid id, string newName)
    {
        var newFullName = FullName.Create(newName);
        await _patientRepository.UpdatePatientNameAsync(id, newFullName);
    }
}
```

#### Infrastructure Layer - Repository
```csharp
namespace TestTask_Infrastructure.Repositories;

public class PatientRepository : IPatientRepository
{
    private readonly ApplicationDbContext _context;
    
    public PatientRepository(ApplicationDbContext context)
    {
        _context = context;
    }
    
    public async Task<List<Patient>> GetPatients()
    {
        return await _context.Patients.ToListAsync();
    }

    public async Task UpdatePatientNameAsync(Guid id, FullName newName)
    {
        var patient = await _context.Patients.FirstOrDefaultAsync(p => p.Id == id);
        if (patient != null)
        {
            patient.UpdateName(newName);
            await _context.SaveChangesAsync();
        }
    }
}
```

#### API Layer - Controller
```csharp
namespace TestTask_API.Controllers;

[ApiController]
[Route("api/patients")]
public class PatientController : ControllerBase
{
    private readonly PatientService _patientService;

    public PatientController(PatientService patientService)
    {
        _patientService = patientService;
    }

    [HttpGet]
    public async Task<ActionResult<List<Patient>>> GetPatients()
    {
        var patients = await _patientService.GetPatients();
        if (patients == null || !patients.Any())
            return NotFound("Пациенты не найдены");
        return Ok(patients);
    }

    [HttpPatch("{id}/name")]
    public async Task<IActionResult> UpdatePatientName(Guid id, [FromBody] string newName)
    {
        await _patientService.UpdatePatientNameAsync(id, newName);
        return NoContent();
    }
}
```

#### Frontend - React Component
```typescript
import React, { useState, useEffect } from 'react';
import { type Patient } from "../../types";
import { api } from "../../services/api.ts";

const PatientList: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [editingId, setEditingId] = useState<string | null>(null);

    useEffect(() => {
        loadPatients();
    }, []);

    const loadPatients = async () => {
        const data = await api.getPatients();
        setPatients(data);
    };

    const saveEdit = async (id: string) => {
        const nameParts = newName.trim().split(' ');
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';

        if (!firstName || !lastName) {
            alert('Введите имя и фамилию');
            return;
        }

        try {
            await api.updatePatientName(id, firstName, lastName);
            await loadPatients();
            cancelEdit();
        } catch (error) {
            alert('Ошибка обновления имени');
        }
    };

    return (
        <div>
            <h2>Список пациентов</h2>
            {/* UI компоненты */}
        </div>
    );
};
```

#### Infrastructure - DbContext Configuration
```csharp
protected override void OnModelCreating(ModelBuilder modelBuilder)
{
    modelBuilder.Entity<Patient>()
        .Property(p => p.Name)
        .HasConversion(
            v => v.Value,
            v => FullName.Create(v))
        .HasColumnName("Name")
        .HasMaxLength(100)
        .IsRequired();
    
    modelBuilder.Entity<Patient>()
        .HasOne<Doctor>()
        .WithMany()
        .HasForeignKey(p => p.DoctorId)
        .OnDelete(DeleteBehavior.Restrict);
}
```

---

## 📤 Загрузка на GitHub

### Первоначальная настройка (если еще не настроен git):

```bash
# Инициализация репозитория (если еще не инициализирован)
git init

# Добавление всех файлов
git add .

# Создание первого коммита
git commit -m "Initial commit: MediCare Management System with Clean Architecture"

# Добавление remote репозитория
git remote add origin https://github.com/D4cLoves/TestTask.git

# Отправка на GitHub
git branch -M main
git push -u origin main
```

### Обновление существующего репозитория:

```bash
# Добавление изменений
git add .

# Создание коммита
git commit -m "Add database seeder, improve UI design, update README with screenshots section"

# Отправка на GitHub
git push origin main
```

### Создание .gitignore (если еще нет):

Убедитесь, что в корне проекта есть `.gitignore` файл со следующим содержимым:

```
# .NET
bin/
obj/
*.user
*.suo
*.cache
*.dll
*.exe
*.pdb
*.db
*.db-shm
*.db-wal

# Node
node_modules/
dist/
.vite/

# IDE
.vs/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db
```

---

## 📁 Структура проекта

```
TestTask/
├── TestTask_API/              # Web API слой
│   ├── Controllers/           # REST API контроллеры
│   ├── Program.cs            # Точка входа и конфигурация
│   └── appsettings.json       # Настройки приложения
│
├── TestTask_Application/      # Слой бизнес-логики
│   └── Services/             # Сервисы приложения
│
├── TestTask_Domain/          # Доменный слой
│   ├── Entites/              # Доменные сущности
│   ├── Interfaces/           # Интерфейсы репозиториев
│   └── ValueObject/          # Value Objects
│
├── TestTask_Infrastructure/  # Слой инфраструктуры
│   ├── Data/                 # DbContext и конфигурация
│   ├── Repositories/         # Реализация репозиториев
│   └── Migrations/           # Миграции EF Core
│
├── TestTask_Client/          # Frontend приложение
│   ├── src/
│   │   ├── components/       # React компоненты
│   │   ├── services/         # API клиент
│   │   └── types/            # TypeScript типы
│   └── package.json
│
└── TestTask_ServiceDefaults/ # Общие настройки
```

---

## 🎯 Демонстрируемые навыки

### Архитектура и паттерны
- ✅ Clean Architecture
- ✅ Domain-Driven Design (DDD)
- ✅ Repository Pattern
- ✅ Service Layer Pattern
- ✅ Dependency Injection
- ✅ Value Objects
- ✅ Entity Framework Core Configuration

### Backend разработка
- ✅ ASP.NET Core 9.0
- ✅ RESTful API Design
- ✅ Entity Framework Core
- ✅ SQLite Database
- ✅ Swagger/OpenAPI
- ✅ CORS Configuration
- ✅ Async/Await Patterns

### Frontend разработка
- ✅ React 19
- ✅ TypeScript
- ✅ Modern React Hooks
- ✅ Component-based Architecture
- ✅ API Integration
- ✅ Vite Build System

### Качество кода
- ✅ Separation of Concerns
- ✅ SOLID Principles
- ✅ Type Safety
- ✅ Error Handling
- ✅ Code Organization

---

## 📝 API Endpoints

### Patients
- `GET /api/patients` - Получить всех пациентов
- `GET /api/patients/{id}` - Получить пациента по ID
- `PATCH /api/patients/{id}/name` - Обновить имя пациента

### Doctors
- `GET /api/doctors/specialty/{specialty}` - Поиск докторов по специальности

### Diseases
- `GET /api/diseases` - Получить все болезни

Документация API доступна через Swagger UI: `/swagger`

---

## 🔮 Возможные улучшения

- [ ] Добавить аутентификацию и авторизацию
- [ ] Реализовать полный CRUD для всех сущностей
- [ ] Добавить валидацию на уровне API
- [ ] Реализовать пагинацию
- [ ] Добавить unit-тесты
- [ ] Добавить интеграционные тесты
- [ ] Реализовать логирование
- [ ] Добавить обработку ошибок на фронтенде
- [ ] Реализовать кэширование
- [ ] Добавить Docker контейнеризацию

---

## 📄 Лицензия

Этот проект был создан как тестовое задание для демонстрации навыков разработки.

---

## 👨‍💻 Автор

**D4cLoves**

- GitHub: [@D4cLoves](https://github.com/D4cLoves)
- Проект: [MediCare Management System](https://github.com/D4cLoves/TestTask)

---

<div align="center">

**Сделано с ❤️ используя Clean Architecture и современные технологии**

⭐ Если проект был полезен, поставьте звезду!

</div>

