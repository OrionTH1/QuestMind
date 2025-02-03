import { GoogleGenerativeAI } from "@google/generative-ai";
import { QuestionsDifficulty } from "./store";

const genIA = new GoogleGenerativeAI(import.meta.env.VITE_API_KEY);
const model = genIA.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction:
    "Somente responda com um formato de uma array de objetos javascript, não adicione mais nenhum texto em usa resposta",
});
export type Questions = Array<{
  question: string;
  options: {
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

export const createQuestion = async (
  subject: string,
  difficulty: QuestionsDifficulty,
  ammount: number,
  language: string
) => {
  const size =
    difficulty === "easy"
      ? "short"
      : difficulty === "normal"
      ? "medium"
      : "big";

  const prompt = `
  Crie ${ammount} questões com dificuldade ${difficulty} sobre ${subject}, seguindo estas diretrizes:

  - As questões devem ser criadas na linguage: ${language}
  - As questões devem ser de tamanho ${size} e bem elaboradas, no formato de múltipla escolha.
  - Cada questão deve ter 5 alternativas (A a E).
  - Apenas uma alternativa deve estar correta e deve ser indicada com "isCorrect": true.
  - Todas as alternativas devem ser bem elaboradas e equilibradas em qualidade e tamanho. Nenhuma questão deve ter apenas uma ou duas alternativas bem desenvolvidas.
  - Evite padrões previsíveis: a alternativa correta não deve se repetir frequentemente na mesma posição (por exemplo, 3 respostas corretas sendo sempre a opção E).
  - Use a chave "isCorrect" para falar se a alternativa está correta ou não
  - Use o seguinte formato JSON: 

  {
    "question": "Texto da questão",
    "options": {
      "A": {
        "text": "Texto da alternativa",
        "explication": "Explicação sobre a alternativa",
        "isCorrect": false
      },
      "B": {
        "text": "Texto da alternativa",
        "explication": "Explicação sobre a alternativa",
        "isCorrect": false
      },
      "C": {
        "text": "Texto da alternativa",
        "explication": "Explicação sobre a alternativa",
        "isCorrect": true
      },
      "D": {
        "text": "Texto da alternativa",
        "explication": "Explicação sobre a alternativa",
        "isCorrect": false
      },
      "E": {
        "text": "Texto da alternativa",
        "explication": "Explicação sobre a alternativa",
        "isCorrect": false
      }
    }
  }

  ,`;

  const result = await model.generateContent(prompt);
  let text = result.response.text();
  text = text.replace(/```json|```|```javascript|javascript|json/g, "");
  console.log(text);

  const object = JSON.parse(text) as Questions;

  return object;
};
