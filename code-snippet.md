# 代码片段

## JS

## css

### css rest

```css
@font-face {
  font-family: Emoji;
  src: local("Apple Color Emoji"), local("Segoe UI Emoji"), local("Segoe UI Symbol"), local("Noto Color Emoji");
  unicode-range: u+1f000-1f644, u+203c-3299
}

.fontserif {
  font-family: Georgia, Cambria, Times New Roman, Times, serif
}

.fontmono {
  font-family: Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}

*,
:after,
:before {
  border-color: #CECECE;
  border-style: solid;
  border-width: 0;
  box-sizing: border-box
}

html {
  -webkit-text-size-adjust: 100%;
  text-size-adjust: 100%;
  font-family: system-ui, —apple-system, Segoe UI, Roboto, Emoji, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  -moz-tab-size: 4;
  tab-size: 4
}

body {
  line-height: inherit;
  margin: 0
}

hr {
  border-top-width: 1px;
  color: inherit;
  height: 0
}

abbr:where([title]) {
  text-decoration: underline dotted
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit
}

a {
  color: inherit;
  text-decoration: inherit
}

b,
strong {
  font-weight: bolder
}

code,
kbd,
pre,
samp {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  font-size: 1em
}

small {
  font-size: 80%
}

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline
}

sub {
  bottom: -.25em
}

sup {
  top: -.5em
}

table {
  border-collapse: collapse;
  border-color: inherit;
  text-indent: 0
}

button,
input,
optgroup,
select,
textarea {
  font-feature-settings: inherit;
  color: inherit;
  font-family: inherit;
  font-size: 100%;
  font-variation-settings: inherit;
  font-weight: inherit;
  line-height: inherit;
  margin: 0;
  padding: 0
}

button,
select {
  text-transform: none
}

[type=button],
[type=reset],
[type=submit],
button {
  -webkit-appearance: button;
  background-image: none
}

:-moz-focusring {
  outline: auto
}

:-moz-ui-invalid {
  box-shadow: none
}

progress {
  vertical-align: baseline
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto
}

[type=search] {
  -webkit-appearance: textfield;
  outline-offset: -2px
}

::-webkit-search-decoration {
  -webkit-appearance: none
}

::-webkit-file-upload-button {
  -webkit-appearance: button;
  font: inherit
}

summary {
  display: list-item
}

blockquote,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
p,
pre {
  margin: 0
}

fieldset {
  margin: 0
}

fieldset,
legend {
  padding: 0
}

menu,
ol,
ul {
  list-style: none;
  margin: 0;
  padding: 0
}

textarea {
  resize: vertical
}

input::placeholder,
textarea::placeholder {
  color: #9ca3af;
  opacity: 1
}

[role=button],
button {
  cursor: pointer
}

:disabled {
  cursor: default
}

audio,
canvas,
embed,
iframe,
img,
object,
svg,
video {
  display: block;
  vertical-align: middle
}

img,
video {
  height: auto;
  max-width: 100%
}

[hidden] {
  display: none
}

body,
html {
  height: 100%;
  width: 100%
}
```
