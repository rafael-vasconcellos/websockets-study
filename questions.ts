export const questions = {
    a: {
        option: 'a',
        question: "Componha um evite para um chá de bebê que inclua ideias de presentes",
        answer: `Claro, aqui está um exemplo de convite para um chá de bebê://

        🍼 Convite para o Chá de Bebê de [Nome do Bebê] 🍼//
      
        Olá [Nome do Convidado],
        
        Estamos emocionados em convidá-lo para o chá de bebê de nosso querido [Nome do Bebê]! Venha celebrar conosco este momento especial e ajudar a dar as boas-vindas ao nosso pequeno milagre.//
        
        Detalhes do Evento:
        
        Data: [Data]
        Hora: [Hora]
        Local: [Endereço]
        Sabemos que seu amor e apoio são o presente mais valioso que poderíamos receber. No entanto, se você deseja trazer um presente, aqui estão algumas ideias://
        
        Roupas de Bebê: Macacões, meias, chapéus e roupas de banho são sempre úteis.
        Fraldas e Lenços Umedecidos: Você nunca pode ter muitos desses!
        Brinquedos e Livros: Para ajudar a estimular a mente do nosso pequeno.
        Artigos de Higiene: Shampoo para bebês, loção, creme para assaduras, etc.
        Cartão-presente: Se você não tem certeza do que comprar, um cartão-presente de uma loja de bebês será muito apreciado.
        Por favor, confirme sua presença até [Data de Confirmação]. Estamos ansiosos para celebrar com você!//
        
        Com amor, [Nome dos Pais]//
        
        Espero que isso ajude! Sinta-se à vontade para personalizar este convite de acordo com suas necessidades. 😊`
    },
    b: {
        option: 'b',
        question: "Escreva uma música que celebre a beleza da Terra",
        answer: `Claro, aqui está uma canção que celebra a beleza da Terra://
        🎵
        (verso 1)
        Olhe ao redor, veja a beleza que nos rodeia,
        Montanhas altas, rios profundos, florestas verdes.
        O céu azul acima, estrelas brilhantes à noite,
        A Terra é nossa casa, iluminada pela luz do sol.//

        (refrão)
        Oh, Terra, você é tão linda,
        Seu esplendor nos deixa sem palavras.
        De seus oceanos azuis às planícies douradas,
        Nós celebramos a beleza que você contém.//

        (verso 2)
        As estações mudam, cada uma com seu encanto,
        Primavera florescente, verão quente, outono dourado.
        Inverno frio traz neve branca pura,
        A Terra dança no ritmo do tempo.//

        (refrão)
        Oh, Terra, você é tão linda,
        Seu esplendor nos deixa sem palavras.
        De seus picos nevados às florestas tropicais,
        Nós celebramos a beleza que você contém.//

        (ponte)
        Vamos cuidar de nossa casa, preservar sua beleza,
        Para as gerações futuras, é nossa responsabilidade.
        A Terra é um presente, um tesouro para guardar,
        Vamos celebrar sua beleza todos os dias.//

        (refrão)
        Oh, Terra, você é tão linda,
        Seu esplendor nos deixa sem palavras.
        De seus desertos áridos às flores em flor,
        Nós celebramos a beleza que você contém.//

        (final)
        Então aqui estamos nós, sob o céu estrelado,
        Agradecendo à Terra, sob a lua cheia.
        Por toda a beleza que você nos dá,
        Nós celebramos você, Terra, hoje e sempre.//
        🎵
        Espero que você goste desta canção! 😊
        
        `
    },
    c: {
        option: 'c',
        question: "Dê-me uma lista de novos hobbies que eu poderia perseguir com tempo livre limitado",
        answer: `Claro! Aqui estão algumas **ideias de hobbies** que você pode explorar com o seu tempo livre limitado://

        1. **Pintura em aquarela**: Descubra um novo talento na arte e expresse seus sentimentos por meio das cores.//
        2. **Aulas de teatro**: Aprenda a desenvolver-se mais num palco enquanto se diverte.//
        3. **Participação em uma comunidade de bairro**: Envolva-se mais com a sua comunidade e mostre disponibilidade para ajudar.//
        4. **Ser um DJ**: Transforme sua paixão pela música em um hobby produtivo tocando em eventos ou com amigos.//
        5. **Atividades físicas na academia**: Cuide da sua saúde e condicionamento físico.//
        6. **Aprender a surfar**: Conecte-se com o mar e a natureza enquanto pratica um esporte desafiante.//
        7. **Dedicar-se à leitura**: Relaxe e divirta-se conhecendo novas histórias sem sair do sofá.//
        8. **Jogar tênis**: Exercite-se no seu tempo livre com esse esporte.//
        9. **Aprender a tocar violão**: Se você é musical, o violão pode ser uma ótima opção.//
        10. **Frequentar concertos de música na cidade**: Conecte-se com a sua cidade e descubra artistas locais.//
        11. **Pesca**: Se você mora próximo a um rio ou mar, a pesca pode ser relaxante e paciente.//
        12. **Praticar jogos de memória**: Relembre sua infância e exercite sua memória com amigos ou família.//
        13. **Edição de vídeos**: Um passatempo que pode até se tornar uma futura profissão.//
        14. **Artes marciais**: Exercite corpo e mente e prepare-se para melhor defesa pessoal.//
        15. **Jogar cartas com amigos**: Crie um hábito semanal para jogar cartas e conversar sobre a vida¹.//
        16. **Cozinhar ou Assar**: Experimentar novas receitas pode ser uma atividade divertida e gratificante.//
        
        Espero que encontre algo que lhe agrade! 🌟
        
        `
    },
}




/*
`Claro, aqui está um exemplo de um script Python para executar a pesquisa binária://
        def binary_search(arr, low, high, x):
            if high >= low:
                mid = (high + low) // 2
                if arr[mid] == x:
                    return mid
                elif arr[mid] > x:
                    return binary_search(arr, low, mid - 1, x)
                else:
                    return binary_search(arr, mid + 1, high, x)
            else:
                return -1

            arr = [2, 3, 4, 10, 40]
            x = 10
            result = binary_search(arr, 0, len(arr)-1, x)

            if result != -1:
                print(&quot;Elemento está presente no índice&quot;, str(result))
            else:
                print(&quot;Elemento não está presente na lista&quot;)//

        Este script define uma função <code>binary_search</code> que realiza uma pesquisa binária em uma lista ordenada <code>arr</code> para um elemento específico <code>x</code>. A função retorna o índice do elemento na lista se ele estiver presente, e <code>-1</code> se ele não estiver presente. O script então usa essa função para procurar o número <code>10</code> na lista <code>arr</code>, e imprime o resultado. Por favor, substitua <code>arr</code> e <code>x</code> conforme necessário. 😊
        
`
*/