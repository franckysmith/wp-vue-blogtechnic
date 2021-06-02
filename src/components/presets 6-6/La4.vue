<template>
  <div>
    <h3>LA4</h3>
    <div>
      <img src="@/assets/img-amplis/la4-face.jpg" alt="" /><img
        src="@/assets/img-amplis/la4.jpg"
        alt=""
      />
    </div>
    <h3>KIVA</h3>
    011 [KIVA] Kiva, large bande, façade (FOH)<br />
    012 [KIVA_FI] Kiva, large bande, complément (fill)
    <h3>SB15KIVA</h3>
    013 [KIVA_SB15] Kiva & SB15m, X-OVER=100 Hz, large bande, façade (FOH)
    <h3>KILOKIVA</h3>
    014 [KIVA_KILO] Kiva & Kilo, large bande, X-OVER=100 Hz, façade (FOH)
    <h3>ARCS</h3>
    015 [ARCS_LO] ARCS, large bande, contour LO<br />
    016 [ARCS_LO_60] ARCS, HPF=60 Hz, contour LO<br />
    017 [ARCS_LO_100] ARCS, HPF=100 Hz, contour LO<br />
    018 [ARCS_HI] ARCS, large bande, contour HI<br />
    019 [ARCS_HI_60] ARCS, HPF=60 Hz, contour HI <br />
    020 [ARCS_HI_100] ARCS, HPF=100 Hz, contour HI
    <h3>ARCS_WF</h3>
    021 [ARCS_WIFO] ARCS Wide ou ARCS Focus, large bande, façade (FOH)<br />
    022 [ARCS_WIFO_FI] ARCS Wide ou ARCS Focus, large bande, complément (fill)
    <h3>SB18</h3>
    023 [SB18_60] SB18, LPF=60 Hz<br />
    024 [SB18_100] SB18, LPF=100 Hz<br />
    025 [SB18_60_C] SB18, LPF=60 Hz, cardioïde<br />
    026 [SB18_100_C] SB18, LPF=100 Hz, cardioïde<br />
    027 [SB18_60_Cx] SB18, LPF=60 Hz, cardioïde étendu<br />
    028 [SB18_100_Cx] SB18, LPF=100 Hz, cardioïde étendu
    <h3>SB118</h3>
    029 [SB118_60] SB118, LPF=60 Hz<br />
    030 [SB118_100] SB118, LPF=100 Hz<br />
    031 [SB118_60_C] SB118, LPF=60 Hz, cardioïde<br />
    032 [SB118_100_C] SB118, LPF=100 Hz, cardioïde

    <h3>SB15</h3>
    033 [SB15_100] SB15, LPF=100 Hz<br />
    034 [SB15_100_C] SB15, LPF=100 Hz, cardioïde<br />
    035 [SB15_100_Cx] SB15, LPF=100 Hz, cardioïde étendu
    <h3>KILO</h3>
    036 [KILO] Kilo, LPF=100 Hz
    <h3>SYVA_SUB</h3>
    037 [SYVA SUB_200] Syva Sub, LPF=200 Hz, optimisé pour le preset [X4]
    <h3>12XTA</h3>
    038 [12XTA_FI] 12XT active, large bande, complément (fill)<br />
    039 [12XTA_FI_100] 12XT active, HPF=100 Hz, complément (fill)<br />
    040 [12XTA_FR] 12XT active, large bande, façade (FOH)<br />
    041 [12XTA_FR_100] 12XT active, HPF=100 Hz, façade (FOH)<br />
    042 [12XTA_MO] 12XT active, large bande, retour de scène (monitor)<br />
    043 [12XTA_MO_100] 12XT active, HPF=100 Hz, retour de scène (monitor)
    <h3>12XTP</h3>
    044 [12XTP_FI] 12XT passive, large bande, complément (fill)<br />
    045 [12XTP_FI_100] 12XT passive, HPF=100 Hz, complément (fill)<br />
    046 [12XTP_FR] 12XT passive, large bande, façade (FOH)<br />
    047 [12XTP_FR_100] 12XT passive, HPF=100 Hz, façade (FOH)<br />
    048 [12XTP_MO] 12XT passive, large bande, retour de scène (monitor)<br />
    049 [12XTP_MO_100] 12XT passive, HPF=100 Hz, retour de scène (monitor)
  </div>
  <div>
    <h3>8XT</h3>
    050 [8XT_FI] 8XT, large bande, complément (fill)<br />
    051 [8XT_FI_100] 8XT, HPF=100 Hz, complément (fill)<br />
    052 [8XT_FR] 8XT, large bande, façade (FOH)<br />
    053 [8XT_FR_100] 8XT, HPF=100 Hz, façade (FOH)<br />
    054 [8XT_MO] 8XT, large bande, retour de scène (monitor)<br />
    055 [8XT_MO_100] 8XT, HPF=100 Hz, retour de scène (monitor)
    <h3>5XT</h3>
    056 [5XT] 5XT, large bande
    <h3>X4</h3>
    057 [X4] X4i, large bande

    <h3>115XT</h3>
    058 [115XT_FI] 115XT, large bande, complément (fill)<br />
    059 [115XT_FI_100] 115XT, HPF=100 Hz, complément (fill)<br />
    060 [115XT_FR] 115XT, large bande, façade (FOH)<br />
    061 [115XT_FR_100] 115XT, HPF=100 Hz, façade (FOH)<br />
    062 [115XT_MO] 115XT, large bande, retour de scène (monitor)<br />
    063 [115XT_MO_100] 115XT, HPF=100 Hz, retour de scène (monitor)
    <h3>MTD115bA</h3>
    064 [115bA_FI] MTD115b active, large bande, complément (fill)<br />
    065 [115bA_FI_100] MTD115b active, HPF=100 Hz, complément (fill)<br />
    066 [115bA_FR] MTD115b active, large bande, façade (FOH)<br />
    067 [115bA_FR_100] MTD115b active, HPF=100 Hz, façade (FOH)<br />
    068 [115bA_MO] MTD115b active, large bande, retour de scène (monitor)<br />
    069 [115bA_MO_100] MTD115b active, HPF=100 Hz, retour de scène (monitor)
    <h3>MTD115bP</h3>
    070 [115bP_FI] MTD115b passive, large bande, complément (fill)<br />
    071 [115bP_FI_100] MTD115b passive, HPF=100 Hz, complément (fill)<br />
    072 [115bP_FR] MTD115b passive, large bande, façade (FOH)<br />
    073 [115bP_FR_100] MTD115b passive, HPF=100 Hz, façade (FOH)<br />
    074 [115bP_MO] MTD115b passive, large bande, retour de scène (monitor)<br />
    075 [115bP_MO_100] MTD115b passive, HPF=100 Hz, retour de scène (monitor)
    <h3>112XT</h3>
    076 [112XT_FI] 112XT, large bande, complément (fill)<br />
    077 [112XT_FI_100] 112XT, HPF=100 Hz, complément (fill)<br />
    078 [112XT_FR] 112XT, large bande, façade (FOH)<br />
    079 [112XT_FR_100] 112XT, HPF=100 Hz, façade (FOH)<br />
    080 [112XT_MO] 112XT, large bande, retour de scène (monitor)<br />
    081 [112XT_MO_100] 112XT, HPF=100 Hz, retour de scène (monitor)
    <h3>MTD112b</h3>
    082 [112b_FI] MTD112b, large bande, complément (fill)<br />
    083 [112b_FI_100] MTD112b, HPF=100 Hz, complément (fill)<br />
    084 [112b_FR] MTD112b, large bande, façade (FOH)<br />
    085 [112b_FR_100] MTD112b, HPF=100 Hz, façade (FOH)<br />
    086 [112b_MO] MTD112b, large bande, retour de scène (monitor)<br />
    087 [112b_MO_100] MTD112b, HPF=100 Hz, retour de scène (monitor)

    <h3>MTD108a</h3>
    088 [108a_FI] MTD108a, large bande, complément (fill)<br />
    089 [108a_FI_100] MTD108a, HPF=100 Hz, complément (fill)<br />
    090 [108a_FR] MTD108a, large bande, façade (FOH)<br />
    091 [108a_FR_100] MTD108a, HPF=100 Hz, façade (FOH)<br />
    092 [108a_MO] MTD108a, large bande, retour de scène (monitor)<br />
    093 [108a_MO_100] MTD108a, HPF=100 Hz, retour de scène (monitor) FLAT<br />
    094 [FLAT_LA4] EQ réponse plate, protection minimisant les risques de
    saturation
  </div>
</template>

<script>
export default {
  name: "La4"
};
</script>

<style>
@import "../../assets/style/stylepresets.css";
</style>
