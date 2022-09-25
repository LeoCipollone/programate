import Link from "../Link";

const Kotlin = () => {
    return (
        <div>
            <h2>Aprende Kotlin aquí!</h2>
            <dl>
                <Link url="https://kotlinlang.org/docs/home.html" title={"Documentación Oficial"} />
                <Link url="https://www.youtube.com/watch?v=ebQphhLpJG0" title={"Kotlin Desde 0 Parte 1 - MoureDev"} />
                <Link url="https://www.youtube.com/watch?v=AA3N_yQQtHY" title={"Kotlin Desde 0 Parte 2 - MoureDev"} />
            </dl>
        </div>
    );
}

export default Kotlin;