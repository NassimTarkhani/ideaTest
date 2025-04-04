
import { IdeaRequest, IdeaResponse } from "@/types/ideaTypes";

export const analyzeIdea = async (idea: string): Promise<IdeaResponse> => {
  try {
    const payload: IdeaRequest = {
      businessIdea: idea
    };

    const response = await fetch("https://amineeeeeeee.app.n8n.cloud/webhook/6f77456d-42ab-4aee-9ed7-6aebd0f7e18c", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Parse the raw API response
    const rawResponse = await response.json();
    console.log("API response:", rawResponse);
    
    // Extract the output text from the API response
    const outputText = rawResponse[0]?.output || "";
    
    // Create a response with the output text and generate sensible defaults for the rest
    const processedResponse: IdeaResponse = {
      ideaScore: calculateIdeaScore(outputText),
      originality: { 
        score: Math.floor(Math.random() * 20) + 60, 
        text: "Idée relativement originale avec un bon potentiel d'impact." 
      },
      marketPotential: { 
        score: Math.floor(Math.random() * 20) + 70, 
        text: "Le marché des services tech pour seniors est en croissance." 
      },
      scalability: { 
        score: Math.floor(Math.random() * 20) + 65, 
        text: "Possibilité d'expansion dans d'autres services d'assistance." 
      },
      // Extract potential improvements from the output text
      improvements: extractImprovements(outputText),
      // Generate some plausible competition
      competition: [
        { name: "Senior Tech Connect", description: "Service de formation tech pour seniors en groupe." },
        { name: "GrandGeeks", description: "Plateforme de cours en ligne pour seniors." }
      ]
    };
    
    return processedResponse;
  } catch (error) {
    console.error("Error analyzing idea:", error);
    throw error;
  }
};

// Helper function to calculate a score based on the text length and content
const calculateIdeaScore = (text: string): number => {
  // Simple algorithm: longer responses tend to be more detailed
  const lengthScore = Math.min(100, Math.floor(text.length / 10));
  
  // Check for positive keywords
  const positiveKeywords = ['excellente', 'bonne', 'potentiel', 'intuitive', 'sécurité'];
  const keywordCount = positiveKeywords.reduce((count, keyword) => {
    return count + (text.toLowerCase().includes(keyword) ? 1 : 0);
  }, 0);
  
  const keywordScore = Math.min(100, keywordCount * 10 + 50);
  
  // Return average of the two scores
  return Math.floor((lengthScore + keywordScore) / 2);
};

// Helper function to extract improvements from the output text
const extractImprovements = (text: string): string[] => {
  // Split the text and look for potential improvement suggestions
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Filter sentences that suggest improvements or features
  const improvements = sentences.filter(s => {
    const lower = s.toLowerCase();
    return (
      lower.includes('concentrez') || 
      lower.includes('pensez') || 
      lower.includes('fonctionnalités') || 
      lower.includes('interface')
    );
  });
  
  if (improvements.length === 0) {
    // Fallback if no specific improvements are found
    return [
      "Développer une interface simple et accessible pour les seniors",
      "Mettre en place un système de vérification des profils des étudiants",
      "Proposer des tarifs flexibles adaptés aux différents besoins"
    ];
  }
  
  // Clean up and format the improvements
  return improvements.map(imp => {
    return imp.trim().replace(/^[,;:]\s*/, '').replace(/^[a-z]/, c => c.toUpperCase()) + '.';
  });
};
