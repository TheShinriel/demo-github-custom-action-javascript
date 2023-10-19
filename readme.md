# Comment créer une action personnalisée

Vous pouvez appeler cette action dans votre propre workflow en appelant :

```yaml
jobs:
  salutation-job:
    runs-on: ubuntu-latest

    steps:
      - name: Salue depuis depuis les logs
        uses: TheShinriel/demo-github-custom-action-javascript@v1
        with:
            name: 'Juste un nom'
```

## Paramètre d'entrée

### `name`

Donner un nom à saluer en entrée

## Paramètre de sortie

### `time`

L'heure à laquelle les salutations ont été faites.

## Formation sur GitHub Actions

Ce projet fait partit d'une formation sur l'utilisation de GitHub Actions et découvrir comment automatiser vos intégrations continues sur Udemy : [Automatiser tout sur vos projets avec Github Actions](https://www.udemy.com/course/automatiser-tout-sur-vos-projets-avec-github-actions/?referralCode=268A353A1CAE10611EBD).

N'hésitez pas à explorer les fonctionnalités de Chromatic et de Storybook pour améliorer la qualité et la robustesse de vos composants d'interface utilisateur. Happy coding! 🚀
