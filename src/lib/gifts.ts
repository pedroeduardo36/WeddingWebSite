
import type { Gift } from "@/components/GiftCard";

export const allGifts: Gift[] = [
    {
    id: 1,
    name: "Passeio na Lua de Mel",
    goal: 1000,
    current: 0,
    description: "Ajude-nos a ter uma lua de mel inesquecível!",
    image: "https://fastly.picsum.photos/id/49/1280/792.jpg?hmac=NnUJy0O9-pXHLmY2loqVs2pJmgw9xzuixgYOk4ALCXU",
    imageHint: "honeymoon travel"
  },
  {
    id: 2,
    name: "Direito a primeira visita na casa",
    goal: 2000,
    current: 0,
    description: "Pague uma parcela do aluguel.",
    image: "https://plus.unsplash.com/premium_photo-1676321046262-4978a752fb15?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageHint: "modern apartment"
  },
  {
    id: 3,
    name: "Jantar Romântico",
    goal: 200,
    current: 0,
    description: "Um momento especial e uma experiência gastronômica para nós dois.",
    image: "data:image/jpeg;base64,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",
    imageHint: "romantic dinner"
  },
  {
    id: 4,
    name: "Base Báu Queen",
    goal: 969,
    current: 0,
    description: "Base para colchão queen",
    image: "https://cdn.iset.io/assets/73735/produtos/1056/c3a9c67f3f217351893295fa9a9560ec66c637693f121.png",
    imageHint: "Cama bau",
    storeUrl: "https://www.dfcolchoes.com.br/Base-Bau-Queen-Bipartida-1-Tampa-DF-Premium-Econ-36cm?sku=05422-CORINO-PRETA&gad_campaignid=19006258944&gbraid=0AAAAACtkcVDQxq1wLDYqEKSOXTW9nUH_S"
  },
  {
    id: 5,
    name: "Colchão Queen Ortobom",
    goal: 3399,
    current: 0,
    description: "Um terço da sua vida, você passa dormindo.",
    image: "https://cdn.ortobom.com.br/file/41ba5b4b-8ab3-43c0-9be6-b667bef6707e/liberty_2.png",
    imageHint: "orthopedic mattress",
    storeUrl: "https://www.ortobom.com.br/p/colchao/colchao-liberty/queen158"
  },
  {
    id: 6,
    name: "TV",
    goal: 1199,
    current: 1199,
    description: "Pro noivo ver o jogo do Palmeiras ou pros dias de campus online.",
    image: "https://www.lg.com/content/dam/channel/wcms/br/images/tv/55ur8750psa_bwz_essp_br_c/gallery/DZ-3.jpg",
    imageHint: "television screen"
  },
  {
    id: 7,
    name: "Bandeja Organizadara Home Style",
    goal: 99.99,
    current: 0,
    description: "Bandeja organizadora.",
    image: "https://img.camicado.com.br/item/101029398/zoom/1.jpg",
    imageHint: "kitchen appliance",
    storeUrl: "https://www.camicado.com.br/p/bandeja-organizadora-home-style-mediterranie-25-cm-x-14-cm/-/A-101029380-br.lc?sku=101029398"
  },
  {
    id: 8,
    name: "Porta sabonete Líquido",
    goal: 89.99,
    current: 0,
    description: "Home Style.",
    image: "https://img.camicado.com.br/item/100828657/zoom/1.jpg",
    imageHint: "laundry room",
    storeUrl: "https://www.camicado.com.br/p/porta-sabonete-liquido-home-style-mediterranie/-/A-100828649-br.lc?sku=100828657"
  },
  {
    id: 9,
    name: "Porta Escova de dente",
    goal: 59.99,
    current: 0,
    description: "Home Style.",
    image: "https://img.camicado.com.br/item/100828711/zoom/1.jpg",
    imageHint: "bedroom interio",
    storeUrl: "https://www.camicado.com.br/p/porta-escova-home-style-mediterranie/-/A-100828702-br.lc?sku=100828711"
  },
  {
    id: 10,
    name: "Porta cotonete e algodão",
    goal: 99.99,
    current: 0,
    description: "",
    image: "https://img.camicado.com.br/item/000000000000042674/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "porta cotonete e algodão",
    storeUrl: "https://www.camicado.com.br/p/porta-algodao-e-cotonete-home-style-beauty-15-cm-x-8-cm/-/A-300042674-br.lc?sku=000000000000042674"
  },
  {
      id: 11,
    name: "Lava e seca",
    goal: 3798,
    current: 0,
    description: "Lava e Seca para facilitar o dia a dia dos noivos",
    image: "https://imgs.ponto.com.br/55048505/1g.jpg?imwidth=500",
    imageHint: "washing machine",
    storeUrl: "https://www.casasbahia.com.br/lava-e-seca-samsung-wd11a-3-em-1-inox-look-com-ecobubble-e-lavagem-a-seco-wd11a4453bx-11-kg/p/55048506?IdSku=55048506&idLojista=10037&tipoLojista=1P&&gad_campaignid=22444217737&gbraid=0AAAAADtAamgUU6Ya-1K2DmFN3sJhiw4mP"
  },
  {
    id: 12,
    name: "Lava Louças Brastemp",
    goal: 2100,
    current: 2100,
    description: "Para os noivos não brigarem pela louça.",
    image: "https://brastemp.vtexassets.com/arquivos/ids/267500-300-300/01_Brastemp_Lava_loucas_BLF08BS_Imagem_Detalhe_BLF08BS_FRONTAL_4.jpg?v=638973414195430000",
    imageHint: "cooking lesson",
    storeUrl: "https://site.fastshop.com.br/lava-loucas-brastemp-cinza-metalico-com-08-servicos-e-05-programas-de-lavagem---blf08b-brblf08bsana_prd/p?idsku=2498&gad_campaignid=22746909051"
  },
  {
    id: 13,
    name: "Jogo de Pano de Prato",
    goal: 39.99,
    current: 0,
    description: "Home Style",
    image: "https://img.camicado.com.br/item/101270659/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "Pano de Prato",
    storeUrl: "https://www.camicado.com.br/p/jogo-de-pano-de-prato-home-style-drai/-/A-101128388-br.lc?sku=101270659"
  },
  {
    id: 14,
    name: "Almofadas",
    goal: 40,
    current: 0,
    description: "Mantendo a Sala sempre fofinha",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2IQOG_ov9Y8rVPPZRlPOrY1p2U04cDODGWQ&s",
    imageHint: "almofadas"
  },
  {
    id: 15,
    name: "Jogo de Cama",
    goal: 460,
    current: 460,
    description: "",
    image: "https://d1l2khdhnk6ii8.cloudfront.net/Custom/Content/Products/10/03/1003540_kit-alexandre-herchcovitch-5-pecas-edredom-jogo-de-cama-casal-branco_z1_637526300710111336.webp",
    imageHint: "bed sheets"
  },
  {
    id: 16,
    name: "Assadeira",
    goal: 139.99,
    current: 0,
    description: "Para fazer uma deliciosa lasanha no Domingo.",
    image: "https://img.camicado.com.br/item/100835427/medium/1.jpg",
    imageHint: "coffee machine",
    storeUrl: "https://www.camicado.com.br/p/assadeira-refrataria-home-style-neutre-35-cm-x-24-cm/-/A-100835419-br.lc?sku=100835427"
  },
  {
    id: 17,
    name: "Luva Térmica",
    goal: 29.90,
    current: 0,
    description: "Para preparar bolos e sobremesas deliciosas.",
    image: "https://imgmarketplace.lojasrenner.com.br/20000/3830/7010705803603/7510712560529/0.jpeg?ims=fit-in/x566",
    imageHint: "luva térmica",
    storeUrl:"https://www.camicado.com.br/p/kit-2-luvas-termicas-pegador-em-silicone-cinza/-/A-7010705803603-br.lc?sku=7510712560529"
  },
  {
    id: 18,
    name: "Escorredor de Massa",
    goal: 57.31,
    current: 0,
    description: "",
    image: "https://imgmarketplace.lojasrenner.com.br/20000/5594/7010704516840/7510709302175/0.jpeg?ims=fit-in/x566",
    imageHint: "escorredor de massa",
    storeUrl:"https://www.camicado.com.br/p/escorredor-de-alimentos-inteligente-massa-legumes-lavador-de-arroz-2l-plastico-plasvale-branco/-/A-7010704516840-br.lc?sku=7510709302175"
  },
  {
    id: 19,
    name: "Forma de gelo",
    goal: 29.99,
    current: 0,
    description: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl9K5bdZmkOAViweIU2pbbcfQE0tnPgXj4_zAfCTgF6y60yA",
    imageHint: "forma de gelo",
    storeUrl:"https://www.camicado.com.br/p/forma-de-gelo-home-style-cocinero-15-cubos/-/A-100880578-br.lc?sku=100880586"
  },
  {
    id: 20,
    name: "Jogo de Medidores",
    goal: 25.99,
    current: 0,
    description: "",
    image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSxTV7tcGEjO2T2BPqQXe9YF607vZsRujLja9PkzaoP3edJLQ",
    imageHint: "jogo de medidores",
    storeUrl: "https://www.camicado.com.br/p/jogo-de-medidores-home-style-cocinero/-/A-100463678-br.lc?sku=100463686"
  },
  {
    id: 21,
    name: "Ralador",
    goal: 59.99,
    current: 0,
    description: "",
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS8qV4L93UwNdkK06ILiQ-dePsSo3q3qZCt_9Ait4TIzhcGoA",
    imageHint: "ralador",
    storeUrl: "https://www.camicado.com.br/p/ralador-4-faces-home-style-utile/-/A-100898241-br.lc?sku=100898250"
  },
  {
    id: 22,
    name: "Galheteiro de Azeite",
    goal: 59.99,
    current: 0,
    description: "",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQidX0TkASXkvrqgb3RK0niYQ9g7DcpccNT5nwUIfJA40jrXQ",
    imageHint: "fechadura eletronica",
    storeUrl: "https://www.camicado.com.br/p/galheteiro-home-style-duo/-/A-101182430-br.lc?sku=101182448"
  },
  {
    id: 23,
    name: "Escumadeira",
    goal: 29.99,
    current: 0,
    description: "",
    image: "https://img.camicado.com.br/item/000000000000045414/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "escumadeira",
    storeUrl:"https://www.camicado.com.br/p/escumadeira-home-style-cocinero-pro/-/A-100715100-br.lc?sku=000000000000045414"
  },
  {
    id: 24,
    name: "Concha",
    goal: 29.99,
    current: 0,
    description: "",
    image: "https://img.camicado.com.br/item/000000000000045408/zoom/1.jpg?ims=fit-in/x566",
    imageHint: "concha",
    storeUrl: "https://www.camicado.com.br/p/concha-home-style-cocinero-31-cm/-/A-300045408-br.lc?sku=000000000000045408"
  },
  {
    id: 25,
    name: "Cortador de Pizza",
    goal: 35.36,
    current: 0,
    description: " ",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGPXknvCltSdvxEndV9GTLFeIyeoLfJfjOcHWIqlsTbZuXQ",
    imageHint: "cortador de pizzau",
    storeUrl: "https://www.camicado.com.br/p/cortador-para-pizza-tramontina-verano-com-lamina-de-aco-inox-e-cabo-de-polipropileno-onix-tramontina/-/A-701451937-br.lc?sku=754539558"
  },
  {
    id: 26,
    name: "Espátula de Bolo",
    goal: 26.22,
    current: 0,
    description: " ",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrDhpz6on9nFChmWE_zWb4KpiqozFNfysmUBOiR2zJfYtIIg",
    imageHint: "espátula para bolo",
    storeUrl: "https://www.camicado.com.br/p/pa-para-cortar-bolo-espatula-cortador-de-fatia-pizza-inox-ta/-/A-7010704510019-br.lc?sku=7510709290439"
  },
  {
    id: 27,
    name: "Câmera Fotográfica",
    goal: 3200,
    current: 0,
    description: "Para registrar nossos melhores momentos e viagens.",
    image: "https://picsum.photos/seed/camera/600/400",
    imageHint: "vintage camera"
  },
  {
    id: 28,
    name: "Toca-discos de Vinil",
    goal: 1200,
    current: 0,
    description: "Para curtir nossa coleção de vinis com estilo.",
    image: "https://picsum.photos/seed/turntable/600/400",
    imageHint: "record player"
  },
  {
    id: 29,
    name: "Decoração da Sala",
    goal: 2000,
    current: 0,
    description: "Quadros, almofadas e mantas para um lar aconchegante.",
    image: "https://picsum.photos/seed/decoration/600/400",
    imageHint: "home decor"
  },
  {
    id: 30,
    name: "Assinatura de Vinhos",
    goal: 1000,
    current: 0,
    description: "Para receber e degustar novos vinhos todo mês.",
    image: "https://picsum.photos/seed/winesubscription/600/400",
    imageHint: "wine tasting"
  },
  {
    id: 31,
    name: "Piquenique Romântico",
    goal: 500,
    current: 0,
    description: "Uma cesta completa para um piquenique a dois.",
    image: "https://picsum.photos/seed/picnic/600/400",
    imageHint: "romantic picnic"
  },
  {
    id: 32,
    name: "Hospedagem na Lua de Mel",
    goal: 5000,
    current: 0,
    description: "Contribua para nossas diárias em um hotel especial.",
    image: "https://picsum.photos/seed/hotel/600/400",
    imageHint: "luxury hotel"
  },
  {
    id: 33,
    name: "Passagens Aéreas",
    goal: 8000,
    current: 0,
    description: "Ajude-nos a voar para nosso destino dos sonhos.",
    image: "https://picsum.photos/seed/airplane/600/400",
    imageHint: "airplane window"
  },
  {
    id: 34,
    name: "Aluguel de Carro",
    goal: 1500,
    current: 0,
    description: "Para explorarmos nosso destino com liberdade.",
    image: "https://picsum.photos/seed/carrental/600/400",
    imageHint: "driving road"
  },
  {
    id: 35,
    name: "Mergulho",
    goal: 1000,
    current: 0,
    description: "Uma experiência de mergulho para o casal.",
    image: "https://picsum.photos/seed/diving/600/400",
    imageHint: "scuba diving"
  },
  {
    id: 36,
    name: "Poltrona de Leitura",
    goal: 1200,
    current: 0,
    description: "Um cantinho de leitura confortável em nossa casa.",
    image: "https://picsum.photos/seed/armchair/600/400",
    imageHint: "reading chair"
  },
  {
    id: 37,
    name: "Luminária de Chão",
    goal: 600,
    current: 0,
    description: "Para criar um ambiente acolhedor na sala.",
    image: "https://picsum.photos/seed/floorlamp/600/400",
    imageHint: "floor lamp"
  },
  {
    id: 38,
    name: "Tapete para a Sala",
    goal: 1500,
    current: 0,
    description: "Um tapete novo para completar a decoração.",
    image: "https://picsum.photos/seed/rug/600/400",
    imageHint: "livingroom rug"
  },
  {
    id: 39,
    name: "Conjunto de Malas",
    goal: 900,
    current: 0,
    description: "Para nossas futuras viagens juntos.",
    image: "https://picsum.photos/seed/luggage/600/400",
    imageHint: "travel suitcase"
  },
  {
    id: 40,
    name: "Aparador de Livros",
    goal: 150,
    current: 0,
    description: "Um detalhe charmoso para nossa estante.",
    image: "https://picsum.photos/seed/bookends/600/400",
    imageHint: "books shelf"
  },
  {
    id: 41,
    name: "Aparelho de Jantar",
    goal: 1000,
    current: 0,
    description: "Para receber nossos convidados com elegância.",
    image: "https://picsum.photos/seed/dinnerset/600/400",
    imageHint: "dinnerware set"
  },
  {
    id: 42,
    name: "Liquidificador",
    goal: 300,
    current: 0,
    description: "Para sucos, vitaminas e receitas práticas.",
    image: "https://picsum.photos/seed/blender/600/400",
    imageHint: "kitchen blender"
  },
  {
    id: 43,
    name: "Ferro de Passar",
    goal: 250,
    current: 0,
    description: "Para manter nossas roupas sempre alinhadas.",
    image: "https://picsum.photos/seed/iron/600/400",
    imageHint: "clothing iron"
  },
  {
    id: 44,
    name: "Cristaleira",
    goal: 1800,
    current: 0,
    description: "Para organizar e exibir nossas taças e cristais.",
    image: "https://picsum.photos/seed/cabinet/600/400",
    imageHint: "display cabinet"
  },
  {
    id: 45,
    name: "Jogo de Facas",
    goal: 700,
    current: 0,
    description: "Facas de chef para aprimorar nossas habilidades.",
    image: "https://picsum.photos/seed/knifeset/600/400",
    imageHint: "kitchen knives"
  },
  {
    id: 46,
    name: "Kit de Ferramentas",
    goal: 500,
    current: 0,
    description: "Para pequenos reparos e projetos em casa.",
    image: "https://picsum.photos/seed/tools/600/400",
    imageHint: "tool kit"
  },
  {
    id: 47,
    name: "Cursos Online",
    goal: 800,
    current: 0,
    description: "Para aprendermos algo novo juntos.",
    image: "https://picsum.photos/seed/onlinecourse/600/400",
    imageHint: "online learning"
  },
  {
    id: 48,
    name: "Doação para Caridade",
    goal: 1000,
    current: 0,
    description: "Contribua com uma causa que apoiamos.",
    image: "https://picsum.photos/seed/charity/600/400",
    imageHint: "charity donation"
  },
  {
    id: 49,
    name: "Paisagismo do Jardim",
    goal: 2500,
    current: 0,
    description: "Para criar um jardim lindo em nosso lar.",
    image: "https://picsum.photos/seed/gardening/600/400",
    imageHint: "home garden"
  },
  {
    id: 50,
    name: "Cortinas Novas",
    goal: 1200,
    current: 0,
    description: "Para dar mais privacidade e aconchego.",
    image: "https://picsum.photos/seed/curtains/600/400",
    imageHint: "window curtains"
  }
    ];