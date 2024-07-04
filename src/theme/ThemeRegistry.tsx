// "use client";

// import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
// import { createTheme, ThemeOptions, ThemeProvider } from "@mui/material/styles";
// import { Roboto } from "next/font/google";
// import { NextAppDirEmotionCacheProvider } from "./EmotionCache";

// const roboto = Roboto({
//   weight: ["300", "400", "500", "700"],
//   style: ["normal", "italic"],
//   subsets: ["latin"],
// });

// const themeOptions: ThemeOptions = {
//   typography: {
//     fontSize: 12,
//     fontFamily: roboto.style.fontFamily,
//   },

//   palette: {
//     background: {
//       default: "#A79277",
//     },
//     // backgroundImage: {},
//     primary: {
//       main: "#FFF2E1",
//     },

//     secondary: {
//       main: "#D1BB9E",
//     },
//     success: {
//       main: "#D1BB9E",
//     },
//     info: {
//       main: "#000000",
//     },

//     error: {
//       main: "#FF1B00",
//     },

//     text: {
//       primary: "#FFF2E1",
//       secondary: "#EAD8C0",
//       disabled: "#D1BB9E",
//     },
//   },
// };

// const theme = createTheme(themeOptions);

// export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
//   return (
//     <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
//       <ThemeProvider theme={theme}>
//         <CssBaseline />
//         {children}
//       </ThemeProvider>
//     </NextAppDirEmotionCacheProvider>
//   );
// }

// //  "@material-ui/core": "^4.12.4",
// // "@material-ui/icons": "^4.11.3",

// // EEE2DC
// // BAB2B5
// // AC3B61
// // 1F00FF

// // p: FFF2E1;
// // s: EAD8C0;
// //    D1BB9E;
// //    A79277;
