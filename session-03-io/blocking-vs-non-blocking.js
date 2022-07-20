const {
  readFileSync,
  writeFileSync,
  readFile,
  writeFile,
} = require('fs')
const {
  join,
} = require('path')


const copyFileBlocking = (source, dest) => {
  console.log('Lendo blocking conteudo')
  const content = readFileSync(source)
  console.log('Escrevendo bloking conteudo')
  writeFileSync(dest, content)
}

const sourcePath = join(__dirname, 'files', 'example.txt')
const destPath = join(__dirname, 'files', 'example.copy.blocking.txt')

copyFileBlocking(sourcePath, destPath) 
console.log('Copia blocking com sucesso')

const copyFileNonBlocking = (source, dest) => {
  console.log('Começou a copia non-blocking')
  
  readFile(source, (_err, data) => {
    console.log('Terminou de ler non-blocking')

    writeFile(dest, data, (_err) => {
      console.log('Terminou de escrever non-blocking')
  })
  })
}

const destPathNonBlocking = join(__dirname, 'files', 'example.copy.non-blocking.txt')

copyFileNonBlocking(source, dest)

console.log('Terminou mesmo ?')

console.log(
  'Continuando',
  1 + 1,
  Math.PI * Math.E,
)