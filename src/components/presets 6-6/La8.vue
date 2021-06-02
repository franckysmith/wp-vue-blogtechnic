<template>
  <div>
    <h3>LA8</h3>
    <div>
      <img src="@/assets/img-amplis/la8-face.jpg" alt="" /><img
        src="@/assets/img-amplis/la8.jpg"
        alt=""
      />
    </div>

    <h3>K1</h3>
    011 [K1] K1, large bande
    <h3>K2</h3>
    012 [K2 70] K2, large bande, réglage 70º sur ailettes mobiles<br />
    013 [K2 90] K2, large bande, réglage 90º sur ailettes mobiles<br />
    014 [K2 110] K2, large bande, réglage 110º sur ailettes mobiles<br />
    <h3>K3</h3>
    015 [K3 70] K3, large bande, réglage 70º sur ailettes mobiles<br />
    016 [K3 90] K3, large bande, réglage 90º sur ailettes mobiles<br />
    017 [K3 110] K3, large bande, réglage 110º sur ailettes mobiles<br />
    <h3>K1-SB</h3>
    018 [K1SB_60] K1-SB, LPF=60 Hz, optimisé pour la conguration CONTOUR<br />
    019 [K1SB_X] K1-SB, LPF=200 Hz, optimisé pour la conguration THROW sur
    K1<br />
    020 [K1SB_X K2] K1-SB, LPF=200 Hz, optimisé pour la conguration THROW sur
    K2<br />
    <h3>V-DOSC</h3>
    021 [V-DOSC_LO] V-DOSC, large bande, contour LO<br />
    022 [V-DOSC_LO_60] V-DOSC, HPF=60 Hz, contour LO<br />
    023 [V-DOSC_LO_X] V-DOSC, large bande, contour LO, optimisé pour les presets
    [SB218_X] & [dV-S_X] <br />
    024 [V-DOSC_HI] V-DOSC, large bande, contour HI<br />
    025 [V-DOSC_HI_60] V-DOSC, HPF=60 Hz, contour HI<br />
    026 [V-DOSC_HI_X] V-DOSC, large bande, contour HI, optimisé pour les presets
    [SB218_X] & [dV-S_X]
    <br />
    <h3>KUDO</h3>
    027 [KUDO50_25] Kudo, HPF=25 Hz, réglage 50º sur K-Louver<br />
    028 [KUDO50_40] Kudo, HPF=40 Hz, réglage 50º sur K-Louver<br />
    029 [KUDO50_60] Kudo, HPF=60 Hz, réglage 50º sur K-Louver<br />
    030 [KUDO80_25] Kudo, HPF=25 Hz, réglage 80º sur K-Louver<br />
    031 [KUDO80_40] Kudo, HPF=40 Hz, réglage 80º sur K-Louver<br />
    032 [KUDO80_60] Kudo, HPF=60 Hz, réglage 80º sur K-Louver<br />
    033 [KUDO110_25] Kudo, HPF=25 Hz, réglage 110º sur K-Louver<br />
    034 [KUDO110_40] Kudo, HPF=40 Hz, réglage 110º sur K-Louver<br />
    035 [KUDO110_60] Kudo, HPF=60 Hz, réglage 110º sur K-Louver<br />
    <h3>KARA_II</h3>
    036 [KARA II 70] Kara II, large bande, réglage 70º sur ailettes mobiles<br />
    037 [KARA II 90] Kara II, large bande, réglage 90º sur ailettes mobiles<br />
    038 [KARA II 110] Kara II, large bande, réglage 110º sur ailettes mobiles<br />
    039 [KARA II_FI] Kara II, HPF=100 Hz, complément (fill)<br />
    040 [KARAIIDOWNK1] Kara II, délai optimisé en complément downfill pour K1<br />
    041 [KARAIIDOWNK2] Kara II, délai optimisé en complément downfill pour K2<br />
    042 [KARAIIDOWNK3] Kara II, optimized delay for K3 downfill
    <br />
    <h3>KARA</h3>
    043 [KARA] Kara, large bande, façade (FOH)<br />
    044 [KARA_FI] Kara, HPF=100 Hz, complément (fill)<br />
    045 [KARADOWNK1] Kara, HPF=100 Hz, délai optimisé en complément downfill
    pour K1<br />
    046 [KARADOWNK2] Kara, HPF=100 Hz, délai optimisé en complément downfill
    pour K2<br />
    047 [KARADOWNK3] Kara, HPF=100 Hz, optimized delay for K3 downfill<br />
    <h3>dV-DOSC</h3>
    048 [dV_FI] dV-DOSC, HPF=100 Hz, complément (fill)<br />
    049 [dV_LO] dV-DOSC, large bande, contour LO<br />
    050 [dV_LO_100] dV-DOSC, HPF=100 Hz, contour LO<br />
    051 [dV_HI] dV-DOSC, large bande, contour HI<br />
    052 [dV_HI_100] dV-DOSC, HPF=100 Hz, contour HI<br />
    <h3>dV-D_dVS</h3>
    053 [dV_dV-S_LO] dV-DOSC & dV-SUB, X-OVER=100 Hz, contour LO<br />
    054 [dV_dV-S_HI] dV-DOSC & dV-SUB, X-OVER=100 Hz, contour HI<br />
    055 [dV_dV-S_LO60] dV-DOSC & dV-SUB, HPF=60 Hz, X-OVER=100 Hz, contour LO<br />
    056 [dV_dV-S_HI60] dV-DOSC & dV-SUB, HPF=60 Hz, X-OVER=100 Hz, contour HI<br />

    <h3>dV-SUB</h3>
    057 [dV-S_60_100] dV-SUB, HPF=60 Hz, LPF=100 Hz<br />
    058 [dV-S_100] dV-SUB, LPF=100 Hz<br />
    059 [dV-S_60_X] dV-SUB, HPF=60 Hz, LPF=200 Hz, optimisé pour les presets
    [V-DOSC_xx_60]<br />
    060 [dV-S_X] dV-SUB, LPF=200 Hz, optimisé pour les presets [V-DOSC_xx_X]<br />
    <h3>ARCS_II</h3>
    061 [ARCS II] ARCS II, large bande<br />
    <h3>ARCS</h3>
    062 [ARCS_LO] ARCS, large bande, contour LO<br />
    063 [ARCS_LO_60] ARCS, HPF=60 Hz, contour LO<br />
    064 [ARCS_LO_100] ARCS, HPF=100 Hz, contour LO<br />
    065 [ARCS_HI] ARCS, large bande, contour HI<br />
    066 [ARCS_HI_60] ARCS, HPF=60 Hz, contour HI<br />
    067 [ARCS_HI_100] ARCS, HPF=100 Hz, contour HI<br />
    <h3>A15</h3>
    068 [A15] A15 Wide ou A15 Focus, large bande<br />
    069 [A15_FI] A15 Wide ou A15 Focus, large bande, complément (fill)<br />
    <h3>A10</h3>
    070 [A10] A10 Wide ou A10 Focus, large bande<br />
    071 [A10_FI] A10 Wide ou A10 Focus, large bande, complément (fill)<br />
    <h3>ARCS_WF</h3>
    072 [ARCS_WIFO] ARCS Wide ou ARCS Focus, large bande, façade (FOH)<br />
    073 [ARCS_WIFO_FI] ARCS Wide ou ARCS Focus, large bande, complément
    (fill)<br />
    <h3>SB28</h3>
    074 [SB28_60] SB28, LPF=60 Hz<br />
    075 [SB28_100] SB28, LPF=100 Hz<br />
    076 [SB28_60_C] SB28, LPF=60 Hz, cardioïde<br />
    077 [SB28_100_C] SB28, LPF=100 Hz, cardioïde<br />
    078 [SB28_60_Cx] SB28, LPF=60 Hz, cardioïde étendu<br />
    079 [SB28_100_Cx] SB28, LPF=100 Hz, cardioïde étendu<br />

    <h3>KS21</h3>
    080 [KS21_60] KS21, LPF=60 Hz<br />
    081 [KS21_100] KS21, LPF=100 Hz<br />
    082 [KS21_60_C] KS21, LPF=60 Hz, cardioïde<br />
    083 [KS21_100_C] KS21, LPF=100 Hz, cardioïde<br />
    084 [KS21_60_Cx] KS21, LPF=60 Hz, cardioïde étendu<br />
    085 [KS21_100_Cx] KS21, LPF=100 Hz, cardioïde étendu<br />
    <h3>SB218</h3>
    086 [SB218_60] SB218, LPF=60 Hz<br />
    087 [SB218_100] SB218, LPF=100 Hz<br />
    088 [SB218_X] SB218, LPF=200 Hz, optimisé pour les presets [V-DOSC_xx_X]<br />
  </div>
  <div>
    <h3>SB18</h3>
    089 [SB18_60] SB18, LPF=60 Hz<br />
    090 [SB18_100] SB18, LPF=100 Hz<br />
    091 [SB18_60_C] SB18, LPF=60 Hz, cardioïde<br />
    092 [SB18_100_C] SB18, LPF=100 Hz, cardioïde<br />
    093 [SB18_60_Cx] SB18, LPF=60 Hz, cardioïde étendu<br />
    094 [SB18_100_Cx] SB18, LPF=100 Hz, cardioïde étendu<br />
    <h3>SB118</h3>
    095 [SB118_60] SB118, LPF=60 Hz<br />
    096 [SB118_100] SB118, LPF=100 Hz<br />
    097 [SB118_60_C] SB118, LPF=60 Hz, cardioïde<br />
    098 [SB118_100_C] SB118, LPF=100 Hz, cardioïde<br />
    <h3>SB15</h3>
    099 [SB15_100] SB15, LPF=100 Hz<br />
    100 [SB15_100_C] SB15, LPF=100 Hz, cardioïde<br />
    101 [SB15_100_Cx] SB15, LPF=100 Hz, cardioïde étendu<br />
    <h3>KILO</h3>
    102 [KILO] Kilo, LPF=100 Hz<br />
    <h3>KIVA_II</h3>
    103 [KIVA II] Kiva II, large bande, façade (FOH)<br />
    104 [KIVA II_FI] Kiva II, large bande, complément (fill)<br />
    <h3>KIVA</h3>
    105 [KIVA] Kiva, large bande, façade (FOH)<br />
    106 [KIVA_FI] Kiva, large bande, complément (fill)<br />

    <h3>SB15KIVA</h3>
    107 [KIVA_SB15] Kiva & SB15m, X-OVER=100 Hz, large bande, façade (FOH)<br />
    <h3>KILOKIVA</h3>
    108 [KIVA_KILO] Kiva & Kilo, large bande, X-OVER=100 Hz, façade (FOH)<br />
    <h3>SYVA</h3>
    109 [SYVA] Syva, large bande<br />
    <h3>SYVA_LOW</h3>
    110 [SYVA LOW_100] Syva Low (séparé), LPF=100 Hz<br />
    <h3>SYVA+LOW</h3>
    111 [SYVA LOW SYVA] Syva & Syva Low (couplé)<br />
    <h3>SYVA_SUB</h3>
    112 [SYVA SUB_100] Syva Sub, LPF=100 Hz<br />
    113 [SYVA SUB_200] Syva Sub, LPF=200 Hz, optimisé pour le preset [X4]<br />
    <h3>X15HiQ</h3>
    114 [X15] X15 HiQ, large bande<br />
    115 [X15_MO] X15 HiQ, large bande, retour de scène (monitor), basse
    latence<br />
    <h3>X12</h3>
    116 [X12] X12, large bande<br />
    117 [X12_MO] X12, large bande, retour de scène (monitor), basse latence<br />
    <h3>X8</h3>
    118 [X8] X8, large bande<br />
    119 [X8_MO] X8, large bande, retour de scène (monitor), basse latence<br />
    <h3>115XTHiQ</h3>
    120 [HiQ_FI] 115XT HiQ, large bande, complément (fill)<br />
    121 [HiQ_FI_100] 115XT HiQ, HPF=100 Hz, complément (fill)<br />
    122 [HiQ_FR] 115XT HiQ, large bande, façade (FOH)<br />
    123 [HiQ_FR_100] 115XT HiQ, HPF=100 Hz, façade (FOH)<br />
    124 [HiQ_MO] 115XT HiQ, large bande, retour de scène (monitor)<br />
    125 [HiQ_MO_100] 115XT HiQ, HPF=100 Hz, retour de scène (monitor)<br />

    <h3>12XTA</h3>
    126 [12XTA_FI] 12XT active, full range, fill<br />
    127 [12XTA_FI_100] 12XT active, HPF=100 Hz, fill<br />
    128 [12XTA_FR] 12XT active, full range, FOH<br />
    129 [12XTA_FR_100] 12XT active, HPF=100 Hz, FOH<br />
    130 [12XTA_MO] 12XT active, full range, monitor<br />
    131 [12XTA_MO_100] 12XT active, HPF=100 Hz, monitor<br />
    <h3>12XTP</h3>
    132 [12XTP_FI] 12XT passive, full range, fill<br />
    133 [12XTP_FI_100] 12XT passive, HPF=100 Hz, fill<br />
    134 [12XTP_FR] 12XT passive, full range, FOH<br />
    135 [12XTP_FR_100] 12XT passive, HPF=100 Hz, FOH<br />
    136 [12XTP_MO] 12XT passive, full range, monitor<br />
    137 [12XTP_MO_100] 12XT passive, HPF=100 Hz, monitor<br />

    <h3>8XT</h3>
    138 [8XT_FI] 8XT, full range, fill<br />
    139 [8XT_FI_100] 8XT, HPF=100 Hz, fill<br />
    140 [8XT_FR] 8XT, full range, FOH<br />
    141 [8XT_FR_100] 8XT, HPF=100 Hz, FOH<br />
    142 [8XT_MO] 8XT, full range, monitor<br />
    143 [8XT_MO_100] 8XT, HPF=100 Hz, monitor<br />
    <h3>5XT</h3>
    144 [5XT] 5XT, full range<br />
    <h3>X4</h3>
    145 [X4] X4i, full range
    <h3>115XT</h3>
    146 [115XT_FI] 115XT, full range, fill<br />
    147 [115XT_FI_100] 115XT, HPF=100 Hz, fill<br />
    148 [115XT_FR] 115XT, full range, FOH<br />
    149 [115XT_FR_100] 115XT, HPF=100 Hz, FOH<br />
    150 [115XT_MO] 115XT, full range, monitor<br />
    151 [115XT_MO_100] 115XT, HPF=100 Hz, monitor<br />

    <h3>MTD115bA</h3>
    152 [115bA_FI] MTD115b active, large bande, complément (fill)<br />
    153 [115bA_FI_100] MTD115b active, HPF=100 Hz, complément (fill)<br />
    154 [115bA_FR] MTD115b active, large bande, façade (FOH)<br />
    155 [115bA_FR_100] MTD115b active, HPF=100 Hz, façade (FOH)<br />
    156 [115bA_MO] MTD115b active, large bande, retour de scène (monitor)<br />
    157 [115bA_MO_100] MTD115b active, HPF=100 Hz, retour de scène (monitor)<br />
    <h3>MTD115bP</h3>
    158 [115bP_FI] MTD115b passive, large bande, complément (fill)<br />
    159 [115bP_FI_100] MTD115b passive, HPF=100 Hz, complément (fill)<br />
    160 [115bP_FR] MTD115b passive, large bande, façade (FOH)<br />
    161 [115bP_FR_100] MTD115b passive, HPF=100 Hz, façade (FOH)<br />
    162 [115bP_MO] MTD115b passive, large bande, retour de scène (monitor)<br />
    163 [115bP_MO_100] MTD115b passive, HPF=100 Hz, retour de scène (monitor)<br />
    <h3>112XT</h3>
    164 [112XT_FI] 112XT, large bande, complément (fill)<br />
    165 [112XT_FI_100] 112XT, HPF=100 Hz, complément (fill)<br />
    166 [112XT_FR] 112XT, large bande, façade (FOH)<br />
    167 [112XT_FR_100] 112XT, HPF=100 Hz, façade (FOH)<br />
    168 [112XT_MO] 112XT, large bande, retour de scène (monitor)<br />
    169 [112XT_MO_100] 112XT, HPF=100 Hz, retour de scène (monitor)<br />
    <h3>MTD112b</h3>
    170 [112b_FI] MTD112b, large bande, complément (fill)<br />
    171 [112b_FI_100] MTD112b, HPF=100 Hz, complément (fill)<br />
    172 [112b_FR] MTD112b, large bande, façade (FOH)<br />
    173 [112b_FR_100] MTD112b, HPF=100 Hz, façade (FOH)<br />
    174 [112b_MO] MTD112b, large bande, retour de scène (monitor)<br />
    175 [112b_MO_100] MTD112b, HPF=100 Hz, retour de scène (monitor)<br />
    <h3>MTD108a</h3>
    176 [108a_FI] MTD108a, large bande, complément (fill)<br />
    177 [108a_FI_100] MTD108a, HPF=100 Hz, complément (fill)<br />
    178 [108a_FR] MTD108a, large bande, façade (FOH)<br />
    179 [108a_FR_100] MTD108a, HPF=100 Hz, façade (FOH)<br />
    180 [108a_MO] MTD108a, large bande, retour de scène (monitor)<br />
    181 [108a_MO_100] MTD108a, HPF=100 Hz, retour de scène (monitor)<br />

    182 [FLAT_LA8] EQ réponse plate, protection minimisant les risques de
    saturation<br />
  </div>
</template>

<script>
export default {
  name: "La8"
};
</script>

<style>
@import "../../assets/style/stylepresets.css";
</style>
