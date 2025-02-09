import { ThemeProp } from "react-native-paper/lib/typescript/types";


export type CustomThemeProp = ThemeProp &{
    colors:{
        text:string,
        textLight:string,
        label:string,
        card:string,
        outline:string,
        secondary:string,
    }
};

// export type CustomThemeProp = Partial<CustomThemePropTypeRoot>;

// // Make only the `colors` object partial
// export type CustomThemeProp = Omit<CustomThemePropTypeRoot, "colors"> & {
//     colors?: Partial<CustomThemePropTypeRoot["colors"]>;
// };