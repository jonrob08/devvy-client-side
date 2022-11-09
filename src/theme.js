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
// 100: "#e0e0e0", // neutral light
// 200: "#c2c2c2",
// 300: "#a3a3a3",
// 400: "#858585",
// 500: "#666666", // neutral main
// 600: "#525252",
// 700: "#3d3d3d", // neutral dark
// 800: "#292929",
// 900: "#141414",
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


// old
// primary: {
//     100: "#DBDDE1",
//     200: "#7D8B9D",
//     300: "#727681", // primary main
//     400: "#748097",
//     500: "#6D7288", // primary bg
//     600: "#7384A9",
//     700: "#061538", // accent bg
//     800: "#0F172A", // sidebar 
//     900: "#0C1422", // background
// },

// color design tokens
export const tokens = (mode) => ({
    // if mode = dark { dark mode } 
    ...(mode === "dark" 
    ? {
        gridColor: {
            header: "#DBDDE130",
            base: "#74809740",
            footer: "#DBDDE130"
        },
        grey: {
            100: "#DBDDE1",
            200: "#C1C4C9",
            300: "#A7ABB1",
            400: "#8D9299",
            500: "#737981",
            600: "#596069",
            700: "#3F4751",
            800: "#252E39",
            900: "#0C1422",
        },

        primary: {
            100: "#dbdde1",
            200: "#c0c4cc",
            300: "#a5abb7",
            400: "#8a92a2",
            500: "#6f798d",
            600: "#546078",
            700: "#061538", // 7 #394763
            800: "#0F172A",
            900: "#0C1422",
        },
        yellowAccent: {
            100: "#FFFFEE",
            200: "#F2ECD5",
            300: "#E5D9BC",
            400: "#D8C6A3",
            500: "#CBB38A",
            600: "#BEA071",
            700: "#B18D58",
            800: "#A47A3F",
            900: "#99681F",
        },
        greenAccent: {
            100: "#dbf5ee",
            200: "#C0C6C5",
            300: "#A5AFA9",
            400: "#8A988D",
            500: "#6F8171", // secondary main
            600: "#546A55",
            700: "#395339",
            800: "#1E3C1D",
            900: "#002802",
        },
        redAccent: {
            100: "#db4f4a",
            200: "#C7C3C7",
            300: "#B3A9AD",
            400: "#9F8F93",
            500: "#8B7579",
            600: "#775B5F",
            700: "#634145",
            800: "#4F272B",
            900: "#3E100F",
        },
        blueAccent: {
            100: "#DBDDE1",
            200: "#C0C7D2",
            300: "#A5B1C3",
            400: "#8A9BB4",
            500: "#6F85A5",
            600: "#546F96",
            700: "#395987",
            800: "#1E4378",
            900: "#002B67",
        },
        // elseif - light mode
    } : {
        grey: {
            100: "#0C1422",
            200: "#252E39",
            300: "#3F4751",
            400: "#596069",
            500: "#737981",
            600: "#8D9299",
            700: "#A7ABB1",
            800: "#C1C4C9",
            900: "#DBDDE1",
        },
        primary: {
            100: "#DBDDE1",
            200: "#E3E3E3",
            300: "#E7E7E7",
            400: "#EBEBEB",
            500: "#EFEFEF",
            600: "#F3F3F3",
            700: "#F7F7F7",
            800: "#FBFBFB",
            900: "#FFFFFF"
        },
        // primary: {
        //     100: "#0C1422",
        //     200: "#0F172A",
        //     300: "#061538",
        //     400: "#546078",
        //     500: "#6f798d",
        //     600: "#8a92a2",
        //     700: "#a5abb7",
        //     800: "#c0c4cc",
        //     900: "#DBDDE1",
        // },
        yellowAccent: {
            100: "#99681F",
            200: "#A47A3F",
            300: "#B18D58",
            400: "#BEA071",
            500: "#CBB38A",
            600: "#D8C6A3",
            700: "#E5D9BC",
            800: "#F2ECD5",
            900: "#FFFFEE",
        },
        greenAccent: {
            100: "#002802",
            200: "#1E3C1D",
            300: "#395339",
            400: "#546A55",
            500: "#6F8171", // secondary main
            600: "#8A988D",
            700: "#A5AFA9",
            800: "#C0C6C5",
            900: "#dbf5ee",
        },
        redAccent: {
            100: "#3E100F",
            200: "#4F272B",
            300: "#634145",
            400: "#775B5F",
            500: "#8B7579",
            600: "#9F8F93",
            700: "#B3A9AD",
            800: "#C7C3C7",
            900: "#db4f4a",
        },
        blueAccent: {
            100: "#002B67",
            200: "#1E4378",
            300: "#395987",
            400: "#546F96",
            500: "#6F85A5",
            600: "#8A9BB4",
            700: "#A5B1C3",
            800: "#C0C7D2",
            900: "#DBDDE1",
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
                        main: colors.primary[800],  // 
                    },
                    secondary: {
                        main: colors.blueAccent[100],   // 
                    },
                    neutral: {
                        dark: colors.grey[700], // 
                        main: colors.redAccent[500], // 
                        light: colors.grey[100] // 
                    },
                    background: {
                        default: colors.primary[900],   
                    } 
                    
                }: {
                    primary: {
                        main: colors.primary[100],
                    },
                    secondary: {
                        main: colors.blueAccent[500],
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
                fontWeight: 700,
            },
            h2: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 32,
                fontWeight: 700,
            },
            h3: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 24,
                fontWeight: 700,
            },
            h4: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 20,
                fontWeight: 700,
            },
            h5: {
                fontFamily: ["Helvetica Neue", "sans-serif"].join(","),
                fontSize: 25,
                fontWeight: 700,
            },
            h6: {
                fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
                fontSize: 14,
                fontWeight: 700,
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
