import csstype.FontWeight
import emotion.react.css
import react.FC
import react.Props
import react.dom.html.ReactHTML.h1
import react.dom.html.ReactHTML.li
import react.dom.html.ReactHTML.ol
import react.useState
import react.useContext

val CStudentList = FC<Props>("журнал оценок") {
    var highlighted by useState<Int>()
    val (grades, setGrades) = useState(studentList.map { it.grade })
    val averageGrade = studentList.map { it.grade }.average()
    // Получаем цветовую схему из контекста
    val colorScheme = useContext(GradeColorContext)

    val averageGradeColor = when (averageGrade.toInt()) {
        1 -> colorScheme.grade1Color
        2 -> colorScheme.grade2Color
        3 -> colorScheme.grade3Color
        4 -> colorScheme.grade4Color
        5 -> colorScheme.grade5Color
        else -> "gray"
    }

    h1 { +"журнал оценок" }
/// использование провайдера
    GradeColorProvider {
        ol {
            studentList.mapIndexed { index, student ->
                li {
                    if (index == highlighted)
                        css { fontWeight = FontWeight.bold }

                    CStudent {
                        this.student = student
                        setGrade = { newGrade ->
                            student.grade = newGrade
                            setGrades(studentList.map { it.grade })
                        }
                    }

                    onClick = { highlighted = index }
                }
            }
        }

        h1 {
            +"Средняя оценка: ${(averageGrade)}"
            style = kotlinext.js.js {
                color = averageGradeColor
            }
        }
    }
}
