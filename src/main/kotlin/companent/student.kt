import org.w3c.dom.HTMLInputElement
import react.FC
import react.Props
import react.dom.html.ReactHTML.div
import react.dom.html.ReactHTML.input
import react.useState
import react.dom.html.InputType
import react.useContext

external interface StudentProps : Props {
    var student: Student
    var setGrade: (Int) -> Unit
}

val CStudent = FC<StudentProps> { props ->
    val (grade, setGrade) = useState(props.student.grade)

    // Используем контекст для получения схемы раскраски
    val colorScheme = useContext(GradeColorContext)

    // Определяем цвет для текущей оценки
    val gradeColor = when (grade) {
        1 -> colorScheme.grade1Color
        2 -> colorScheme.grade2Color
        3 -> colorScheme.grade3Color
        4 -> colorScheme.grade4Color
        5 -> colorScheme.grade5Color
        else -> "gray" // Если оценка некорректная
    }

    div {
        +"${props.student.firstname} ${props.student.surname}"

        input {
            type = InputType.number
            value = grade.toString()
            onChange = { event ->
                val newGrade = (event.target as HTMLInputElement).value.toIntOrNull()
                if (newGrade != null && newGrade in 1..5) {
                    setGrade(newGrade)
                    props.setGrade(newGrade)
                }
            }
            style = kotlinext.js.js {
                color = gradeColor
            }
        }
    }
}