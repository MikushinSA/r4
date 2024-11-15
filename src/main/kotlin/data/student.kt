data class Student(
    val firstname: String,
    val surname: String,
    var grade: Int = 0 // Оценка по умолчанию
)

val studentList = arrayListOf(
    Student("Sheldon", "Cooper"),
    Student("Leonard", "Hofstadter"),
    Student("Howard", "Wolowitz")
)