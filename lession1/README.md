# udemy-course

add FAST_REFRESH=FALSE in .env file

## editor settings

Prettier - Code formatter
VS Code plugin for prettier/prettier

"editor.formatOnPaste": true,
"editor.formatOnSave": true,

settings.json

"emmet.includeLanguages": {
"javascript": "javascriptreact"
},

Bracket Pair Colorizer
A customizable extension for colorizing matching brackets

indent-rainbow
Makes indentation easier to read

MDX
Provides syntax highlighting and bracket matching for MDX (JSX in Markdown) files.

---

- useState

  - Component name must be in uppercase
  - must be in funcation/component body
  - cannot call conditionally

- useEffect
- Conditional rendering
- forms
- useRef
- useStyles
- useReducer
- Prop Drilling
- Context API / useContext

Javascript Array
Methods

const items = [
{name:"bike", price:100 },
{name:"tv", price:50 },
{name:"phone", price:200 },
{name:"computer", price:150 },
]

- filter
  const filteredItem = items.filter((item) => { return item.price <=100})
- map
  const itemNames = items.filter((item) => { return item.name})
- find
  const foundItem = items.find((item) => { return item.name === 'book'})
- forEach
  items.forEach((item) => { console.log(item.price)})
- some
  const hasInexpensiveItems = items.some((item) => { return item.price <=0 })
- every
  const hasInexpensiveItems = items.every((item) => { return item.price <=100 })
- reduce
  const total = items.reduce((currentTotal, item) => { return item.price + currentTotal }, 0 )
- include
  const myarr = [1,2,3,4,5]
  const hasincluded = myarr.include(7) //return false
