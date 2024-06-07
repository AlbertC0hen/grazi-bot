document.addEventListener('DOMContentLoaded', () => {
    const messages = [
        { text: "Opa, e aí, Grazinaldo aqui!", sender: 'bot' },
        { text: "Eu quero te mostrar o que você vai aprender comigo na estratégia Copy Bot!", sender: 'bot' },
        { text: "Você precisa entender que é possível atender pessoas e vender seus produtos ou serviços 24/7 sem precisar estar online...", sender: 'bot' },
        { text: "E o melhor, com a ajuda da IA.", sender: 'bot' },
        { text: "Qual seu nome?", sender: 'bot' }
    ];

    const msg_use = [
        { text: "podemos continuar...", sender: 'bot' },
        { text: "Aliás, você sabe que isso aqui é uma automação, e que nesse exato momento eu 'estou atendendo' dezenas de pessoas ao mesmo tempo, sem precisar digitar uma só palavra, né?", sender: 'bot' }
    ];

    const msg1 = [
        { text: "Pois é…rs.", sender: 'bot' },
        { text: "Eu vou te ensinar como você pode fazer exatamente isso e criar múltiplos atendimentos automáticos usando um único Chatbot, e também:", sender: 'bot' },
        { text: "✅ Como criar conversas persuasivas para vender mais rápido", sender: 'bot' },
        { text: "✅ Como variar as abordagens com IA", sender: 'bot' },
        { text: "✅ Atrair leads quentes para seu bot", sender: 'bot' },
        { text: "✅ Como construir uma 'equipe' de 20 pessoas usando apenas um Robô integrado com IA", sender: 'bot' }
    ];

    const msg2 = [
        { text: "Você aprenderá 2 tipos de Chatbots SECRETOS...", sender: 'bot' },
        { text: "E um deles pode ser integrado em qualquer plataforma, site e até mesmo Whatsapp 🚀", sender: 'bot' },
        { text: "Podendo:", sender: 'bot' },
        { text: "- Enviar Mensagem de Whatsapp", sender: 'bot' },
        { text: "- Criar lista de leads entregando iscas digitais", sender: 'bot' },
        { text: "- Enviar e-mail marketing (sem contratar plataforma)", sender: 'bot' },
        { text: "- Prestar Suporte", sender: 'bot' },
        { text: "- Enviar catálogo de produtos", sender: 'bot' },
        { text: "E muito mais. 🔥", sender: 'bot' },
        { text: "Isso parece interessante pra você?", sender: 'bot' },
        { text: "Aperte abaixo pra confirmar👇", sender: 'bot' }
    ];

    const additionalMessages = [
        { text: "Ótimo então...", sender: 'bot' },
        { text: "Eu não sei você, mas a maioria dos profissionais que eu atendo já tentaram vários métodos de vendas com bots, e sem sucesso...", sender: 'bot' },
        { text: "Eles ficam presos no que eu chamo de 'ciclo das quase vendas'.", sender: 'bot' },
        { text: "Muitos tentam vender com bot de Instagram, o famoso Manychat, porém…", sender: 'bot' },
        { text: "É aí que começa uma série de ERROS...", sender: 'bot' },
        { text: "O instagram é um MEIO e não um fim.", sender: 'bot' },
        { text: "A sua meta deve ser levar pessoas para uma conversa PARTICULAR, que acontece nos Copy Bots, sendo um deles, pelo Whatsapp...", sender: 'bot' },
        { text: "Você só precisa deixar seus robôs persuasivos fazerem o trabalho por você. 😉", sender: 'bot' }
    ];

    const finalMessage = [
        { text: "Pra você ter noção, o maior problema de quem ensina chatbots comuns é que maioria te fala pra ter vários Whatsapps, para não correr o risco de perder números toda semana.", sender: 'bot' },
        { text: "O motivo?", sender: 'bot' },
        { text: "Eles usam ferramentas falhas e que não tem conectividade com a API oficial do Whatsapp, por isso, correm muitos riscos.", sender: 'bot' },
        { text: "Na minha estratégia oficial, com Copy Bots, você não corre risco de ter bloqueio.🔥", sender: 'bot' },
        { text: "E isso porque possui uma API oficial, você pode usar vários funis com o mesmo número.", sender: 'bot' },
        { text: "O RISCO É ZERO!", sender: 'bot' },
        { text: "Eu mesmo tenho 7 funis de produtos diferentes rodando com um mesmo número.", sender: 'bot' },
        { text: "E outros 3 funis como este aqui, sem whatsapp! 🤑", sender: 'bot' },
        { text: "Quer ver alguns dos meus funis de Copy Bot?", sender: 'bot' }
    ];

    const notificationMessage = [
        { text: "E olha só as notificações de vendas realizadas com esses bots...", sender: 'bot' },
        { text: "O que acha de ter resultados assim? 👇", sender: 'bot' }
    ];

    const imageMessage = { src: "vendas.png", alt: "Vendas realizadas com sucesso", class: "img-print" };

    const messagesContainer = document.getElementById('messages');

    let index = 0;

    const displayMessage = () => {
        if (index < messages.length - 1) {
            const message = document.createElement('div');
            message.className = `message ${messages[index].sender}`;
            message.textContent = messages[index++].text;
            const messageContainer = document.createElement('div');
            messageContainer.className = 'message-container';
            messageContainer.appendChild(message);
            messagesContainer.appendChild(messageContainer);
            scrollToBottom();
            setTimeout(displayMessage, 2000);
        } else {
            const namePrompt = document.createElement('div');
            namePrompt.className = 'message bot';
            namePrompt.textContent = messages[index].text;
            const namePromptContainer = document.createElement('div');
            namePromptContainer.className = 'message-container';
            namePromptContainer.appendChild(namePrompt);
            messagesContainer.appendChild(namePromptContainer);
            scrollToBottom();

            const inputContainer = document.createElement('div');
            inputContainer.className = 'input-container';
            const input = document.createElement('input');
            input.type = 'text';
            input.placeholder = 'Digite seu nome';
            input.id = 'user-name';
            inputContainer.appendChild(input);
            messagesContainer.appendChild(inputContainer);
            scrollToBottom();

            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const userName = input.value.trim();
                    if (userName !== '') {
                        inputContainer.remove();
                        namePromptContainer.remove();
                        const userMessage = document.createElement('div');
                        userMessage.className = 'message user';
                        userMessage.textContent = userName;
                        const userMessageContainer = document.createElement('div');
                        userMessageContainer.className = 'message-container';
                        userMessageContainer.appendChild(userMessage);
                        messagesContainer.appendChild(userMessageContainer);
                        scrollToBottom();

                        const botMessage = document.createElement('div');
                        botMessage.className = 'message bot';
                        botMessage.textContent = `Agora sim ${userName}, ${msg_use[0].text}`;
                        const botMessageContainer = document.createElement('div');
                        botMessageContainer.className = 'message-container';
                        botMessageContainer.appendChild(botMessage);
                        messagesContainer.appendChild(botMessageContainer);
                        scrollToBottom();

                        setTimeout(() => {
                            const botMessage2 = document.createElement('div');
                            botMessage2.className = 'message bot';
                            botMessage2.textContent = msg_use[1].text;
                            const botMessageContainer2 = document.createElement('div');
                            botMessageContainer2.className = 'message-container';
                            botMessageContainer2.appendChild(botMessage2);
                            messagesContainer.appendChild(botMessageContainer2);
                            scrollToBottom();

                            let msgIndex = 0;
                            const displayMsg1Message = () => {
                                if (msgIndex < msg1.length) {
                                    const botMessage3 = document.createElement('div');
                                    botMessage3.className = 'message bot';
                                    botMessage3.textContent = msg1[msgIndex++].text;
                                    const botMessageContainer3 = document.createElement('div');
                                    botMessageContainer3.className = 'message-container';
                                    botMessageContainer3.appendChild(botMessage3);
                                    messagesContainer.appendChild(botMessageContainer3);
                                    scrollToBottom();
                                    setTimeout(displayMsg1Message, 2000);
                                } else {
                                    let msg2Index = 0;
                                    const displayMsg2Message = () => {
                                        if (msg2Index < msg2.length) {
                                            const botMessage4 = document.createElement('div');
                                            botMessage4.className = 'message bot';
                                            botMessage4.textContent = msg2[msg2Index++].text;
                                            const botMessageContainer4 = document.createElement('div');
                                            botMessageContainer4.className = 'message-container';
                                            botMessageContainer4.appendChild(botMessage4);
                                            messagesContainer.appendChild(botMessageContainer4);
                                            scrollToBottom();
                                            setTimeout(displayMsg2Message, 2000);
                                        } else {
                                            const moreButton = document.createElement('button');
                                            moreButton.className = 'more-button';
                                            moreButton.textContent = 'Sim, é isso que eu quero aprender!';
                                            messagesContainer.appendChild(moreButton);
                                            scrollToBottom();

                                            moreButton.addEventListener('click', () => {
                                                const userButtonMessage = document.createElement('div');
                                                userButtonMessage.className = 'message user';
                                                userButtonMessage.textContent = moreButton.textContent;
                                                const userButtonMessageContainer = document.createElement('div');
                                                userButtonMessageContainer.className = 'message-container';
                                                userButtonMessageContainer.appendChild(userButtonMessage);
                                                messagesContainer.appendChild(userButtonMessageContainer);
                                                scrollToBottom();

                                                moreButton.remove();
                                                let additionalMsgIndex = 0;
                                                const displayAdditionalMessage = () => {
                                                    if (additionalMsgIndex < additionalMessages.length) {
                                                        const additionalMessage = document.createElement('div');
                                                        additionalMessage.className = 'message bot';
                                                        additionalMessage.textContent = additionalMessages[additionalMsgIndex++].text;
                                                        const additionalMessageContainer = document.createElement('div');
                                                        additionalMessageContainer.className = 'message-container';
                                                        additionalMessageContainer.appendChild(additionalMessage);
                                                        messagesContainer.appendChild(additionalMessageContainer);
                                                        scrollToBottom();
                                                        setTimeout(displayAdditionalMessage, 2000);
                                                    } else {
                                                        const finalButton = document.createElement('button');
                                                        finalButton.className = 'final-button';
                                                        finalButton.textContent = 'Legal! Eu quero ter robôs trabalhando por mim.';
                                                        messagesContainer.appendChild(finalButton);
                                                        scrollToBottom();

                                                        finalButton.addEventListener('click', () => {
                                                            const userFinalButtonMessage = document.createElement('div');
                                                            userFinalButtonMessage.className = 'message user';
                                                            userFinalButtonMessage.textContent = finalButton.textContent;
                                                            const userFinalButtonMessageContainer = document.createElement('div');
                                                            userFinalButtonMessageContainer.className = 'message-container';
                                                            userFinalButtonMessageContainer.appendChild(userFinalButtonMessage);
                                                            messagesContainer.appendChild(userFinalButtonMessageContainer);
                                                            scrollToBottom();

                                                            finalButton.remove();

                                                            let finalIndex = 0;
                                                            const displayFinalMessage = () => {
                                                                if (finalIndex < finalMessage.length) {
                                                                    const finalMsg = document.createElement('div');
                                                                    finalMsg.className = 'message bot';
                                                                    finalMsg.textContent = finalMessage[finalIndex++].text;
                                                                    const finalMsgContainer = document.createElement('div');
                                                                    finalMsgContainer.className = 'message-container';
                                                                    finalMsgContainer.appendChild(finalMsg);
                                                                    messagesContainer.appendChild(finalMsgContainer);
                                                                    scrollToBottom();
                                                                    setTimeout(displayFinalMessage, 2000);
                                                                } else {
                                                                    const showFunnelsButton = document.createElement('button');
                                                                    showFunnelsButton.className = 'button';
                                                                    showFunnelsButton.textContent = "Quero sim! Me mostre esses funis...";
                                                                    messagesContainer.appendChild(showFunnelsButton);
                                                                    scrollToBottom();

                                                                    showFunnelsButton.addEventListener('click', () => {
                                                                        const userShowFunnelsButtonMessage = document.createElement('div');
                                                                        userShowFunnelsButtonMessage.className = 'message user';
                                                                        userShowFunnelsButtonMessage.textContent = showFunnelsButton.textContent;
                                                                        const userShowFunnelsButtonMessageContainer = document.createElement('div');
                                                                        userShowFunnelsButtonMessageContainer.className = 'message-container';
                                                                        userShowFunnelsButtonMessageContainer.appendChild(userShowFunnelsButtonMessage);
                                                                        messagesContainer.appendChild(userShowFunnelsButtonMessageContainer);
                                                                        scrollToBottom();

                                                                        showFunnelsButton.remove();

                                                                        const iframeContainer = document.createElement('div');
                                                                        iframeContainer.className = 'iframe-container';

                                                                        const iframe = document.createElement('iframe');
                                                                        iframe.width = '560';
                                                                        iframe.height = '315';
                                                                        iframe.src = 'https://www.youtube.com/embed/7i2JU5ci7zQ?si=AUe0OCCGySY_gfWY';
                                                                        iframe.title = 'YouTube video player';
                                                                        iframe.frameBorder = '0';
                                                                        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                                                                        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
                                                                        iframe.allowFullscreen = true;
                                                                        iframe.onload = () => {
                                                                            for (const message of notificationMessage) {
                                                                                const notificationDiv = document.createElement('div');
                                                                                notificationDiv.className = 'message bot';
                                                                                notificationDiv.textContent = message.text;
                                                                                const notificationContainer = document.createElement('div');
                                                                                notificationContainer.className = 'message-container';
                                                                                notificationContainer.appendChild(notificationDiv);
                                                                                messagesContainer.appendChild(notificationContainer);
                                                                                scrollToBottom();
                                                                            }
                                                                            const imageDiv = document.createElement('div');
                                                                            imageDiv.className = 'message bot';
                                                                            const imageElement = document.createElement('img');
                                                                            imageElement.src = imageMessage.src;
                                                                            imageElement.alt = imageMessage.alt;
                                                                            imageElement.className = imageMessage.class;
                                                                            imageDiv.appendChild(imageElement);
                                                                            messagesContainer.appendChild(imageDiv);
                                                                            scrollToBottom();
                                                                        };

                                                                        iframeContainer.appendChild(iframe);
                                                                        messagesContainer.appendChild(iframeContainer);
                                                                    });
                                                                }
                                                            };
                                                            displayFinalMessage();
                                                        });
                                                    }
                                                };
                                                displayAdditionalMessage();
                                            });
                                        }
                                    };
                                    displayMsg2Message();
                                }
                            };
                            displayMsg1Message();
                        }, 2000);
                    }
                }
            });
        }
    };

    const scrollToBottom = () => {
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    };

    displayMessage();
});
