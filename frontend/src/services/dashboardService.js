const API_URL = "http://localhost:8081/api/resumo";

/**
 * Busca os dados de resumo (dashboard) da API
 * @returns {Promise<object>} JSON com contadores
 */
export async function fetchResumoDashboard() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Erro ao buscar dados do dashboard");
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição do dashboard:", error);
    return {
      encomendasPendentes: 0,
      avisos: 0,
      moradores: 0
    };
  }
}
