<template>
  <div class="container">
    <div class="bar">
      <img class="imheader" src="../assets/img-hp/prealignement.png" />
    </div>
    <div class="procedure-usage-button">
      <button class="button-infos-etc" v-on:click="usage('isHidenProcedure')">
        Procédure
      </button>

      <button class="button-infos-etc" v-on:click="usage('isHidenUsage')">
        Usage
      </button>
      <button class="button-infos-etc" v-on:click="usage('')">fermer</button>
    </div>
    <div class="procedure" v-if="buttonHiden == 'isHidenProcedure'">
      <h4>Procédure</h4>
      *utilisez le point à la place de la virgule pour les valeurs de A ou B ex:
      12.5 et non 12,5
      <p>Pour mettre en phase le système pleine bande A et les Sub B</p>
      <p>
        P : point d'écoute de référence <br />
        A : distance entre P et le centre du système <br />
        B : distance entre P et les Sub
      </p>
      <p>
        1. Mesurer la distace A et B puis entrer les valeurs dans les cases
        correspondantes.<br />
        Le programme calcule automatiquement la différence de marche en mètre
        A-B (Le résultat sera positif ou négatif) ainsi que la correspondance en
        ms<br />

        <i
          >Ces valeurs sont obtenu avec une vitesse du son ≈ 340 m.s-1 à 20°C
          dans un air sec.</i
        ><br />
        2. Cliquer juste en dessous, sur le type de système que vous utilisez,
        et choisissez la ligne correspondant à votre modèle de Sub puis reporter
        la valeur de delay en ms dans la case prévue juste au dessus. (pas
        nécéssaire de taper la valeur 0)<br />
        3. Cliquer sur "calculez" et penser à inverser la phase si le signe
        <span class="polarite">-</span> est présent.
      </p>
    </div>
    <div class="usage" v-if="buttonHiden == 'isHidenUsage'">
      <p>
        <strong>
          Typiquement indispensable pour faire vite et bien, si vous avez un
          drums fil ou par exemple des ArcsII posés sur des SB28 en side ou
          comme système principal</strong
        ><br />
        Dans ce cas A-B = 0:<br />
        il suffit de sélectioner "Arcs" puis SB28 avec le type de configuration
        choisit : [ARCS_II] + [SB28_60]
        <strong>ARCS II = 0 ms SB28 = 2 ms</strong><br />
        Dans ce cas il faut 2ms de delay sur les SB28<br /><br />
        Par contre, en mode cardio c'est les ARCS qu'il faut delayer de 3.5ms<br />
        [ARCS_II] + [SB28_60_C]
        <strong>ARCS II = 3.5 ms SB28 = 0 ms</strong> <br /><br />
        [ARCS_II] + [SB28_60_Cx] ARCS II = 7.5 ms SB28 = 0 ms
        <span class="polarite">-</span><br />
        et surtout dans ce cas ne pas oublier d'inverser la phase comme
        l'indique le symbole
        <span class="polarite">-</span>
      </p>
      <h3>Si A différent de B suivre la "Procédure"</h3>

      -----------------------------------------------------------
    </div>

    <!-- calculez différence de marche -->
    <div>
      <div class="calcul-container">
        <div>
          <h3>Calculez:</h3>
          <label>A</label>
          <input v-model.number="inputa" placeholder=" système" />
          <label>B</label>
          <input v-model.number="inputb" placeholder=" Sub" />
          <button @click="reset()">Reset</button>
        </div>
        <div class="result">
          <h3>{{ result }} m | {{ Math.abs(resultMs).toFixed(2) }} ms</h3>
        </div>
        <div class="calcul-system">
          <div>
            <p>Entrez la valeurs en ms <br />selon votre configuration:</p>
          </div>
          <div style="padding: 0px 10px">
            <input v-model.number="inputc" placeholder="système" />
            <input v-model.number="inputd" placeholder="sub" />
            <button @click="resultDelayButton()">Calculez</button>
          </div>
        </div>

        <div v-if="delayButton">
          <h2>Delay à utiliser: {{ resultDelay }}</h2>
        </div>
      </div>
      <!-- select HP -->
      <div>
        <h3 v-if="buttonHp == ''">Sélectionnez un système d'enceintes</h3>
      </div>
      <div class="choix-hp">
        <button @click="show('k1')">K1</button
        ><button @click="show('k2')">K2</button
        ><button @click="show('k3')">K3</button
        ><button @click="show('kudo')">Kudo</button
        ><button @click="show('kara')">Kara</button
        ><button @click="show('karaII')">KaraII</button
        ><button @click="show('vdosc')">vdosc</button
        ><button @click="show('dVDosc')">dVdosc</button
        ><button @click="show('kiva')">Kiva</button
        ><button @click="show('a1510')">A15-10</button>
        <button @click="show('arcs')">Arcs</button>
        <button @click="show('seriex')">série X</button>
        <button @click="show('mtd')">Mtd</button>
      </div>
      <div></div>
      <div style="text-align: left">
        <div v-if="buttonHp == 'k1'">
          <h3>Systèmes WST à courbure variable</h3>
          <h3>K1 + K1-SB</h3>

          <p>
            [K1] + [K1SB_X] K1 = 0 ms K1-SB = 0 ms<br />
            [K1] + [K1SB_60] K1 = 6 ms K1-SB = 0 ms<br />
          </p>
          <h3>K1 + SB28</h3>

          <p>
            [K1] + [SB28_60] K1 = 0.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [SB28_60_C] K1 = 6 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [SB28_60_Cx] K1 = 4 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
          </p>
          <h3>K1 + KS28</h3>

          <p>
            [K1] + [KS28_60] K1 = 0.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [KS28_60_C] K1 = 6 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [KS28_60_Cx] K1 = 4 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
          </p>
          <h3>K1 + K1-SB + SB28</h3>

          <p>
            [K1] + [K1SB_X] + [SB28_60] K1 = 0 ms K1-SB = 0 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_X] + [SB28_60_C] K1 = 5.5 ms K1-SB = 5.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />

            [K1] + [K1SB_X] + [SB28_60_Cx] K1 = 3.5 ms K1-SB = 3.5 ms SB28 = 0
            ms
            <span class="polarite">-</span><br />

            [K1] + [K1SB_60] + [SB28_60] K1 = 6 ms K1-SB = 0 ms SB28 = 6 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_60] + [SB28_60_C] K1 = 6 ms K1-SB = 0 ms SB28 = 0.5 ms
            <span class="polarite">-</span><br />

            [K1] + [K1SB_60] + [SB28_60_Cx] K1 = 6 ms K1-SB = 0 ms SB28 = 4 ms
            <span class="polarite">-</span><br />
          </p>
          <h3>K1 + K1-SB + KS28</h3>

          <p>
            [K1] + [K1SB_X] + [KS28_60] K1 = 0 ms K1-SB = 0 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_X] + [KS28_60_C] K1 = 5.5 ms K1-SB = 5.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_X] + [KS28_60_Cx] K1 = 3.5 ms K1-SB = 3.5 ms KS28 = 0
            ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_60] + [KS28_60] K1 = 6 ms K1-SB = 0 ms KS28 = 6 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_60] + [KS28_60_C] K1 = 6 ms K1-SB = 0 ms KS28 = 0.5 ms
            <span class="polarite">-</span><br />
            [K1] + [K1SB_60] + [KS28_60_Cx] K1 = 6 ms K1-SB = 0 ms KS28 = 4 ms
            <span class="polarite">-</span><br />
          </p>
        </div>
        <div v-if="buttonHp == 'k2'">
          <h3>K2 + K1-SB</h3>

          <p>
            [K2] + [K1SB_X K2] K2 = 0 ms K1-SB = 0 ms<br />
            [K2] + [K1SB_60] K2 = 6 ms K1-SB = 0 ms<br />
          </p>

          <h3>K2 + SB28</h3>

          <p>
            [K2] + [SB28_60] K2 = 0.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [K2] + [SB28_60_C] K2 = 6 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [K2] + [SB28_60_Cx] K2 = 4 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
          </p>
          <h3>K2 + KS28</h3>

          <p>
            [K2] + [KS28_60] K2 = 0.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K2] + [KS28_60_C] K2 = 6 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [K2] + [KS28_60_Cx] K2 = 4 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
          </p>

          <h3>K2 + K1-SB + SB28</h3>

          <p>
            [K2] + [K1SB_X K2] + [SB28_60] K2 = 0 ms K1-SB = 0 ms SB28 = 0
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_X K2] + [SB28_60_C] K2 = 5.5 ms K1-SB = 5.5 ms SB28 = 0
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_X K2] + [SB28_60_Cx] K2 = 3.5 ms K1-SB = 3.5 ms SB28 =
            0 ms<span class="polarite">-</span><br />
            [K2] + [K1SB_60] + [SB28_60] K2 = 6 ms K1-SB = 0 ms SB28 = 6 ms<span
              class="polarite"
              >-</span
            ><br />
            [K2] + [K1SB_60] + [SB28_60_C] K2 = 6 ms K1-SB = 0 ms SB28 = 0.5
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_60] + [SB28_60_Cx] K2 = 6 ms K1-SB = 0 ms SB28 = 4 ms

            <span class="polarite">-</span><br />
          </p>
          <h3>K2 + K1-SB + KS28</h3>

          <p>
            [K2] + [K1SB_X K2] + [KS28_60] K2 = 0 ms K1-SB = 0 ms KS28 = 0
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_X K2] + [KS28_60_C] K2 = 5.5 ms K1-SB = 5.5 ms KS28 = 0
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_X K2] + [KS28_60_Cx] K2 = 3.5 ms K1-SB = 3.5 ms KS28 =
            0 ms<span class="polarite">-</span><br />
            [K2] + [K1SB_60] + [KS28_60] K2 = 6 ms K1-SB = 0 ms KS28 = 6 ms<span
              class="polarite"
              >-</span
            ><br />
            [K2] + [K1SB_60] + [KS28_60_C] K2 = 6 ms K1-SB = 0 ms KS28 = 0.5
            ms<span class="polarite">-</span><br />
            [K2] + [K1SB_60] + [KS28_60_Cx] K2 = 6 ms K1-SB = 0 ms KS28 = 4
            ms<span class="polarite">-</span><br />
          </p>
        </div>
        <div v-if="buttonHp == 'k3'">
          <h3>K3 + KS28</h3>

          <p>
            [K3] + [KS28_60] K3 = 0.5 ms KS28 = 0 ms<span class="polarite"
              >-</span
            ><br />
            [K3] + [KS28_60_C] K3 = 6 ms KS28 = 0 ms<span class="polarite"
              >-</span
            ><br />
            [K3] + [KS28_60_Cx] K3 = 4 ms KS28 = 0 ms<span class="polarite"
              >-</span
            ><br />
          </p>
          <h3>K3 + KS21</h3>

          <p>
            [K3] + [KS21_60] K3 = 0 ms KS21 = 0 ms<span class="polarite">-</span
            ><br />
            [K3] + [KS21_60_C] K3 = 5.5 ms KS21 = 0 ms<span class="polarite"
              >-</span
            ><br />
            [K3] + [KS21_60_Cx] K3 = 5 ms KS21 = 0 ms<br />
          </p>
        </div>
        <div v-if="buttonHp == 'kudo'">
          <h3>Kudo + SB118</h3>

          <p>
            [KUDOxx_60] + [SB118_60] Kudo = 0 ms SB118 = 3.5 ms<br />
            [KUDOxx_60] + [SB118_60_C] Kudo = 2 ms SB118 = 0 ms<br />
          </p>
          <h3>Kudo + SB18</h3>

          <p>
            [KUDOxx_60] + [SB18_60] Kudo = 0 ms SB18 = 3.9 ms<br />
            [KUDOxx_60] + [SB18_60_C] Kudo = 1.6 ms SB18 = 0 ms<br />
          </p>
          <h3>Kudo + SB218</h3>

          <p>[KUDOxx_60] + [SB218_60] Kudo = 0 ms SB218 = 5 ms</p>
          <br />
          <h3>Kudo + SB28</h3>
          <p>
            [KUDOxx_60] + [SB28_60] Kudo = 0 ms SB28 = 5 ms<br />
            [KUDOxx_60] + [SB28_60_C] Kudo = 0.5 ms SB28 = 0 ms<br />
          </p>
          <h3>Kudo + KS28</h3>

          <p>
            [KUDOxx_60] + [KS28_60] Kudo = 0 ms KS28 = 5 ms<br />
            [KUDOxx_60] + [KS28_60_C] Kudo = 0.5 ms KS28 = 0 ms<br />
          </p>
        </div>

        <div v-if="buttonHp == 'kara'">
          <h3>Kara + SB18</h3>

          <p>
            [KARA] + [SB18_100] Kara = 0 ms SB18 = 0 ms<br />
            [KARA_FI] + [SB18_100] Kara = 3 ms<br />
            SB18 = 0 ms [KARA] + [SB18_100_C] Kara = 5.5 ms<br />
            SB18 = 0 ms [KARA] + [SB18_100_Cx] Kara = 4 ms SB18 = 0 ms
            <span class="polarite">-</span><br />

            [KARA_FI] + [SB18_100_C] Kara = 8.5 ms<br />
            SB18 = 0 ms [KARA_FI] + [SB18_100_Cx] Kara = 7 ms SB18 = 0 ms
            <span class="polarite">-</span><br />

            [KARA] + [SB18_60] Kara = 2.5 ms SB18 = 0 ms<br />
            [KARA] + [SB18_60_C] Kara = 8 ms<br />
            SB18 = 0 ms [KARA] + [SB18_60_Cx] Kara = 6.5 ms SB18 = 0 ms
            <span class="polarite">-</span>
          </p>

          <h3>Kara + KS21</h3>

          <p>
            [KARA] + [KS21_60] Kara = 0.5 ms KS21 = 0 ms<br />
            [KARA] + [KS21_60_C] Kara = 6 ms KS21 = 0 ms<br />
            [KARA] + [KS21_60_Cx] Kara = 5.5 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [KARA] + [KS21_100] Kara = 0 ms KS21 = 0.5 ms<br />
            [KARA] + [KS21_100_C] Kara = 5 ms KS21 = 0 ms<br />
            [KARA] + [KS21_100_Cx] Kara = 4 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [KARA_FI] + [KS21_100] Kara = 0 ms KS21 = 2.5 ms
            <span class="polarite">-</span><br />
            [KARA_FI] + [KS21_100_C] Kara = 3 ms <span class="polarite">-</span
            ><br />
            KS21 = 0 ms [KARA_FI] + [KS21_100_Cx] Kara = 2 ms KS21 = 0 ms
          </p>
          <h3>Kara + SB28</h3>

          <p>
            [KARA] + [SB28_100] Kara = 0 ms SB28 = 1 ms<br />
            [KARA] + [SB28_100_C] Kara = 4.5 ms SB28 = 0 ms<br />
            [KARA] + [SB28_100_Cx] Kara = 7.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA] + [SB28_60] Kara = 0 ms SB28 = 5 ms
            <span class="polarite">-</span><br />
            [KARA] + [SB28_60_C] Kara = 0.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA] + [SB28_60_Cx] Kara = 4.5 ms SB28 = 0 ms
          </p>

          <h3>Kara + KS28</h3>

          <p>
            [KARA] + [KS28_100] Kara = 0 ms KS28 = 1 ms<br />
            [KARA] + [KS28_100_C] Kara = 4.5 ms KS28 = 0 ms<br />
            [KARA] + [KS28_100_Cx] Kara = 7.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA] + [KS28_60] Kara = 0 ms KS28 = 5 ms
            <span class="polarite">-</span><br />
            [KARA] + [KS28_60_C] Kara = 0.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA] + [KS28_60_Cx] Kara = 4.5 ms KS28 = 0 ms
          </p>

          <h3>Kara + SB18 + SB28</h3>
          <p>
            [KARA] + [SB18_100] + [SB28_60] Kara = 0 ms SB18 = 0 ms SB28 = 5.5
            ms
            <span class="polarite">-</span><br />
            [KARA] + [SB18_100] + [SB28_60_C] Kara = 0 ms SB18 = 0 ms SB28 = 0
            ms
            <span class="polarite">-</span> <br />
            [KARA] + [SB18_100] + [SB28_60_Cx] Kara = 5.5 ms SB18 = 5.5 ms SB28
            = 0 ms
          </p>

          <h3>Kara + SB18 + KS28</h3>
          <p>
            [KARA] + [SB18_100] + [KS28_60] Kara = 0 ms SB18 = 0 ms KS28 = 5.5
            ms
            <span class="polarite">-</span><br />
            [KARA] + [SB18_100] + [KS28_60_C] Kara = 0 ms SB18 = 0 ms KS28 = 0
            ms
            <span class="polarite">-</span><br />
            [KARA] + [SB18_100] + [KS28_60_Cx] Kara = 5.5 ms SB18 = 5.5 ms KS28
            = 0 ms
          </p>
          <div>
            <h3>Kara + KS21 + SB28</h3>

            <p>
              [ KARA] + [KS21_100] + [SB28_60] Kara = 0 ms KS21 = 0.5 ms SB28 =
              5.5 ms <span class="polarite">-</span><br />
              [KARA] + [KS21_100] + [SB28_60_C] Kara = 0 ms KS21 = 0.5 ms
              <span class="polarite">-</span><br />
              SB28 = 0 ms [KARA] + [KS21_100] + [SB28_60_Cx] Kara = 5.5 ms<br />
              KS21 = 6 ms SB28 = 0 ms
            </p>

            <h3>Kara + KS21 + KS28</h3>

            <p>
              [KARA] + [KS21_100] + [KS28_60] Kara = 0 ms KS21 = 0 ms KS28 = 5.5
              ms <span class="polarite">-</span><br />
              [KARA] + [KS21_100] + [KS28_60_C] Kara = 0 ms
              <span class="polarite">-</span><br />
              KS21 = 0.5 ms KS28 = 0 ms [KARA] + [KS21_100] + [KS28_60_Cx] Kara
              = 5.5 ms<br />
              KS21 = 6 ms KS28 = 0 ms
            </p>
          </div>
        </div>
        <div v-if="buttonHp == 'karaII'">
          <h3>Kara II + SB18</h3>

          <p>
            [KARA II] + [SB18_100] Kara II = 0 ms SB18 = 0 ms<br />
            [KARA_II_FI] + [SB18_100] Kara II = 3 ms SB18 = 0 ms <br />[KARA II]
            + [SB18_100_C] Kara II = 5.5 ms SB18 = 0 ms<br />
            [KARA II] + [SB18_100_Cx] Kara II = 4 ms SB18 = 0 ms
            <span class="polarite">-</span><br />
            [KARA_II_FI] + [SB18_100_C] Kara II = 8.5 ms SB18 = 0 ms<br />
            [KARA_II_FI] + [SB18_100_Cx] Kara II = 7 ms SB18 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [SB18_60] Kara II = 2.5 ms SB18 = 0 ms<br />
            [KARA II] + [SB18_60_C] Kara II = 8 ms SB18 = 0 ms<br />
            [KARA II] + [SB18_60_Cx] Kara II = 6.5 ms SB18 = 0 ms
            <span class="polarite">-</span>
          </p>

          <h3>Kara II + KS21</h3>

          <p>
            [KARA II] + [KS21_60] Kara II = 0.5 ms KS21 = 0 ms<br />
            [KARA II] + [KS21_60_C] Kara II = 6 ms KS21 = 0 ms<br />
            [KARA II] + [KS21_60_Cx] Kara II = 5.5 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [KS21_100] Kara II = 0 ms KS21 = 0.5 ms <br />
            [KARA II] + [KS21_100_C] Kara II = 5 ms KS21 = 0 ms<br />
            [KARA II] + [KS21_100_Cx] Kara II = 4 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [KARA_II_FI] + [KS21_100] Kara II = 0 ms KS21 = 2.5 ms
            <span class="polarite">-</span><br />
            [KARA_II_FI] + [KS21_100_C] Kara II = 3 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [KARA_II_FI] + [KS21_100_Cx] Kara II = 2 ms KS21 = 0 ms
          </p>
          <h3>Kara II + SB28</h3>

          <p>
            [KARA II] + [SB28_100] Kara II = 0 ms SB28 = 1 ms<br />
            [KARA II] + [SB28_100_C] Kara II = 4.5 ms SB28 = 0 ms<br />
            [KARA II] + [SB28_100_Cx] Kara II = 7.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [SB28_60] Kara II = 0 ms SB28 = 5 ms
            <span class="polarite">-</span><br />
            [KARA II] + [SB28_60_C] Kara II = 0.5 ms SB28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [SB28_60_Cx] Kara II = 4.5 ms SB28 = 0 ms
          </p>

          <h3>Kara II + KS28</h3>

          <p>
            [KARA II] + [KS28_100] Kara II = 0 ms KS28 = 1 ms <br />
            [KARA II] + [KS28_100_C] Kara II = 4.5 ms KS28 = 0 ms <br />
            [KARA II] + [KS28_100_Cx] Kara II = 7.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [KS28_60] Kara II = 0 ms KS28 = 5 ms
            <span class="polarite">-</span><br />
            [KARA II] + [KS28_60_C] Kara II = 0.5 ms KS28 = 0 ms
            <span class="polarite">-</span><br />
            [KARA II] + [KS28_60_Cx] Kara II = 4.5 ms KS28 = 0 ms
          </p>

          <h3>Kara II + SB18 + SB28</h3>

          <p>
            [KARA II] + [SB18_100] + [SB28_60] Kara II = 0 ms SB18 = 0 ms SB28 =
            5.5 ms <span class="polarite">-</span><br />
            [KARA II] + [SB18_100] + [SB28_60_C] Kara II = 0 ms SB18 = 0 ms SB28
            = 0 ms <span class="polarite">-</span><br />
            [KARA II] + [SB18_100] + [SB28_60_Cx] Kara II = 5.5 ms SB18 = 5.5 ms
            SB28 = 0 ms
          </p>
          <h3>Kara II + SB18 + KS28</h3>
          <p>
            [KARA II] + [SB18_100] + [KS28_60] Kara II = 0 ms SB18 = 0 ms KS28 =
            5.5 ms <span class="polarite">-</span><br />
            [KARA II] + [SB18_100] + [KS28_60_C] Kara II = 0 ms SB18 = 0 ms KS28
            = 0 ms <span class="polarite">-</span><br />
            [KARA II] + [SB18_100] + [KS28_60_Cx] Kara II = 5.5 ms SB18 = 5.5 ms
            KS28 = 0 ms
          </p>
          <h3>Kara II + KS21 + SB28</h3>
          <p>
            [KARA II] + [KS21_100] + [SB28_60] Kara II = 0 ms KS21 = 0.5 ms SB28
            = 5.5 ms <span class="polarite">-</span><br />
            [KARA II] + [KS21_100] + [SB28_60_C] Kara II = 0 ms KS21 = 0.5 ms
            SB28 = 0 ms <span class="polarite">-</span><br />
            [KARA II] + [KS21_100] + [SB28_60_Cx] Kara II = 5.5 ms KS21 = 6 ms
            SB28 = 0 ms
          </p>

          <h3>Kara II + KS21 + KS28</h3>
          <p>
            [KARA II] + [KS21_100] + [KS28_60] Kara II = 0 ms KS21 = 0 ms KS28 =
            5.5 ms <span class="polarite">-</span><br />
            [KARA II] + [KS21_100] + [KS28_60_C] Kara II = 0 ms KS21 = 0.5 ms
            KS28 = 0 ms <span class="polarite">-</span><br />[KARA II] +
            [KS21_100] + [KS28_60_Cx] Kara II = 5.5 ms KS21 = 6 ms KS28 = 0 ms
            Kiva + Kilo
          </p>
        </div>

        <div v-if="buttonHp == 'kiva'">
          <h3>Kiva + Kilo</h3>
          <p>[KIVA] + [KILO] Kiva = 0 ms Kilo = 1.5 ms</p>

          <h3>Kiva/Kilo + SB118</h3>
          <p>
            [KIVA_KILO] + [SB118_60] Kiva/Kilo = 0 ms SB118 = 5.9 ms
            <br />[KIVA_KILO] + [SB118_60_C] Kiva/Kilo = 0 ms SB118 = 0.4 ms
          </p>
          <h3>Kiva/Kilo + SB18</h3>

          <p>
            [KIVA_KILO] + [SB18_60] Kiva/Kilo = 0 ms SB18 = 6.3 ms
            <br />[KIVA_KILO] + [SB18_60_C] Kiva/Kilo = 0 ms SB18 = 0.8 ms
          </p>
          <h3>Kiva + SB15m</h3>

          <p>
            [KIVA] + [SB15_100] Kiva = 0 ms SB15m = 1.4 ms <br />[KIVA] +
            [SB15_100_C] Kiva = 2.4 ms SB15m = 0 ms <br />[KIVA_FI] + [SB15_100]
            Kiva = 0 ms SB15m = 0.6 ms
          </p>

          <h3>Kiva/SB15m + SB18</h3>

          <p>
            [KIVA_SB15] + [SB18_60] Kiva/SB15m = 0 ms SB18 = 8.5 ms [KIVA_SB15]
            + [SB18_60_C] Kiva/SB15m = 0 ms SB18 = 3 ms
          </p>

          <h3>Kiva II + SB15m</h3>

          <p>
            [KIVA II] + [SB15_100] Kiva II = 0 ms SB15m = 1 ms <br />
            [KIVA II] + [SB15_100_C] Kiva II = 2.5 ms SB15m = 0 ms<br />
            [KIVA II] + [SB15_100_Cx] Kiva II = 4.5 ms SB15m = 0 ms
            <span class="polarite">-</span><br />
            [KIVA II_FI] + [SB15_100] Kiva II = 0 ms SB15m = 1 ms <br />
            [KIVA II_FI] + [SB15_100_C] Kiva II = 2.5 ms SB15m = 0 ms<br />
            [KIVA II_FI] + [SB15_100_Cx] Kiva II = 5 ms SB15m = 0 ms
            <span class="polarite">-</span>
          </p>
          <h3>Kiva II + SB15m + SB18</h3>

          <p>
            [KIVA II] + [SB15_100] + [SB18_60] Kiva II = 0 ms SB15m = 1 ms SB18
            = 1 ms <span class="polarite">-</span><br />
            [KIVA II] + [SB15_100] + [SB18_60_C] Kiva II = 4.5 ms SB15m = 5.5 ms
            SB18 = 0 ms <span class="polarite">-</span><br />
            [KIVA II] + [SB15_100] + [SB18_60_Cx] Kiva II = 1 ms SB15m = 2 ms
            SB18 = 0 ms <br />
            [KIVA II] + [SB15_100_C] + [SB18_60] Kiva II = 2.5 ms SB15m = 0 ms
            SB18 = 3.5 ms <span class="polarite">-</span><br />
            [KIVA II] + [SB15_100_C] + [SB18_60_C] Kiva II = 4.5 ms SB15m = 2 ms
            SB18 = 0 ms <span class="polarite">-</span><br />
            [KIVA II] + [SB15_100_C] + [SB18_60_Cx] Kiva II = 3 ms SB15m = 0.5
            ms SB18 = 0 ms
          </p>
        </div>
        <div v-if="buttonHp == 'vdosc'">
          <h3>V-DOSC + SB218</h3>

          <p>
            [V-DOSC_xx_X] + [SB218_X] V-DOSC = 1.8 ms SB218 = 0 ms
            [V-DOSC_xx_60] + [SB218_60] V-DOSC = 0 ms SB218 = 3.8 ms
          </p>
          <h3>V-DOSC + SB28</h3>

          <p>
            [V-DOSC_xx_60] + [SB28_60] V-DOSC = 0 ms SB28 = 3.8 ms
            [V-DOSC_xx_60] + [SB28_60_C] V-DOSC = 1.7 ms SB28 = 0 ms
          </p>

          <h3>V-DOSC + KS28</h3>

          <p>
            [V-DOSC_xx_60] + [KS28_60] V-DOSC = 0 ms KS28 = 3.8 ms
            [V-DOSC_xx_60] + [KS28_60_C] V-DOSC = 1.7 ms KS28 = 0 ms
          </p>
          <h3>V-DOSC + dV-SUB</h3>

          <p>[V-DOSC_xx_X] + [dV-S_X] V-DOSC = 0 ms dV-SUB = 0.2 ms</p>
          <h3>V-DOSC + dV-SUB + SB218</h3>

          <p>
            [V-DOSC_xx_60] + [dV-S_60_ X] + [SB218_60] V-DOSC = 0 ms dV-SUB =
            0.2 ms SB218 = 3.7 ms
          </p>
          <h3>V-DOSC + dV-SUB + SB28</h3>

          <p>
            [V-DOSC_xx_60] + [dV-S_60_ X] + [SB28_60] V-DOSC = 0 ms dV-SUB = 0.2
            ms SB28 = 3.7 ms [V-DOSC_xx_60] + [dV-S_60_ X] + [SB28_60_C] V-DOSC
            = 1.9 ms dV-SUB = 2 ms SB28 = 0 ms
          </p>
          <h3>V-DOSC + dV-SUB + KS28</h3>

          <p>
            [V-DOSC_xx_60] + [dV-S_60_ X] + [KS28_60] V-DOSC = 0 ms dV-SUB = 0.2
            ms KS28 = 3.7 ms [V-DOSC_xx_60] + [dV-S_60_ X] + [KS28_60_C] V-DOSC
            = 1.9 ms dV-SUB = 2 ms KS28 = 0 ms
          </p>
          <h3>V-DOSC + dV-DOSC</h3>

          <p>[V-DOSC_xx_60] + [dV_xx_100] V-DOSC = 0 ms dV-DOSC = 0 ms</p>
          <h3>V-DOSC + dV-DOSC downfll</h3>

          <p>[V-DOSC_xx_60] + [dV_xx_100] V-DOSC = 0 ms dV-DOSC = 0.04 ms</p>

          <h3>dV-DOSC + SB118</h3>

          <p>
            [dV_xx_100] + [SB118_100] dV = 2.7 ms SB118 = 0 ms [dV_xx_100] +
            [SB118_100_C] dV = 8.3 ms SB118 = 0 ms
          </p>
        </div>
        <div v-if="buttonHp == 'dVDosc'">
          <h3>dV-DOSC + SB218</h3>

          <p>[dV_xx_100] + [SB218_100] dV = 0.8 ms SB218 = 0 ms</p>
          <h3>dV-DOSC + SB18</h3>

          <p>
            [dV_xx_100] + [SB18_100] dV = 2.4 ms SB18 = 0 ms [dV_xx_100] +
            [SB18_100_C] dV = 8 ms SB18 = 0 ms
          </p>
          <h3>dV-DOSC + SB28</h3>

          <p>
            [dV_xx_100] + [SB28_100] dV = 0.8 ms SB28 = 0 ms [dV_xx_100] +
            [SB28_100_C] dV = 6.3 ms SB28 = 0 ms
          </p>
          <h3>dV-DOSC + KS28</h3>

          <p>
            [dV_xx_100] + [KS28_100] dV = 0.8 ms KS28 = 0 ms [dV_xx_100] +
            [KS28_100_C] dV = 6.3 ms KS28 = 0 ms
          </p>
          <h3>dV-DOSC + dV-SUB</h3>

          <p>[dV_xx_100] + [dV-S_100] dV = 0 ms dV-SUB = 0 ms</p>
          <h3>dV-DOSC + dV-SUB + SB118</h3>

          <p>
            [dV_xx100] + [dV-S_60_100] + [SB118_60] dV = 0 ms dV-SUB = 0.75 ms
            SB118 = 4 ms [dV_xx_100] + [dV-S_60_100] + [SB118_60_C] dV = 1.5 ms
            dV-SUB = 2.25 ms SB118 = 0 ms
          </p>

          <h3>dV-DOSC + dV-SUB + SB218</h3>

          <p>
            [dV_xx_100] + [dV-S_60_100] + [SB218_60] dV = 0 ms dV-SUB = 0.75 ms
            SB218 = 4.5 ms
          </p>
          <h3>dV-DOSC + dV-SUB + SB18</h3>

          <p>
            [dV_xx_100] + [dV-S_60_100] + [SB18_60] dV = 0 ms dV-SUB = 0.75 ms
            SB18 = 4.4 ms [dV_xx_100] + [dV-S_60_100] + [SB18_60_C] dV = 1.1 ms
            dV-SUB = 1.85 ms SB18 = 0 ms
          </p>
          <h3>dV-DOSC + dV-SUB + SB28</h3>

          <p>
            [dV_xx_100] + [dV-S_60_100] + [SB28_60] dV = 0 ms dV-SUB = 0.75 ms
            SB28 = 4.5 ms [dV_xx_100] + [dV-S_60_100] + [SB28_60_C] dV = 1 ms
            dV-SUB = 1.75 ms SB28 = 0 ms
          </p>
          <h3>dV-DOSC + dV-SUB + KS28</h3>

          <p>
            [dV_xx_100] + [dV-S_60_100] + [KS28_60] dV = 0 ms dV-SUB = 0.75 ms
            KS28 = 4.5 ms <br />
            [dV_xx_100] + [dV-S_60_100] + [KS28_60_C] dV = 1 ms dV-SUB = 1.75 ms
            KS28 = 0 ms
          </p>
        </div>
        <div v-if="buttonHp == 'arcs'">
          <h3>Systèmes WST à courbure constante ARCS + SB118</h3>

          <p>
            [ARCS_xx_60] + [SB118_60] ARCS = 0.8 ms SB118 = 0 ms
            <br />[ARCS_xx_60] + [SB118_60_C] ARCS = 6.3 ms SB118 = 0 ms <br />
            [ARCS_xx_100] + [SB118_100] ARCS = 1.4 ms SB118 = 0 ms <br />
            [ARCS_xx_100] + [SB118_100_C] ARCS = 6.9 ms SB118 = 0 ms
          </p>

          <h3>ARCS + SB18</h3>

          <p>
            [ARCS_xx_60] + [SB18_60] ARCS = 0.4 ms SB18 = 0 ms <br />
            [ARCS_xx_60] + [SB18_60_C] ARCS = 5.9 ms SB18 = 0 ms <br />
            [ARCS_xx_100] + [SB18_100] ARCS = 1.1 ms SB18 = 0 ms <br />
            [ARCS_xx_100] + [SB18_100_C] ARCS = 6.6 ms SB18 = 0 ms
          </p>
          <h3>ARCS + SB218</h3>

          <p>
            [ARCS_xx_60] + [SB218_60] ARCS = 0 ms SB218 = 0.9 ms<br />
            [ARCS_xx_100] + [SB218_100] ARCS = 0 ms SB218 = 0.3 ms
          </p>
          <h3>ARCS + SB28</h3>

          <p>
            [ARCS_xx_60] + [SB28_60] ARCS = 0 ms SB28 = 0.6 ms<br />
            [ARCS_xx_60] + [SB28_60_C] ARCS = 4.9 ms SB28 = 0 ms<br />
            [ARCS_xx_100] + [SB28_100] ARCS = 0 ms SB28 = 0.5 ms<br />
            [ARCS_xx_100] + [SB28_100_C] ARCS = 5.0 ms SB28 = 0 ms
          </p>
          <h3>ARCS + KS28</h3>

          <p>
            [ARCS_xx_60] + [KS28_60] ARCS = 0 ms KS28 = 0.6 ms<br />
            [ARCS_xx_60] + [KS28_60_C] ARCS = 4.9 ms KS28 = 0 ms [ARCS_xx_100] +
            [KS28_100] ARCS = 0 ms KS28 = 0.5 ms<br />
            [ARCS_xx_100] + [KS28_100_C] ARCS = 5.0 ms KS28 = 0 ms
          </p>

          <h3>ARCS II + SB28</h3>

          <p>
            [ARCS_II] + [SB28_60] ARCS II = 0 ms SB28 = 2 ms<br />
            [ARCS_II] + [SB28_60_C] ARCS II = 3.5 ms SB28 = 0 ms<br />
            [ARCS_II] + [SB28_60_Cx] ARCS II = 7.5 ms SB28 = 0 ms
            <span class="polarite">-</span>
          </p>
          <h3>ARCS II + KS28</h3>

          <p>
            [ARCS_II] + [KS28_60] ARCS II = 0 ms KS28 = 2 ms<br />
            [ARCS_II] + [KS28_60_C] ARCS II = 3.5 ms KS28 = 0 ms<br />
            [ARCS_II] + [KS28_60_Cx] ARCS II = 7.5 ms KS28 = 0 ms
            <span class="polarite">-</span>
          </p>
          <h3>ARCS Wide/Focus + SB18m</h3>

          <p>
            [ARCS_WIFO] or [ARCS_WIFO_FI] + [SB18_60] ARCS Wide/Focus = 1.5 ms
            SB18m = 0 ms<br />
            [ARCS_WIFO] or [ARCS_WIFO_FI] + [SB18_60_C] ARCS Wide/Focus = 7 ms
            SB18m = 0 ms<br />
            [ARCS_WIFO] or [ARCS_WIFO_FI] + [SB18_60_Cx] ARCS Wide/Focus = 6 ms
            SB18m = 0 ms <span class="polarite">-</span>
          </p>
        </div>
        <div v-if="buttonHp == 'a1510'">
          <h3>A15 Wide/Focus + KS21</h3>

          <p>
            [ A15] or [A15_FI] + [KS21_60] A15 Wide/Focus = 3.5 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [A15] or [A15_FI] + [KS21_60_C] A15 Wide/Focus = 9 ms KS21 = 0 ms
            <span class="polarite">-</span><br />
            [A15] or [A15_FI] + [KS21_60_Cx] A15 Wide/Focus = 8 ms KS21 = 0 ms [
          </p>
          <h3>A10 Wide/Focus + KS21</h3>

          <p>
            [A10] or [A10_FI] + [KS21_100] A10 Wide/Focus = 0 ms KS21 = 0 ms<br />
            [A10] or [A10_FI] + [KS21_100_C] A10 Wide/Focus = 5.5 ms KS21 = 0
            ms<br />
            [A10] or [A10_FI] + [KS21_100_Cx] A10 Wide/Focus = 0 ms KS21 = 0 ms
          </p>
        </div>

        <div v-if="buttonHp == 'seriex'">
          <h3>X15 HiQ + SB18</h3>

          <p>
            [X15] + [SB18_100] X15 HiQ = 4 ms SB18 = 0 ms
            <span class="polarite">-</span><br />
            [X15_MO] + [SB18_100] X15 HiQ = 0 ms SB18 = 1 ms
          </p>
          <h3>X15 HiQ + KS21</h3>

          <p>
            [X15] + [KS21_100] X15 HiQ = 0 ms KS21 = 1.5 ms<br />
            [X15_MO] + [KS21_100] X15 HiQ = 0 ms KS21 = 1.5 ms
          </p>
          <h3>X12 + SB15m</h3>

          <p>
            [X12] + [SB15_100] X12 = 1.5 ms SB15m = 0 ms
            <span class="polarite">-</span><br />
            [X12_MO] + [SB15_100] X12 = 0 ms SB15m = 3 ms
          </p>
          <h3>X12 + SB18</h3>

          <p>
            [X12] + [SB18_100] X12 = 0 ms SB18 = 0 ms<br />
            [X12_MO] + [SB18_100] X12 = 0 ms SB18 = 0 ms
          </p>
          <h3>X12 + KS21</h3>

          <p>
            [X12] + [KS21_100] X12 = 0 ms KS21 = 1 ms<br />
            [X12_MO] + [KS21_100] X12 = 0 ms KS21 = 1 ms
          </p>

          <h3>X8 + SB15m</h3>

          <p>
            [X8] + [SB15_100] X8 = 2 ms SB15m = 0 ms
            <span class="polarite">-</span><br />
            [X8_MO] + [SB15_100] X8 = 0 ms SB15m = 3 ms
          </p>
          <h3>X4i + Syva Sub</h3>

          [X4] + [SYVA SUB_200] X4i = 0 ms Syva Sub = 0.5 ms
          <h3>115XT HiQ + SB118</h3>

          <p>
            [HIQ_FI_100] + [SB118_100] HiQ = 2.6 ms SB118 = 0 ms<br />
            [HIQ_FR_100] + [SB118_100] HiQ = 2.6 ms SB118 = 0 ms<br />
            [HIQ_MO_100] + [SB118_100] HiQ = 2.5 ms SB118 = 0 ms<br />
          </p>
          <h3>115XT HiQ + SB18</h3>

          <p>
            [HIQ_FI_100] + [SB18_100] HiQ = 2.3 ms SB18 = 0 ms<br />
            [HIQ_FR_100] + [SB18_100] HiQ = 2.3 ms SB18 = 0 ms<br />
            [HIQ_MO_100] + [SB18_100] HiQ = 2.2 ms SB18 = 0 ms<br />
          </p>
          <h3>115XT HiQ + dV-SUB</h3>

          <p>
            [HIQ_FI_100] + [dV-S_100] HiQ = 0.6 ms dV-SUB = 0 ms<br />
            [HIQ_FR_100] + [dV-S_100] HiQ = 0.6 ms dV-SUB = 0 ms<br />
            [HIQ_MO_100] + [dV-S_100] HiQ = 0.5 ms dV-SUB = 0 ms<br />
          </p>

          <h3>Active 12XT + SB118</h3>

          <p>
            [12XTA_FI_100] + [SB118_100] 12XTA = 2.6 ms SB118 = 0 ms<br />
            [12XTA_FR_100] + [SB118_100] 12XTA = 2.6 ms SB118 = 0 ms<br />
            [12XTA_MO_100] + [SB118_100] 12XTA = 2.5 ms SB118 = 0 ms<br />
          </p>
          <h3>Active 12XT + SB18</h3>

          <p>
            [12XTA_FI_100] + [SB18_100] 12XTA = 2.3 ms SB18 = 0 ms<br />
            [12XTA_FR_100] + [SB18_100] 12XTA = 2.3 ms SB18 = 0 ms<br />
            [12XTA_MO_100] + [SB18_100] 12XTA = 2.2 ms SB18 = 0 ms<br />
          </p>
          <h3>Passive 12XT + SB118</h3>

          <p>
            [12XTP_FI_100] + [SB118_100] 12XTP = 2.4 ms SB118 = 0 ms<br />
            [12XTP_FR_100] + [SB118_100] 12XTP = 2.4 ms SB118 = 0 ms<br />
            [12XTP_MO_100] + [SB118_100] 12XTP = 2.4 ms SB118 = 0 ms<br />
          </p>
          <h3>Passive 12XT + SB18</h3>

          <p>
            [12XTP_FI_100] + [SB18_100] 12XTP = 2.1 ms SB18 = 0 ms<br />
            [12XTP_FR_100] + [SB18_100] 12XTP = 2.1 ms SB18 = 0 ms<br />
            [12XTP_MO_100] + [SB18_100] 12XTP = 2.1 ms SB18 = 0 ms<br />
          </p>
          <h3>8XT + SB118</h3>

          <p>
            [8XT_FI_100] + [SB118_100] 8XT = 3.1 ms SB118 = 0 ms<br />
            [8XT_FR_100] + [SB118_100] 8XT = 3.2 ms SB118 = 0 ms<br />
            [8XT_MO_100] + [SB118_100] 8XT = 3.0 ms SB118 = 0 ms<br />
          </p>

          <h3>8XT + SB18</h3>

          <p>
            [8XT_FI_100] + [SB18_100] 8XT = 2.8 ms SB18 = 0 ms<br />
            [8XT_FR_100] + [SB18_100] 8XT = 2.9 ms SB18 = 0 ms<br />
            [8XT_MO_100] + [SB18_100] 8XT = 2.7 ms SB18 = 0 ms<br />
          </p>
          <h3>5XT + SB15m</h3>

          [5XT] + [SB15_100] 5XT = 0 ms SB15m = 0 ms
          <h3>115XT + SB118</h3>

          <p>
            [115XT_FI_100] + [SB118_100] 115XT = 2.6 ms SB118 = 0 ms<br />
            [115XT_FR_100] + [SB118_100] 115XT = 2.5 ms SB118 = 0 ms<br />
            [115XT_MO_100] + [SB118_100] 115XT = 2.9 ms SB118 = 0 ms
          </p>
          <h3>115XT + SB18</h3>

          <p>
            [115XT_FI_100] + [SB18_100] 115XT = 2.3 ms SB18 = 0 ms<br />
            [115XT_FR_100] + [SB18_100] 115XT = 2.2 ms SB18 = 0 ms<br />
            [115XT_MO_100] + [SB18_100] 115XT = 2.6 ms SB18 = 0 ms<br />
          </p>
        </div>

        <div v-if="buttonHp == 'mtd'">
          <h3>Active MTD115 + SB118</h3>

          <p>
            [115bA_FI_100] + [SB118_100] 115bA = 2.4 ms SB118 = 0 ms<br />
            [115bA_FR_100] + [SB118_100] 115bA = 2.5 ms SB118 = 0 ms<br />
            [115bA_MO_100] + [SB118_100] 115bA = 2.7 ms SB118 = 0 ms
          </p>

          <h3>Active MTD115 + SB18</h3>

          <p>
            [115bA_FI_100] + [SB18_100] 115bA = 2.1 ms SB18 = 0 ms<br />
            [115bA_FR_100] + [SB18_100] 115bA = 2 ms SB18 = 0 ms<br />
            [115bA_MO_100] + [SB18_100] 115bA = 2.4 ms SB18 = 0 ms
          </p>
          <h3>Passive MTD115 + SB118</h3>

          <p>
            [115bP_FI_100] + [SB118_100] 115bP = 2.1 ms SB118 = 0 ms<br />
            [115bP_FR_100] + [SB118_100] 115bP = 2.2 ms SB118 = 0 ms<br />
            [115bP_MO_100] + [SB118_100] 115bP = 2.8 ms SB118 = 0 ms
          </p>
          <h3>Passive MTD115 + SB18</h3>

          <p>
            [115bP_FI_100] + [SB18_100] 115bP = 1.8 ms SB18 = 0 ms<br />
            [115bP_FR_100] + [SB18_100] 115bP = 1.9 ms SB18 = 0 ms<br />
            [115bP_MO_100] + [SB18_100] 115bP = 2.5 ms SB18 = 0 ms
          </p>
          <h3>112XT + SB118</h3>

          <p>
            [112XT_FI_100] + [SB118_100] 112XT = 2.3 ms SB118 = 0 ms<br />
            [112XT_FR_100] + [SB118_100] 112XT = 2.3 ms SB118 = 0 ms<br />
            [112XT_MO_100] + [SB118_100] 112XT = 2.6 ms SB118 = 0 ms
          </p>
          <h3>112XT + SB18</h3>

          <p>
            [112XT_FI_100] + [SB18_100] 112XT = 2 ms SB18 = 0 ms<br />
            [112XT_FR_100] + [SB18_100] 112XT = 2 ms SB18 = 0 ms<br />
            [112XT_MO_100] + [SB18_100] 112XT = 2.3 ms SB18 = 0 ms
          </p>

          <h3>MTD112b + SB118</h3>

          <p>
            [112b_FI_100] + [SB118_100] 112b = 2.4 ms SB118 = 0 ms<br />
            [112b_FR_100] + [SB118_100] 112b = 2.5 ms SB118 = 0 ms<br />
            [112b_MO_100] + [SB118_100] 112b = 3.0 ms SB118 = 0 ms
          </p>
          <h3>MTD112b + SB18</h3>
          <p>
            [112b_FI_100] + [SB18_100] 112b = 2.1 ms SB18 = 0 ms<br />
            [112b_FR_100] + [SB18_100] 112b = 2.2 ms SB18 = 0 ms<br />
            [112b_MO_100] + [SB18_100] 112b = 2.7 ms SB18 = 0 ms
          </p>
          <h3>MTD108a + SB118</h3>

          <p>
            [108a_FI_100] + [SB118_100] 108a = 3.5 ms SB118 = 0 ms<br />
            [108a_FR_100] + [SB118_100] 108a = 3.6 ms SB118 = 0 ms<br />
            [108a_MO_100] + [SB118_100] 108a = 4.0 ms SB118 = 0 ms
          </p>
          <h3>MTD108a + SB18</h3>

          <p>
            [108a_FI_100] + [SB18_100] 108a = 3.2 ms SB18 = 0 ms<br />
            [108a_FR_100] + [SB18_100] 108a = 3.3 ms SB18 = 0 ms<br />
            [108a_MO_100] + [SB18_100] 108a = 3.7 ms SB18 = 0 ms
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import { ref, computed } from "vue";

export default {
  name: "Prealignement",
  data() {
    return {
      buttonHp: "",
      buttonHiden: "",
      // resulT: "0",
      // resultms: "0",
      // isHiden: false,
      // isHiden2: false,
      // isHiden3: false,
      delayButton: false,
    };
  },
  methods: {
    // procedure(hiden) {
    //   this.isHiden = !hiden;
    // },
    // info(hiden2) {
    //   this.isHiden2 = !hiden2;
    // },
    usage(paramm) {
      this.buttonHiden = paramm;
    },
    show(param) {
      this.buttonHp = param;
    },

    resultDelayButton() {
      this.delayButton = true;
    },
    reset() {
      this.inputa = "";
      this.inputb = "";
      this.inputc = "";
      this.inputd = "";
      this.result = "";
      this.resultMs = "";
      this.delayButton = false;
    },
  },
  setup() {
    const inputa = ref("");
    const inputb = ref("");
    const inputc = ref("");
    const inputd = ref("");
    const param = ref("a");

    const result = computed(() => {
      return (inputa.value - inputb.value).toFixed(2);
    });
    const resultMs = computed(() => {
      return result.value / 0.34;
    });
    const resultDelay = computed(() => {
      if (resultMs.value > 0 && inputd.value > 0) {
        return (inputd.value + resultMs.value).toFixed(2) + " ms sur les sub";
      } else if (resultMs.value > 0 && resultMs.value > inputc.value) {
        return (resultMs.value - inputc.value).toFixed(2) + " ms sur les sub";
      } else if (resultMs.value > 0 && resultMs.value < inputc.value) {
        return (
          Math.abs(resultMs.value - inputc.value).toFixed(2) +
          " ms sur le système"
        );
      } else if (resultMs.value < 0 && inputc.value > 0) {
        return (inputc.value - resultMs.value).toFixed(2) + " sur le système";
      } else if (
        resultMs.value < 0 &&
        Math.abs(resultMs.value) > inputd.value
      ) {
        return (
          Math.abs(inputd.value + resultMs.value).toFixed(2) +
          " ms sur le système"
        );
      } else if (
        resultMs.value < 0 &&
        Math.abs(resultMs.value) < inputd.value
      ) {
        return (inputd.value + resultMs.value).toFixed(2) + " ms sur les sub";
      } else return "";
    });

    return {
      inputb,
      inputa,
      inputc,
      inputd,
      result,
      resultMs,
      resultDelay,
      param,
    };
  },
};
</script>

<style scoped>
button {
  margin: 2px 10px;
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.5);
}
.procedure-usage-button {
  margin: 20px;
}

.procedure, .usage {
  text-align: left;
  margin-left: 10px;
}
/* ---------- Button  */
.choix-hp {
  margin-bottom: 25px;
}
.choix-hp button {
  padding: 5px;
  margin-top: 10px;
}
.button-infos-etc {
  /* color: blue; */
}
.container {
  display: center;
  margin: auto;
  width: 375px;
  text-align: center;
}
.calcul-container {
  margin-bottom: 23px;
}
.calcul-container button {
  height: 30px;
}
input {
  width: 55px;
  height: 20px;
  padding: 6px 5px;
  margin: 8px 5px;
  outline: none;
  /* background-color: #3cbc8d; */
  /* box-sizing: border-box; */
}
input:focus {
  background-color: lightblue;
}
.calcul-system {
  display: flexbox;
}

.imheader {
  max-width: 400px;
  height: auto;
  margin-bottom: 20px;
}

.polarite {
  font-size: 14px;
  background-color: red;
  border: solid 1px;
  
  padding: 0px 5px;
}
p {
  line-height: 1.5;
}

@media only screen and (min-width: 768px) {
  .imheader {
    max-width: 650px;
    height: auto;
  }
  .container {
    display: center;
    margin: auto;
    width: 600px;
    text-align: center;
  }
}
</style>
