<template>
  <div class="infos">
    <Cx />
    <h2>Conception des presets</h2>
    <h3>Structure de gain</h3>
    <br />
    Les gains de tous les presets usines L-Acoustics sont calibrés avec un bruit
    rose de référence, représentatif des programmes musicaux les plus exigeants.
    Le niveau d'entrée de référence est de 0 dBu (avec une source analogique) ou
    -22 dBFS (avec une source numérique).<br />
    A ce niveau d'entrée, les enceintes L-Acoustics fournissent à l'ingénieur
    <strong>une réserve de 8 dB (headroom)</strong>, à l'exception des enceintes
    de plus petit format calibrées pour de
    <strong
      >plus petit format calibrées pour une réserve de 4 dB (MTD108a, 5XT, X8,
      8XT, Kiva et Kilo) de plus petit format calibrées pour </strong
    >.<br />
    Cette structure de gain facilite la gestion des ressources en puissance des
    systèmes L-Acoustics lors de l'utilisation de différents modèles d'enceintes
    de format similaire. Avec des valeurs identiques pour les gains de sortie (0
    dB), toutes les enceintes atteignent leur limite avec le même niveau
    d'entrée.
    <strong>
      d'entrée. Le seul ajustement de
      <span style="color: red">gain à appliquer est de -4 dB</span> pour les
      enceintes de petit format utilisées avec des enceintes de plus gros
      format. d'entrée. </strong
    ><br />
    <h3>Réserve de SB15m</h3>
    Les presets [SB15_100] et [SB15_100_C] ont 8 dB de réserve à partir de la
    librairie de presets version 5.6(.5). Le preset [SB15_100_Cx] a 8 dB de
    réserve.<br />
    4 dB de réserve sont fournis avec les presets de versions antérieures et
    avec le preset [KIVA_SB15].<br />
    <h3>Contour de la réponse en fréquence</h3>
    Pour les enceintes coaxiales de la série X, L-Acoustics fournit 2 contours
    distincts :<br />
    • le preset standard, pour toutes les applications sauf système de retour de
    scène<br />
    • le preset _MO, pour les applications retour de scène<br />
    <strong>Pour les anciennes enceintes coaxiales (séries XT et MTD)</strong>,
    L-Acoustics fournit 3 contours distincts :<br />
    • les presets _FR pour la plupart des applications en façade<br />
    • les presets _FI pour la parole, le classique, le jazz ou les systèmes de
    complément<br />
    • les presets _MO pour les conditions de charge en demi-espace, typiquement
    comme système de retour de scène<br />
    <strong>
      Pour les lignes sources WST actuelles, L-Acoustics fournit 1 ou 2 contours
      : </strong
    ><br />
    • le preset principal, assurant un contour de référence à la ligne source
    avec des paramètres de déploiement usuels<br />
    • le preset _FI, pour certains systèmes seulement, dédié aux enceintes
    utilisées en système de complément<br />
    <strong>Les systèmes WST antérieurs</strong> héritent d'une ancienne
    structure de preset (presets _HI et _LO).<br />
    Si nécessaire, les utilisateurs peuvent ajuster la signature sonore des
    systèmes L-Acoustics via les outils Contour EQ dans LA Network Manager.<br />
    <h4>Réserve de K1-SB, KS28, SB28, SB18, SB218 et SB118</h4>
    Pour fournir 8 dB de réserve, le gain de sortie des presets de certains
    sub-graves est ajusté dans la librairie de presets 6.0 par rapport aux
    versions prédédentes.<br />
    Cette mise à jour aligne l'activité L-DRIVE entre les sub-grave et les
    enceintes large bande pour un même signal de bruit rose de référence.<br />
    En mettant à jour les presets des fchiers Session utilisant d'anciennes
    versions de la librairie de presets, ajustez les gains comme suit pour
    garder la même chaîne de gain :<br />
    [SB28_60], [SB218_60] : + 4 dB [KS28_60], [SB_28_100], [SB18_60],
    [SB18_100], [SB218_100], [SB118_60], [SB118_100] : + 3 dB [KS28_100] : + 2
    dB [K1SB_60] : + 1 dB

    <h3>
      L-Acoustics lance de nouveaux préréglages Subwoofer Cardioid Extended
    </h3>
    <p>Octobre 2019</p>
    En réponse à la demande d'un contrôle accru de la directivité du subwoofer,
    L-Acoustics a développé la bibliothèque de préréglages Cardioid Extended.<br />
    <strong>Cette nouvelle bibliothèque «Cx»</strong> est une solution optimisée
    en usine offrant une annulation du SPL arrière large bande avec des
    compromis limités sur le SPL avant et la réponse temporelle <br />*. Comme
    pour la configuration Cardioid C classic, la configuration Cx Cardioid
    Extended est obtenue en inversant une enceinte par groupe de 3 ou 4
    subwoofers <br />** et en appliquant simplement le preset Cx dédié.Les
    ingénieurs bénéficient d'une solution plug-and-play qui permet d'économiser
    du temps et des efforts lors de l'étalonnage du système. La nouvelle
    bibliothèque Cx est disponible dans LA Network Manager 2.7.3 pour les
    subwoofers SB15m, SB18 (i / m), SB28, KS21 et KS28.<br /><br />
    Pour plus d'informations, reportez-vous au
    <a
      href="https://www.l-acoustics.com/wp-content/uploads/2018/10/cardioid_configurations_tb_en.pdf"
      target="_blank"
    >
      Pour plus d'informations, reportez-vous au bulletin technique sur les
      configurations du subwoofer Pour plus d'informations, reportez-vous au </a
    >. * par rapport aux techniques cardioïdes à annulation SPL arrière à large
    bande classiques. ** l'inversion de 1 enceinte par groupe de 2 subwoofers
    est également possible mais réduit l'efficacité du SPL avant
  </div>
</template>

<script>
export default {
  name: "Infos"
};
</script>

<style>
.infos {
  text-align: left;
  margin-top: 30px;
  width: 350px;
}
@media only screen and (min-width: 893px) {
  .infos {
    text-align: left;
    margin-top: 30px;
    width: 550px;
  }
}
</style>
