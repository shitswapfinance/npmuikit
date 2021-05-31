# 🥞 ShitSwap UIkit

**This repository is not used anymore. See the [https://github.com/shitswapfinance/shitswap-uikit](ShitSwap toolkit) instead**

ShitSwap UIkit is a set of React components and hooks used to build pages on ShitSwap's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @bandofskeletons/uikit`

## Setup

### Theme

Before using ShitSwap UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@bandofskeletons/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@bandofskeletons/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.
