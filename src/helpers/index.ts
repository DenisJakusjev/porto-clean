export const isKeyInObject = (key: string, obj: any) => {
    return key in obj;
}

export type ColorTypes = "mainGreen" | "mainGray" | "lightGray";

export const getColor = (color: ColorTypes | string) => {
    const colorCollection = {
        mainGreen: "rgba(68, 255, 170, 1)",
        mainGray: "rgba(255, 255, 255, 0.6)",
        lightGray: "rgba(255, 255, 255, 0.3)"
    }
    return isKeyInObject(color, colorCollection) ? colorCollection[color as keyof typeof colorCollection] : color;

}


export const diffMQValues = (returnValues: number[]) => {
    if (typeof window !== 'undefined' && window.matchMedia) {
        if (window.matchMedia('(max-width: 640px)').matches) {
            return returnValues[0];
        } else if (window.matchMedia('(max-width: 768px)').matches) {
            return returnValues[1];
        } else {
            return returnValues[2];
        }
    } else {
        return returnValues[2]
    }

}