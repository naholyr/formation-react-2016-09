## Shallow Rendering

Technique visant à se libérer du DOM durant les tests.

1. on instancie un composant
2. on récupère le `ReactElement` issu de l'appel à `render()`
3. on vérifie ses `props` et `children`

Note:
Attention avec les HoC utilisés depuis des décorateurs. Ils viennent obscurcir le composant que l'on souhaite réellement tester.

Bien penser dès lors à exporter les deux versions :

```js
export default HoC(ContactProfile);
export const undecorated = ContactProfile;
```
