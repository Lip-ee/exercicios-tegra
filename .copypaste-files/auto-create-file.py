import shutil
import os

# cria as pastas do ex10 ao ex30
for x in range(10, 31, 1):
    os.mkdir(rf'/home/lipe/Área de Trabalho/exercicios-traco/ex{x}')

# copia o arquivo padrão de html para as pastas dos ex
originalhtml = r'/home/lipe/Área de Trabalho/exercicios-traco/.copypaste-files/index.html'
for x in range(10, 31, 1):
    targethtml = rf'/home/lipe/Área de Trabalho/exercicios-traco/ex{x}/index.html'
    shutil.copyfile(originalhtml, targethtml)

# copia o arquivo padrão de js para as pastas dos ex
originaljs = r'/home/lipe/Área de Trabalho/exercicios-traco/.copypaste-files/script.js'
for x in range(10, 31, 1):
    targetjs = rf'/home/lipe/Área de Trabalho/exercicios-traco/ex{x}/script.js'
    shutil.copyfile(originaljs, targetjs)
