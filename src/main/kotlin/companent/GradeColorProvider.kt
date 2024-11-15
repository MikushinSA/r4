import react.Context
import react.createContext
import react.FC
import react.Props
import react.ReactNode
import react.useContext
import react.useState

// Определяем тип для настроек раскраски
data class GradeColorScheme(
    val grade1Color: String,
    val grade2Color: String,
    val grade3Color: String,
    val grade4Color: String,
    val grade5Color: String
)

// Создаем контекст для схемы раскраски
val GradeColorContext: Context<GradeColorScheme> = createContext(
    GradeColorScheme(
        grade1Color = "black",
        grade2Color = "brown",
        grade3Color = "green",
        grade4Color = "yellow",
        grade5Color = "red"
    )
)

// Провайдер для схемы раскраски оценок
external interface GradeColorProviderProps : Props {
    var children: ReactNode
}

val GradeColorProvider = FC<GradeColorProviderProps> { props ->
    val (colorScheme, setColorScheme) = useState(
        GradeColorScheme(
            grade1Color = "black",
            grade2Color = "brown",
            grade3Color = "green",
            grade4Color = "yellow",
            grade5Color = "red"
        )
    )

    GradeColorContext.Provider {
        value = colorScheme
        +props.children    // способ передачи детей в Kotlin c реактом props.children() не работает(?)
    }
}