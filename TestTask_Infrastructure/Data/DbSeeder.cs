using Microsoft.EntityFrameworkCore;
using TestTask_Domain.Entites;
using TestTask_Domain.ValueObject;

namespace TestTask_Infrastructure.Data;

public static class DbSeeder
{
    public static async Task SeedAsync(ApplicationDbContext context)
    {
        // Проверяем, есть ли уже данные
        if (await context.Doctors.AnyAsync())
        {
            return; // Данные уже есть, не заполняем повторно
        }

        // Создаем докторов
        var doctors = new List<Doctor>
        {
            new Doctor(FullName.Create("Иванов Иван Иванович"), "Терапевт", new DateTime(1980, 5, 15)),
            new Doctor(FullName.Create("Петрова Мария Сергеевна"), "Кардиолог", new DateTime(1975, 8, 20)),
            new Doctor(FullName.Create("Смирнов Алексей Владимирович"), "Терапевт", new DateTime(1985, 3, 10)),
            new Doctor(FullName.Create("Козлова Елена Дмитриевна"), "Невролог", new DateTime(1990, 11, 25)),
            new Doctor(FullName.Create("Волков Дмитрий Петрович"), "Хирург", new DateTime(1978, 7, 5)),
            new Doctor(FullName.Create("Новикова Анна Александровна"), "Педиатр", new DateTime(1988, 2, 14)),
            new Doctor(FullName.Create("Морозов Сергей Николаевич"), "Офтальмолог", new DateTime(1982, 9, 30)),
            new Doctor(FullName.Create("Лебедева Ольга Викторовна"), "Терапевт", new DateTime(1987, 4, 18))
        };

        await context.Doctors.AddRangeAsync(doctors);
        await context.SaveChangesAsync();

        // Создаем болезни
        var diseases = new List<Disease>
        {
            new Disease("Грипп", "Острое инфекционное заболевание дыхательных путей, вызываемое вирусом гриппа"),
            new Disease("Гипертония", "Хроническое заболевание, характеризующееся стойким повышением артериального давления"),
            new Disease("Сахарный диабет", "Группа эндокринных заболеваний, связанных с нарушением усвоения глюкозы"),
            new Disease("Бронхит", "Воспаление слизистой оболочки бронхов"),
            new Disease("Мигрень", "Неврологическое заболевание, характеризующееся периодическими приступами головной боли"),
            new Disease("Артрит", "Воспалительное заболевание суставов"),
            new Disease("Астма", "Хроническое воспалительное заболевание дыхательных путей"),
            new Disease("Гастрит", "Воспаление слизистой оболочки желудка")
        };

        await context.Diseases.AddRangeAsync(diseases);
        await context.SaveChangesAsync();

        // Получаем сохраненных докторов для создания пациентов
        var savedDoctors = await context.Doctors.ToListAsync();
        var savedDiseases = await context.Diseases.ToListAsync();

        // Создаем пациентов
        var patients = new List<Patient>
        {
            new Patient(FullName.Create("Соколов Андрей Михайлович"), new DateTime(1992, 3, 15), savedDoctors[0].Id),
            new Patient(FullName.Create("Орлова Татьяна Валерьевна"), new DateTime(1985, 7, 22), savedDoctors[1].Id),
            new Patient(FullName.Create("Федоров Павел Игоревич"), new DateTime(1995, 11, 8), savedDoctors[2].Id),
            new Patient(FullName.Create("Романова Екатерина Сергеевна"), new DateTime(1988, 4, 30), savedDoctors[3].Id),
            new Patient(FullName.Create("Григорьев Максим Александрович"), new DateTime(1990, 9, 12), savedDoctors[4].Id),
            new Patient(FullName.Create("Васильева Ирина Петровна"), new DateTime(1998, 1, 25), savedDoctors[5].Id),
            new Patient(FullName.Create("Кузнецов Денис Олегович"), new DateTime(1987, 6, 18), savedDoctors[0].Id),
            new Patient(FullName.Create("Семенова Наталья Викторовна"), new DateTime(1993, 10, 5), savedDoctors[1].Id),
            new Patient(FullName.Create("Попов Артем Дмитриевич"), new DateTime(1991, 2, 14), savedDoctors[2].Id),
            new Patient(FullName.Create("Маркова Светлана Алексеевна"), new DateTime(1989, 8, 28), savedDoctors[7].Id),
            new Patient(FullName.Create("Николаев Владимир Сергеевич"), new DateTime(1994, 12, 3), savedDoctors[3].Id),
            new Patient(FullName.Create("Андреева Юлия Игоревна"), new DateTime(1996, 5, 20), savedDoctors[4].Id)
        };

        await context.Patients.AddRangeAsync(patients);
        await context.SaveChangesAsync();
    }
}

