Logos das lojas que confiam no ByeAuto (seção "Clientes" da landing page).

Como adicionar / atualizar um logo:

1. Coloque o arquivo do logo nesta pasta (/public/clientes).
   - Formato recomendado: PNG com fundo transparente OU SVG.
   - Boa resolução (altura ~96px+); o site reduz e padroniza o tamanho.

2. O logo da Montana Automóveis é esperado em:
       /public/clientes/montana.png
   Basta salvar o arquivo com esse nome aqui que ele aparece automaticamente,
   sem precisar mexer no código. Enquanto o arquivo não existir, a seção mostra
   o nome da loja como texto (fallback elegante).

3. Para incluir novas lojas no futuro, adicione o arquivo aqui e registre a loja
   na lista `clients` em src/components/sections/Clients.tsx
   (ex.: { name: "Nome da Loja", logo: "/clientes/nome.png" }).
