import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

// yellow: {
//     100: "#f9f8f2",
//     200: "#f3f1e5",
//     300: "#eee9d8",
//     400: "#e8e2cb",
//     500: "#e2dbbe",
//     600: "#b5af98",
//     700: "#888372",
//     800: "#5a584c",
//     900: "#2d2c26"
// },
// yellow: {
//     100: "#f7f7ee",
//     200: "#eeefdd",
//     300: "#e6e6cc",
//     400: "#dddebb",
//     500: "#d5d6aa",
//     600: "#aaab88",
//     700: "#808066",
//     800: "#555644",
//     900: "#2b2b22"
// },
// purple: {
//     100: "#eae2e1",
//     200: "#d6c4c3",
//     300: "#c1a7a6",
//     400: "#ad8988",
//     500: "#986c6a",
//     600: "#7a5655",
//     700: "#5b4140",
//     800: "#3d2b2a",
//     900: "#1e1615"
// },
// indigo: {
//     100: "#dbe2df",
//     200: "#b6c5be",
//     300: "#92a99e",
//     400: "#6d8c7d",
//     500: "#496f5d",
//     600: "#3a594a",
//     700: "#2c4338",
//     800: "#1d2c25",
//     900: "#0f1613"
// },
// purple: {
//     100: "#e4dcd9",
//     200: "#c9b9b3",
//     300: "#ae958d",
//     400: "#937267",
//     500: "#784f41",
//     600: "#603f34",
//     700: "#482f27",
//     800: "#30201a",
//     900: "#18100d"
// },

// color design tokens
export const tokens = (mode) => ({
    // if mode = dark { dark mode } 
    ...(mode === "dark" 
    ? {
        grey: {
            100: "#f9f8f2",
            200: "#f3f1e5",
            300: "#eee9d8",
            400: "#e8e2cb",
            500: "#e2dbbe",
            600: "#b5af98",
            700: "#888372",
            800: "#5a584c",
            900: "#2d2c26"
        },
        primary: {
            100: "#dbe2df",
            200: "#b6c5be",
            300: "#92a99e",
            400: "#6d8c7d",
            500: "#496f5d",
            600: "#3a594a",
            700: "#2c4338",
            800: "#1d2c25",
            900: "#0f1613"
        },
        greenAccent: {
            100: "#eae2e1",
            200: "#d6c4c3",
            300: "#c1a7a6",
            400: "#ad8988",
            500: "#986c6a",
            600: "#7a5655",
            700: "#5b4140",
            800: "#3d2b2a",
            900: "#1e1615"
        },
        redAccent: {
            100: "#e4dcd9",
            200: "#c9b9b3",
            300: "#ae958d",
            400: "#937267",
            500: "#784f41",
            600: "#603f34",
            700: "#482f27",
            800: "#30201a",
            900: "#18100d"
        },
        blueAccent: {
            100: "#e4dcd9",
            200: "#c9b9b3",
            300: "#ae958d",
            400: "#937267",
            500: "#784f41",
            600: "#603f34",
            700: "#482f27",
            800: "#30201a",
            900: "#18100d"
        },
        // elseif - light mode
    } : {
        grey: {
            100: "#2d2c26",
            200: "#5a584c",
            300: "#888372",
            400: "#b5af98",
            500: "#e2dbbe",
            600: "#e8e2cb",
            700: "#eee9d8",
            800: "#f3f1e5",
            900: "#f9f8f2",
        },
        primary: {
            100: "#0f1613",
            200: "#1d2c25",
            300: "#2c4338",
            400: "#3a594a",
            500: "#496f5d",
            600: "#6d8c7d",
            700: "#92a99e",
            800: "#b6c5be",
            900: "#dbe2df",
        },
        greenAccent: {
            100: "#1e1615",
            200: "#3d2b2a",
            300: "#5b4140",
            400: "#7a5655",
            500: "#986c6a",
            600: "#ad8988",
            700: "#c1a7a6",
            800: "#d6c4c3",
            900: "#eae2e1",
        },
        redAccent: {
            100: "#18100d",
            200: "#30201a",
            300: "#482f27",
            400: "#603f34",
            500: "#784f41",
            600: "#937267",
            700: "#ae958d",
            800: "#c9b9b3",
            900: "#e4dcd9",
        },
        blueAccent: {
            100: "#18100d",
            200: "#30201a",
            300: "#482f27",
            400: "#603f34",
            500: "#784f41",
            600: "#937267",
            700: "#ae958d",
            800: "#c9b9b3",
            900: "#e4dcd9",
        },
    })
})

// mui theme settings
// https://mui.com/joy-ui/customization/theme-tokens/#global-variant-tokens
export const themeSettings = (mode) => {
    const colors = tokens(mode)

    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                ? {
                    primary: {
                        main: colors.primary[500],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: colors.primary[500],
                    } 
                    
                }: {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.greenAccent[500],
                    },
                    neutral: {
                        dark: colors.grey[700],
                        main: colors.grey[500],
                        light: colors.grey[100]
                    },
                    background: {
                        default: "#fcfcfc",
                    } 
                } 
            )
        },
        typography: {
            fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
            fontSize: 12,
            h1: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 40,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
            },
            h5: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 16,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
            }
        }
    }
}

// context for color mode
export const ColorModeContext = createContext({
    toggleColorMode: () => {}
})

// holds state of light/dark mode
export const useMode = () => {
    const [mode, setMode] = useState("dark")

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => 
            // https://medium.com/@matthew.holman/react-hooks-usestate-41ff1bf82dd
                setMode((prev) => (prev === "light" ? "dark" : "light"))
        }),
        []
    )

    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

    return [theme, colorMode]
}
