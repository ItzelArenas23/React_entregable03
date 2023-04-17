export const getRandomDimension = () => {
    //? Esta función debe retornarx un número del 1 al 126 que representa 1 dimensión
    return Math.floor(Math.random() * 126) + 1 // 0 - 0.999 -> 0-125.99999999
}