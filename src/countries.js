import L from 'leaflet';

// Icônes personnalisées Attention/Danger 
export const attentionIcon = L.icon({
  iconUrl: 'attention.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'attention-marker-icon'
});
export const dangerIcon = L.icon({
  iconUrl: 'danger.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  className: 'danger-marker-icon'
});

// Fonction pour obtenir la catégorie d'un pays
export function getCountryCategory(code) {
  if (['AUS','BEL', 'CAN', 'DNK', 'EST', 'FIN', 'GRC', 'HUN', 'IDN', 'ITA', 'LKA', 'LTU', 'LVA', 'MYS', 'NLD', 'PRT', 'SVN', 'TUN', 'USA'].includes(code))
    return { color: 'orange', icon: attentionIcon };
  if (['ARG', 'BRA', 'KHM', 'CHL', 'COL', 'MUS', 'IND', 'JPN', 'LAO', 'QAT', 'SGP', 'THA'].includes(code))
    return { color: 'red', icon: dangerIcon };
  return { color: 'green', icon: null };
}

// Fonction pour faire apparaître l'icone sur la capitale de chaque pays 

export const countryIcons = {
    CAN:[45.4215,-75.6972], CHN:[39.9042,116.4074], KOR:[37.5665,126.9780],
    GRC:[37.9838,23.7275], IDN:[-6.2088,106.8456], ITA:[41.9028,12.4964],
    MYS:[3.1390,101.6869], PRT:[38.7169,-9.1399], TUN:[36.8065,10.1815],
    USA:[38.9072,-77.0369], AUS:[-35.2809,149.1300], ARG:[-34.6037,-58.3816],
    BRA:[-15.7801,-47.9292], KHM:[11.5564,104.9282], CHL:[-33.4489,-70.6693],
    COL:[4.7110,-74.0721], FIN:[60.1695,24.9354], MUS:[-20.1654,57.4896],
    IND:[28.6139,77.2090], JPN:[35.6895,139.6917], LAO:[17.9757,102.6331],
    NLD:[52.3676,4.9041], QAT:[25.2769,51.5200], SGP:[1.3521,103.8198],
    LKA:[6.9271,79.8612], THA:[13.7563,100.5018], NZL:[-41.2865,174.7762],
    GLP:[16.2650,-61.5500], MAR:[33.5731,-7.5898], MTQ:[14.6415,-61.0242],
    BEL:[50.8503, 4.3517], DNK: [55.6761, 12.5683], DZA : [36.7525, 3.04197],
    LVA: [56.9496, 24.1052], SVN: [46.0569, 14.5058], HUN: [47.4979, 19.0402], 
    LTU: [54.6872, 25.2797], EST: [59.4370, 24.7536],  
    
  };
  
  // Fonction pour obtenir le code ISO 2 à partir du code ISO 3 (je sais plus à quoi ça sert mais c'est important sinon ça casse tout)
  
      export const iso3to2 = {
        CAN:'ca', CHN:'cn', KOR:'kr', GRC:'gr', IDN:'id', ITA:'it', MYS:'my', 
        PRT:'pt', TUN:'tn', USA:'us', AUS:'au', ARG:'ar', BRA:'br', KHM:'kh', 
        CHL:'cl', COL:'co', FIN:'fi', LVA:'lv', MUS:'mu', IND:'in', JPN:'jp', LAO:'la', 
        NLD:'nl', QAT:'qa', SGP:'sg', LKA:'lk', THA:'th', NZL:'nz', GLP:'gp', 
        MAR:'ma', MTQ:'mq', ESP:'es', GBR:'gb', BEL:'be', DNK:'dk', DZA:'dz', SVN:'sv', HUN:'hu', LTU:'lt', EST:'ee',
      };

      // Messages d'information pour chaque pays (petits tooltips)
  
      export const countryMessages = {
    ARG: "<h3>Argentine</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"ARG\">Plus d'info</a>",
    AUS: "<h3>Australie</h3> <ul><li>Peu de vapeshops</li><li>Aucun produit de la vape en vente libre, ordonnance médicale nécessaire</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"AUS\">Plus d'info</a>",
    BEL: "<h3>Belgique</h3><ul><li>Les e-liquides sont taxés</li><li>Les puffs sont interdites</li><li>Emportez votre matériel avec vous.</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"BEL\">Plus d'info</a>",
    BRA: "<h3>Brésil</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"BRA\">Plus d'info</a>",
    CAN: "<h3>Canada</h3> <ul><li>La loi dépend des États. Renseignez-vous auprès des autorités de l'endroit où vous vous rendez.</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"CAN\">Plus d'info</a>",
    CHL: "<h3>Chili</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"CHL\">Plus d'info</a>",
    CHN: "<h3>Chine</h3> <ul><li>La vente en ligne des produits de la vape est interdite</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"CHN\">Plus d'info</a>",
    COL: "<h3>Colombie</h3> <ul><li>La vente des produits de la vape est interdite</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"COL\">Plus d'info</a>",
    DNK: "<h3>Danemark</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"DNK\">Plus d'info</a>",
    EST: "<h3>Estonie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"EST\">Plus d'info</a>",      
    FIN: "<h3>Finlande</h3> <ul><li>La grande majorité des arômes sont interdits dans les e-liquides.</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"FIN\">Plus d'info</a>",
    GRC: "<h3>Grèce</h3> <ul><li>Taxation des e-liquides</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"GRC\">Plus d'info</a>",
    HUN: "<h3>Hongrie</h3> <ul><li><b>TOUS</b> les arômes sont interdits dans les e-liquides. Les vapoteurs ne sont autorisés qu'à vapoter une base neutre composée de PG, de VG, et éventuellement de nicotine</li><li>Apportez votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"HUN\">Plus d'info</a>",
    IDN: "<h3>Indonésie</h3> <ul><li>Les vape shops se trouvent principalement à Bali</li><li>Les e-liquides sont fortement taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"IDN\">Plus d'info</a>",
    IND: "<h3>Inde</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Législation peu claire sur l'utilisation du vaporisateur personnel</li><li>Nous vous déconseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"IND\">Plus d'info</a>",
    ITA: "<h3>Italie</h3> <ul><li>Les e-liquides sont taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"ITA\">Plus d'info</a>",
    JPN: "<h3>Japon</h3> <ul><li>La nicotine est classifiée comme un médicament</li><li>Il est nécessaire d'obtenir une autorisation pour apporter vos e-liquides nicotinés</li><li>Nous vous conseillons de vous renseigner auprès des autorités locales</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"JPN\">Plus d'info</a>",
    KHM: "<h3>Cambodge</h3> <ul><li>Produits de la vape interdits</li><li>Nous vous déconseillons de vous rendre au Cambodge avec votre matériel</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"KHM\">Plus d'info</a>",
    LAO: "<h3>Laos</h3> <ul><li>Tous les produits de la vape sont interdits</li><li>Nous vous déconseillons de vous rendre au Laos avec votre matériel</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"LAO\">Plus d'info</a>",
    LTU: "<h3>Lituanie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"LTU\">Plus d'info</a>", 
    LVA: "<h3>Lettonie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"LVA\">Plus d'info</a>",
    LKA: "<h3>Sri Lanka</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"LKA\">Plus d'info</a>",
    MYS: "<h3>Malaisie</h3> <ul><li>Forte taxation des e-liquides</li><li>Vente des e-liquides nicotinés réservée aux pharmacies agréées</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"MYS\">Plus d'info</a>",
    MUS: "<h3>Île Maurice</h3> <ul><li>Commerce des produits de la vape interdit</li><li>Possibilité de rencontrer des problèmes à l'aéroport en cas de possession de produits de la vape</li><li>À vos risques et périls</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"MUS\">Plus d'info</a>",
    NLD: "<h3>Pays-Bas</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Les puffs sont interdites</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"NLD\">Plus d'info</a>",
    PRT: "<h3>Portugal</h3> <ul><li>Les e-liquides sont taxés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"PRT\">Plus d'info</a>",
    QAT: "<h3>Qatar</h3> <ul><li>Le vapotage est interdit</li><li>Nous vous déconseillons de vous rendre au Qatar avec votre matériel</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"QAT\">Plus d'info</a>",
    SGP: "<h3>Singapour</h3> <ul><li>Le vapotage est considéré comme un délit</li><li>Nous vous déconseillons <b>fortement</b> d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"SGP\">Plus d'info</a>",
    SVN: "<h3>Slovénie</h3> <ul><li>Les arômes sont interdits dans les e-liquides</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"SVN\">Plus d'info</a>", 
    THA: "<h3>Thaïlande</h3> <ul><li>La Thaïlande est l'un des pays les plus restrictifs au monde en matière de vapotage</li><li>Nous vous déconseillons <b>vivement</b> d'y apporter votre matériel</li><li>Certains touristes ont déjà été emprisonnés pour possession de produits de la vape</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"THA\">Plus d'info</a>",
    TUN: "<h3>Tunisie</h3> <ul><li>Très peu d'e-liquides autorisés</li><li>Nous vous conseillons d'apporter votre matériel avec vous</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"TUN\">Plus d'info</a>",
    USA: "<h3>USA</h3> <ul><li>La législation varie fortement d'un État à l'autre</li><li>Renseignez-vous auprès des autorités</li></ul> <a href=\"#\" class=\"more-info\" data-code=\"USA\">Plus d'info</a>"
  };
  
  // Messages d'information pour chaque pays (fullscreen tooltips)
  
  export const detailedInfo = {
    ARG: `
      <h1>Législation sur le vapotage en Argentine (2025)</h1>
      <img src="images-pays/arg.jpg" loading="lazy" alt="Argentine" />
      <p>
        En Argentine, la législation interdit :
      </p>
      <ul>
        <li>
          <p>🚫
            <strong>La fabrication, l'importation, la vente et la distribution de cigarettes électroniques et de dispositifs de vapotage,</strong> conformément à la disposition <strong>ANMAT n° 3226/2011</strong>.
          </p>
        </li>
        <li>
          <p>📢
            <strong>La publicité et la promotion de ces produits.</strong>
          </p>
        </li>
      </ul>
      <p>
        Bien que l'usage personnel ne soit pas explicitement interdit, l'achat et l'approvisionnement en matériel sont difficiles en raison de l'absence de marché légal. Les voyageurs peuvent apporter leur propre équipement pour usage personnel, mais doivent faire preuve de discrétion, notamment dans les lieux publics où des interdictions locales peuvent s'appliquer.
      </p>
      <p>
        Des initiatives législatives visant à réguler et taxer les produits de vapotage ont été proposées, notamment dans le cadre de la <strong>loi "Omnibus"</strong> présentée en 2024. Cependant, ces propositions n'ont pas encore abouti à une réglementation officielle.
      </p>
      <p>
        Les contrevenants aux interdictions de vente et de distribution s'exposent à des sanctions administratives, telles que des amendes et la confiscation des produits.
      </p>
      <p>
        <strong>Sources :</strong>
        <a href="https://ecigintelligence.com/argentina-e-cigarette-tax-proposal-gives-local-industry-hope-for-vaping-regulation/" target="_blank">ECigIntelligence</a>,
        <a href="#argentine">Source</a>
      </p>
    `,

    AUS: `
  <h2>
  Législation sur le vapotage en Australie (2025)
</h2>
<img src="images-pays/aus.jpg" loading="lazy" alt="Australie" />
<p>
  Depuis le 1er juillet 2024, la vente de tous les produits de vapotage, y compris ceux sans nicotine, est restreinte aux pharmacies. Les produits doivent répondre à des normes strictes et ne sont disponibles que pour les adultes de 18 ans et plus, sous certaines conditions.
</p>

<ul>
  <li>
    <p>🚚
      <strong>Importation :</strong> Depuis le 1er mars 2024, l'importation de dispositifs de vapotage, accessoires et substances nécessite une licence et un permis délivrés par l'Office of Drug Control. Les voyageurs peuvent apporter jusqu'à 2 dispositifs, 20 accessoires et 200 mL de liquide, uniquement pour usage personnel.
    </p>
  </li>
  <li>
    <p>🏪
      <strong>Vente au détail :</strong> La vente de produits de vapotage est interdite en dehors des pharmacies. Les détaillants tels que les magasins de proximité, boutiques de vapotage et buralistes ne peuvent pas vendre ces produits, même avec une ordonnance.
    </p>
  </li>
  <li>
    <p>📢
      <strong>Publicité :</strong> Toute forme de publicité, promotion ou parrainage des produits de vapotage est interdite.
    </p>
  </li>
  <li>
    <p>⚖️
      <strong>Sanctions :</strong> Les infractions peuvent entraîner des amendes allant jusqu'à 161 300 AUD pour les entreprises et 32 260 AUD pour les individus. Des peines d'emprisonnement peuvent également s'appliquer en cas de récidive ou de violations graves.
    </p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'accès des jeunes aux produits de vapotage et à contrôler le marché noir en expansion
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tga.gov.au/products/unapproved-therapeutic-goods/vaping-hub/changes-regulation-vapes" target="_blank">TGA - Changes to the regulation of vapes</a>,
  <a href="https://www.odc.gov.au/importers/importing-vaping-goods-australia" target="_blank">ODC - Importing vaping goods into Australia</a>,
  <a href="#australie">Source</a>
</p>

  `,
  
  BEL: `
    
      <h2>
  Législation sur le vapotage en Belgique (2025)
</h2>
<img src="images-pays/bel.jpg" loading="lazy" alt="Belgique" />
<p>
  La Belgique a renforcé sa réglementation sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes, et de réduire l'impact environnemental des dispositifs jetables.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des cigarettes électroniques jetables :</strong> Depuis le 1er janvier 2025, la vente de puffs est interdite sur l'ensemble du territoire belge, faisant de la Belgique le premier pays de l'UE à adopter une telle mesure. Cette décision vise à limiter l'accès des jeunes à ces produits attractifs et à réduire les déchets électroniques.</p>
  </li>
  <li>
    <p>🚪 <strong>Interdiction d'exposition en point de vente :</strong> À partir du 1er avril 2025, tous les produits du tabac et de vapotage doivent être retirés des étals des magasins. Ils ne peuvent plus être visibles pour les clients, quelle que soit la taille ou le type de commerce. Seules des listes standardisées mentionnant les marques et les prix peuvent être consultées sur demande.</p>
  </li>
  <li>
    <p>🏷️ <strong>Restrictions supplémentaires :</strong> La vente de produits de vapotage est interdite dans les points de vente temporaires (festivals, marchés, etc.). De plus, les dispositifs de vapotage ne doivent pas comporter de fonctionnalités attractives pour les jeunes, telles que des lumières LED ou des designs ludiques.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation des e-liquides :</strong> Depuis le 1er janvier 2024, une taxe d'accise de 0,15 € par millilitre s'applique à tous les e-liquides, avec ou sans nicotine. Tous les produits doivent porter une marque fiscale attestant du paiement de cette taxe.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du plan national de lutte contre le tabac, lancé en 2022, qui vise à atteindre une génération sans tabac d'ici 2032. Les contrevenants s'exposent à des sanctions pouvant aller de 208 € à 8 000 € d'amende, voire à des peines de prison en cas de récidive.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.health.belgium.be/fr/news/extension-de-linterdiction-de-fumer-et-modifications-legislatives-concernant-les-produits-de" target="_blank">SPF Santé publique</a>,
  <a href="https://www.theguardian.com/world/2025/jan/01/belgium-becomes-first-eu-country-to-ban-sale-of-disposable-vapes" target="_blank">The Guardian</a>,
  <a href="https://www.generationsanstabac.org/en/actualites/belgique-interdiction-des-etals-pour-les-produits-du-tabac-et-du-vapotage-en-2025/" target="_blank">Génération Sans Tabac</a>,
  <a href="#belgique">Source</a>
</p>


  `,
  
  BRA: `
    
    <h2>
  Législation sur le vapotage au Brésil (2025)
</h2>
<img src="images-pays/bra.jpg" loading="lazy" alt="Brésil" />
<p>
  Au Brésil, la législation interdit :
</p>

<ul>
  <li>
    <p>🚫 La fabrication, l’importation, la vente et la distribution de cigarettes électroniques et de tous dispositifs de vapotage.</p>
  </li>
  <li>
    <p>📦 Le transport, le stockage et la publicité de ces produits.</p>
  </li>
  <li>
    <p>✈️ Leur entrée sur le territoire, même dans les bagages personnels.</p>
  </li>
</ul>

<p>
  Cette interdiction est fixée par la résolution <strong>RDC n° 855</strong> de l’Anvisa (2024).
</p>

<p>
  L’usage personnel n’est pas explicitement interdit par la loi, mais l’interdiction de transport et de stockage rend leur possession risquée au regard des contrôles.
</p>

<p>
  Les contrevenants s’exposent à des sanctions administratives : amendes, saisies, destruction des produits et suspension d’activités commerciales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.gov.br/anvisa/pt-br/assuntos/noticias-anvisa/2024/anvisa-mantem-proibicao-de-cigarros-eletronicos" target="_blank">Anvisa</a>,
  <a href="https://gsthr.org/countries/profile/bra/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://www.reuters.com/world/americas/brazil-health-regulator-maintains-ban-e-cigarettes-2024-04-19/" target="_blank">Reuters</a>,
  <a href="#bresil">Source</a>
</p>



  `,
  
  
  CAN: `
    
      <h2>
  Législation sur le vapotage au Canada (2025)
</h2>
<img src="images-pays/can.jpg" loading="lazy" alt="Canada" />
<p>
  Au Canada, la réglementation sur le vapotage est encadrée par la <strong>Loi sur le tabac et les produits de vapotage (LTPV)</strong>, avec des mesures renforcées en 2024 et 2025 pour limiter l'accès des jeunes et encadrer la commercialisation.
</p>

<ul>
  <li>
    <p>🍂 <strong>Restrictions sur les arômes :</strong> Seules les saveurs de tabac, menthe ou menthol sont autorisées. Les sucres, édulcorants et la plupart des arômes sont interdits, sauf ceux spécifiquement prévus pour ces saveurs.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> Des vérifications renforcées de l'âge et de l'identité sont obligatoires lors des ventes à distance pour limiter l'accès des jeunes.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation :</strong> Une taxe d'accise fédérale s'applique selon le volume. Par exemple, au Yukon en 2025 : 2,24 $ pour les deux premiers ml, puis 2,24 $ par tranche de 10 ml supplémentaires.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et emballage :</strong> Publicité restreinte, emballages neutres, avertissements sanitaires obligatoires, sauf pour les produits approuvés comme aide au sevrage tabagique.</p>
  </li>
</ul>

<p>
  Attention : certaines provinces ou territoires appliquent des règles plus strictes (interdictions d'arômes, restrictions sur les points de vente). Il est recommandé de se renseigner localement avant tout achat ou voyage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.canada.ca/fr/sante-canada/organisation/a-propos-sante-canada/legislation-lignes-directrices/lois-reglements/plan-reglementaire-prospectif/plan.html" target="_blank">Santé Canada</a>,
  <a href="https://www.canada.ca/fr/sante-publique/nouvelles/2025/01/declaration-du-conseil-des-medecins-hygienistes-en-chef-sur-le-vapotage-de-nicotine-au-canada-dans-le-cadre-de-la-semaine-nationale-sans-fumee.html" target="_blank">Santé publique Canada</a>,
  <a href="https://yukon.ca/fr/nouvelles/nouvel-accord-de-taxation-sur-les-produits-de-vapotage-prendra-effet-le-1er-janvier-2025" target="_blank">Gouvernement du Yukon</a>,
  <a href="#canada">Source</a>
</p>


  `,
  
  CHL: `
      <h2>
        Législation sur le vapotage au Chili (2025)
      </h2>
      <img src="images-pays/chl.jpg" loading="lazy" alt="Chili" class="mb-4" />
      <p>
        Depuis le 4 janvier 2024, le Chili a promulgué la <strong>Ley N° 21.642</strong>, qui établit un cadre réglementaire strict pour les dispositifs de vapotage, qu'ils contiennent ou non de la nicotine. Cette loi assimile les systèmes électroniques de distribution de nicotine (SEAN) et sans nicotine (SESN) aux produits du tabac, les soumettant ainsi à des restrictions similaires.
      </p>

      <ul>
        <li>
          
          <p> 🔞
            <strong>Interdiction de vente aux mineurs :</strong> La vente, la distribution et la promotion de ces produits sont interdites aux personnes de moins de 18 ans, y compris les accessoires et les liquides de recharge.
          </p>
        </li>
        <li>
          
          <p>📢
            <strong>Publicité et promotion :</strong> Toute forme de publicité, directe ou indirecte, est restreinte. Les informations autorisées doivent se limiter aux caractéristiques générales des produits, notamment pour les SESN à usage thérapeutique.
          </p>
        </li>
        <li>
          
          <p>🚭
            <strong>Utilisation dans les lieux publics :</strong> L'usage de ces dispositifs est interdit dans les mêmes lieux que ceux où le tabac est proscrit, tels que les espaces publics fermés, les transports en commun et les établissements de santé, sauf exceptions médicales avec prescription.
          </p>
        </li>
        <li>
          
          <p>📦
            <strong>Étiquetage et emballage :</strong> Les produits doivent comporter des avertissements sanitaires sur les effets nocifs de leur consommation ou de l'exposition aux aérosols générés. Les emballages doivent également inclure des informations détaillées sur le fabricant, les ingrédients, la concentration en nicotine (maximum autorisé de 45 mg/ml) et les instructions d'utilisation.
          </p>
        </li>
        <li>
          
          <p>🏭
            <strong>Obligations des fabricants :</strong> Les entreprises doivent informer annuellement le ministère de la Santé des détails concernant les composants, les additifs et les substances utilisées dans leurs produits. L'utilisation d'additifs interdits ou non déclarés est proscrite.
          </p>
        </li>
        <li>
          
          <p>⚖️
            <strong>Sanctions :</strong> Les infractions à cette loi sont passibles de sanctions administratives, notamment des amendes pouvant aller jusqu'à 1 000 UTM (Unités Tributaires Mensuelles), des saisies de produits et des suspensions d'activités commerciales.
          </p>
        </li>
      </ul>

      <p>
        <em>Cette législation vise à protéger la santé publique, en particulier celle des jeunes, en encadrant strictement la commercialisation et l'utilisation des produits de vapotage.</em>
      </p>

      <p>
        <strong>Sources :</strong>
        <a href="https://www.bcn.cl/leychile/Navegar?idNorma=1199790&idVersion=Diferido" target="_blank">Biblioteca del Congreso Nacional de Chile</a>,
        <a href="https://www.ispch.gob.cl/noticia/instituto-de-salud-publica-de-chile-isp-identifica-graves-danos-a-la-salud-de-las-personas-por-cigarrillos-electronicos-y-o-vapeadores/" target="_blank">Instituto de Salud Pública de Chile</a>,
        <a href="#chili">Source</a>
      </p>
    
  `,
  
  CHN: `
    <h2>
  Législation sur le vapotage en Chine (2025)
</h2>
<img src="images-pays/chn.jpg" loading="lazy" alt="Chine" />
<p>
  En Chine continentale, les cigarettes électroniques sont soumises à une réglementation stricte, alignée sur celle des produits du tabac traditionnels.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> Depuis le 1er octobre 2022, seuls les e-liquides au goût de tabac sont autorisés. Les arômes fruités, mentholés ou autres sont interdits.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> La vente de cigarettes électroniques sur Internet est interdite depuis 2019, tout comme leur publicité en ligne.</p>
  </li>
  <li>
    <p>🏛️ <strong>Réglementation :</strong> Depuis 2021, les cigarettes électroniques sont intégrées au système de monopole d'État sur le tabac, avec des exigences strictes en matière de fabrication, de distribution et de vente.</p>
  </li>
  <li>
    <p>💸 <strong>Taxation :</strong> Depuis octobre 2022, une taxe de consommation s'applique : 36 % au niveau de la production ou de l'importation, et 11 % au niveau de la distribution en gros.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation dans les lieux publics :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés, conformément aux réglementations locales, comme à Shanghai.</p>
  </li>
</ul>

<p>
  Les contrevenants s'exposent à des sanctions administratives, notamment des amendes, la confiscation des produits et la suspension des activités commerciales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://zh.wikipedia.org/wiki/電子煙" target="_blank">Wikipedia (chinois)</a>,
  <a href="#chine">Source</a>
</p>


  `,
  
  COL: `
    <h2>
  Législation sur le vapotage en Colombie (2025)
</h2>
<img src="images-pays/col.jpg" loading="lazy" alt="Colombie" />
<p>
  Depuis le 9 mai 2024, la <strong>Ley 2354</strong> est en vigueur en Colombie, établissant un cadre réglementaire strict pour les dispositifs de vapotage, qu'ils contiennent ou non de la nicotine. Cette loi étend les restrictions de la <strong>Ley Antitabaco (Ley 1335 de 2009)</strong> aux produits de vapotage, les assimilant aux produits du tabac traditionnels.
</p>

<ul>
  <li>
    <p>🔞 <strong>Interdiction de vente aux mineurs :</strong> La vente, la distribution et la promotion de ces produits sont interdites aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, directe ou indirecte, est restreinte. Les informations autorisées doivent se limiter aux caractéristiques générales des produits.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation dans les lieux publics :</strong> L'usage de ces dispositifs est interdit dans les mêmes lieux que ceux où le tabac est proscrit, tels que les espaces publics fermés, les transports en commun et les établissements de santé.</p>
  </li>
  <li>
    <p>📦 <strong>Étiquetage et emballage :</strong> Les produits doivent comporter des avertissements sanitaires sur les effets nocifs de leur consommation ou de l'exposition aux aérosols générés. Les emballages doivent également inclure des informations détaillées sur le fabricant, les ingrédients, la concentration en nicotine et les instructions d'utilisation.</p>
  </li>
  <li>
    <p>🏢 <strong>Obligations des fabricants :</strong> Les entreprises doivent informer annuellement le ministère de la Santé des détails concernant les composants, les additifs et les substances utilisées dans leurs produits. L'utilisation d'additifs interdits ou non déclarés est proscrite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les infractions à cette loi sont passibles de sanctions administratives, notamment des amendes pouvant aller jusqu'à 400 salaires mensuels légaux minimaux en vigueur (SMLMV), des saisies de produits et des suspensions d'activités commerciales.</p>
  </li>
</ul>

<p>
  Cette législation vise à protéger la santé publique, en particulier celle des jeunes, en encadrant strictement la commercialisation et l'utilisation des produits de vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=240576" target="_blank">Ley 2354 de 2024 - Función Pública</a>,
  <a href="https://www.elespectador.com/salud/queda-en-firme-ley-que-regula-uso-de-cigarrillos-electronicos-y-vapeadores-en-colombia/" target="_blank">El Espectador</a>,
  <a href="#colombie">Source</a>
</p>


  `,

    DNK: `
    <h2>
  Législation sur le vapotage au Danemark (2025)
</h2>
<img src="images-pays/dnk.jpg" loading="lazy" alt="Danemark" />
<p>
  Au Danemark, la vente et l'utilisation de cigarettes électroniques sont autorisées, mais strictement encadrées :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente est réservée aux personnes de 18 ans et plus.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> Seuls les arômes tabac et menthol sont autorisés. Les arômes sucrés ou fruités sont interdits, y compris sur les emballages.</p>
  </li>
  <li>
    <p>🍬 <strong>Puffs :</strong> Les cigarettes électroniques jetables (puffs) contenant des arômes sucrés ou un taux de nicotine élevé sont interdites à la vente, à l'importation et à la possession, sauf dans la limite de 10 unités pour usage personnel lors de voyages.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage est interdit dans les lieux où fumer est prohibé, tels que les écoles, transports publics et lieux de travail, sauf dans les zones spécifiquement désignées.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité ou de promotion des produits de vapotage est interdite, y compris en ligne et sur les points de vente, à l'exception des boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent être conditionnés dans des emballages neutres de couleur Pantone 448C, avec des avertissements sanitaires couvrant au moins 30 % des faces principales.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> Le taux maximal autorisé est de 20 mg/ml. Les réservoirs ne doivent pas dépasser 2 ml et les flacons de recharge 10 ml.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> Une taxe est appliquée sur les e-liquides contenant de la nicotine, calculée en fonction de leur concentration.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Depuis janvier 2025, les contrevenants s'exposent à des amendes renforcées, à la saisie des produits illégaux et, en cas de récidive, à la suspension temporaire du droit de vendre des produits de vapotage.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger les jeunes et à encadrer strictement l'usage des produits de vapotage au Danemark.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.sst.dk/da/viden/tobak-og-nikotin/roegfri-fremtid" target="_blank">Sundhedsstyrelsen – Røgfri Fremtid</a>,
  <a href="https://www.sik.dk/english/safety-regulations/e-cigarettes" target="_blank">Danish Safety Technology Authority – E-cigarettes regulations</a>,
  <a href="https://ecigator.com/guide/europe-vape-laws-tpd-national/" target="_blank">Ecigator</a>,
  <a href="#danemark">Source</a>
</p>


  `,

  EST: `

<h2>
  Législation sur le vapotage en Estonie (2025)
</h2>
<img src="images-pays/est.jpg" alt="Estonie" />
<p>
  L’Estonie encadre très strictement la cigarette électronique ; les dernières modifications majeures sont entrées en vigueur entre 2020 et 2025.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seuls les arômes tabac et menthol sont autorisés ; toutes les autres saveurs sont prohibées, y compris pour les puffs.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs ≤ 2 ml et flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> toute vente à distance, nationale ou transfrontalière, est interdite.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> promotion, sponsoring et exposition visible au public sont globalement interdits ; seules des informations neutres sont permises en boutique spécialisée.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est, sauf dans les fumoirs désignés.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissement sanitaire couvrant au moins 30 % des deux faces principales ; interdiction de visuels évoquant des saveurs ou des bénéfices sanitaires.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de 0,22 € par millilitre sur tous les e-liquides à compter du 1 janvier 2025.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes, confiscation des produits et suspension de licence en cas de récidive.</p>
  </li>
</ul>

<p>
  Ce cadre place l’Estonie parmi les pays européens les plus restrictifs, limitant sévèrement l’attractivité des produits de vapotage pour les jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.riigiteataja.ee/akt/107032023019" target="_blank">Riigi Teataja – Tubaka- ja tubakatoodete seadus</a>,
  <a href="https://www.emta.ee/ariklient/maksud-ja-tasumine/aktsiisid/tubakatooted" target="_blank">Maksu- ja Tolliamet – Barème d’accise 2025</a>,
  <a href="#estonie">Source</a>
</p>

  `,  

  FIN: `
    <h2>
  Législation sur le vapotage en Finlande (2025)
</h2>
<img src="images-pays/fin.jpg" loading="lazy" alt="Finlande" />
<p>
  La Finlande applique une réglementation stricte alignée sur la directive européenne (TPD), avec des restrictions nationales supplémentaires pour protéger la santé publique.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> Vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> Seuls les e-liquides goût tabac sont autorisés. Les arômes fruités, sucrés ou mentholés sont interdits, même sans nicotine.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute publicité, promotion ou parrainage est interdite, y compris en ligne. Les produits doivent être dissimulés en magasin, sauf dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>🚭 <strong>Usage en public :</strong> Interdit dans les mêmes lieux que le tabac (espaces publics fermés, transports, établissements accueillant des mineurs).</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Emballages neutres avec avertissements sanitaires couvrant au moins 32 % des faces principales.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Taxe d'accise de 0,30 € par millilitre sur tous les e-liquides, nicotinés ou non.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation personnelle :</strong> Limité à 10 ml de liquide nicotiné par voyageur. Importer des dispositifs ou composants depuis l'étranger est interdit.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l’attrait des produits, notamment chez les jeunes, et à encadrer strictement leur usage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://valvira.fi/en/tobacco/unit-packets-of-electronic-cigarettes" target="_blank">Valvira</a>,
  <a href="https://tulli.fi/en/restrictions/e-cigarettes/traveller-imports" target="_blank">Finnish Customs</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/finland/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="#finlande">Source</a>
</p>


  `,
  
  GRC: `
    <h2>
  Législation sur le vapotage en Grèce (2025)
</h2>
<img src="images-pays/grc.jpg" loading="lazy" alt="Grèce" />
<p>
  La Grèce applique une réglementation stricte sur les produits de vapotage, en conformité avec la directive européenne sur les produits du tabac (TPD), avec des mesures nationales supplémentaires :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🍃 <strong>Arômes :</strong> Un projet de loi est en cours d'élaboration pour interdire tous les arômes de cigarettes électroniques, à l'exception du tabac naturel et de la menthe, afin de limiter l'accès des jeunes à ces produits.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité, promotion ou parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés, les transports en commun et les établissements accueillant des mineurs.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent être conditionnés dans des emballages neutres avec des avertissements sanitaires couvrant au moins 32 % des faces principales.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Une taxe d'accise s'applique à tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation personnelle :</strong> Les voyageurs peuvent importer des produits de vapotage pour usage personnel, dans des limites raisonnables.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'attrait des produits de vapotage, en particulier chez les jeunes, et à encadrer strictement leur utilisation et leur commercialisation en Grèce.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://greekreporter.com/2025/04/23/greece-set-ban-teen-friendly-flavored-e-cigarettes/" target="_blank">Greek Reporter</a>,
  <a href="https://ecigator.com/guide/europe-vape-laws-tpd-national/" target="_blank">Ecigator</a>,
  <a href="#grece">Source</a>
</p>


  `,

  HUN: `

<h2>
  Législation sur le vapotage en Hongrie (2025)
</h2>
<img src="images-pays/hun.jpg" alt="Hongrie" />
<p>
  La Hongrie applique l’un des cadres les plus stricts de l’UE :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 18 ans pour l’achat, la détention et l’usage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> interdiction totale ; les e-liquides — avec ou sans nicotine — ne doivent contenir <em>aucun</em> additif aromatisant (tabac, menthol et saveurs neutres compris). Les puffs aromatisés sont donc illégaux.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; cartouches ≤ 2 ml et flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🏪 <strong>Canaux de vente :</strong> produits disponibles uniquement dans les « Nemzeti Dohánybolt » (buralistes agréés). La vente en ligne et l’importation non agréée sont interdites.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou de sponsoring est prohibée, y compris sur Internet et réseaux sociaux.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit dans tous les espaces où fumer est proscrit (lieux de travail, établissements scolaires, transports, restauration, etc.).</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant ≥ 30 % des deux faces principales ; liste complète des ingrédients sur l’étiquette.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise spécifique sur tous les e-liquides, quel que soit leur taux de nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> confiscation des produits non conformes et amendes pouvant dépasser 5 000 € en cas de récidive.</p>
  </li>
</ul>

<p>
  Ce dispositif, combiné à la vente exclusive en bureaux de tabac, vise à réduire fortement l’attractivité du vapotage — en particulier auprès des jeunes — et à aligner ces produits sur les restrictions applicables au tabac combustible.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://njt.hu/jogszabaly/2013-39-20-22" target="_blank">Nemzeti Jogszabálytár – Décret gouvernemental 39/2013</a>,
  <a href="https://njt.hu/jogszabaly/1999-42-00-00" target="_blank">Nemzeti Jogszabálytár – Loi XLII/1999 (protection des non-fumeurs)</a>,
  <a href="https://madosz.hu/news/view?id=13446" target="_blank">NAV – Communiqué sur l’interdiction des e-cigarettes aromatisées</a>,
  <a href="#hongrie">Source</a>
</p>

  `,  

  IND: `
   <h2>
  Législation sur le vapotage en Inde (2025)
</h2>
<img src="images-pays/ind.jpg" loading="lazy" alt="Inde" />
<p>
  Depuis le 18 septembre 2019, l'Inde interdit strictement tous les produits de vapotage, conformément à la loi <strong>Prohibition of Electronic Cigarettes Act, 2019</strong>.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdictions totales :</strong> La production, la fabrication, l'importation, l'exportation, le transport, la vente, la distribution, le stockage et la publicité des cigarettes électroniques et de leurs composants sont prohibés.</p>
  </li>
  <li>
    <p>🙅‍♂️ <strong>Usage personnel :</strong> L'achat, la possession ou l'utilisation de dispositifs de vapotage sont illégaux, y compris pour un usage personnel. Aucun cadre légal ne permet leur importation ou leur utilisation individuelle.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des peines pouvant aller jusqu'à 1 an de prison ou 100 000 roupies d'amende pour une première infraction, et jusqu'à 3 ans de prison ou 500 000 roupies d'amende en cas de récidive.</p>
  </li>
  <li>
    <p>🔒 <strong>Contrôles :</strong> Les autorités ont le pouvoir de saisir et de détruire les produits illégaux, même sans mandat, et des opérations de confiscation sont régulièrement menées.</p>
  </li>
</ul>

<p>
  Cette interdiction vise à protéger la santé publique, notamment celle des jeunes, face aux risques associés aux dispositifs de vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ntcp.mohfw.gov.in/assets/document/The-Prohibition-of-Electronic-Cigarettes-Production-Manufacture-Import-Export-Transport-Sale-Distribution-Storage-and-Advertisement%29-Act-2019.pdf" target="_blank">Loi officielle (PDF)</a>,
  <a href="https://www.indiatoday.in/india/story/banned-yet-booming-online-vape-sale-thrive-unabated-indiatodayt-osint-2698369-2025-03-24" target="_blank">India Today</a>,
  <a href="https://gsthr.org/countries/profile/ind/2/" target="_blank">GSTHR</a>,
  <a href="#inde">Source</a>
</p>


  `,
  
  IDN: `
    
      <h2>
  Législation sur le vapotage en Indonésie (2025)
</h2>
<img src="images-pays/idn.jpg" loading="lazy" alt="Indonésie" />
<p>
  Depuis la mise en œuvre du <strong>Règlement gouvernemental n° 28 de 2024</strong>, l'Indonésie a renforcé sa réglementation sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdictions totales :</strong> La production, la fabrication, l'importation, l'exportation, le transport, la vente, la distribution, le stockage et la publicité des cigarettes électroniques et de leurs composants sont prohibés.</p>
  </li>
  <li>
    <p>🛑 <strong>Restrictions de vente :</strong> La vente de produits de vapotage est interdite :
      <ul>
        <li>Dans les distributeurs automatiques.</li>
        <li>À moins de 200 mètres des établissements scolaires et des aires de jeux.</li>
        <li>Sur les plateformes en ligne et les réseaux sociaux sans vérification d'âge rigoureuse.</li>
      </ul>
    </p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité pour les produits de vapotage est interdite sur les réseaux sociaux. Les publicités en ligne doivent inclure des avertissements sanitaires clairs et ne doivent pas cibler les jeunes.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> Les produits doivent comporter des avertissements sanitaires couvrant 50 % de la surface de l'emballage, avec des images et des textes dissuasifs. L'emballage doit également indiquer clairement que le produit contient de la nicotine et est interdit aux moins de 21 ans et aux femmes enceintes.</p>
  </li>
  <li>
    <p>🔬 <strong>Normes de produit :</strong> Les e-liquides doivent être conditionnés en flacons de 10 ou 20 ml pour les systèmes ouverts, et les cartouches pour les systèmes fermés ne doivent pas dépasser 2 ml. Tous les produits doivent être testés pour leur teneur en nicotine et en substances interdites avant la mise sur le marché.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les infractions aux réglementations peuvent entraîner des amendes, le retrait des produits du marché et des sanctions administratives supplémentaires.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'attrait des produits de vapotage, en particulier chez les jeunes, et à encadrer strictement leur utilisation et leur commercialisation en Indonésie.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tilleke.com/insights/indonesia-imposes-stringent-requirements-on-electronic-cigarettes/" target="_blank">Tilleke & Gibbins</a>,
  <a href="https://www.reuters.com/world/asia-pacific/indonesia-raises-smoking-age-limit-will-curb-cigarette-advertising-2024-07-31/" target="_blank">Reuters</a>,
  <a href="https://www.vitalstrategies.org/indonesia-imposes-stricter-tobacco-controls-a-major-step-for-public-health/" target="_blank">Vital Strategies</a>,
  <a href="#indonesie">Source</a>
</p>


  `,
  
  ITA: `
    
      <h2>
  Législation sur le vapotage en Italie (2025)
</h2>
<img src="images-pays/ita.jpg" loading="lazy" alt="Italie" />
<p>
  En 2025, l'Italie a renforcé sa réglementation sur les produits de vapotage afin de mieux encadrer leur utilisation et de protéger la santé publique.
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> Depuis le 1er janvier 2025, la vente en ligne de produits de vapotage contenant de la nicotine est interdite, y compris via les entrepôts fiscaux.</p>
  </li>
  <li>
    <p>💰 <strong>Taxation :</strong>
      <ul>
        <li>Les e-liquides nicotinés sont soumis à une taxe de consommation augmentée à 16 % en 2025, avec une hausse prévue à 17 % en 2026.</li>
        <li>Les e-liquides sans nicotine et les arômes concentrés sont taxés à hauteur de 0,90 € par 10 ml en 2025, avec une augmentation à 1,00 € en 2026.</li>
      </ul>
    </p>
  </li>
  <li>
    <p>📑 <strong>Étiquetage fiscal :</strong> Depuis le 1er novembre 2024, tous les produits doivent porter une vignette fiscale attestant du paiement des taxes. La vente de produits sans cette vignette est illégale et passible de sanctions.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> Toute forme de publicité ou de promotion des produits de vapotage est interdite, y compris les remises commerciales et les affichages en magasin. Seules les informations techniques sur les produits sont autorisées.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques est interdit dans les lieux publics fermés tels que les hôpitaux, les établissements scolaires, les centres d'emploi et les transports en commun. Dans les restaurants, bars et commerces, l'autorisation de vapoter est à la discrétion du responsable de l'établissement.</p>
  </li>
  <li>
    <p>🚆 <strong>Transport :</strong> L'utilisation de la cigarette électronique est interdite dans les trains, les avions et les navires, sauf dans les zones fumeurs désignées. Il est recommandé de se renseigner auprès du personnel avant de vapoter.</p>
  </li>
  <li>
    <p>🚗 <strong>Conduite :</strong> Bien qu'il n'existe pas de législation spécifique sur le vapotage en voiture, il est interdit de fumer en présence de mineurs ou de femmes enceintes. Il est conseillé de faire preuve de prudence et de bon sens lors de l'utilisation de la cigarette électronique au volant.</p>
  </li>
</ul>

<p>
  Ces mesures visent à encadrer strictement l'utilisation des produits de vapotage et à limiter leur accessibilité, notamment chez les jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/news/italy-ecigarette-tax-online-ban/" target="_blank">Ecigator</a>,
  <a href="https://ecigator.com/guide/where-can-you-vape-in-italy/" target="_blank">Ecigator Guide</a>,
  <a href="https://ecigintelligence.com/italy-e-cigarette-regulation-april-2025/" target="_blank">ECigIntelligence</a>,
  <a href="#italie">Source</a>
</p>


  `,
  
  JPN: `
    
      <h2>
  Législation sur le vapotage au Japon (2025)
</h2>
<img src="images-pays/jpn.jpg" loading="lazy" alt="Japon" />
<p>
  Au Japon, la réglementation sur les produits de vapotage distingue strictement les produits contenant de la nicotine de ceux qui en sont dépourvus.
</p>

<ul>
  <li>
    <p>🚫 <strong>Vente de produits nicotinés :</strong> La vente de e-liquides contenant de la nicotine est interdite sur le territoire japonais, car la nicotine est classée comme substance pharmaceutique. Aucun produit de vapotage nicotiné n'a été approuvé à la vente à ce jour.</p>
  </li>
  <li>
    <p>📦 <strong>Importation pour usage personnel :</strong> Les particuliers peuvent importer jusqu'à 120 ml de e-liquide nicotiné par personne pour un usage personnel, ce qui correspond à environ un mois de consommation. Cette importation ne nécessite pas d'autorisation spéciale, à condition de ne pas dépasser cette limite. Au-delà, une demande de certificat d'importation de médicament (Yakkan Shoumei) est requise auprès du ministère de la Santé, du Travail et des Affaires sociales.</p>
  </li>
  <li>
    <p>🔢 <strong>Nombre d'appareils :</strong> Il est permis d'importer jusqu'à deux dispositifs de vapotage pour usage personnel.</p>
  </li>
  <li>
    <p>💧 <strong>Produits sans nicotine :</strong> Les e-liquides sans nicotine peuvent être achetés librement au Japon par les personnes âgées de 20 ans et plus, dans les boutiques spécialisées, les supérettes ou en ligne.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est soumis aux mêmes restrictions que le tabagisme. Il est interdit de vapoter dans les lieux publics en dehors des zones fumeurs désignées ("kitsuenjo"), que ce soit en intérieur ou en extérieur. Vapoter en marchant ou dans des zones non autorisées peut entraîner des amendes.</p>
  </li>
  <li>
    <p>🚆 <strong>Transports et hébergements :</strong> Le vapotage est interdit dans les transports en commun (trains, bus, avions), sauf dans les espaces fumeurs spécifiquement aménagés. Dans les hôtels, il est généralement permis de vapoter uniquement dans les chambres fumeurs.</p>
  </li>
</ul>

<p>
  Il est recommandé aux voyageurs de respecter scrupuleusement ces règles, de transporter leurs dispositifs de vapotage dans leur bagage à main et de se renseigner sur les zones fumeurs disponibles.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/guide/vape-laws-and-regulations-in-japan/" target="_blank">Ecigator</a>,
  <a href="https://gsthr.org/countries/profile/jpn/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://faq.japan-travel.jnto.go.jp/en/faq/articles/102086" target="_blank">Japan National Tourism Organization</a>,
  <a href="#japon">Source</a>
</p>


  `,

  KHM: `
    
      <h2>
  Législation sur le vapotage au Cambodge (2025)
</h2>
<img src="images-pays/khm.jpg" loading="lazy" alt="Cambodge" />
<p>
  Depuis 2014, le Cambodge interdit :
</p>

<ul>
  <li>
    
    <p>🚫
      La vente, l'importation et l'utilisation de cigarettes électroniques, de shishas et de produits de tabac chauffé.
    </p>
  </li>
</ul>

<p>
  Cette interdiction est établie par la circulaire n° 001/14 Sor.Nor.No.NACD émise par l'Autorité nationale de lutte contre la drogue.
</p>

<p>
  En mai 2025, le Premier ministre Hun Manet a réaffirmé cette position en rejetant toute proposition d'investissement liée aux e-cigarettes, même pour l'exportation, lors du lancement du Plan national de lutte contre le cancer 2025–2030.
</p>

<p>
  Bien que l'usage personnel ne soit pas explicitement criminalisé, les autorités confisquent systématiquement les dispositifs trouvés. Il est donc fortement déconseillé d'apporter ou d'utiliser du matériel de vape sur le territoire cambodgien.
</p>

<p>
  Les contrevenants peuvent faire l'objet de saisies, et les produits sont généralement détruits. Aucun cadre légal ne prévoit d'amendes ou de poursuites pénales à ce jour, mais les contrôles sont stricts et fréquents.
</p>

<p>
  Ces mesures visent à protéger la population, notamment les jeunes, des effets nocifs du vapotage et à prévenir une nouvelle vague d'addiction à la nicotine.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://nacdcambodia.gov.kh/article/11" target="_blank">Autorité nationale de lutte contre la drogue (NACD)</a>,
  <a href="https://www.khmertimeskh.com/501479087/hun-manet-rejects-e-cigarette-investment-amid-cancer-plan-launch/" target="_blank">Khmer Times</a>,
  <a href="https://gsthr.org/countries/profile/khm/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="#cambodge">Source</a>
</p>


  `,
  
  LAO: `
    
      <h2>
  Législation sur le vapotage au Laos (2025)
</h2>
<img src="images-pays/lao.jpg" loading="lazy" alt="Laos" />
<p>
  Le Laos applique une interdiction stricte des produits de vapotage, dans le cadre d'une politique de santé publique visant à réduire la consommation de nicotine, en particulier chez les jeunes.
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction de vente et d'utilisation :</strong> La vente, l'importation, la distribution et l'utilisation de cigarettes électroniques sont interdites sur l'ensemble du territoire, conformément à la Loi sur le contrôle du tabac et à ses décrets d'application.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>⚖️ <strong>Classification comme substance addictive :</strong> En 2023, le gouvernement a annoncé son intention d'inclure les cigarettes électroniques dans la liste des substances et précurseurs classés comme addictifs dans la législation sur la prévention et le contrôle des drogues, renforçant ainsi leur statut d'interdiction.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Les produits de vapotage sont interdits dans les lieux publics, les transports en commun, les établissements éducatifs et de santé, ainsi que dans les zones désignées sans fumée.</p>
  </li>
  <li>
    <p>⚠️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions administratives, telles que des amendes et la confiscation des produits. Les autorités appliquent strictement ces mesures, avec des saisies fréquentes de dispositifs illégaux.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger la population, notamment les jeunes, des effets nocifs du vapotage et à prévenir une nouvelle vague d'addiction à la nicotine.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://gsthr.org/countries/profile/lao/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://laotiantimes.com/2023/11/30/laos-to-ban-e-cigarettes-amid-growing-concerns/" target="_blank">Laotian Times</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/lao-pdr" target="_blank">Tobacco Control Laws</a>,
  <a href="#laos">Source</a>
</p>


  `,

  LKA: `
    
      <h2>
  Législation sur le vapotage au Sri Lanka (2025)
</h2>
<img src="images-pays/lka.jpg" loading="lazy" alt="Sri Lanka" />
<p>
  Le Sri Lanka applique une interdiction stricte des produits de vapotage, couvrant tous les aspects liés aux cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction complète :</strong> La <strong>Prohibited Tobacco Products Regulations n°1 de 2016</strong> interdit la fabrication, l'importation, la vente et la distribution de cigarettes électroniques, y compris celles contenant du tabac. Bien que la loi mentionne spécifiquement les e-cigarettes contenant du tabac, cette disposition est appliquée à toutes les e-cigarettes.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> L'utilisation des dispositifs de vapotage est également interdite. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes et des peines d'emprisonnement.</p>
  </li>
  <li>
    <p>🔍 <strong>Application stricte :</strong> Les autorités sri-lankaises mènent des contrôles réguliers pour détecter et confisquer les produits interdits. Les voyageurs sont tenus de respecter ces réglementations pour éviter des sanctions.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage au Sri Lanka. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tobaccocontrollaws.org/legislation/sri-lanka/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://ecigator.com/guide/can-you-vape-in-sri-lanka/" target="_blank">Ecigator</a>,
  <a href="https://travel-eat-love.de/en/sri-lanka/smoking-in-sri-lanka-what-is-allowed/" target="_blank">Travel Eat Love</a>,
  <a href="#sri-lanka">Source</a>
</p>


  `,

  LVA: `

<h2>
  Législation sur le vapotage en Lettonie (2025)
</h2>
<img src="images-pays/lva.jpg" alt="Lettonie" />
<p>
  Depuis le <strong>1<sup>er</sup> janvier 2025</strong>, la Lettonie applique un cadre parmi les plus stricts d’Europe :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 20 ans pour acheter ou posséder des produits de vapotage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seuls les arômes donnant goût ou odeur de tabac sont autorisés ; toutes les autres saveurs sont interdites, y compris pour les puffs jetables.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs limités à 2 ml et flacons de recharge à 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est (écoles, transports, lieux de travail, restaurants, etc.).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou d’exposition visible au public est prohibée, sauf information neutre dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant au moins 30 % des deux faces principales ; interdiction de visuels évoquant des saveurs ou des remises.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de 0,29 € par millilitre sur tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes pouvant atteindre 1 420 € pour les points de vente en cas d’infraction.</p>
  </li>
</ul>

<p>
  Ces mesures visent à limiter l’attractivité du vapotage chez les jeunes et à harmoniser la réglementation lettone avec les exigences les plus restrictives de l’Union européenne.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://likumi.lv/ta/id/282077" target="_blank">Likumi.lv – Loi sur la circulation des produits du tabac et des e-cigarettes</a>,
  <a href="https://www.fm.gov.lv/en/excise-duty-0" target="_blank">Ministère des Finances – Barème des accises 2025</a>,
  <a href="#lettonie">Source</a>
</p>

      
`,
  
  LTU: `

      <h2>
  Législation sur le vapotage en Lituanie (2025)
</h2>
<img src="images-pays/lva.jpg" alt="Lettonie" />
<p>
  Depuis le <strong>1<sup>er</sup> janvier 2025</strong>, la Lettonie applique un cadre très restrictif pour les cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> 18 ans pour acheter, posséder ou utiliser des produits de vapotage.</p>
  </li>
  <li>
    <p>🍂 <strong>Arômes :</strong> seules les saveurs donnant goût ou odeur de tabac sont autorisées ; toute autre saveur est interdite, y compris pour les puffs et les liquides sans nicotine.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> 20 mg/ml maximum ; réservoirs ≤ 2 ml ; flacons de recharge ≤ 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est interdit partout où fumer l’est (lieux de travail, transports, établissements scolaires, restauration…).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> promotion, parrainage et vente à distance de produits de vapotage sont totalement prohibés.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissement sanitaire couvrant ≥ 30 % des faces principales ; interdiction de visuels évoquant des saveurs.</p>
  </li>
  <li>
    <p>💶 <strong>Fiscalité :</strong> droit d’accise de <em>0,63 € par millilitre</em> sur tous les e-liquides, avec ou sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes administratives, saisie des produits et suspension de licence pour les détaillants récidivistes.</p>
  </li>
</ul>

<p>
  Ce dispositif place la Lituanie parmi les pays européens les plus stricts, en particulier grâce à l’interdiction générale des arômes et à une fiscalité élevée.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://e-seimas.lrs.lt/portal/legalAct/lt/TAD/956e3e82158311e9bd28d9a28a9e9ad9" target="_blank">Loi I-1143 – Contrôle du tabac et des produits connexes</a>,
  <a href="https://ntakd.lrv.lt/en/eu-ceg/electronic-cigarettes-and-their-refill-containers/" target="_blank">NTAKD – Interdiction des arômes (depuis le 1/07/2022)</a>,
  <a href="https://finmin.lrv.lt/en/competence-areas/taxation/main-taxes/excise-duties/" target="_blank">Ministère des Finances – Barème d’accise 2025</a>,
  <a href="#lituanie">Source</a>
</p>

`,


  MUS: `
    
     <h2>
  Législation sur le vapotage à l'Île Maurice (2025)
</h2>
<img src="images-pays/mus.jpg" loading="lazy" alt="Île Maurice" />
<p>
  Depuis l'entrée en vigueur des <strong>Public Health (Restrictions on Tobacco Products) Regulations 2022</strong>, l'Île Maurice applique une interdiction stricte des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> La fabrication, l'importation, la distribution, la vente et la publicité des cigarettes électroniques, e-liquides (avec ou sans nicotine) et accessoires sont interdites. Cette mesure vise à protéger la santé publique, notamment celle des jeunes, en limitant l'accès à ces produits.</p>
  </li>
  <li>
    <p>🙅‍♂️ <strong>Usage personnel :</strong> Bien que la loi ne précise pas explicitement l'interdiction de l'usage personnel, les autorités appliquent une tolérance zéro. Les voyageurs sont fortement déconseillés d'apporter des dispositifs de vapotage, même pour usage personnel, sous peine de confiscation ou d'amende.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions administratives, telles que des amendes, la confiscation des produits et, dans certains cas, des poursuites judiciaires. Les autorités douanières et policières appliquent strictement ces mesures.</p>
  </li>
  <li>
    <p>🔄 <strong>Alternatives :</strong> Pour les personnes souhaitant arrêter de fumer, des thérapies de remplacement de la nicotine, telles que les gommes ou les patchs, sont disponibles légalement à Maurice. Il est recommandé de se renseigner auprès des pharmacies locales pour plus d'informations.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du <strong>Plan national de lutte antitabac 2022-2026</strong>, qui vise à réduire la consommation de tabac et de produits associés dans le pays.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.tobaccocontrollaws.org/legislation/mauritius/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://ecigator.com/guide/mauritius-vaping-laws-travelers/" target="_blank">Ecigator</a>,
  <a href="https://health.govmu.org/health/wp-content/uploads/2023/03/National-Action-Plan-for-Tobacco-Control-2022-2026.pdf" target="_blank">Ministère de la Santé de Maurice</a>
  <a href="#ile-maurice">Source</a>
</p>


  `,

  MYS: `
    
      <h2>
  Législation sur le vapotage en Malaisie (2025)
</h2>
<img src="images-pays/mys.jpg" loading="lazy" alt="Malaisie" />
<p>
  La Malaisie a instauré une réglementation stricte sur les produits de vapotage à travers la <strong>Loi sur le contrôle des produits du tabac pour la santé publique (Acte 852)</strong>, entrée en vigueur le 1er octobre 2024. Cette loi vise à encadrer la vente, l'utilisation et la promotion des produits de vapotage pour protéger la santé publique, notamment celle des jeunes.
</p>

<ul>
  <li>
    <p>📋 <strong>Enregistrement des produits :</strong> Tous les e-liquides, avec ou sans nicotine, doivent être enregistrés auprès du ministère de la Santé. Les fabricants doivent fournir des analyses de laboratoire et obtenir une certification de conformité aux normes locales.</p>
  </li>
  <li>
    <p>🔢 <strong>Limitation de la nicotine :</strong> La concentration maximale autorisée est actuellement de 35 mg/ml, réduite à 20 mg/ml à partir du 1er octobre 2025. De plus, le volume maximal des cartouches sera limité à 2 ml à partir du 1er octobre 2026.</p>
  </li>
  <li>
    <p>🔞 <strong>Interdiction de vente aux mineurs :</strong> La vente de produits de vapotage aux personnes de moins de 18 ans est strictement interdite, avec des sanctions sévères en cas de non-respect.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne et sur les points de vente.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage et étiquetage :</strong> Les produits doivent afficher des avertissements sanitaires graphiques couvrant une partie significative de l'emballage, conformément aux spécifications du ministère de la Santé.</p>
  </li>
  <li>
    <p>🏪 <strong>Affichage en point de vente :</strong> L'exposition des produits de vapotage est interdite en dehors des boutiques spécialisées. Dans ces boutiques, les produits ne doivent pas être visibles depuis l'extérieur.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne et distributeurs automatiques :</strong> La vente de produits de vapotage en ligne et via des distributeurs automatiques est interdite.</p>
  </li>
  <li>
    <p>🗺️ <strong>Réglementation au niveau des États :</strong> Certains États, tels que Johor, Kelantan et Terengganu, ont imposé des interdictions supplémentaires sur la vente de produits de vapotage en refusant d'accorder des licences commerciales aux détaillants.</p>
  </li>
</ul>

<p>
  Ces mesures visent à réduire l'accès des jeunes aux produits de vapotage et à contrôler le marché pour assurer la sécurité des consommateurs.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://codeblue.galencentre.org/2024/10/government-mandates-graphic-health-warning-labels-on-vape-packaging-limits-nicotine-content/" target="_blank">CodeBlue</a>,
  <a href="https://www.malaymail.com/news/malaysia/2025/04/24/act-852-in-force-health-ministry-cracks-down-on-vape-sales-and-use-among-minors/174390" target="_blank">Malay Mail</a>,
  <a href="https://nsa-legal.com/posts/malaysias-vaping-regulations-a-new-era-for-public-health-and-industry-compliance" target="_blank">NSA Legal</a>,
  <a href="#malaisie" target="_blank">Source</a>
</p>


  `,
  
  
  NLD: `
    
      <h2>
  Législation sur le vapotage aux Pays-Bas (2025)
</h2>
<img src="images-pays/nld.jpg" loading="lazy" alt="Pays-Bas" />
<p>
  Les Pays-Bas ont mis en place une réglementation stricte sur les produits de vapotage afin de protéger la santé publique, notamment celle des jeunes :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> Depuis le 1er janvier 2023, seuls les e-liquides au goût de tabac sont autorisés. Les arômes sucrés, fruités ou mentholés sont interdits, même pour les produits sans nicotine. Les stocks existants pouvaient être écoulés jusqu'au 1er janvier 2024. Cette mesure a conduit à une réduction significative de l'usage du vapotage, avec environ 22 % des utilisateurs ayant cessé complètement et 40 % ayant réduit leur consommation.</p>
  </li>
  <li>
    <p>🏪 <strong>Restrictions de vente :</strong> Depuis le 1er juillet 2024, la vente de produits de vapotage est interdite dans les supermarchés, hôtels, restaurants et bars. À partir de 2025, seuls les magasins spécialisés seront autorisés à vendre ces produits.</p>
  </li>
  <li>
    <p>🛒 <strong>Interdiction de la vente en ligne :</strong> Depuis le 1er juillet 2023, la vente en ligne de tabac et de produits de vapotage est interdite, tant au niveau national qu'international.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, à l'exception des boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage neutre :</strong> Depuis le 1er octobre 2020, les produits de vapotage doivent être conditionnés dans des emballages neutres de couleur vert-brun foncé, sans éléments attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> L'usage des cigarettes électroniques, avec ou sans nicotine, est interdit dans tous les lieux publics fermés, y compris les établissements d'enseignement et les transports en commun.</p>
  </li>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
</ul>

<p>
  Ces mesures s'inscrivent dans le cadre du Plan national de prévention visant à atteindre une génération sans tabac d'ici 2040.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.government.nl/topics/smoking/government-measures-to-discourage-smoking" target="_blank">Gouvernement des Pays-Bas</a>,
  <a href="https://nltimes.nl/2025/03/18/one-five-vapers-quit-e-cigarettes-flavor-ban" target="_blank">NL Times</a>,
  <a href="https://tobaccoreporter.com/2025/03/18/report-dutch-flavor-ban-is-working/" target="_blank">Tobacco Reporter</a>,
  <a href="#pays-bas" target="_blank">Source</a>
</p>


  `,
  
  PRT: `
    <h2>
  Législation sur le vapotage au Portugal
</h2>
<img src="images-pays/prt.jpg" loading="lazy" alt="Tunisie" />
<p>
  Le Portugal applique une réglementation stricte sur les produits de
  vapotage, alignée sur la directive européenne sur les produits du
  tabac (TPD), avec des mesures supplémentaires spécifiques :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> La vente de produits de vapotage est interdite aux personnes de moins de 18 ans.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est interdit dans les lieux publics fermés, y compris les bars, restaurants, transports en commun et lieux de travail. Des zones spécifiquement désignées peuvent être prévues dans certains établissements.</p>
  </li>
  <li>
    <p>🛒 <strong>Vente en ligne :</strong> La vente en ligne de produits contenant de la nicotine est interdite. Seuls les produits sans nicotine peuvent être vendus en ligne.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité & promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, sauf dans les boutiques spécialisées.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage & étiquetage :</strong> Les produits doivent comporter des avertissements sanitaires couvrant au moins 30 % des faces principales de l'emballage. Les arômes sont autorisés, mais les produits doivent être conformes aux exigences de la TPD.</p>
  </li>
  <li>
    <p>💧 <strong>Concentration en nicotine :</strong> Le taux maximal autorisé est de 20 mg/ml. Les flacons de recharge ne doivent pas dépasser 10 ml, et les réservoirs des dispositifs ne doivent pas dépasser 2 ml.</p>
  </li>
  <li>
    <p>💶 <strong>Taxation :</strong> Une taxe d'accise de 0,323 € par millilitre s'applique à tous les e‑liquides contenant de la nicotine. Les produits sans nicotine ne sont pas soumis à cette taxe.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des amendes pouvant aller jusqu'à 750 € pour usage dans des zones interdites, et à des sanctions administratives pour non‑conformité des produits ou des points de vente.</p>
  </li>
</ul>

<p>
  Ces mesures visent à protéger la santé publique, notamment celle des jeunes, et à réduire l'accès aux produits de vapotage. Il est recommandé aux voyageurs d'apporter leur propre matériel et consommables, en respectant les réglementations locales.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigintelligence.com" target="_blank">ECigIntelligence</a>,
  <a href="https://www.theportugalnews.com" target="_blank">The Portugal News</a>,
  <a href="https://ecigator.com" target="_blank">Ecigator</a>,
  <a href="#portugal" target="_blank">Source</a>
</p>

        
  `,
  
  QAT: `
    
     <h2>
  Législation sur le vapotage au Qatar (2025)
</h2>
<img src="images-pays/qat.jpg" loading="lazy" alt="Qatar" />
<p>
  Le Qatar applique une interdiction stricte et complète des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> Depuis 2014, la fabrication, l'importation, la vente, la distribution, l'affichage, la publicité et l'utilisation des cigarettes électroniques et des e-liquides sont illégales. Cette interdiction a été renforcée par la <strong>Loi n° 10 de 2016 sur le contrôle du tabac</strong>.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> L'utilisation personnelle des dispositifs de vapotage est également interdite. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite, conformément à l'article 9 de la Loi n° 10 de 2016.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes et des peines d'emprisonnement pouvant aller jusqu'à trois mois.</p>
  </li>
  <li>
    <p>🩺 <strong>Avertissements sanitaires :</strong> Le ministère de la Santé publique (MoPH) met en garde contre les risques pour la santé associés aux cigarettes électroniques, notamment les maladies cardiovasculaires, les accidents vasculaires cérébraux, le cancer, les lésions pulmonaires et la dépendance à la nicotine.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage au Qatar. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://gsthr.org/countries/profile/qat/2/" target="_blank">Global State of Tobacco Harm Reduction</a>,
  <a href="https://www.tobaccocontrollaws.org/legislation/qatar/e-cigarettes/main-policies" target="_blank">Tobacco Control Laws</a>,
  <a href="https://thepeninsulaqatar.com/article/27/06/2024/moph-warns-against-e-cigarettes-highlighting-significant-health-risks" target="_blank">The Peninsula Qatar</a>,
  <a href="#qatar" target="_blank">Source</a>
</p>

    

  `,
  
  SGP: `
    
      <h2>
  Législation sur le vapotage à Singapour (2025)
</h2>
<img src="images-pays/sgp.jpg" loading="lazy" alt="Singapour" />
<p>
  Singapour applique une politique de tolérance zéro envers le vapotage, avec une interdiction totale couvrant tous les aspects liés aux cigarettes électroniques :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction complète :</strong> La <strong>Loi sur le contrôle de la publicité et de la vente du tabac (TCASA)</strong> interdit l'importation, la vente, la distribution, la possession, l'utilisation et l'achat de cigarettes électroniques, e-liquides (avec ou sans nicotine) et dispositifs de vapotage. Cette interdiction s'étend également aux produits de tabac chauffé et aux dispositifs similaires.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions sévères :</strong> Les contrevenants s'exposent à des amendes allant jusqu'à 2 000 SGD pour la possession, l'utilisation ou l'achat de dispositifs de vapotage. Les infractions liées à l'importation, la vente ou la distribution peuvent entraîner des amendes pouvant atteindre 10 000 SGD, une peine d'emprisonnement allant jusqu'à six mois, ou les deux. En cas de récidive, les peines peuvent être doublées.</p>
  </li>
  <li>
    <p>🚨 <strong>Application stricte :</strong> Les autorités, notamment la Health Sciences Authority (HSA) et l'Immigration and Checkpoints Authority (ICA), mènent des contrôles réguliers aux points d'entrée du pays, dans les écoles, les lieux publics et en ligne pour détecter et confisquer les produits interdits. Les voyageurs sont tenus de déclarer tout dispositif de vapotage à leur arrivée et de le remettre aux autorités pour éviter des sanctions.</p>
  </li>
  <li>
    <p>✈️ <strong>Impact sur les voyageurs :</strong> Il est fortement déconseillé d'apporter des dispositifs de vapotage à Singapour, même pour un usage personnel. Les voyageurs en transit doivent s'assurer que ces produits restent dans leurs bagages à main et ne sont pas utilisés pendant leur séjour.</p>
  </li>
  <li>
    <p>📚 <strong>Mesures éducatives :</strong> Le gouvernement singapourien mène des campagnes de sensibilisation pour informer le public, en particulier les jeunes, des dangers du vapotage et des conséquences légales associées. Des programmes de soutien sont également mis en place pour aider les contrevenants à cesser l'utilisation de ces produits.</p>
  </li>
</ul>

<p>
  En raison de ces réglementations strictes, il est impératif de ne pas apporter ou utiliser de produits de vapotage à Singapour pour éviter des sanctions sévères.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.hsa.gov.sg/tobacco-regulation/vaping-enforcement">Health Sciences Authority</a>,
  <a href="https://www.moh.gov.sg/newsroom/penalties-for-vaping">Ministère de la Santé</a>,
  <a href="https://www.moh.gov.sg/newsroom/multi-agency-effort-to-step-up-vaping-enforcement-and-education">Ministère de la Santé</a>,
  <a href="https://ecigator.com/guide/can-you-bring-vapes-into-singapore/">Ecigator</a>,
  <a href="https://www.channelnewsasia.com/singapore/vape-vaping-cna-explains-hsa-moe-moh-4519186">CNA</a>,
  <a href="#singapour">Source</a>
</p>

    

  `,

  SVN: `


      <h2>
  Législation sur le vapotage en Slovénie (2025)
</h2>
<img src="images-pays/svn.jpg" alt="Slovénie" />
<p>
  Le 24 avril 2025 marque l’entrée en vigueur d’un dispositif particulièrement strict :
</p>

<ul>
  <li>
    <p>🔞 <strong>Âge minimum :</strong> vente interdite aux moins de 18 ans.</p>
  </li>
  <li>
    <p>🚫 <strong>Arômes :</strong> tous les arômes sont bannis dans les e-liquides (avec ou sans nicotine) à l’exception du <em>strict goût tabac</em>.</p>
  </li>
  <li>
    <p>🍃 <strong>Puffs jetables :</strong> soumis aux mêmes règles ; tout dispositif aromatisé devient illégal à la vente ou à l’importation.</p>
  </li>
  <li>
    <p>🔬 <strong>Concentration en nicotine :</strong> plafond de 20 mg/ml ; réservoirs limités à 2 ml et flacons de recharge à 10 ml.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> vapoter est prohibé dans tous les espaces fermés où fumer est interdit (lieux de travail, écoles, transports, restauration, etc.).</p>
  </li>
  <li>
    <p>📢 <strong>Publicité :</strong> toute forme de promotion ou de parrainage des produits de vapotage est interdite, y compris en ligne.</p>
  </li>
  <li>
    <p>📦 <strong>Emballage :</strong> avertissements sanitaires couvrant au moins 30 % des faces principales ; visuels évoquant des saveurs proscrits.</p>
  </li>
  <li>
    <p>💵 <strong>Fiscalité :</strong> accise spécifique : environ 0,18 €/ml pour les liquides nicotinés et 0,10 €/ml sans nicotine.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> amendes pouvant atteindre 5 000 € et saisie des produits non conformes.</p>
  </li>
</ul>

<p>
  Ce cadre place la Slovénie parmi les pays européens les plus restrictifs à l’égard du vapotage, en ciblant tout particulièrement l’attractivité des saveurs auprès des jeunes.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.uradni-list.si/_pdf/2024/Ur/u2024031.pdf" target="_blank">Uradni list RS – ZOUTPI-B (31/2024)</a>,
  <a href="https://www.uradni-list.si/" target="_blank">Uradni list RS – Pravilnik 96/2024</a>,
  <a href="https://www.tobak.si/ords/r/tob/enhome/home" target="_blank">NIJZ – Portail national « tobak.si »</a>,
  <a href="#slovenie" target="_blank">Source</a>
</p>

    
  `,
  
  THA: `
    
    <h2>
  Législation sur le vapotage en Thaïlande (2025)
</h2>
<img src="images-pays/tha.jpg" alt="Thaïlande" />
<p>
  La Thaïlande applique une interdiction stricte et complète des produits de vapotage :
</p>

<ul>
  <li>
    <p>🚫 <strong>Interdiction totale :</strong> Depuis 2014, la fabrication, l'importation, la vente, la distribution, la possession et l'utilisation de cigarettes électroniques, de e-liquides (avec ou sans nicotine) et de dispositifs de vapotage sont illégales. Cette interdiction a été renforcée par la <strong>Loi sur le contrôle du tabac de 2014</strong> et le <strong>Code des douanes</strong>.</p>
  </li>
  <li>
    <p>🚷 <strong>Usage personnel :</strong> La simple possession ou l'utilisation de dispositifs de vapotage est considérée comme une infraction grave. Les contrevenants, y compris les touristes, peuvent être accusés de possession de marchandises de contrebande, passible d'une amende pouvant atteindre cinq fois la valeur des produits saisis ou d'une peine d'emprisonnement pouvant aller jusqu'à 5 ans, voire les deux.</p>
  </li>
  <li>
    <p>✈️ <strong>Importation :</strong> L'importation de dispositifs de vapotage est illégale. Les voyageurs ne doivent pas apporter de matériel de vape, même pour un usage personnel, sous peine de confiscation, d'amendes ou d'emprisonnement.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité, de promotion ou de parrainage des produits de vapotage est interdite. Les autorités surveillent activement les plateformes en ligne pour détecter et supprimer les contenus liés au vapotage.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> Les contrevenants s'exposent à des sanctions sévères, incluant des amendes pouvant atteindre 30 000 THB (environ 900 USD) et des peines d'emprisonnement pouvant aller jusqu'à 10 ans, en fonction de la gravité de l'infraction.</p>
  </li>
  <li>
    <p>🚨 <strong>Application stricte :</strong> Les autorités thaïlandaises mènent des contrôles réguliers pour détecter et confisquer les produits interdits. En février 2025, une campagne nationale a conduit à l'arrestation de 690 personnes et à la saisie de près de 455 000 produits de vapotage.</p>
  </li>
</ul>

<p>
  Il est fortement déconseillé d'apporter ou d'utiliser des dispositifs de vapotage en Thaïlande. Les autorités appliquent une politique de tolérance zéro à l'égard du vapotage.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://iamkohchang.com/blog/vaping-in-thailand.html" target="_blank">iamkohchang.com</a>,
  <a href="https://ecigator.com/news/thailand-vape-users-5-years-prison-risk/" target="_blank">Ecigator</a>,
  <a href="https://filtermag.org/thailand-vape-crackdown/" target="_blank">Filter Magazine</a>,
  <a href="https://www.nationthailand.com/news/general/40047198" target="_blank">The Nation Thailand</a>,
  <a href="#thailande" target="_blank">Source</a>
</p>

    

  `,
  
  TUN: `
    
     <h2>
  Législation sur le vapotage en Tunisie (2025)
</h2>
<img src="images-pays/tun.jpg" alt="Tunisie" />
<p>
  En Tunisie, le vapotage est autorisé mais encadré par une réglementation spécifique :
</p>

<ul>
  <li>
    <p>✅ <strong>Statut légal :</strong> Les cigarettes électroniques et les e-liquides sont légaux, mais leur vente et distribution sont soumises à des restrictions. La Régie Nationale des Tabacs et des Allumettes (RNTA) supervise la commercialisation de ces produits.</p>
  </li>
  <li>
    <p>🛂 <strong>Importation personnelle :</strong> Les voyageurs peuvent apporter leur matériel de vapotage pour usage personnel. Il est recommandé de déclarer ces produits à la douane à l'arrivée.</p>
  </li>
  <li>
    <p>💧 <strong>Restrictions sur les e-liquides :</strong> Les contenants ne doivent pas dépasser 100 ml, et le volume total de liquides ne peut excéder 1 litre.</p>
  </li>
  <li>
    <p>🚭 <strong>Utilisation en public :</strong> Le vapotage est interdit dans les lieux publics fermés, tels que les restaurants, bars et hôtels. Il est conseillé de vapoter discrètement dans les espaces ouverts et de respecter les panneaux d'interdiction.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> Toute forme de publicité pour les produits de vapotage est interdite.</p>
  </li>
  <li>
    <p>⚖️ <strong>Réglementation en évolution :</strong> Le ministère de la Santé travaille sur un projet de loi visant à encadrer davantage l'utilisation des cigarettes électroniques, notamment pour lutter contre l'usage chez les jeunes.</p>
  </li>
</ul>

<p>
  Il est recommandé aux voyageurs de se renseigner sur les réglementations locales avant de vapoter en Tunisie et de faire preuve de discrétion pour éviter tout désagrément.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://ecigator.com/fr/regulation-fr/tunisia-vaping-laws-regulations-guide/" target="_blank">Ecigator</a>,
  <a href="https://www.tunisienumerique.com/tunisie-quand-les-panneaux-publicitaires-font-de-la-resistance-la-vape-en-vedette-malgre-les-interdictions/" target="_blank">Tunisie Numérique</a>,
  <a href="https://www.2firsts.com/news/tunisia-drafts-e-cigarette-regulation-to-combat-teen-usage" target="_blank">2Firsts</a>,
  <a href="#tunisie" target="_blank">Source</a>
</p>

    

  `,
  
  USA: `
    
    <h2>
  Législation sur le vapotage aux États-Unis (2025)
</h2>
<img src="images-pays/usa.jpg" alt="USA" />
<p>
  La réglementation du vapotage aux États-Unis repose sur une combinaison de lois fédérales et de réglementations spécifiques à chaque État, visant à encadrer la vente, la distribution et l'utilisation des produits de vapotage.
</p>

<ul>
  <li>
    <p>🎂 <strong>Âge légal :</strong> La loi fédérale interdit la vente de produits du tabac, y compris les cigarettes électroniques, aux personnes de moins de 21 ans. Les détaillants doivent vérifier l'âge des acheteurs à l'aide d'une pièce d'identité avec photo pour toute personne de moins de 30 ans.</p>
  </li>
  <li>
    <p>✔️ <strong>Autorisation des produits :</strong> Tous les produits de vapotage doivent obtenir une autorisation de mise sur le marché de la FDA via le processus PMTA (Premarket Tobacco Product Application). En 2025, la FDA a autorisé uniquement certains produits aux arômes de tabac ou de menthol, rejetant plus d'un million de demandes pour des produits aromatisés jugés attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🚫 <strong>Interdiction des arômes :</strong> En avril 2025, la Cour suprême a confirmé la décision de la FDA d'interdire la commercialisation des e-liquides aromatisés (fruits, desserts, etc.), considérés comme particulièrement attractifs pour les jeunes.</p>
  </li>
  <li>
    <p>🌍 <strong>Réglementations étatiques :</strong> Certains États, tels que la Californie, New York et le Massachusetts, ont mis en place des lois plus strictes, interdisant la vente de produits de vapotage aromatisés et imposant des taxes spécifiques. D'autres États exigent que les produits soient enregistrés dans des répertoires d'État et approuvés par la FDA avant leur commercialisation.</p>
  </li>
  <li>
    <p>📢 <strong>Publicité et promotion :</strong> La publicité pour les produits de vapotage est strictement encadrée, avec des restrictions sur les supports et les messages utilisés, notamment pour éviter de cibler les jeunes.</p>
  </li>
  <li>
    <p>⚖️ <strong>Sanctions :</strong> La vente ou la distribution de produits de vapotage non autorisés peut entraîner des sanctions sévères, y compris des amendes, la saisie des produits et des poursuites judiciaires. En 2024, la FDA a émis plus de 800 lettres d'avertissement à des détaillants pour la vente de produits non autorisés.</p>
  </li>
</ul>

<p>
  Il est essentiel de se renseigner sur les lois spécifiques de l'État dans lequel vous vous trouvez, car les réglementations peuvent varier considérablement d'un État à l'autre.
</p>

<p>
  <strong>Sources :</strong>
  <a href="https://www.fda.gov/tobacco-products/ctp-newsroom/year-review-fdas-progress-tobacco-product-regulation-2024" target="_blank">FDA</a>,
  <a href="https://www.washingtonpost.com/politics/2025/04/02/ecigarettes-vapes-supreme-court-case/" target="_blank">The Washington Post</a>,
  <a href="https://ecigator.com/lounge/us-ecig-regulations-2025-difference/" target="_blank">Ecigator</a>,
  <a href="#usa" target="_blank">Source</a>
</p>

   

  `,
  
  };