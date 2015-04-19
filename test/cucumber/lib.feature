Feature: Tela de login
  Essa funcionalidade consiste em fazer login no sistema

  Scenario: fazer login github
    Given Eu estiver na tela de login do siteam e clicar para fazer login no GitHub
    Then Devo ser levado para tela de login do GitHub
    Given Eu fizer login no GitHub
    Then Devo ser levado para a tela de Home do Sistema
