(function () {
    angular
        .module('website')
        .controller('ctrlEquipe', EquipeCtrl);

    function EquipeCtrl($scope) {


        $scope.bgCoord = '#007690';


        $scope.coordenadores = [{
            nome: 'Leonel Pablo Carvalho Tedesco',
            email: 'leoneltedesco@unisc.br',
            modulos: ['Hardware Dedicado', 'Gateway', 'Back-end', 'Apresentação'],
            lattes: 'http://lattes.cnpq.br/2520175088634553',
            areaPesquisa: ['Sistemas Digitais e Sistemas Embarcados', 'Computação Aplicada', 'Sistemas e Processos Industriais', 'Informática na Saúde', 'Tecnologias Assistivas'],
            projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

        }];


        $scope.professores = [
            {
                nome: 'Andréa Aparecida Konzen',
                email: 'andrea@unisc.br',
                modulos: ["Apresentação"],
                lattes: "http://lattes.cnpq.br/7292428244352446",
                areaPesquisa: ['Computação assistiva', 'Informática aplicada a saúde', 'Informática na Educação', 'Computação Teórica'],
                projetos: ['2017 - Atual: Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta', '2016 - Atual: Mecanismos de diálogos para agentes pedagógicos afetivos em ambientes de aprendizagem: estudo, desenvolvimento e análise da aplicação em sala de aula', '2018 - Descartando - TEKANN Mobile Solutions']

            },
            {
                nome: 'Adriano José Bombardieri',
                email: 'adrianobombardieri@unisc.br',
                modulos: ['Hardware Dedicado'],
                lattes: 'http://lattes.cnpq.br/3320483961161928',
                areaPesquisa: ['-'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Liane Mahlmann Kipper',
                email: 'liane@unisc.br',
                modulos: ['Apresentação'],
                lattes: 'http://lattes.cnpq.br/1353629457597527',
                areaPesquisa: ['Process Management', 'Lean; Design Thinking', 'Creativity and Innovation Management'],
                projetos: ['- O uso da gestão por processos baseada em uma abordagem sistêmica no gerenciamento das organizações - Fase 3;',
                    '- Ambiente Virtual Corporativo e Interativo visando Aprendizagem Organizacional;',
                    '- Laboratório interativo de Criatividade: desenvolvendo ambientes para a inovação']

            },

            {
                nome: 'Márcio Alexandre Pacheco',
                email: 'marciopacheco@unisc.br',
                modulos: ['Hardware Dedicado', 'Gateway'],
                lattes: 'http://lattes.cnpq.br/8615488063973516',
                areaPesquisa: ['Processamento de Imagem em Dispositivos Reconfiguráveis', 'Hardware Dedicado'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },

            {
                nome: 'Rolf Fredi Molz',
                email: 'rolf@unisc.br',
                modulos: ['Hardware Dedicado'],
                lattes: 'http://lattes.cnpq.br/5738153832159932',
                areaPesquisa: ['Processamento de sinais'],
                projetos: ['-']

            }


        ];


        $scope.graduandos = [ {
            nome: 'José Rodrigo Rodrigues Flores Borges',
            curso: 'Engenharia de Computação',
            email: 'joserodrigorf@gmail.com',
            modulos: ['Apresentação'],
            lattes: 'http://lattes.cnpq.br/7570473529345649',
            areaPesquisa: ['Aprendizado de Máquina'],
            projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

        },
            {
                nome: 'William Jean Alves Pereira',
                curso: 'Ciência da Computação',
                email: 'willpb23@gmail.com',
                modulos: ['Apresentação'],
                lattes: 'http://lattes.cnpq.br/3180200899600718',
                areaPesquisa: ['-'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },

            {
                nome: 'Igor Detterborn',
                curso: 'Engenharia de Computação',
                email: 'igordettenborn@gmail.com',
                modulos: ['Hardware Dedicado'],
                lattes: 'http://lattes.cnpq.br/2058902776285319',
                areaPesquisa: ['Comunicação mobile'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']
            }
        ];

        $scope.alunos = [
            {
                nome: 'Patrick Luiz Martini',
                curso: 'Engenharia de Computação',
                email: 'plmartini@mx2.unisc.br',
                modulos: ['Apresentação'],
                lattes: 'http://lattes.cnpq.br/1057873436249313',
                areaPesquisa: ['Desenvolvimento Front-end', 'computação aplicada à saúde'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Carlos Alberto Scherer Teixeira',
                curso: 'Ciência da Computação',
                email: 'carlosschererteixeira@gmail.com',
                modulos: ['Apresentação'],
                lattes: '#',
                areaPesquisa: ['-'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },

            {
                nome: 'Guilherme Mateus Flesch',
                curso: 'Engenharia de Produção',
                email: 'guilherme_flesch@hotmail.com',
                modulos: ['Hardware Dedicado'],
                lattes: '#',
                areaPesquisa: ['Desenvolvimento de Produto'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Pedro Henrique Ulmi',
                curso: 'Ciência da Computação',
                email: 'pedrohulmi@mx2.unisc.br',
                modulos: ['Back-end'],
                lattes: 'http://lattes.cnpq.br/3156075088444274',
                areaPesquisa: ['Inteligência Artificial'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Augusto Buboltz',
                curso: 'Engenharia Elétrica',
                email: 'augustojbuboltz@mx2.unisc.br',
                modulos: ['Hardware Dedicado'],
                lattes: '#',
                areaPesquisa: ['-'],
                projetos: ['Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Luiz Fernando Baldo Marques',
                curso: 'Engenharia de Computação',
                email: 'lfmarques@mx2.unisc.br',
                modulos: ['Hardware Dedicado'],
                lattes: '',
                areaPesquisa: ['Robótica educacional','aeromodelismo', 'sistemas embarcados', 'Computação em saúde'],
                projetos: ['2017 - Kamikase Aerodesign UNISC','2017- Re-Inventar','2018- Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            },
            {
                nome: 'Thales Eduardo Muller',
                curso: 'Engenharia de Computação',
                email: 'thales.em@gmail.com',
                modulos: ['Gateway'],
                lattes: 'http://lattes.cnpq.br/0669844906358301',
                areaPesquisa: ['-'],
                projetos: ['2018- Computação Wearable Aplicada no Monitoramento e Análise de Pacientes em Pós-Consulta']

            }

        ];

    }
})();