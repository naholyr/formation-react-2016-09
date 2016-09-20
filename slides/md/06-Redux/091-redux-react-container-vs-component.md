## Containers vs Components

<table style="font-size: 0.8em">
  <tr>
    <th></th><th>Containers</th><th>Dumb Components</th>
  </tr>
  <tr>
    <th>Emplacement</th><td>Racine, route handlers</td><td>Branches et feuilles</td>
  </tr>
  <tr>
    <th>Branché sur Redux</th><td>Oui</td><td>Non</td>
  </tr>
  <tr>
    <th>Accès aux données</th><td>Souscrit au state Redux</td><td>Depuis les props</td>
  </tr>
  <tr>
    <th>Changer les données</th><td>Dispatch des actions Redux</td><td>Invoque les callbacks reçus en props</td>
  </tr>
</table>
