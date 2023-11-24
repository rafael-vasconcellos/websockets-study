import { exec, spawn } from 'child_process';


export function runC() {
    // Exemplo: Executar o comando "ls" no terminal
    exec('tsc --project ./public/tsconfig.json', (error, stdout, stderr) => { 
      /*if (error) {
        console.error(`Erro ao executar o comando: ${error.message}`);
        console.log(`Resultado do comando:\n${stdout}`);
        return;
      }
      if (stderr) {
        console.error(`Erro no stderr: ${stderr}`);
        console.log(`Resultado do comando:\n${stdout}`);
        return;
      }*/

    });


}
