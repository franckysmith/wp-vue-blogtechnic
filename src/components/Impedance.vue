<template>
  <div class="container">
    <div class="container-imp">
      <div class="titre">
        <h3>Impédance de charge</h3>
        <p>
          La majorité des enceintes ont une impédence nominale de 8 Ω. Les
          exceptions sont :<br />
          • 16 Ω : K2 (section HF), Kiva II, V-DOSC (section HF), 5XT, X4i
          <br />
          • 4 Ω : SB28, KS28, Syva Low, K1-SB
        </p>
      </div>

      <table>
        <tr>
          <th>Nominal</th>

          <th colspan="5">nombre d'enceintes/sections en parallèle</th>
        </tr>
        <tr>
          <td class="c1"></td>
          <td>2</td>
          <td>3</td>
          <td>4</td>
          <td>5</td>
          <td>6</td>
        </tr>
        <tr>
          <td class="c1">16 Ω</td>
          <td>8 Ω</td>
          <td>5.3 Ω</td>
          <td>4 Ω</td>
          <td>3.2 Ω</td>
          <td>2.7 Ω</td>
        </tr>
        <tr>
          <td class="c1">8 Ω</td>
          <td>4 Ω</td>
          <td>2.7 Ω</td>
          <td>--</td>
          <td>--</td>
          <td>--</td>
        </tr>
      </table>
    </div>

    <div class="container-imp">
      <div class="titre">
        <h3>
          Puissance maximale de sortie des <br />
          contrôleurs amplifiés
        </h3>
      </div>
      <table>
        <tr>
          <th>Charge</th>
          <th>16 Ω</th>
          <th>8 Ω</th>
          <th>4 Ω</th>
          <th>2.7 Ω</th>
        </tr>
        <tr>
          <td class="c1">LA12X</td>
          <td>—</td>
          <td>4 x <br />1400 W</td>
          <td>
            4 x<br />
            2600 W
          </td>
          <td>4 x <br />3300 W</td>
        </tr>
        <tr>
          <td class="c1">LA8</td>
          <td>—</td>
          <td>4 x <br />1100 W</td>
          <td colspan="2">4 x 1800 W</td>
        </tr>
        <tr>
          <td class="c1">LA4X</td>
          <td>—</td>
          <td colspan="2">4 x 1000 W</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td class="c1">LA4</td>
          <td>—</td>
          <td>
            4 x<br />
            800 W
          </td>
          <td>4 x <br />1000 W</td>
          <td>N/A</td>
        </tr>
        <tr>
          <td class="c1">LA2Xi</td>
          <td>
            4 x<br />
            190 W
          </td>
          <td>
            4 x<br />
            360 W
          </td>
          <td>
            4 x<br />
            640 W
          </td>

          <td>—</td>
        </tr>
        <tr>
          <td>LA2Xi</td>
          <td>—</td>
          <td>
            2 x<br />
            1260 W
          </td>
          <td>
            1 x<br />
            2550 W
          </td>
          <td>—</td>
        </tr>
      </table>
    </div>

    <div class="container-imp">
      <div class="titre">
        <h3>
          Longueur maximale recommandées des câbles HP <br />(facteur
          d'amortissement inférieur à 20 )
        </h3>
      </div>

      <table>
        <tr>
          <th>Section du cable</th>

          <th>sous 8 Ω</th>
          <th>sous 4 Ω</th>
          <th>sous 2.7 Ω</th>
        </tr>
        <tr>
          <td class="c1">mm²</td>

          <td>
            distance <br />
            en m
          </td>
          <td>
            distance <br />
            en m
          </td>
          <td>
            distance <br />
            en m
          </td>
        </tr>
        <tr>
          <td class="c1">2.5</td>

          <td>30</td>
          <td>15</td>
          <td>10</td>
        </tr>
        <tr>
          <td class="c1">4</td>

          <td>50</td>
          <td>25</td>
          <td>17</td>
        </tr>
        <tr>
          <td class="c1">6</td>

          <td>74</td>
          <td>37</td>
          <td>25</td>
        </tr>
        <tr>
          <td class="c1">10</td>

          <td>120</td>
          <td>60</td>
          <td>40</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Impedance"
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #3d454d;
}
.container {
  justify-content: center;
  margin: auto;
}
.container-imp {
  margin: auto;
  margin: 15px;
}
.container-imp p {
  text-align: left;
  width: 350px;
}
.titre {
  width: 350px;
  text-align: left;
}
table {
  width: 350px;
  /* margin: auto; */
  /* max-width: 350px; */
  box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 30px -2px rgba(0, 0, 0, 0.75);
  border-spacing: 1px;
  /* border-collapse: collapse;
      table-layout: fixed; */

  /* margin: 20px 0px 30px 0px; */
  border: solid 1px;
  border-collapse: separate;
  border-spacing: 1px;
  text-align: center;
}
td {
  padding: 3px !important;
  text-align: center;
}

td:first-child {
  text-align: left;
  width: 70px;

  background-color: #66dd9a;
  font-weight: 700;
  font-size: 1.2em;
  cursor: pointer;
  /* text-overflow: hidden; */
}

tr {
  height: 50px;
}
th {
  height: 20px;
  padding: 2px;
}

tr:nth-child(even) {
  background: #ccc;
}
tr:nth-child(odd) {
  background: #fff;
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 520px) {
  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start;
  }
}

/* .fade-enter {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease-out;
}

.fade-leave-to {
  opacity: 0;
} */
</style>
