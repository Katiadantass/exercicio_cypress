const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // Configuração do relatório
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio', // define a pasta onde o relatório será salvo
    overwrite: true, // sobrescreve relatórios antigos
    html: true, // gera relatório em HTML
    json: false, // não gera arquivo JSON
    timestamp: 'ddmmyyyy_HHMMss' // define formato de data e hora no nome do arquivo
  },

  e2e: {
    setupNodeEvents(on, config) {
      // Aqui podem ser implementados listeners de eventos do Cypress
      // (não é necessário para este exercício)
    },
  },
});
