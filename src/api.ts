export type Questions = Array<{
  question: string;
  option: {
    A: {
      text: string;
      explication: string;
      isCorrect: boolean;
    };
    B: {
      text: string;
      explication: string;
      isCorrect: boolean;
    };
    C: {
      text: string;
      explication: string;
      isCorrect: boolean;
    };
    D: {
      text: string;
      explication: string;
      isCorrect: boolean;
    };
    E: {
      text: string;
      explication: string;
      isCorrect: boolean;
    };
  };
}>;

export const createQuestion = async (subject: string) => {
  const result: Questions = [
    {
      question:
        "Qual foi o principal motivo da transição de Roma de uma monarquia para uma república?",
      option: {
        A: {
          text: "O aumento da influência de tribos bárbaras",
          explication:
            "Embora as tribos bárbaras tenham influenciado Roma mais tarde, elas não foram relevantes nesse período.",
          isCorrect: false,
        },
        B: {
          text: "A insatisfação com o último rei, Tarquínio, o Soberbo",
          explication:
            "Correto. O reinado tirânico de Tarquínio, o Soberbo, levou à sua expulsão e à fundação da República.",
          isCorrect: true,
        },
        C: {
          text: "A expansão territorial de Roma",
          explication:
            "A expansão territorial aconteceu durante a República, não foi o motivo da sua criação.",
          isCorrect: false,
        },
        D: {
          text: "A influência do cristianismo nascente",
          explication:
            "O cristianismo ainda não existia nesse período da história de Roma.",
          isCorrect: false,
        },
        E: {
          text: "A pressão militar dos gregos",
          explication:
            "Os gregos não exerceram pressão significativa nesse contexto específico.",
          isCorrect: false,
        },
      },
    },
    {
      question: "Quem eram os plebeus na sociedade romana?",
      option: {
        A: {
          text: "Os líderes religiosos de Roma",
          explication:
            "Errado. Os líderes religiosos eram geralmente patrícios ou membros de famílias nobres.",
          isCorrect: false,
        },
        B: {
          text: "Os cidadãos comuns, incluindo agricultores, artesãos e comerciantes",
          explication:
            "Correto. Os plebeus eram a classe trabalhadora e compunham a maior parte da população romana.",
          isCorrect: true,
        },
        C: {
          text: "Os escravos trazidos de outras regiões",
          explication:
            "Errado. Escravos eram uma classe separada e não possuíam os mesmos direitos dos plebeus.",
          isCorrect: false,
        },
        D: {
          text: "Os soldados que protegiam Roma",
          explication:
            "Errado. Embora muitos plebeus servissem no exército, nem todos os soldados eram plebeus.",
          isCorrect: false,
        },
        E: {
          text: "Os membros do Senado Romano",
          explication:
            "Errado. Os senadores eram geralmente patrícios, a elite da sociedade.",
          isCorrect: false,
        },
      },
    },
    {
      question: "O que foram as Guerras Púnicas?",
      option: {
        A: {
          text: "Conflitos entre Roma e a Grécia",
          explication:
            "Errado. As Guerras Púnicas ocorreram entre Roma e Cartago.",
          isCorrect: false,
        },
        B: {
          text: "Conflitos internos entre patrícios e plebeus",
          explication:
            "Errado. Esse foi o tema da luta pela igualdade dentro de Roma, não as Guerras Púnicas.",
          isCorrect: false,
        },
        C: {
          text: "Guerras entre Roma e Cartago pelo controle do Mediterrâneo",
          explication:
            "Correto. As Guerras Púnicas foram três conflitos pelo domínio do comércio e do território mediterrâneo.",
          isCorrect: true,
        },
        D: {
          text: "Guerras civis dentro do Império Romano",
          explication:
            "Errado. Guerras civis foram conflitos internos, mas as Guerras Púnicas foram externas.",
          isCorrect: false,
        },
        E: {
          text: "Conflitos religiosos envolvendo o cristianismo",
          explication:
            "Errado. As Guerras Púnicas aconteceram muito antes do surgimento do cristianismo.",
          isCorrect: false,
        },
      },
    },
    {
      question:
        "Quem foi responsável pela construção de grande parte da infraestrutura de Roma, como aquedutos e estradas?",
      option: {
        A: {
          text: "Os imperadores romanos",
          explication:
            "Correto. Muitos imperadores financiaram grandes projetos de infraestrutura, especialmente durante o Império.",
          isCorrect: true,
        },
        B: {
          text: "Os escravos estrangeiros",
          explication:
            "Embora escravos tenham participado da construção, eles não foram os responsáveis pela concepção ou planejamento.",
          isCorrect: false,
        },
        C: {
          text: "Os patrícios",
          explication:
            "Errado. Os patrícios eram membros da elite, mas não desempenhavam diretamente esse papel.",
          isCorrect: false,
        },
        D: {
          text: "Os soldados romanos",
          explication:
            "Embora soldados ocasionalmente trabalhassem em projetos de construção, eles não foram os principais responsáveis.",
          isCorrect: false,
        },
        E: {
          text: "Os senadores",
          explication:
            "Errado. Os senadores supervisionavam o governo, mas não eram responsáveis por infraestrutura.",
          isCorrect: false,
        },
      },
    },
    {
      question: "O que aconteceu em 476 d.C.?",
      option: {
        A: {
          text: "A fundação do Império Romano",
          explication:
            "Errado. O Império foi fundado séculos antes, em 27 a.C.",
          isCorrect: false,
        },
        B: {
          text: "A queda do Império Romano do Ocidente",
          explication:
            "Correto. Em 476 d.C., o último imperador romano do Ocidente, Rômulo Augústulo, foi deposto.",
          isCorrect: true,
        },
        C: {
          text: "A divisão do Império em Ocidente e Oriente",
          explication: "Errado. A divisão do Império ocorreu no século IV d.C.",
          isCorrect: false,
        },
        D: {
          text: "A ascensão de Júlio César",
          explication:
            "Errado. Júlio César viveu no século I a.C., muito antes de 476 d.C.",
          isCorrect: false,
        },
        E: {
          text: "A assinatura do Édito de Milão",
          explication: "Errado. O Édito de Milão foi promulgado em 313 d.C.",
          isCorrect: false,
        },
      },
    },
  ];

  console.log(subject);
  return result;
};
